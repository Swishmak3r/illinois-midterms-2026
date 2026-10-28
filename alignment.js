// Fixed-sample policy agreement. Missing evidence is never a zero-percent score.
(function (root) {
  'use strict';
  const validSource = (source) => source && typeof source.title === 'string' && source.title.trim() && /^https:\/\//i.test(source.url || '');

  function score(candidateId, dataset = root.IL_ALIGNMENT_DATA) {
    const data = dataset || {};
    const policies = Array.isArray(data.policies) ? data.policies : [];
    const ids = policies.map((policy) => policy.id);
    if (ids.some((id) => !id) || new Set(ids).size !== ids.length) throw new Error('Alignment policy IDs must be present and unique.');
    const minEvidence = Math.max(3, Number.isInteger(data.minEvidence) ? data.minEvidence : 3);
    const candidate = Object.prototype.hasOwnProperty.call(data.candidates || {}, candidateId) ? data.candidates[candidateId] : null;
    const positions = candidate && candidate.positions || {};
    const details = policies.map((policy) => {
      const position = Object.prototype.hasOwnProperty.call(positions, policy.id) ? positions[policy.id] : null;
      const baselineSources = (policy.baselineSources || []).filter(validSource);
      const candidateSources = (position && position.sources || []).filter(validSource);
      const evidenced = baselineSources.length > 0 && candidateSources.length > 0;
      const stance = evidenced && position && ['agree', 'disagree'].includes(position.stance) ? position.stance : 'unknown';
      return {
        id: policy.id, label: policy.label, bill: policy.bill, date: policy.date,
        description: policy.description, trumpPosition: policy.trumpPosition,
        baselineSources, stance,
        summary: position && evidenced && position.summary || 'No sufficient evidence for this exact measure is recorded in this audit.',
        sourceType: position && evidenced ? position.sourceType || null : null,
        candidateSources,
      };
    });
    const agree = details.filter((detail) => detail.stance === 'agree').length;
    const disagree = details.filter((detail) => detail.stance === 'disagree').length;
    const known = agree + disagree;
    const total = details.length;
    return {
      percent: known >= minEvidence ? Math.round(100 * agree / known) : null,
      known, total, agree, disagree, unknown: total - known,
      coveragePercent: total ? Math.round(100 * known / total) : 0,
      minEvidence, checked: data.checked || null,
      reason: known >= minEvidence ? 'Measured agreement within the fixed six-measure sample.' : 'Not enough evidence: at least three of the six measures are required.',
      details,
    };
  }
  root.IL_ALIGNMENT = Object.freeze({ score });
})(typeof window !== 'undefined' ? window : globalThis);
