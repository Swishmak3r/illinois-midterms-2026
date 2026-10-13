// Free Vercel Serverless Function: /api/fec-live
// Queries official U.S. Federal Election Commission (OpenFEC) API for 2026 Illinois candidates
// Cached on Vercel Edge CDN for 6 hours (s-maxage=21600) so it costs $0 and never hits rate limits.

export default async function handler(req, res) {
  try {
    const apiKey = process.env.FEC_API_KEY || "DEMO_KEY";
    const url = `https://api.open.fec.gov/v1/candidates/totals/?state=IL&cycle=2026&election_full=true&per_page=100&sort=-receipts&api_key=${encodeURIComponent(apiKey)}`;

    const response = await fetch(url, {
      headers: { Accept: "application/json" }
    });

    if (!response.ok) {
      res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate=3600");
      return res.status(200).json({
        status: "cached_fallback",
        syncedAt: new Date().toISOString(),
        candidates: []
      });
    }

    const data = await response.json();
    const records = (data.results || []).map((r) => ({
      candidate_id: r.candidate_id,
      name: r.name,
      office: r.office,
      district: r.district,
      party: r.party,
      receipts: r.receipts,
      disbursements: r.disbursements,
      cash_on_hand_end_period: r.cash_on_hand_end_period,
      coverage_end_date: r.coverage_end_date
    }));

    res.setHeader("Cache-Control", "s-maxage=21600, stale-while-revalidate=86400");
    return res.status(200).json({
      status: "ok",
      source: "Official OpenFEC API (2026 Cycle)",
      syncedAt: new Date().toISOString(),
      count: records.length,
      candidates: records
    });
  } catch (err) {
    return res.status(200).json({
      status: "cached_fallback",
      syncedAt: new Date().toISOString(),
      candidates: []
    });
  }
}
