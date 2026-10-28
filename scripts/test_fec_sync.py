"""Offline regression tests: python scripts/test_fec_sync.py."""
import contextlib
import importlib.util
import io
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
from urllib.parse import parse_qs, urlparse

spec = importlib.util.spec_from_file_location("fec_sync", Path(__file__).with_name("update_live_data.py"))
sync = importlib.util.module_from_spec(spec)
spec.loader.exec_module(sync)


def candidate(number):
    return {"candidate_id": f"H6IL{number:05}", "office": "H", "name": f"CANDIDATE, {number}",
            "receipts": 100.25, "cash_on_hand_end_period": "25.50", "coverage_end_date": "2026-10-14"}


def page_response(page, pages=2, count=101, results=None):
    return io.BytesIO(json.dumps({
        "pagination": {"page": page, "pages": pages, "count": count},
        "results": results if results is not None else [candidate(n) for n in (range(100) if page == 1 else [100])],
    }).encode())


class SyncTests(unittest.TestCase):
    def test_fetches_all_pages_and_encodes_key(self):
        requested = []

        def opener(request, timeout):
            query = parse_qs(urlparse(request.full_url).query)
            self.assertEqual(query["api_key"], ["fixture&key+only"])
            self.assertEqual(timeout, 15)
            page = int(query["page"][0])
            requested.append(page)
            return page_response(page)

        records = sync.fetch_records("fixture&key+only", opener)
        self.assertEqual(len(records), 101)
        self.assertEqual(requested, [1, 2])

    def test_failed_second_page_preserves_snapshot_and_redacts_exception(self):
        with tempfile.TemporaryDirectory() as folder:
            output = Path(folder) / "data-live-sync.js"
            original = b"previous snapshot and its timestamp"
            output.write_bytes(original)

            def opener(request, timeout):
                if "page=1&" in request.full_url:
                    return page_response(1)
                raise OSError("https://example.invalid/?api_key=fixture-secret")

            messages = io.StringIO()
            with contextlib.redirect_stderr(messages):
                result = sync.main(output, opener)
            self.assertEqual(result, 1)
            self.assertEqual(output.read_bytes(), original)
            self.assertNotIn("fixture-secret", messages.getvalue())

    def test_rejects_empty_duplicate_and_changing_pagination(self):
        fixtures = [
            lambda request, timeout: page_response(1, pages=1, count=0, results=[]),
            lambda request, timeout: page_response(1, pages=1, count=2, results=[candidate(1), candidate(1)]),
            lambda request, timeout: page_response(1) if "page=1&" in request.full_url else page_response(2, count=102),
        ]
        for opener in fixtures:
            with self.subTest(opener=opener), self.assertRaises(ValueError):
                sync.fetch_records("fixture-key", opener)

    def test_atomic_replace_and_script_safe_serialization(self):
        with tempfile.TemporaryDirectory() as folder:
            output = Path(folder) / "snapshot.js"
            output.write_text("previous snapshot", encoding="utf-8")
            record = candidate(1)
            record["name"] = "</script><script>example</script>"
            with patch.object(sync.os, "replace", side_effect=OSError("fixture write failure")):
                with self.assertRaises(OSError):
                    sync.write_snapshot([record], output)
            self.assertEqual(output.read_text(encoding="utf-8"), "previous snapshot")
            self.assertEqual(len(list(Path(folder).iterdir())), 1)
            sync.write_snapshot([record], output)
            text = output.read_text(encoding="utf-8")
            self.assertNotIn("</script>", text)
            payload = json.loads(text.split(" = ", 1)[1].rsplit(";", 1)[0])
            self.assertTrue(payload["complete"])
            self.assertEqual(payload["recordCount"], 1)
            self.assertNotIn("SBE", payload["source"])


if __name__ == "__main__":
    unittest.main()
