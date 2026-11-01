"""Normalize reviewed judicial ledgers into the site's sourced research module.

No case is inferred from an opinion-index hit. The input manifest below names
reviewed records only. The original ledgers retain their research limitations.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
AUDIT = ROOT / "audit" / "judicial-2026"
CHECKED = "2026-11-01"


def read(name):
    return json.loads((AUDIT / name).read_text(encoding="utf-8-sig"))


def text(value):
    if value is None:
        return ""
    if isinstance(value, list):
        return " ".join(text(item) for item in value if item)
    if isinstance(value, dict):
        return "; ".join(f"{key}: {text(item)}" for key, item in value.items() if item)
    return str(value)


def first(record, *keys, default=""):
    return next((record[key] for key in keys if record.get(key) is not None and record.get(key) != ""), default)


def policy_comparisons(reason, status="not-comparable"):
    return {key: {"status": status, "explanation": reason, "sources": []}
            for key in ("republican", "democratic", "trump")}


def normalized_case(record, default_court="", default_history="", default_limits=""):
    case_name = first(record, "caseName", "case", "name")
    citation = first(record, "citation", "citationOrDocket", "docket")
    url = first(record, "primaryUrl", "sourceUrl", "decisionUrl", "source", "pdf")
    pinpoint = text(first(record, "paragraphs", "pinpoints", "decisionPinpoints"))
    evidence = []
    for source in record.get("evidence", []):
        if isinstance(source, dict) and source.get("url"):
            evidence.append({"url": source["url"], "title": source.get("title", f"{case_name}, {citation}"),
                             "pinpoint": text(first(source, "pinpoint", "paragraphs", "reference"))})
        elif isinstance(source, dict):
            pinpoint = (pinpoint + "; " + text(source.get("reference", ""))).strip("; ")
    for source in record.get("sources", []):
        if isinstance(source, dict) and source.get("url"):
            evidence.append({"url": source["url"], "title": first(source, "title", "label", default="Primary court record"), "pinpoint": pinpoint})
    if url and not any(source["url"] == url for source in evidence):
        evidence.insert(0, {"url": url, "title": f"{case_name}, {citation}", "pinpoint": pinpoint})
    for source in record.get("subsequentSources", []):
        evidence.append({"url": source, "title": "Later court record", "pinpoint": "See later-treatment description"})
    if record.get("earlierPrimaryUrl"):
        evidence.append({"url": record["earlierPrimaryUrl"], "title": "Earlier decision in this case", "pinpoint": "Procedural history"})
    later_law = record.get("subsequentLegislation", {})
    if later_law:
        evidence.append({"url": later_law["sourceUrl"], "title": later_law["act"], "pinpoint": later_law["reference"]})
    comparison = record.get("policyComparisons")
    if comparison and "republican" not in comparison:
        comparison = policy_comparisons(text(first(comparison, "explanation", "reason")), comparison.get("status", "insufficient"))
    if not comparison:
        stated = record.get("policyComparison", record.get("comparison", {}))
        reason = first(record, "comparisonLimit", "issueComparison", default=first(stated, "reason", "explanation", "limits") if isinstance(stated, dict) else stated)
        comparison = policy_comparisons(text(reason) or "No same-question national party or Trump-policy comparison was verified for this selected ruling.",
                                        "insufficient" if not reason or "potentially comparable" in text(stated).lower() or "baseline review required" in text(stated).lower() else "not-comparable")
    result = {
        "id": first(record, "id", default=re.sub(r"[^a-z0-9]+", "-", f"{case_name}-{citation}".lower()).strip("-")),
        "caseName": case_name, "citation": citation,
        "date": first(record, "decisionDate", "opinionDate", "date"),
        "dateMeaning": text(first(record, "dateMeaning", "dateType", "dateLabel", default="Reviewing decision date")),
        "trialActionDate": first(record, "trialActionDate", "trialRulingDate", "trialDecisionDate", default=None),
        "court": first(record, "reviewingCourt", "reviewCourt", "court", default=default_court),
        "judgeRole": first(record, "judgeRole", "role"),
        "topic": first(record, "topic", "issue"),
        "question": text(first(record, "question", "questionPresented", "issue", "decisionScope")),
        "holding": text(first(record, "trialAction", "holding")),
        "reasoning": text(first(record, "trialReasoning", "reasoning", "rationale")),
        "subsequentHistory": " ".join(filter(None, [text(first(record, "appellateDisposition", "appeal", "disposition", "outcome")), text(first(record, "subsequentHistory", "laterStatus", "subsequentStatus", default=default_history)), text(later_law.get("context")), text(record.get("proceduralHistory"))])),
        "precedentialStatus": text(first(record, "precedentialStatus", "publicationStatus", "publicationType", "publication", "decisionType")),
        "limitations": text(first(record, "limitations", "decisionScope", "stageAndLimits", "scope", default=default_limits)),
        "evidence": evidence, "policyComparisons": comparison,
    }
    document_status = first(record, "officialIndexStatus", "sourceStatus")
    if document_status:
        result["precedentialStatus"] += f" Official document status: {text(document_status)}. A publication status of Final does not establish that all judicial review is exhausted."
    return result


def build():
    inventory = read("inventory-retention.json")
    bars = read("inventory-bar-sources.json")
    method = read("policy-method.json")
    profiles = {}
    race_ids = {}
    names = {}
    for judge in inventory["judges"]:
        cid = judge["candidateId"]
        race_ids[judge["raceId"]] = cid
        names[judge["name"]] = cid
        profiles[cid] = {
            "name": judge["name"], "checked": CHECKED,
            "coverageNote": "Selected public records, not a complete career docket or a reversal-rate study. A missing example means this review has not verified one, not that the judge has never ruled on the subject.",
            "researchStatus": "Bar reports checked; no selected ruling verified in this release.",
            "politicalHistory": [], "assessments": [], "rulings": [], "researchLimitations": [],
            "alignmentSummary": "These records do not establish an overall Republican, Democratic or Trump alignment. Historical party nominations, professional evaluations and individual legal rulings answer different questions.",
        }
    for judge in bars["judges"]:
        profiles[judge["candidateId"]]["assessments"] = judge["assessments"]

    # Will County: the four priority profiles, with independently sourced history.
    bj = read("will-bertani-jones.json")
    for judge in bj["judges"]:
        profile = profiles[race_ids[judge["raceId"]]]
        profile["rulings"] = [normalized_case(case, judge["court"]) for case in judge["rulings"]]
        profile["researchLimitations"] += judge.get("coverageGaps", [])
        history = judge.get("historicalElectionParty")
        if history:
            label = history["ballotName"].title()
            profile["politicalHistory"].append({
                "party": history["party"], "year": history["electionDate"][:4],
                "description": f"The {history['electionDate'][:4]} official canvass lists {label} on the {history['party']} ballot line. {history['interpretation']}",
                "sourceUrl": history["sourceUrl"], "sourceTitle": history["primarySource"]})
    kr = read("will-kennedy-rippy.json")
    for case in kr["cases"]:
        profile = profiles[names[case["judge"]]]
        profile["rulings"].append(normalized_case(
            case, default_history="The described appellate disposition was verified. A complete later appeal or remand history was not independently established.",
            default_limits="A selected trial-court ruling described by the reviewing court, not a complete trial record or an ideology measure."))
    context = read("will-context.json")
    context_sources = {item["id"]: item for item in context["sources"]}
    for judge in context["judges"]:
        history = judge.get("historicalBallotParty")
        if history:
            source = context_sources[history["sourceIds"][0]]
            profiles[race_ids[judge["raceId"]]]["politicalHistory"].append({
                "party": history["party"], "year": history["electionDate"][:4],
                "description": history["interpretation"], "sourceUrl": source["url"], "sourceTitle": source["title"]})

    # Explicit input manifest: index/search-result files must never become cases.
    appellate_files = {
        "appellate-barberis.json": "sbe-5th-appellate-retain-barberis-jr-john-b-barberis-jr",
        "appellate-knecht.json": "sbe-4th-appellate-retain-knecht-james-a-knecht",
        "appellate-lampkin.json": "sbe-1st-appellate-retain-lampkin-bertina-e-lampkin",
    }
    for filename, cid in appellate_files.items():
        record = read(filename)
        if cid not in profiles:
            raise ValueError("Appellate identity does not match roster")
        profile = profiles[cid]
        profile["rulings"] = [normalized_case(case, record["court"]) for case in record["cases"]]
        if record.get("limits"):
            profile["researchLimitations"] += record["limits"]
        profile["researchLimitations"] += record.get("gaps", [])
        affiliation = record.get("historicalAffiliation")
        if affiliation:
            profile["politicalHistory"].append({"party": affiliation["party"], "year": "2016",
                "description": affiliation["displayText"], "sourceUrl": affiliation["source"], "sourceTitle": affiliation["sourceType"]})
        campaign = record.get("historicalElectionParty")
        if campaign:
            profile["politicalHistory"].append({"party": campaign["party"], "year": campaign["year"],
                "description": campaign["recommendedDisplay"] + ". Documented by a contemporaneous party advertisement, not an official election canvass. This does not establish current affiliation or Trump support.",
                "sourceUrl": campaign["sourceUrl"], "sourceTitle": campaign["sourceTitle"]})
        historical_election = record.get("historicalElection")
        if historical_election:
            profile["politicalHistory"].append({"party": historical_election["party"], "year": historical_election["year"],
                "description": historical_election["label"], "sourceUrl": historical_election["source"],
                "sourceTitle": "Official 2016 election record"})
        for later in record.get("laterLegalContext", []):
            for case in profile["rulings"]:
                if "detention" in case["topic"].lower():
                    case["subsequentHistory"] += f" Later legal context: {later['citation']}: {later['holding']} {later['relationship']}"
                    case["evidence"].append({"url": later["sourceUrl"], "title": f"{later['case']}, {later['citation']}", "pinpoint": later["reference"]})

    for batch in range(1, 9):
        filename = f"research-batch-{batch}.json"
        record = read(filename)
        for cid, researched in record["profiles"].items():
            if cid not in profiles:
                raise ValueError(f"Unknown retention candidate in batch {batch}: {cid}")
            profile = profiles[cid]
            profile["rulings"] = [normalized_case(case, researched.get("court", "")) for case in researched.get("rulings", [])]
            profile["researchLimitations"] += [text(researched.get("researchScope", researched.get("searchScope", "")))]
            if researched.get("coverageNote"):
                profile["researchLimitations"].append(text(researched["coverageNote"]))
            if not profile["rulings"]:
                profile["coverageNote"] = text(researched.get("coverageNote")) or profile["coverageNote"]
            for history in researched.get("politicalHistory", []):
                profile["politicalHistory"].append({
                    "party": history["party"], "year": history.get("year", history.get("start", "")[:4]),
                    "description": text(history["description"]) + " " + text(history.get("note")),
                    "sourceUrl": first(history, "sourceUrl", "source"), "sourceTitle": history.get("sourceTitle", "Historical election record")})
            for statement in researched.get("publicStatements", []):
                profile.setdefault("publicStatements", []).append({
                    "date": statement["date"], "context": statement["context"], "text": statement["quote"],
                    "sourceUrl": statement["source"], "sourceTitle": statement["title"], "limitations": statement["interpretationLimit"]})

    for needle, aliases, note, url in [
        ("dempsey", ["Maire Aileen Dempsey", "Maire Dempsey"], "Election listings use Marie Aileen Dempsey; the court and bar reports use Maire Aileen Dempsey. The source-name match is explicit; no official correction to the 2026 election spelling was located.", "https://www.cookcountycourtil.gov/judge/dempsey-maire"),
        ("stacey", ["Christ Stanley Stacey", "Christ Stacey"], "The 2026 ballot name is Chris Stacey. The official court directory uses Christ Stanley Stacey, and the ISBA report uses Christ Stacey.", "https://www.cookcountycourtil.gov/judge/stacey-christ"),
    ]:
        matches = [cid for cid in profiles if needle in cid]
        if len(matches) != 1:
            raise ValueError(f"Ambiguous court alias: {needle}")
        profiles[matches[0]]["searchAliases"] = aliases
        profiles[matches[0]]["identityNotes"] = [{"description": note, "url": url, "title": "Official court directory"}]

    for cid, reviewed_cases in read("normalizedapprovedpolicycontext.json")["profiles"].items():
        for case_id, context in reviewed_cases.items():
            matches = [case for case in profiles[cid]["rulings"] if case["id"] == case_id]
            if len(matches) != 1:
                raise ValueError(f"Approved policy context has no unique case: {cid}/{case_id}")
            case = matches[0]
            case["policyComparisons"] = context["policyComparisons"]
            if context.get("additionalLegalContext"):
                case["subsequentHistory"] += " Later legal context: " + context["additionalLegalContext"]["explanation"]
                case["evidence"] += context["additionalLegalContext"]["sources"]

    for cid, profile in profiles.items():
        count = len(profile["rulings"])
        if count:
            profile["researchStatus"] = f"{count} selected ruling{'s' if count != 1 else ''} verified; 2026 bar reports checked."
        seen = set()
        for ruling in profile["rulings"]:
            if ruling["id"] in seen:
                raise ValueError(f"Duplicate case {cid}/{ruling['id']}")
            seen.add(ruling["id"])
            for key in ("caseName", "citation", "date", "court", "judgeRole", "holding", "reasoning", "subsequentHistory", "evidence"):
                if not ruling.get(key):
                    raise ValueError(f"Missing {key}: {cid}/{ruling['id']}")
    data = {
        "schemaVersion": 1, "checked": CHECKED,
        "methodology": {
            "summary": "Read what the judge actually decided, the legal reason and what happened on appeal. The examples are selected public decisions, not a complete career record. Each retention question is a separate Yes / No choice.",
            "limits": [
                "A trial judge does not author the appellate court's reasoning. The profiles distinguish the judge's action from the reviewing court's decision and identify unresolved later history.",
                "Historical election party is dated ballot information, not a current declaration of belief or a Trump endorsement. Retention ballots have no party designation.",
                "Bar committee evaluations and voluntary attorney advisory polls are separate professional assessments. They are not ideology measurements or this site's voting recommendations.",
                "Republican, Democratic and Trump-policy comparisons require a decision and a dated primary policy source addressing the same precise question. 'Trumpism' is not treated as a personal label or a numerical score.",
                "Ordinary conviction, sentence, detention, release or procedural outcomes do not establish political alignment. No overall political rating is calculated from this selected sample.",
            ],
            "topics": [item.get("label", item.get("name", item["id"])) for item in method["fixedTopics"]],
            "sources": [{"title": item["title"], "url": item["url"]} for item in method["sources"]],
            "policySourceNote": "Political sources establish dated positions; they do not certify the current enforceability of an executive order or supply voting instructions.",
        },
        "profiles": profiles,
        "coverage": {"judges": len(profiles), "withBarReports": sum(bool(p["assessments"]) for p in profiles.values()),
                     "withSelectedRulings": sum(bool(p["rulings"]) for p in profiles.values()),
                     "selectedRulings": sum(len(p["rulings"]) for p in profiles.values())},
    }
    generated = "// Generated from reviewed primary-source ledgers; see audit/judicial-2026/.\nwindow.IL_JUDICIAL_RESEARCH = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"
    coverage = json.dumps({"checked": CHECKED, **data["coverage"]}, indent=2) + "\n"
    if "--check" in sys.argv:
        if (ROOT / "data-judicial.js").read_text(encoding="utf-8") != generated:
            raise ValueError("data-judicial.js differs from reviewed source ledgers; regenerate and review the change")
        if (AUDIT / "release-coverage.json").read_text(encoding="utf-8") != coverage:
            raise ValueError("Judicial release coverage is stale")
    else:
        (ROOT / "data-judicial.js").write_text(generated, encoding="utf-8", newline="\n")
        (AUDIT / "release-coverage.json").write_text(coverage, encoding="utf-8")
    print(json.dumps(data["coverage"]))


if __name__ == "__main__":
    build()
