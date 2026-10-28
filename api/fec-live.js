// Optional Vercel endpoint. GitHub Pages serves only the bundled snapshot.
// OpenFEC updates nightly; successful responses may be cached for six hours.
const ENDPOINT = "https://api.open.fec.gov/v1/candidates/totals/";
const FIELDS = ["candidate_id", "name", "office", "district", "party", "state", "cycle",
  "two_year_period", "receipts", "disbursements", "cash_on_hand_end_period",
  "coverage_start_date", "coverage_end_date"];

export async function fetchFecRecords(apiKey, fetchImpl = fetch) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  const records = [];
  const seen = new Set();
  let expectedPages;
  let expectedCount;
  try {
    for (let page = 1; page <= 20; page += 1) {
      const query = new URLSearchParams({ state: "IL", cycle: "2026", election_full: "false",
        per_page: "100", sort: "-receipts", page: String(page), api_key: apiKey });
      const response = await fetchImpl(ENDPOINT + "?" + query, {
        headers: { Accept: "application/json" }, signal: controller.signal
      });
      if (!response.ok) throw new Error("OpenFEC upstream unavailable");
      const payload = await response.json();
      const { pages, count, page: currentPage } = payload.pagination || {};
      if (!Number.isInteger(pages) || pages < 1 || pages > 20
          || !Number.isInteger(count) || count < 1 || currentPage !== page
          || !Array.isArray(payload.results) || !payload.results.length || payload.results.length > 100) {
        throw new Error("Incomplete or invalid OpenFEC page");
      }
      if (expectedPages === undefined) { expectedPages = pages; expectedCount = count; }
      if (pages !== expectedPages || count !== expectedCount) throw new Error("OpenFEC pages changed during fetch");
      for (const row of payload.results) {
        if (!row || typeof row.candidate_id !== "string" || !/^[HSP][0-9][A-Z0-9]{7}$/.test(row.candidate_id)
            || row.office !== row.candidate_id[0] || seen.has(row.candidate_id)
            || row.state !== "IL" || row.cycle !== 2026 || row.two_year_period !== 2026
            || typeof row.name !== "string" || !row.name.trim()) throw new Error("Invalid candidate identity");
        const record = Object.fromEntries(FIELDS.map(field => [field, row[field] ?? null]));
        for (const field of ["receipts", "disbursements", "cash_on_hand_end_period"]) {
          const value = record[field];
          if (value !== null && ((typeof value !== "number" && typeof value !== "string")
              || (typeof value === "string" && !value.trim()) || !Number.isFinite(Number(value)))) {
            throw new Error("Invalid financial value");
          }
        }
        for (const field of ["coverage_start_date", "coverage_end_date"]) {
          const value = record[field];
          if (value !== null && (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)
              || !Number.isFinite(Date.parse(value)) || new Date(value).toISOString().slice(0, 10) !== value)) {
            throw new Error("Invalid filing coverage date");
          }
        }
        if (record.coverage_start_date && record.coverage_end_date
            && record.coverage_start_date > record.coverage_end_date) throw new Error("Reversed coverage dates");
        seen.add(record.candidate_id);
        records.push(record);
      }
      if (page === expectedPages) {
        if (records.length !== expectedCount) throw new Error("Incomplete OpenFEC result set");
        return records;
      }
    }
    throw new Error("OpenFEC pagination exceeded limit");
  } finally {
    clearTimeout(timeout);
  }
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ status: "error", message: "Method not allowed." });
  }
  try {
    const records = await fetchFecRecords(process.env.FEC_API_KEY || "DEMO_KEY");
    res.setHeader("Cache-Control", "public, s-maxage=21600, stale-while-revalidate=86400");
    return res.status(200).json({
      status: "ok", source: "Federal Election Commission — reported candidate totals",
      sourceUrl: "https://www.fec.gov/data/candidates/?cycle=2026&election_full=false&state=IL",
      syncedAt: new Date().toISOString(), cycle: 2026, electionFull: false,
      periodLabel: "2026 two-year reporting period", complete: true,
      count: records.length, candidates: records
    });
  } catch (_) {
    // No fabricated success timestamp or empty "cache". The client can retain
    // its existing snapshot, and credentials never appear in the response.
    return res.status(502).json({
      status: "unavailable", message: "OpenFEC is unavailable. Keep using the bundled snapshot and its displayed date."
    });
  }
}
