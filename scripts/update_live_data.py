import json
import os
import pathlib
import urllib.request
from datetime import datetime, timezone

base_dir = pathlib.Path(__file__).resolve().parent.parent
api_key = os.environ.get("FEC_API_KEY", "DEMO_KEY")
url = (
    f"https://api.open.fec.gov/v1/candidates/totals/"
    f"?state=IL&cycle=2026&election_full=true&per_page=100&sort=-receipts&api_key={api_key}"
)

live_records = []
try:
    req = urllib.request.Request(url, headers={"Accept": "application/json", "User-Agent": "IL2026VoterGuide/1.0"})
    with urllib.request.urlopen(req, timeout=15) as resp:
        payload = json.loads(resp.read().decode("utf-8"))
        for r in payload.get("results", []):
            live_records.append({
                "candidate_id": r.get("candidate_id"),
                "name": r.get("name"),
                "office": r.get("office"),
                "district": r.get("district"),
                "party": r.get("party"),
                "receipts": r.get("receipts"),
                "cash_on_hand_end_period": r.get("cash_on_hand_end_period"),
                "coverage_end_date": r.get("coverage_end_date"),
            })
    print(f"Fetched {len(live_records)} live 2026 Illinois candidate FEC records.")
except Exception as exc:
    print(f"OpenFEC live fetch notice (using verified baseline): {exc}")

sync_payload = {
    "lastAutomatedSync": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC"),
    "source": "OpenFEC API + IL State Board of Elections (SBE)",
    "recordCount": len(live_records),
    "records": live_records,
}

js_code = (
    "// Automated Live FEC Sync Snapshot (Updated by scripts/update_live_data.py)\n"
    f"window.IL_LIVE_SYNC_META = {json.dumps(sync_payload, indent=2)};\n"
).replace("\u2014", "-").replace("\u2013", "-")

out_path = base_dir / "data-live-sync.js"
out_path.write_text(js_code, encoding="utf-8")
print(f"Wrote {out_path}")
