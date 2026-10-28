"""Replace the bundled OpenFEC snapshot only after a complete, validated fetch.

Run manually or in the scheduled workflow. A failed or partial fetch exits nonzero
and leaves the previous snapshot and its timestamp untouched.
"""

import json
import math
import os
from pathlib import Path
import re
import sys
import tempfile
from datetime import datetime, timezone
from urllib.parse import urlencode
from urllib.request import Request, urlopen

BASE_DIR = Path(__file__).resolve().parent.parent
ENDPOINT = "https://api.open.fec.gov/v1/candidates/totals/"
MAX_PAGES = 20
FIELDS = (
    "candidate_id", "name", "office", "district", "party", "receipts",
    "disbursements", "cash_on_hand_end_period", "coverage_end_date",
)


def fetch_records(api_key, opener=urlopen):
    """Fetch every page, rejecting changing counts, duplicates, and bad records."""
    records = []
    seen = set()
    expected_count = expected_pages = None
    page = 1
    while True:
        query = urlencode({
            "state": "IL", "cycle": 2026, "election_full": "true",
            "per_page": 100, "sort": "-receipts", "page": page, "api_key": api_key,
        })
        request = Request(ENDPOINT + "?" + query, headers={
            "Accept": "application/json", "User-Agent": "IL2026VoterGuide/2.0",
        })
        with opener(request, timeout=15) as response:
            payload = json.loads(response.read().decode("utf-8"))
        pagination = payload.get("pagination", {})
        results = payload.get("results")
        pages, count = pagination.get("pages"), pagination.get("count")
        if (type(pages) is not int or not 1 <= pages <= MAX_PAGES
                or type(count) is not int or count < 1
                or pagination.get("page") != page
                or not isinstance(results, list) or not 1 <= len(results) <= 100):
            raise ValueError("Incomplete or invalid OpenFEC page")
        if expected_pages is None:
            expected_pages, expected_count = pages, count
        if pages != expected_pages or count != expected_count:
            raise ValueError("OpenFEC pagination changed during fetch")
        for row in results:
            if not isinstance(row, dict):
                raise ValueError("Invalid OpenFEC record")
            candidate_id = row.get("candidate_id")
            if (not isinstance(candidate_id, str)
                    or not re.fullmatch(r"[HSP][0-9][A-Z0-9]{7}", candidate_id)
                    or candidate_id in seen or row.get("office") != candidate_id[0]
                    or not isinstance(row.get("name"), str) or not row["name"].strip()):
                raise ValueError("Missing, duplicated, or invalid candidate identity")
            record = {field: row.get(field) for field in FIELDS}
            for field in ("receipts", "disbursements", "cash_on_hand_end_period"):
                value = record[field]
                if value is not None:
                    if isinstance(value, bool) or not math.isfinite(float(value)):
                        raise ValueError("Invalid financial value")
            seen.add(candidate_id)
            records.append(record)
        if page == expected_pages:
            break
        page += 1
    if len(records) != expected_count:
        raise ValueError("Incomplete OpenFEC result set")
    return records


def write_snapshot(records, output_path):
    """Use a same-directory atomic replacement; never truncate a good snapshot."""
    output_path = Path(output_path)
    payload = {
        "lastAutomatedSync": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC"),
        "source": "OpenFEC API (2026 federal candidate totals)",
        "sourceUrl": "https://www.fec.gov/data/candidates/?election_year=2026&state=IL",
        "cycle": 2026, "complete": True,
        "recordCount": len(records), "records": records,
    }
    # The JSON is embedded in a script by build.py; prevent a name containing
    # an HTML closing-script sequence from escaping that script element.
    serialized = json.dumps(payload, indent=2, allow_nan=False).replace("<", "\\u003c")
    content = "// Bundled OpenFEC snapshot; updated only after a complete successful fetch.\n"
    content += "window.IL_LIVE_SYNC_META = " + serialized + ";\n"
    temporary = None
    try:
        with tempfile.NamedTemporaryFile(mode="w", encoding="utf-8", newline="\n",
                                         dir=output_path.parent, prefix=".fec-sync-",
                                         suffix=".tmp", delete=False) as handle:
            temporary = Path(handle.name)
            handle.write(content)
            handle.flush()
            os.fsync(handle.fileno())
        os.replace(temporary, output_path)
    finally:
        if temporary is not None and temporary.exists():
            temporary.unlink()


def main(output_path=None, opener=urlopen):
    destination = output_path or BASE_DIR / "data-live-sync.js"
    try:
        records = fetch_records(os.environ.get("FEC_API_KEY") or "DEMO_KEY", opener)
        write_snapshot(records, destination)
    except Exception as error:
        # urllib errors may contain a request URL with api_key. Log the type only.
        print("OpenFEC update failed (" + type(error).__name__
              + "); previous snapshot and timestamp retained.", file=sys.stderr)
        return 1
    print(f"Wrote {len(records)} OpenFEC federal records to {destination}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
