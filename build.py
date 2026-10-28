"""Build the portable static site without mutating source data."""
from pathlib import Path
import subprocess
import tempfile
import os

ROOT = Path(__file__).resolve().parent
SCRIPTS = [
    "data-federal.js", "data-statewide.js", "data-legislature.js",
    "data-local.js", "data-towns-pacs.js", "data-zips.js", "location.js",
]
if (ROOT / "data-live-sync.js").exists():
    SCRIPTS.append("data-live-sync.js")
SCRIPTS += ["app.js", "ui.js"]

def build():
    template = (ROOT / "template.html").read_text(encoding="utf-8-sig")
    css = (ROOT / "styles.css").read_text(encoding="utf-8-sig")
    combined = "\n\n".join(
        f"// Source: {name}\n" + (ROOT / name).read_text(encoding="utf-8-sig")
        for name in SCRIPTS
    )
    with tempfile.NamedTemporaryFile(mode="w", suffix=".js", encoding="utf-8", delete=False) as handle:
        handle.write(combined)
        check_path = Path(handle.name)
    try:
        subprocess.run(["node", "--check", str(check_path)], check=True)
    finally:
        check_path.unlink(missing_ok=True)
    for marker in ("/*__INJECT_STYLES__*/", "/*__INJECT_DATA_AND_APP__*/"):
        if template.count(marker) != 1:
            raise ValueError(f"Expected exactly one {marker} marker")
    html = template.replace("/*__INJECT_STYLES__*/", css).replace(
        "/*__INJECT_DATA_AND_APP__*/", combined.replace("</script", "<\\/script")
    )
    if "/*__INJECT_" in html:
        raise ValueError("Unresolved build marker")
    destination = ROOT / "index.html"
    temporary = ROOT / ".index.html.tmp"
    try:
        temporary.write_text(html, encoding="utf-8", newline="\n")
        os.replace(temporary, destination)
    finally:
        temporary.unlink(missing_ok=True)
    print(f"Built index.html: {len(html.encode('utf-8')):,} bytes; {len(SCRIPTS)} source modules.")

if __name__ == "__main__":
    build()
