import pathlib
import subprocess

base_dir = pathlib.Path(__file__).resolve().parent
js_files = [
    "data-federal.js",
    "data-statewide.js",
    "data-legislature.js",
    "data-local.js",
    "data-towns-pacs.js",
]

if (base_dir / "data-live-sync.js").exists():
    js_files.append("data-live-sync.js")

js_files.append("app.js")

combined_js_parts = []
for fname in js_files:
    p = base_dir / fname
    content = p.read_text(encoding="utf-8")
    # Enforce strict ban on em-dashes and en-dashes
    content = content.replace("\u2014", "-").replace("\u2013", "-")
    p.write_text(content, encoding="utf-8")
    combined_js_parts.append(f"// ===== FILE: {fname} =====\n" + content)

combined_js = "\n\n".join(combined_js_parts)
bundle_js_path = base_dir / "bundle-check.js"
bundle_js_path.write_text(combined_js, encoding="utf-8")

# Validate JS syntax if node is available
try:
    subprocess.run(["node", "--check", str(bundle_js_path)], check=True)
finally:
    if bundle_js_path.exists():
        bundle_js_path.unlink()

template_path = base_dir / "template.html"
template_html = template_path.read_text(encoding="utf-8")
template_html = template_html.replace("\u2014", "-").replace("\u2013", "-")

final_html = template_html.replace("/*__INJECT_DATA_AND_APP__*/", combined_js)
final_html = final_html.replace("\u2014", "-").replace("\u2013", "-")

index_path = base_dir / "index.html"
index_path.write_text(final_html, encoding="utf-8")

artifact_path = pathlib.Path(r"C:\Users\rodne\.gemini\antigravity\brain\975c8223-fde3-4d52-9e3d-c2b4244df891\illinois_2026_midterm_elections.html")
if artifact_path.parent.exists():
    artifact_path.write_text(final_html, encoding="utf-8")

em_count = final_html.count("\u2014") + final_html.count("\u2013")
print(f"Built index.html successfully!")
print(f"Total size: {len(final_html):,} bytes ({len(final_html.splitlines()):,} lines)")
print(f"Em/En-dash count: {em_count}")
