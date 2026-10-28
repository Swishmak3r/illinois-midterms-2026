// Offline regression tests: node scripts/test-fec-api.mjs
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { test } from "node:test";
const source = await fs.readFile(new URL("../api/fec-live.js", import.meta.url), "utf8");
const { fetchFecRecords, default: handler } = await import("data:text/javascript;base64," + Buffer.from(source).toString("base64"));

const candidate = number => ({ candidate_id: "H6IL" + String(number).padStart(5, "0"),
  office: "H", name: "CANDIDATE, " + number, receipts: 100, cash_on_hand_end_period: "50.25" });
const payload = (page, records, count, pages) => ({ results: records, pagination: { page, count, pages } });
const response = body => ({ ok: true, json: async () => body });

test("fetches every page with encoded key and bounded request signal", async () => {
  const requested = [];
  const records = await fetchFecRecords("fixture&key+only", async (url, options) => {
    const query = new URL(url).searchParams;
    assert.equal(query.get("api_key"), "fixture&key+only");
    assert(options.signal instanceof AbortSignal);
    const page = Number(query.get("page"));
    requested.push(page);
    return response(payload(page, page === 1 ? Array.from({ length: 100 }, (_, i) => candidate(i)) : [candidate(100)], 101, 2));
  });
  assert.equal(records.length, 101);
  assert.deepEqual(requested, [1, 2]);
});

test("rejects malformed, duplicate and partial records", async () => {
  for (const body of [payload(1, [], 0, 1), payload(1, [candidate(1), candidate(1)], 2, 1),
    payload(1, [{ ...candidate(1), receipts: [] }], 1, 1), payload(1, [candidate(1)], 2, 1)]) {
    await assert.rejects(fetchFecRecords("fixture-key", async () => response(body)));
  }
  await assert.rejects(fetchFecRecords("fixture-key", async url => {
    if (new URL(url).searchParams.get("page") === "1") return response(payload(1, [candidate(1)], 2, 2));
    throw new Error("fixture network failure");
  }));
});

function mockResponse() {
  return { headers: {}, code: null, body: null,
    setHeader(name, value) { this.headers[name] = value; },
    status(code) { this.code = code; return this; },
    json(body) { this.body = body; return this; } };
}

test("API errors are honest, uncached, and contain no fabricated sync timestamp", async () => {
  const previousFetch = globalThis.fetch;
  try {
    globalThis.fetch = async () => { throw new Error("https://example.invalid/?api_key=fixture-secret"); };
    const res = mockResponse();
    await handler({ method: "GET" }, res);
    assert.equal(res.code, 502);
    assert.equal(res.headers["Cache-Control"], "no-store");
    assert.equal(res.body.status, "unavailable");
    assert(!("syncedAt" in res.body));
    assert(!JSON.stringify(res.body).includes("fixture-secret"));
  } finally { globalThis.fetch = previousFetch; }
});

test("API restricts method without contacting upstream", async () => {
  const res = mockResponse();
  await handler({ method: "POST" }, res);
  assert.equal(res.code, 405);
  assert.equal(res.headers.Allow, "GET");
});
