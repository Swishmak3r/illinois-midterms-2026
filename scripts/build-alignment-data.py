"""Reproduce the fixed-sample alignment data from audited official source records.

This script does not fetch data or infer positions. Source changes require a new
audit. Missing votes remain unknown; only substantive Yea/Yes/Aye and Nay/No count.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CHECKED = "2026-10-28"
IDENTITIES = {
    "jonathan-jackson": ("Jonathan Jackson", "J000309"),
    "delia-ramirez": ("Delia Ramirez", "R000617"),
    "mike-quigley": ("Mike Quigley", "Q000023"),
    "sean-casten": ("Sean Casten", "C001117"),
    "brad-schneider": ("Brad Schneider", "S001190"),
    "bill-foster": ("Bill Foster", "F000454"),
    "mike-bost": ("Mike Bost", "B001295"),
    "nikki-budzinski": ("Nikki Budzinski", "B001315"),
    "lauren-underwood": ("Lauren Underwood", "U000040"),
    "mary-miller": ("Mary Miller", "M001211"),
    "darin-lahood": ("Darin LaHood", "L000585"),
    "eric-sorensen": ("Eric Sorensen", "S001225"),
}
DESCRIPTIONS = {
    "laken-riley": "Pass S.5, expanding mandatory immigration detention for certain noncitizens accused of specified offenses and state authority to challenge immigration actions.",
    "save-act": "Pass the 2025 SAVE Act, requiring documentary proof of U.S. citizenship when registering to vote in federal elections. This is not the separate 2026 SAVE America Act.",
    "reconciliation-2025": "Approve the final 2025 tax and spending reconciliation package, commonly called the One Big Beautiful Bill. The entire package counts once; individual provisions are not separately scored.",
    "rescissions-2025": "Pass the June 12 House version of the rescissions package for foreign assistance and public broadcasting. This is the substantive June bill vote, not July's broader procedural rule.",
    "methane-rule": "Disapprove EPA's rule implementing the oil-and-gas Waste Emissions Charge. This is a specific regulatory repeal, not a score for all climate policy.",
    "california-waiver": "Disapprove the EPA waiver for California's Advanced Clean Cars II program. Companion waiver resolutions are not counted again.",
}


def main():
    baseline = json.loads((ROOT / "audit/trump-baseline.json").read_text(encoding="utf-8-sig"))
    votes = json.loads((ROOT / "audit/house-alignment-votes.json").read_text(encoding="utf-8-sig"))["votes"]
    aliases = {"california-vehicles": "california-waiver", "rescissions": "rescissions-2025", "reconciliation": "reconciliation-2025"}
    vote_map = {aliases.get(vote["id"], vote["id"]): vote for vote in votes}
    if len(baseline) != 6 or len(vote_map) != 6 or set(vote_map) != set(DESCRIPTIONS):
        raise ValueError("The fixed basket must contain exactly the six audited measures.")
    policies = []
    candidates = {key: {"name": value[0], "bioguide": value[1], "positions": {}} for key, value in IDENTITIES.items()}
    for policy in baseline:
        vote = vote_map[policy["id"]]
        if policy["trumpStance"] != "support" or vote["question"] not in ("On Passage", "On Motion to Concur in the Senate Amendment"):
            raise ValueError("Only the audited substantive vote and documented administration support may be used.")
        policies.append({
            "id": policy["id"], "label": policy["title"], "bill": policy["bill"], "date": vote["date"],
            "description": DESCRIPTIONS[policy["id"]], "trumpPosition": "Support",
            "baselineSources": [{"url": policy["url"], "title": policy["sourceTitle"], "published": policy["published"]}],
            "rollCall": vote["rollCall"], "rollCallUrl": vote["url"], "rollCallXml": vote["xmlUrl"],
        })
        for candidate in candidates.values():
            matches = [member for member in vote["illinois"] if member["bioguide"] == candidate["bioguide"]]
            if len(matches) != 1:
                raise ValueError(f"Missing or ambiguous member identity: {candidate['bioguide']}")
            member = matches[0]
            value = member["vote"]
            stance = "agree" if value in ("Yea", "Yes", "Aye") else "disagree" if value in ("Nay", "No") else "unknown"
            summary = f"Recorded {value} on {vote['date']} in House roll call {vote['rollCall']} ({vote['question']})."
            if stance == "unknown":
                summary += " This supplies no scored position and is excluded from the denominator."
            candidate["positions"][policy["id"]] = {
                "stance": stance, "summary": summary, "sourceType": "house_roll_call", "recordedVote": value,
                "sources": [{"url": vote["url"], "title": f"U.S. House Clerk — roll call {vote['rollCall']}, {vote['date']}", "published": vote["date"]}],
            }
    data = {
        "checked": CHECKED, "minEvidence": 3, "version": "2026-10-28.1", "period": "2025-01-22 to 2025-07-03",
        "methodology": {
            "label": "Trump policy alignment · six-measure sample",
            "summary": "Agreement with six selected Trump-backed federal measures from January–July 2025. This is a limited legislative policy sample, not an overall ideology or endorsement rating.",
            "formula": "100 × recorded agreements ÷ recorded agreements and disagreements, rounded to the nearest whole percent. At least three evidenced measures are required.",
            "selection": "The basket was fixed before compiling member votes: immigration detention, citizenship documentation for voter registration, the tax/spending reconciliation package, spending rescissions, methane regulation, and California vehicle-emissions waivers. These distinct administration priorities have explicit White House support and identifiable substantive House votes; companion and procedural votes are excluded.",
            "limitations": [
                "The six measures are an editorial sample, not a random sample, a comprehensive voting record, or a statistically validated estimate of all policy agreement. Different measures or weights could change the result.",
                "Every measure has equal weight. Broad packages count once and do not prove agreement with every provision.",
                "A 0% score means disagreement on every observed measure in this sample; 100% means agreement on every observed measure. Neither describes all policies or personal support for Trump.",
                "Missing records, absences, abstentions, ambiguous statements and insufficiently sourced positions are unknown, not disagreements. Coverage is shown separately; percentages with different coverage should be compared cautiously.",
                "Only actual recorded votes are included in this release. Other candidates receive Not enough evidence. Party, endorsements, campaign rhetoric and generic issue similarities never substitute for a vote or exact position.",
                "The recorded positions date from 2025. They are historical evidence, not a claim about a candidate's current opinion on every measure. Sources were checked October 28, 2026.",
            ],
        },
        "policies": policies, "candidates": candidates,
    }
    output = "// Audited official-source policy sample. Rebuild with scripts/build-alignment-data.py.\nwindow.IL_ALIGNMENT_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"
    (ROOT / "data-alignment.js").write_text(output, encoding="utf-8", newline="\n")
    print(f"Built data-alignment.js: {len(candidates)} candidate records, {len(policies)} measures.")


if __name__ == "__main__":
    main()
