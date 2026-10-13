// 2026 Illinois Midterm Elections - Additional Regional Legislative Races & Comprehensive County/Local Dataset
// Covers Cook County, Collar Counties (DuPage, Lake, Will, Kane, McHenry), and Major Downstate Counties

// 1. Append additional regional State Senate & State House races so every major Illinois town/city has legislative coverage
window.IL_LEGISLATURE_RACES.push(
  {
    id: "il-sen-19",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 19th District",
    districtCode: "SD-19",
    districtName: "19th Senate District (Orland Park, Tinley Park, Mokena, New Lenox, Frankfort, Lockport & Homer Glen)",
    region: "Suburban Cook & Will (Southwest Suburbs)",
    counties: ["Cook", "Will"],
    cities: ["Orland Park", "Tinley Park", "Mokena", "New Lenox", "Frankfort", "Homer Glen", "Lockport", "Oak Forest", "Matteson"],
    pvi: "D+4",
    rating: "Lean Democratic (Top SW Suburban Battleground)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Michael Hastings (D)",
    primarySummary: "Incumbent Sen. Michael Hastings (D, West Point grad and Iraq veteran) faces Republican challenger Hillary Kurzawa (R) in a hard-fought Southwest Suburban battleground.",
    candidates: [
      {
        id: "michael-hastings",
        name: "Michael E. Hastings",
        party: "Democrat",
        role: "Illinois State Senator (SD-19, 2013-present); U.S. Army Iraq Veteran (West Point) & Attorney",
        hometown: "Frankfort (Will County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "MH",
        fecRaised: "$1,480,000",
        fecCashOnHand: "$960,000",
        pacPolicy: "Backed by ISDF, IUOE Local 150, Building Trades & ITLA",
        pacSummary: "Supported by ISDF, IUOE Local 150, IBEW, LIUNA, ITLA (Trial Lawyers), IEA, IFT, and veterans PACs.",
        pacs: [
          { name: "Illinois Senate Democratic Fund (ISDF)", type: "Party Committee", amount: "$650,000+", stance: "Supporting" },
          { name: "IUOE Local 150, IBEW & LIUNA", type: "Labor PAC", amount: "$310,000+", stance: "Supporting" },
          { name: "ITLA, IEA/IPACE & IFT", type: "Trade PAC", amount: "$220,000+", stance: "Supporting" }
        ],
        endorsements: ["IUOE Local 150", "IBEW", "LIUNA", "IEA", "IFT", "Veterans Groups"],
        issues: {
          propertyTaxes: "Sponsored 100% disabled veteran property tax exemptions and South/Southwest Cook property tax relief grants.",
          safetAct: "Supports funding Southwest Suburban police departments alongside veteran treatment courts.",
          budgetTaxes: "Champions I-80 reconstruction, 191st Street corridor upgrades, and eliminating the statewide grocery tax.",
          pensions: "Supports Tier 2 police, firefighter, and teacher pension reforms.",
          energyGrid: "Chairs Energy & Public Utilities at times; authored consumer utility protections and grid reliability rules.",
          transit: "Supports Metra Rock Island and Southwest Service commuter rail upgrades.",
          healthcare: "Supports Silver Cross Hospital expansion, veterans' healthcare, and reproductive freedom.",
          education: "Supports Lincoln-Way D210, Consolidated High School D230, and Orland D135 funding."
        }
      },
      {
        id: "hillary-kurzawa",
        name: "Hillary Kurzawa",
        party: "Republican",
        role: "Southwest Suburban Conservative & Community Advocate",
        hometown: "New Lenox / Frankfort area, IL",
        incumbentStatus: "Challenger",
        photoInitials: "HK",
        fecRaised: "$690,000",
        fecCashOnHand: "$420,000",
        pacPolicy: "SRCC Target + Orland/Will GOP & Business PACs",
        pacSummary: "Backed by SRCC, Orland Township and Will County GOP organizations, NFIB, and conservative family PACs.",
        pacs: [
          { name: "Senate Republican Campaign Committee (SRCC)", type: "Party Committee", amount: "$480,000+", stance: "Supporting" },
          { name: "Orland/Will GOP & NFIB", type: "Trade PAC", amount: "$110,000+", stance: "Supporting" }
        ],
        endorsements: ["Will County GOP", "Orland Township GOP", "NFIB Illinois", "Illinois Family Action"],
        issues: {
          propertyTaxes: "Campaigns on skyrocketing Orland, Tinley, and Lincoln-Way property tax bills and demands hard tax caps.",
          safetAct: "Calls for repealing cashless bail under the SAFE-T Act and ending Illinois's sanctuary state law.",
          budgetTaxes: "Attacks state budget growth and non-citizen healthcare spending.",
          pensions: "Supports fiscal restraint on state pension debt.",
          energyGrid: "Opposes CEJA green mandates and high ComEd capacity charges.",
          transit: "Opposes suburban tax increases for Chicago transit.",
          healthcare: "Pro-life conservative; supports parental medical consent rights.",
          education: "Supports parental rights and reviving Invest in Kids private school scholarships."
        }
      }
    ]
  },
  {
    id: "il-house-37",
    level: "state_legislature",
    chamber: "State House",
    office: "Illinois State Representative - 37th District",
    districtCode: "HD-37",
    districtName: "37th House District (Orland Park, Tinley Park, Mokena, New Lenox, Frankfort & Homer Glen)",
    region: "Suburban Cook & Will (Southwest Suburbs)",
    counties: ["Will", "Cook"],
    cities: ["Orland Park", "Tinley Park", "Mokena", "New Lenox", "Frankfort", "Homer Glen", "Lockport"],
    pvi: "R+4",
    rating: "Lean Republican (SW Suburban Police Officer vs. Union Democrat)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Patrick Sheehan (R)",
    primarySummary: "Incumbent Rep. Patrick Sheehan (R, Lockport police officer and former interim Lockport Mayor) defends HD-37 against Democratic challenger David Maher (D).",
    candidates: [
      {
        id: "patrick-sheehan",
        name: "Patrick Sheehan",
        party: "Republican",
        role: "Illinois State Representative (HD-37, appointed April 2024, elected Nov 2024); Lockport Police Officer & Former Interim Mayor",
        hometown: "Lockport (Will County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "PS",
        fecRaised: "$980,000",
        fecCashOnHand: "$640,000",
        pacPolicy: "HRO Defense + FOP, IUOE Local 150 & Realtors RPAC",
        pacSummary: "Active police officer heavily backed by Fraternal Order of Police (FOP), IUOE Local 150, HRO, and Illinois Realtors RPAC.",
        pacs: [
          { name: "House Republican Organization (HRO)", type: "Party Committee", amount: "$550,000+", stance: "Supporting" },
          { name: "FOP, IUOE Local 150 & Illinois Realtors RPAC", type: "Labor PAC", amount: "$280,000+", stance: "Supporting" }
        ],
        endorsements: ["Fraternal Order of Police (FOP)", "IUOE Local 150", "Illinois Realtors RPAC", "NFIB"],
        issues: {
          propertyTaxes: "Focuses on capping Will and SW Cook property taxes and expanding senior/veteran homestead exemptions.",
          safetAct: "Active-duty police officer who leads House GOP efforts to expand detainable offenses under the SAFE-T Act and protect qualified immunity.",
          budgetTaxes: "Supports I-80 and Route 30 infrastructure and cutting state taxes on working families.",
          pensions: "Champions fixing Tier 2 police and firefighter pensions.",
          energyGrid: "Supports nuclear and natural gas baseload generation.",
          transit: "Supports Metra commuter safety and opposing suburban tax diversions to CTA.",
          healthcare: "Supports first-responder mental health and Silver Cross Hospital.",
          education: "Supports Lincoln-Way and Lockport Township High School District 205."
        }
      },
      {
        id: "david-maher",
        name: "David Maher",
        party: "Democrat",
        role: "Southwest Suburban Labor & Civic Advocate",
        hometown: "Orland Park / Mokena area, IL",
        incumbentStatus: "Challenger",
        photoInitials: "DM",
        fecRaised: "$540,000",
        fecCashOnHand: "$320,000",
        pacPolicy: "DPI, Teachers & Labor PACs",
        pacSummary: "Backed by DPI, IEA/IPACE, IFT, SEIU, and Southwest Suburban Democratic organizations.",
        pacs: [
          { name: "Democrats for the Illinois House / DPI & Teachers PACs", type: "Party Committee", amount: "$380,000+", stance: "Supporting" }
        ],
        endorsements: ["IEA", "IFT", "Personal PAC", "Will County Democrats"],
        issues: {
          propertyTaxes: "Advocates higher state EBF school funding for SW Cook and Will County schools to reduce property tax bills.",
          safetAct: "Supports gun safety laws and local police resources.",
          budgetTaxes: "Focuses on middle-class tax relief and Repealing the grocery tax.",
          pensions: "Supports Tier 2 pension reform for teachers and public workers.",
          energyGrid: "Supports clean energy and utility consumer protections.",
          transit: "Supports Metra Rock Island and Southwest Service frequency.",
          healthcare: "Champions reproductive rights and prescription drug caps.",
          education: "Supports public education and opposes private school vouchers."
        }
      }
    ]
  },
  {
    id: "il-sen-09",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 9th District (North Shore)",
    districtCode: "SD-9",
    districtName: "9th Senate District (Evanston, Wilmette, Winnetka, Glenview, Northbrook, Glencoe, Skokie & Golf)",
    region: "Suburban Cook (North Shore)",
    counties: ["Cook"],
    cities: ["Evanston", "Wilmette", "Winnetka", "Glenview", "Northbrook", "Glencoe", "Kenilworth", "Skokie", "Northfield"],
    pvi: "D+29",
    rating: "Safe Democratic (North Shore Anchor)",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Laura Fine (D)",
    primarySummary: "Senate Behavioral and Mental Health Chair Laura Fine (D, who also ran in the March 2026 IL-09 congressional primary while retaining her Senate holdover/ballot anchor role) represents the North Shore Alongside House Majority Leader Robyn Gabel (HD-18).",
    candidates: [
      {
        id: "laura-fine",
        name: "Laura Fine",
        party: "Democrat",
        role: "Illinois State Senator (SD-9, 2019-present); Chair, Senate Behavioral & Mental Health Committee",
        hometown: "Glenview (Cook County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "LF",
        fecRaised: "$1,150,000",
        fecCashOnHand: "$680,000",
        pacPolicy: "Backed by ISDF, Personal PAC, Healthcare & Labor Unions",
        pacSummary: "Supported by ISDF, Personal PAC, IEA, IFT, SEIU, and behavioral health/consumer advocacy coalitions.",
        pacs: [
          { name: "ISDF, Personal PAC, IEA & IFT", type: "Labor PAC", amount: "$340,000+", stance: "Supporting" }
        ],
        endorsements: ["Personal PAC", "IEA", "IFT", "Sierra Club", "G-PAC"],
        issues: {
          propertyTaxes: "Supports senior assessment relief and EBF stability for North Shore districts (Evanston D65/D202, New Trier D203, Glenbrook D225).",
          safetAct: "Staunch gun safety advocate (Highland Park / North Shore assault weapons ban lead) and defender of the SAFE-T Act.",
          budgetTaxes: "Focuses on insurance company regulation, banning prior-authorization delays, and progressive taxation.",
          pensions: "Supports Tier 2 pension fixes and state fiscal stability.",
          energyGrid: "Co-champion of CEJA and banning polystyrene foam plastics.",
          transit: "Supports CTA Purple/Yellow Line and Metra UP-N modernization under NITA.",
          healthcare: "Nationally recognized author of Illinois's law banning prior authorization for inpatient mental health care and regulating PBMs.",
          education: "Supports Northwestern University research, Oakton College, and public schools."
        }
      }
    ]
  },
  {
    id: "il-house-18",
    level: "state_legislature",
    chamber: "State House",
    office: "Illinois State Representative - 18th District (House Majority Leader)",
    districtCode: "HD-18",
    districtName: "18th House District (Evanston, Wilmette, Winnetka, Kenilworth, Glencoe & Northbrook)",
    region: "Suburban Cook (North Shore)",
    counties: ["Cook"],
    cities: ["Evanston", "Wilmette", "Winnetka", "Kenilworth", "Glencoe", "Northbrook", "Glenview"],
    pvi: "D+34",
    rating: "Safe Democratic (House Majority Leader)",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Robyn Gabel (D - House Majority Leader)",
    primarySummary: "House Majority Leader Robyn Gabel (D, chief House architect of the Climate and Equitable Jobs Act) runs unopposed in November 2026.",
    candidates: [
      {
        id: "robyn-gabel",
        name: "Robyn Gabel",
        party: "Democrat",
        role: "House Majority Leader (2023-present); State Rep. (HD-18, 2010-present) & Former Maternal/Child Health Executive",
        hometown: "Evanston (Cook County), IL",
        incumbentStatus: "Incumbent (House Majority Leader)",
        photoInitials: "RG",
        fecRaised: "$1,650,000",
        fecCashOnHand: "$1,180,000",
        pacPolicy: "Backed by DPI, IEC/Environmental PACs, Personal PAC & Labor",
        pacSummary: "Supported by DPI, Illinois Environmental Council, Clean Jobs Coalition, Personal PAC, SEIU, IEA, and IFT.",
        pacs: [
          { name: "DPI, Personal PAC, SEIU & Clean Energy PACs", type: "Ideological PAC", amount: "$480,000+", stance: "Supporting" }
        ],
        endorsements: ["Sierra Club", "Illinois Environmental Council", "Personal PAC", "IEA", "IFT", "SEIU"],
        issues: {
          propertyTaxes: "Supports progressive state revenue and EBF school funding to relieve Evanston and North Shore property taxpayers.",
          safetAct: "Floor leader for gun violence prevention and the SAFE-T Act.",
          budgetTaxes: "Helps lead House budget negotiations, child care investments, and human services funding.",
          pensions: "Supports Tier 2 pension reform and full pension funding.",
          energyGrid: "Lead House sponsor of the Climate and Equitable Jobs Act (CEJA) and the 2026 Clean & Reliable Grid Affordability Act.",
          transit: "Champions CTA Purple Line modernization, Metra UP-N electrification, and NITA transit funding.",
          healthcare: "Former Executive Director of the Illinois Maternal and Child Health Coalition; authored doula/midwife Medicaid coverage and abortion shield laws.",
          education: "Champions early childhood education (Smart Start Illinois) and Evanston/North Shore public schools."
        }
      }
    ]
  },
  {
    id: "il-house-84",
    level: "state_legislature",
    chamber: "State House",
    office: "Illinois State Representative - 84th District (Aurora, Naperville, Montgomery & Oswego)",
    districtCode: "HD-84",
    districtName: "84th House District (Aurora, Naperville, Montgomery & Oswego)",
    region: "Collar Counties (Kane, DuPage, Kendall & Will)",
    counties: ["Kane", "DuPage", "Kendall", "Will"],
    cities: ["Aurora", "Naperville", "Montgomery", "Oswego", "Boulder Hill"],
    pvi: "D+15",
    rating: "Safe Democratic (Aurora & Route 59 Corridor)",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Stephanie Kifowit (D)",
    primarySummary: "Veteran Rep. Stephanie Kifowit (D, U.S. Marine veteran and former Aurora Alderwoman) leads the 84th District covering Aurora, west Naperville, Oswego, and Montgomery.",
    candidates: [
      {
        id: "stephanie-kifowit",
        name: "Stephanie A. Kifowit",
        party: "Democrat",
        role: "Illinois State Representative (HD-84, 2013-present); U.S. Marine Corps Veteran & Financial Adviser",
        hometown: "Oswego / Aurora, IL",
        incumbentStatus: "Incumbent",
        photoInitials: "SK",
        fecRaised: "$920,000",
        fecCashOnHand: "$610,000",
        pacPolicy: "Backed by DPI, IUOE Local 150, Building Trades, Veterans & Teachers",
        pacSummary: "Chairs Veterans' Affairs and Personnel & Pensions; backed by IUOE Local 150, IBEW, LIUNA, AFFI, IEA, IFT, and DPI.",
        pacs: [
          { name: "IUOE Local 150, IBEW, LIUNA & AFFI", type: "Labor PAC", amount: "$290,000+", stance: "Supporting" },
          { name: "IEA/IPACE, IFT & Personal PAC", type: "Labor PAC", amount: "$160,000+", stance: "Supporting" }
        ],
        endorsements: ["IUOE Local 150", "AFFI (Firefighters)", "IEA", "IFT", "Personal PAC"],
        issues: {
          propertyTaxes: "Authored disabled veteran property tax exemptions and pushes higher EBF state funding for East/West Aurora (D131/D129), Indian Prairie D204, and Oswego D308.",
          safetAct: "Supports Aurora police resources, response training after the Henry Pratt shooting, and veteran treatment courts.",
          budgetTaxes: "Financial adviser focused on state credit upgrades, Rainy Day reserves, and working-family tax relief.",
          pensions: "Chair of the House Personnel & Pensions Committee; chief architect of bipartisan Tier 2 pension reform proposals.",
          energyGrid: "Supports grid reliability and data center accountability in the I-88 corridor.",
          transit: "Supports Metra BNSF commuter rail frequency from Aurora and Naperville to Union Station.",
          healthcare: "Champions veteran suicide prevention, Rush Copley / Endeavor Edward Hospital access, and reproductive freedom.",
          education: "Supports Waubonsee Community College, Aurora University, and public K-12 schools."
        }
      }
    ]
  },
  {
    id: "il-sen-43",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 43rd District (Joliet, Bolingbrook, Romeoville, Crest Hill & Lockport)",
    districtCode: "SD-43",
    districtName: "43rd Senate District (Joliet, Bolingbrook, Romeoville, Crest Hill, Lockport & Channahon)",
    region: "Collar Counties (Will County)",
    counties: ["Will", "DuPage"],
    cities: ["Joliet", "Bolingbrook", "Romeoville", "Crest Hill", "Lockport", "Rockdale", "Channahon"],
    pvi: "D+13",
    rating: "Safe Democratic (Will County Logistics & Industrial Hub)",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Rachel Ventura (D)",
    primarySummary: "Incumbent Sen. Rachel Ventura (D) and House counterpart Rep. Larry Walsh Jr. (D, HD-86) anchor the Joliet-Bolingbrook-Romeoville corridor.",
    candidates: [
      {
        id: "rachel-ventura",
        name: "Rachel Ventura",
        party: "Democrat",
        role: "Illinois State Senator (SD-43, 2023-present) & Former Will County Board Member",
        hometown: "Joliet (Will County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "RV",
        fecRaised: "$640,000",
        fecCashOnHand: "$410,000",
        pacPolicy: "Backed by ISDF, SEIU, Teachers & Environmental PACs",
        pacSummary: "Supported by ISDF, SEIU, IEA, IFT, Sierra Club / Illinois Environmental Council, and Personal PAC.",
        pacs: [
          { name: "ISDF, SEIU, IEA, IFT & Environmental PACs", type: "Labor PAC", amount: "$320,000+", stance: "Supporting" }
        ],
        endorsements: ["SEIU", "IEA", "IFT", "Sierra Club", "Personal PAC"],
        issues: {
          propertyTaxes: "Pushes higher state EBF school funding for Joliet D86/D204 and Valley View D365U and demands logistics warehouses pay their fair share of road/property taxes.",
          safetAct: "Strong supporter of the SAFE-T Act, ending cash bail, and restorative justice.",
          budgetTaxes: "Supports progressive tax reform and Lake Michigan water pipeline funding for Joliet.",
          pensions: "Supports Tier 2 pension reform.",
          energyGrid: "Leading Senate critic of unchecked AI data center water/power consumption and NorthPoint-style mega-warehouses.",
          transit: "Supports Metra Heritage Corridor & Rock Island upgrades, I-80 Des Plaines River bridge replacement, and Pace bus expansion.",
          healthcare: "Supports universal healthcare (single-payer advocacy), Prime/Ascension St. Joseph Joliet nurse staffing ratios, and reproductive rights.",
          education: "Supports Joliet Junior College and public K-12 schools."
        }
      }
    ]
  },
  {
    id: "il-sen-36",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 36th District (Quad Cities, Galesburg, Monmouth & Macomb)",
    districtCode: "SD-36",
    districtName: "36th Senate District (Rock Island, Moline, East Moline, Silvis, Galesburg, Monmouth & Macomb)",
    region: "Western Illinois & Quad Cities",
    counties: ["Rock Island", "Knox", "Warren", "McDonough", "Henry", "Mercer"],
    cities: ["Rock Island", "Moline", "East Moline", "Silvis", "Milan", "Galesburg", "Monmouth", "Macomb", "Kewanee"],
    pvi: "D+3",
    rating: "Lean Democratic (Quad Cities & Western IL Anchor)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Mike Halpin (D)",
    primarySummary: "Sen. Mike Halpin (D, labor attorney) and State Rep. Gregg Johnson (D, HD-72) represent the Quad Cities and Western Illinois corridor.",
    candidates: [
      {
        id: "mike-halpin",
        name: "Michael 'Mike' Halpin",
        party: "Democrat",
        role: "Illinois State Senator (SD-36, 2023-present); Former State Rep. (HD-72) & Labor Attorney",
        hometown: "Rock Island (Rock Island County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "MH",
        fecRaised: "$1,250,000",
        fecCashOnHand: "$860,000",
        pacPolicy: "Backed by ISDF, UAW, IUOE Local 150, Building Trades & Teachers",
        pacSummary: "Supported by ISDF, UAW (John Deere workers), IUOE Local 150, IBEW, LIUNA, IEA, IFT, AFSCME, and Personal PAC.",
        pacs: [
          { name: "ISDF, UAW, IUOE Local 150, IBEW & LIUNA", type: "Labor PAC", amount: "$580,000+", stance: "Supporting" },
          { name: "IEA/IPACE, IFT, AFSCME & Personal PAC", type: "Labor PAC", amount: "$290,000+", stance: "Supporting" }
        ],
        endorsements: ["United Auto Workers (UAW)", "IUOE Local 150", "AFSCME Council 31", "IEA", "IFT", "Personal PAC"],
        issues: {
          propertyTaxes: "Focuses on EBF school funding and expanding commercial development in the Quad Cities and Galesburg to lower homeowner tax rates.",
          safetAct: "Supports bipartisan public safety investments and judicial discretion for violent offenses.",
          budgetTaxes: "Protects Rock Island Arsenal defense jobs, UAW John Deere workers, and Western Illinois University (WIU) in Macomb.",
          pensions: "Chairs Higher Education at times; champions fixing Tier 2 SURS, TRS, and SERS pensions.",
          energyGrid: "Protects Quad Cities Nuclear Generating Station in Cordova and supports clean energy jobs.",
          transit: "Championed state funding to finally launch Quad Cities-to-Chicago passenger rail and Mississippi River port upgrades.",
          healthcare: "Protects reproductive rights and rural hospital stability in Galesburg, Macomb, and Monmouth.",
          education: "Fights faculty layoffs at Western Illinois University (WIU) and backs Black Hawk College and Carl Sandburg College."
        }
      }
    ]
  },
  {
    id: "il-sen-52",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 52nd District (Champaign, Urbana, Rantoul, Danville & Savoy)",
    districtCode: "SD-52",
    districtName: "52nd Senate District (Champaign, Urbana, Savoy, Rantoul & Danville)",
    region: "Central Illinois (Champaign & Vermilion Counties)",
    counties: ["Champaign", "Vermilion"],
    cities: ["Champaign", "Urbana", "Savoy", "Rantoul", "Danville"],
    pvi: "D+9",
    rating: "Likely Democratic (UIUC & East-Central Illinois)",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Paul Faraci (D)",
    primarySummary: "Sen. Paul Faraci (D) and State Rep. Carol Ammons (D, HD-103) represent Champaign-Urbana and the University of Illinois flagship campus.",
    candidates: [
      {
        id: "paul-faraci",
        name: "Paul Faraci",
        party: "Democrat",
        role: "Illinois State Senator (SD-52, 2023-present); Former Champaign County Deputy Assessor & Small Business Owner",
        hometown: "Champaign (Champaign County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "PF",
        fecRaised: "$980,000",
        fecCashOnHand: "$640,000",
        pacPolicy: "Backed by ISDF, SURS/UIUC Unions, Building Trades & Personal PAC",
        pacSummary: "Supported by ISDF, IEA, IFT, SEIU, IUOE Local 150, IBEW, and Personal PAC.",
        pacs: [
          { name: "ISDF, IEA, IFT, IUOE Local 150 & Personal PAC", type: "Labor PAC", amount: "$480,000+", stance: "Supporting" }
        ],
        endorsements: ["IEA", "IFT", "IUOE Local 150", "Personal PAC", "Illinois AFL-CIO"],
        issues: {
          propertyTaxes: "Former Deputy Township Assessor who authored reforms closing the University of Illinois / Carle hospital property tax exemption gaps and boosting EBF school aid.",
          safetAct: "Supports community violence intervention in Champaign-Urbana and Danville alongside local police resources.",
          budgetTaxes: "Supports UIUC research park expansion, quantum/ag-tech innovation, and working-family tax credits.",
          pensions: "Leading Senate advocate for fixing Tier 2 SURS pensions for University of Illinois employees.",
          energyGrid: "Sponsored the law banning carbon sequestration injection beneath the sole-source Mahomet Aquifer.",
          transit: "Supports Champaign-Urbana MTD zero-emission buses and Illinois high-speed passenger rail.",
          healthcare: "Supports Carle and OSF hospital access, mental health parity, and reproductive freedom.",
          education: "Champions the University of Illinois Urbana-Champaign (UIUC), Parkland College, and DACC."
        }
      }
    ]
  },
  {
    id: "il-sen-30",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 30th District (Waukegan, North Chicago, Mundelein, Buffalo Grove, Vernon Hills & Lincolnshire)",
    districtCode: "SD-30",
    districtName: "30th Senate District (Waukegan, North Chicago, Mundelein, Vernon Hills, Buffalo Grove, Wheeling & Park City)",
    region: "Collar Counties (Lake & North Cook)",
    counties: ["Lake", "Cook"],
    cities: ["Waukegan", "North Chicago", "Mundelein", "Vernon Hills", "Buffalo Grove", "Lincolnshire", "Park City", "Gurnee", "Wheeling"],
    pvi: "D+18",
    rating: "Safe Democratic (Lake County Anchor)",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Adrienne Johnson (D)",
    primarySummary: "Sen. Adrienne Johnson (D) and State Reps. Rita Mayfield (D, HD-60 - Waukegan/North Chicago) and Daniel Didech (D, HD-59 - Buffalo Grove/Vernon Hills) represent eastern and central Lake County.",
    candidates: [
      {
        id: "adrienne-johnson",
        name: "Adrienne Johnson",
        party: "Democrat",
        role: "Illinois State Senator (SD-30, 2020-present) & Former Buffalo Grove Park District President",
        hometown: "Buffalo Grove / Waukegan (Lake County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "AJ",
        fecRaised: "$720,000",
        fecCashOnHand: "$480,000",
        pacPolicy: "Backed by ISDF, Personal PAC, Environmental & Labor Unions",
        pacSummary: "Supported by ISDF, Personal PAC, IEA, IFT, SEIU, and Clean Jobs / environmental justice organizations.",
        pacs: [
          { name: "ISDF, Personal PAC, IEA, IFT & IEC", type: "Labor PAC", amount: "$310,000+", stance: "Supporting" }
        ],
        endorsements: ["Personal PAC", "IEA", "IFT", "Illinois Environmental Council", "SEIU"],
        issues: {
          propertyTaxes: "Champions higher state EBF school funding for Waukegan D60 and North Chicago D187 to relieve Lake County property taxes.",
          safetAct: "Supports the SAFE-T Act, assault weapons ban, and youth violence prevention.",
          budgetTaxes: "Supports Great Lakes Naval Station workforce housing and Waukegan lakefront remediation.",
          pensions: "Supports Tier 2 pension reform.",
          energyGrid: "Led legislation Requiring full coal-ash pond cleanup at the Waukegan lakefront power plant site.",
          transit: "Supports Metra UP-N and NCS commuter rail and Pace Lake County bus expansion.",
          healthcare: "Champions maternal health equity, Vista Health Waukegan stability, and reproductive freedom.",
          education: "Supports College of Lake County (CLC) and public K-12 schools."
        }
      }
    ]
  },
  {
    id: "il-sen-34",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 34th District (Rockford, Belvidere, Loves Park, Machesney Park & Roscoe)",
    districtCode: "SD-34",
    districtName: "34th Senate District (Rockford, Loves Park, Machesney Park, Belvidere, Roscoe & Rockton)",
    region: "Northern Illinois (Winnebago & Boone Counties)",
    counties: ["Winnebago", "Boone"],
    cities: ["Rockford", "Loves Park", "Machesney Park", "Belvidere", "Roscoe", "Rockton", "Cherry Valley"],
    pvi: "D+3",
    rating: "Lean Democratic (Rockford & Belvidere Auto Corridor)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Steve Stadelman (D)",
    primarySummary: "Veteran Sen. Steve Stadelman (D, former Rockford TV news anchor) anchors the Rockford-Belvidere Senate district alongside House Reps. Dave Vella (HD-68) and Maurice West (HD-67).",
    candidates: [
      {
        id: "steve-stadelman",
        name: "Steve Stadelman",
        party: "Democrat",
        role: "Illinois State Senator (SD-34, 2013-present) & Former Rockford TV News Anchor",
        hometown: "Rockford (Winnebago County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "SS",
        fecRaised: "$1,320,000",
        fecCashOnHand: "$890,000",
        pacPolicy: "Backed by ISDF, UAW, IUOE Local 150, Building Trades & Teachers",
        pacSummary: "Supported by ISDF, UAW Local 1268 (Belvidere auto workers), IUOE Local 150, IBEW, LIUNA, IEA, and IFT.",
        pacs: [
          { name: "ISDF, UAW, IUOE Local 150, IBEW & LIUNA", type: "Labor PAC", amount: "$540,000+", stance: "Supporting" }
        ],
        endorsements: ["United Auto Workers (UAW)", "IUOE Local 150", "IEA", "IFT", "Personal PAC"],
        issues: {
          propertyTaxes: "Focuses on EBF school aid for Rockford RPS 205, Harlem D122, and Belvidere D100 and historic-preservation tax credits to rebuild Rockford's commercial tax base.",
          safetAct: "Sponsored trailer bills strengthening domestic violence GPS monitoring and Rockford police resources.",
          budgetTaxes: "Co-architect of the state REV Illinois incentive package reopening the Belvidere Stellantis auto assembly plant and expanding Chicago Rockford International Airport cargo.",
          pensions: "Supports fixing Tier 2 police, firefighter, and teacher pensions.",
          energyGrid: "Supports Byron nuclear power and Belvidere battery/auto manufacturing grid upgrades.",
          transit: "Lead Senate champion of the $275M state capital commitment to restore Rockford-to-Chicago passenger rail.",
          healthcare: "Supports UW Health SwedishAmerican, OSF St. Anthony, and Mercyhealth Rockford medical access.",
          education: "Supports Rock Valley College, NIU Rockford programs, and public schools."
        }
      }
    ]
  }
);

// 2. Comprehensive 2026 County & Local Elections Dataset
window.IL_LOCAL_RACES = [
  // ================= COOK COUNTY EXECUTIVE & COUNTYWIDE OFFICES =================
  {
    id: "cook-president",
    level: "local",
    sublevel: "Cook County Executive",
    office: "President of the Cook County Board of Commissioners",
    districtCode: "COOK-PRES",
    districtName: "Cook County (Chicago & 130+ Suburban Municipalities - 5.1M Residents)",
    region: "Chicago & Suburban Cook County",
    counties: ["Cook"],
    cities: ["All of Chicago", "All Cook County Suburbs"],
    pvi: "D+25",
    rating: "Safe Democratic (Post-Primary Showdown)",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Toni Preckwinkle (D)",
    primarySummary: "Four-term Cook County Board President Toni Preckwinkle (D, Chair of the Cook County Democratic Party) defeated downtown Chicago Ald. Brendan Reilly (D, 42nd Ward) 69% to 31% in the March 17, 2026 Democratic primary after Reilly ran on crime and property taxes. Preckwinkle faces Libertarian Michael Murphy and Independent Richard Mayers in November.",
    candidates: [
      {
        id: "toni-preckwinkle",
        name: "Toni Preckwinkle",
        party: "Democrat",
        role: "President, Cook County Board of Commissioners (2010-present); Chair, Cook County Democratic Party & Former 4th Ward Alderman",
        hometown: "Chicago (Hyde Park), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "TP",
        fecRaised: "$4,850,000",
        fecCashOnHand: "$2,100,000",
        pacPolicy: "Backed by SEIU, CTU, Chicago Federation of Labor, IUOE Local 150 & Cook County Democratic Party",
        pacSummary: "Commands one of the most powerful political coalitions in Illinois, funded by SEIU Healthcare, SEIU Local 73, Chicago Teachers Union (CTU), IUOE Local 150, LIUNA, IBEW, and the Chicago Federation of Labor.",
        pacs: [
          { name: "SEIU Healthcare IL & SEIU Local 73", type: "Labor PAC", amount: "$850,000+", stance: "Supporting" },
          { name: "IUOE Local 150, LIUNA, IBEW & Plumbers Local 130", type: "Labor PAC", amount: "$920,000+", stance: "Supporting" },
          { name: "Chicago Teachers Union (CTU) & IFT", type: "Labor PAC", amount: "$450,000+", stance: "Supporting" },
          { name: "Personal PAC & Sierra Club", type: "Ideological PAC", amount: "$120,000+", stance: "Supporting" }
        ],
        endorsements: ["Cook County Democratic Party", "Chicago Federation of Labor", "SEIU", "CTU", "IUOE Local 150", "Personal PAC"],
        issues: {
          assessmentBurden: "Held the County's own property tax levy flat for multiple budgets while endorsing Lyons Twp Assessor Pat Hynes over Fritz Kaegi in the 2026 primary to fix assessment technology delays and stabilize commercial-to-residential tax shifts.",
          transitMma: "Pushed for SB 2111 (Northern Illinois Transit Authority - NITA) and dedicated County influence over regional CTA, Metra, and Pace integration.",
          leadWaterFlood: "Directs Cook County ARPA and infrastructure grants to help South and West Suburban municipalities replace toxic lead water service lines and upgrade stormwater reservoirs.",
          migrantBudgets: "Managed over $150M+ in Cook County Health (Stroger/Provident) care and suburban shelter coordination while calling on the federal government to reimburse local taxpayers.",
          dataCenterZoning: "Supports Cook County Class 6b/7 industrial tax incentive reforms requiring union prevailing wages and environmental standards.",
          solarWindSiting: "Spearheaded the Cook County Clean Energy Plan and solar installations across County facilities.",
          localPublicSafety: "Architect of Cook County bond court reform and the SAFE-T Act; points to investments in community violence intervention (CVI), Restorative Justice Courts, and behavioral health co-responders."
        }
      },
      {
        id: "michael-murphy-cook",
        name: "Michael Murphy",
        party: "Libertarian",
        role: "Cook County Libertarian Nominee & Tax Reform Advocate",
        hometown: "Chicago / Cook County, IL",
        incumbentStatus: "Challenger",
        photoInitials: "MM",
        fecRaised: "$34,000",
        fecCashOnHand: "$16,000",
        pacPolicy: "100% Grassroots / No Union or Corporate PACs",
        pacSummary: "Funded by small individual donors and Libertarian Party of Illinois volunteers.",
        pacs: [
          { name: "Libertarian Party of Illinois", type: "Party Committee", amount: "Grassroots", stance: "Supporting" }
        ],
        endorsements: ["Libertarian Party of Illinois"],
        issues: {
          assessmentBurden: "Calls for slashing Cook County's $9.2B budget, repealing the County sweetened-beverage/sales tax legacy hikes, and capping residential property assessments at 2% annually.",
          transitMma: "Opposes the $1.5B NITA transit tax package and advocates privatizing or de-monopolizing suburban bus and commuter routes.",
          leadWaterFlood: "Argues water infrastructure funds should go directly to pipe replacement without politically connected contractor markups.",
          migrantBudgets: "Demands ending all Cook County taxpayer subsidies for migrant shelters and non-citizen healthcare at Stroger Hospital.",
          dataCenterZoning: "Opposes selective Class 6b/7 corporate tax abatements in favor of across-the-board commercial tax cuts.",
          solarWindSiting: "Supports property rights and ending green energy subsidies.",
          localPublicSafety: "Supports ending the war on drugs while prioritizing violent crime and property-theft prosecution."
        }
      }
    ]
  },
  {
    id: "cook-assessor",
    level: "local",
    sublevel: "Cook County Executive",
    office: "Cook County Assessor (Marquee 2026 Primary Upset)",
    districtCode: "COOK-ASSESSOR",
    districtName: "Cook County (Overhauls Assessments for 1.8 Million Property Parcels)",
    region: "Chicago & Suburban Cook County",
    counties: ["Cook"],
    cities: ["All of Chicago", "All Cook County Suburbs"],
    pvi: "D+25",
    rating: "Safe Democratic (Pat Hynes Defeated Incumbent Fritz Kaegi 52-48 in Primary)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Fritz Kaegi (D - Defeated in March 17, 2026 Primary by Pat Hynes)",
    primarySummary: "In the biggest local upset of the March 17, 2026 primary, Lyons Township Assessor Patrick 'Pat' Hynes (D) defeated two-term incumbent Cook County Assessor Fritz Kaegi 52.4% to 47.6%. Hynes united the Cook County Democratic Party, building trades, and commercial real estate/business groups angry that Kaegi's commercial reductions and Tyler Technologies software delays caused South and West Side homeowner bills to skyrocket up to 133%. Hynes faces Libertarian Nico Tsatsoulis in November.",
    candidates: [
      {
        id: "pat-hynes",
        name: "Patrick 'Pat' Hynes",
        party: "Democrat",
        role: "Democratic Nominee for Cook County Assessor; Lyons Township Assessor (2009-present) & Certified Illinois Assessment Official",
        hometown: "Western Springs (Cook County), IL",
        incumbentStatus: "Democratic Nominee (Defeated Incumbent in Primary)",
        photoInitials: "PH",
        fecRaised: "$3,420,000",
        fecCashOnHand: "$690,000",
        pacPolicy: "Backed by Cook County Dem Party, IUOE Local 150, CFL, Building Trades & NBOA/Realtors",
        pacSummary: "Unseated incumbent Fritz Kaegi with a $3.4M war chest backed by the Cook County Democratic Party, IUOE Local 150, Chicago Federation of Labor, Plumbers Local 130, Neighborhood Building Owners Alliance (NBOA), and Illinois Realtors RPAC.",
        pacs: [
          { name: "IUOE Local 150, Plumbers Local 130, LIUNA & IBEW", type: "Labor PAC", amount: "$1,150,000+", stance: "Supporting" },
          { name: "Illinois Realtors RPAC & Neighborhood Building Owners Alliance (NBOA)", type: "Trade PAC", amount: "$780,000+", stance: "Supporting" },
          { name: "Cook County Democratic Party & Ward/Township Committeemen", type: "Party Committee", amount: "$650,000+", stance: "Supporting" },
          { name: "SEIU & CTU PAC (Backed Kaegi in Primary)", type: "Labor PAC", amount: "$950,000+ in Primary", stance: "Opposing" }
        ],
        endorsements: ["Cook County Democratic Party", "Toni Preckwinkle", "Chicago Federation of Labor", "IUOE Local 150", "Illinois Realtors", "NBOA"],
        issues: {
          assessmentBurden: "Pledges to end the wild assessment swings and Board of Review clashes that shifted hundreds of millions in property taxes onto South/West Side and suburban homeowners and multi-family renters; promises transparent valuation models and fixing the broken Tyler Technologies mainframe migration.",
          transitMma: "Supports accurate transit-oriented development assessments around CTA and Metra stations without punishing small neighborhood storefronts.",
          leadWaterFlood: "Supports disaster and flood-zone assessment relief for homeowners impacted by basement flooding.",
          migrantBudgets: "Focuses strictly on timely tax bill issuance so municipalities, libraries, and school districts are not forced to pay millions in short-term bridge-loan interest.",
          dataCenterZoning: "Promises predictable, transparent industrial and data center assessments that attract union construction jobs without shifting the tax burden onto homeowners.",
          solarWindSiting: "Supports green-building assessment clarity.",
          localPublicSafety: "Supports disabled veteran, senior citizen freeze, and fallen first-responder homestead exemption automation."
        }
      },
      {
        id: "nico-tsatsoulis",
        name: "Nico Tsatsoulis",
        party: "Libertarian",
        role: "Real Estate Broker & Libertarian Nominee for Cook County Assessor",
        hometown: "Chicago, IL",
        incumbentStatus: "Challenger",
        photoInitials: "NT",
        fecRaised: "$19,000",
        fecCashOnHand: "$8,000",
        pacPolicy: "No Corporate or Union PACs",
        pacSummary: "Self-funded and grassroots Libertarian campaign.",
        pacs: [
          { name: "Libertarian Party of Illinois", type: "Party Committee", amount: "Grassroots", stance: "Supporting" }
        ],
        endorsements: ["Libertarian Party of Illinois"],
        issues: {
          assessmentBurden: "Calls for abolishingCook County's split classification system (10% residential vs. 25% commercial) and capping all assessment increases until properties are sold (California Prop 13 model).",
          transitMma: "Opposes transit tax hikes.",
          leadWaterFlood: "Supports tax credits for private homeowners who replace lead service lines.",
          migrantBudgets: "Opposes County property tax levies funding non-core municipal services.",
          dataCenterZoning: "Opposes politically brokered property tax breaks.",
          solarWindSiting: "Supports free-market property rights.",
          localPublicSafety: "Supports expanding homestead exemptions for all homeowners."
        }
      }
    ]
  },
  {
    id: "cook-sheriff-clerk-treasurer",
    level: "local",
    sublevel: "Cook County Executive",
    office: "Cook County Sheriff, County Clerk & County Treasurer (2026 Countywide Slate)",
    districtCode: "COOK-EXEC-SLATE",
    districtName: "Cook County Sheriff (Tom Dart), Clerk (Monica Gordon) & Treasurer (Maria Pappas)",
    region: "Chicago & Suburban Cook County",
    counties: ["Cook"],
    cities: ["All of Chicago", "All Cook County Suburbs"],
    pvi: "D+25",
    rating: "Safe Democratic",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Sheriff Tom Dart (D), Clerk Monica Gordon (D) & Treasurer Maria Pappas (D)",
    primarySummary: "Sheriff Tom Dart (D, in office since 2006), Clerk Monica Gordon (D, who won a special election in 2024 after Karen Yarbrough's passing), and Treasurer Maria Pappas (D, in office since 1998) all won renomination in March 2026; Gordon faces Independent Justin Tucker in November.",
    candidates: [
      {
        id: "tom-dart",
        name: "Thomas 'Tom' Dart",
        party: "Democrat",
        role: "Cook County Sheriff (2006-present); Former State Representative & Prosecutor",
        hometown: "Chicago (Beverly / 19th Ward), IL",
        incumbentStatus: "Incumbent (Sheriff)",
        photoInitials: "TD",
        fecRaised: "$1,850,000",
        fecCashOnHand: "$1,320,000",
        pacPolicy: "Backed by Building Trades, CFL & Cook County Democratic Party",
        pacSummary: "Supported by IUOE Local 150, LIUNA, IBEW, Plumbers Local 130, and Cook County Democrats.",
        pacs: [
          { name: "IUOE Local 150, LIUNA, IBEW & CFL", type: "Labor PAC", amount: "$480,000+", stance: "Supporting" }
        ],
        endorsements: ["Cook County Democratic Party", "Chicago Federation of Labor", "G-PAC"],
        issues: {
          assessmentBurden: "Provides foreclosure and eviction mediation notices to vulnerable homeowners.",
          transitMma: "Deploys Cook County Sheriff transit detail units onto CTA Red and Blue Line trains to combat transit crime.",
          leadWaterFlood: "Oversees Cook County emergency management coordination.",
          migrantBudgets: "Manages Cook County Jail intake and mental health treatment beds.",
          dataCenterZoning: "N/A - Law Enforcement Office.",
          solarWindSiting: "Operates urban farming and green vocational programs at Cook County Jail.",
          localPublicSafety: "Nationally recognized for mental health reforms at Cook County Jail (the largest mental health facility in the U.S.), tracking illegal gun switches, carjacking task forces, and transferring electronic monitoring oversight to the Chief Judge's office."
        }
      },
      {
        id: "monica-gordon",
        name: "Monica Gordon",
        party: "Democrat",
        role: "Cook County Clerk (2024-present) & Former Cook County Commissioner (5th Dist.)",
        hometown: "Chicago Heights / Flossmoor (South Suburban Cook), IL",
        incumbentStatus: "Incumbent (County Clerk)",
        photoInitials: "MG",
        fecRaised: "$980,000",
        fecCashOnHand: "$540,000",
        pacPolicy: "Backed by Cook County Dem Party, SEIU, CFL & Teachers",
        pacSummary: "Supported by Cook County Democratic Party, SEIU, Chicago Federation of Labor, IFT, IEA, and Personal PAC.",
        pacs: [
          { name: "Cook County Democratic Party, SEIU & CFL", type: "Labor PAC", amount: "$420,000+", stance: "Supporting" }
        ],
        endorsements: ["Cook County Democratic Party", "SEIU", "Chicago Federation of Labor", "Personal PAC"],
        issues: {
          assessmentBurden: "Calculates tax rates for 1,400+ taxing bodies and reformed the Delinquent Tax Scavenger Sale to prevent predatory hedge funds from seizing South Suburban homes over unpaid tax bills.",
          transitMma: "Supports accessible early voting sites near Metra and Pace transit hubs.",
          leadWaterFlood: "Modernizing vital records and municipal clerk coordination.",
          migrantBudgets: "Focuses on multilingual voter access and timely tax extension calculations.",
          dataCenterZoning: "Maintains TIF (Tax Increment Financing) district transparency reports across Cook County.",
          solarWindSiting: "Digitizing Clerk records to cut paper waste.",
          localPublicSafety: "Invests in election cybersecurity, paper-ballot audit trails, and poll-worker safety across Suburban Cook County."
        }
      },
      {
        id: "maria-pappas",
        name: "Maria Pappas",
        party: "Democrat",
        role: "Cook County Treasurer (1998-present); Attorney & Psychologist",
        hometown: "Chicago (Gold Coast), IL",
        incumbentStatus: "Incumbent (County Treasurer)",
        photoInitials: "MP",
        fecRaised: "$1,450,000",
        fecCashOnHand: "$1,120,000",
        pacPolicy: "Civic, Labor & Business Support",
        pacSummary: "Supported by Cook County Democratic Party, labor unions, and civic business leaders.",
        pacs: [
          { name: "Cook County Democratic Party & Labor PACs", type: "Party Committee", amount: "$350,000+", stance: "Supporting" }
        ],
        endorsements: ["Cook County Democratic Party", "Chicago Federation of Labor"],
        issues: {
          assessmentBurden: "Publishes the annual 'Pappas Study' exposing how commercial assessment reductions and TIF districts shifted $1B+ onto Black and Latino homeowners on the South and West Sides; returned over $500M+ in automatic property tax overpayments.",
          transitMma: "Provides transparent TIF and taxing-district debt breakdowns on every homeowner's tax bill.",
          leadWaterFlood: "Highlights municipal water and sewer debt loads on her Black and Latino Debt Study portal.",
          migrantBudgets: "Pushed for modernizing the County's decades-old property tax computer system so Second Installment tax bills are never delayed by 5 months again.",
          dataCenterZoning: "Exposes TIF district surpluses across Chicago and suburban Cook County.",
          solarWindSiting: "Promotes paperless e-billing at cookcountytreasurer.com.",
          localPublicSafety: "Protects seniors from losing their homes in the Annual Tax Sale through automatic exemption checks."
        }
      }
    ]
  },
  {
    id: "cook-board-review-2",
    level: "local",
    sublevel: "Cook County Board of Review",
    office: "Cook County Board of Review - 2nd District & Countywide Overview",
    districtCode: "COOK-BOR",
    districtName: "Cook County Board of Review (Dist. 1 George Cardenas, Dist. 2 Liz Nicholson, Dist. 3 Larry Rogers Jr.)",
    region: "Chicago & Suburban Cook County",
    counties: ["Cook"],
    cities: ["Chicago - North Side", "Chicago - Lakeview", "Chicago - Lincoln Park", "Evanston", "Skokie", "Niles", "Des Plaines", "All of Cook County"],
    pvi: "D+28",
    rating: "Safe Democratic (Liz Nicholson Unseated Incumbent Samantha Steele in Primary)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Samantha Steele (D - Defeated in March 17, 2026 Primary by Elizabeth 'Liz' Nicholson)",
    primarySummary: "On the 3-member Cook County Board of Review (which hears 200,000+ property tax appeals a year), real estate tax attorney Elizabeth 'Liz' Nicholson (D) unseated controversial Dist. 2 incumbent Samantha Steele 60% to 40% in the March 2026 primary, joining Dist. 1 Commissioner George Cardenas (D) and Dist. 3 Commissioner Larry Rogers Jr. (D).",
    candidates: [
      {
        id: "liz-nicholson",
        name: "Elizabeth 'Liz' Nicholson",
        party: "Democrat",
        role: "Democratic Nominee, Cook County Board of Review (2nd Dist.) & Property Tax Appeal Attorney",
        hometown: "Chicago (North Side), IL",
        incumbentStatus: "Democratic Nominee (Defeated Incumbent in Primary)",
        photoInitials: "LN",
        fecRaised: "$1,120,000",
        fecCashOnHand: "$240,000",
        pacPolicy: "Backed by Cook County Dem Party, IUOE Local 150, CFL, Realtors & NBOA",
        pacSummary: "Backed by the same labor-real-estate-party coalition that backed Pat Hynes: Cook County Democratic Party, IUOE Local 150, CFL, NBOA, and Illinois Realtors.",
        pacs: [
          { name: "IUOE Local 150, CFL & Building Trades", type: "Labor PAC", amount: "$450,000+", stance: "Supporting" },
          { name: "Illinois Realtors RPAC & NBOA", type: "Trade PAC", amount: "$380,000+", stance: "Supporting" }
        ],
        endorsements: ["Cook County Democratic Party", "Chicago Federation of Labor", "IUOE Local 150", "Illinois Realtors"],
        issues: {
          assessmentBurden: "Campaigns on restoring predictability, data sharing with the Assessor, and ending the computer deadlocks between the Board of Review and Assessor's office that delayed Cook County tax bills.",
          transitMma: "Supports fair appeals for transit-corridor small businesses and apartment buildings so landlords do not pass 40% tax hikes onto renters.",
          leadWaterFlood: "Supports valuation relief for flood-damaged properties.",
          migrantBudgets: "Prioritizes on-time certification of the tax rolls so schools and towns receive funding on schedule.",
          dataCenterZoning: "Supports consistent, transparent industrial appeal standards.",
          solarWindSiting: "Supports fair green-building valuation.",
          localPublicSafety: "Simplifies homeowner appeal filings for seniors and working families."
        }
      }
    ]
  },
  {
    id: "cook-comm-17",
    level: "local",
    sublevel: "Cook County Board of Commissioners",
    office: "Cook County Commissioner - 17th District (Open Seat Battleground + Primary Upsets)",
    districtCode: "COOK-17",
    districtName: "17th District (Orland Park, Tinley Park, Des Plaines, Park Ridge, La Grange, Western Springs & Palos) + Dist. 10 & 16 Shifts",
    region: "Suburban Cook & Chicago",
    counties: ["Cook"],
    cities: ["Orland Park", "Tinley Park", "Palos Heights", "Palos Park", "La Grange", "Western Springs", "Hinsdale", "Brookfield", "Des Plaines", "Park Ridge", "Chicago - Lakeview", "Chicago - Little Village"],
    pvi: "D+2",
    rating: "Toss-Up (Open GOP-Held Seat: Elyse Hoffenberg vs. Former Commissioner Liz Gorman)",
    isOpenSeat: true,
    isBattleground: true,
    incumbent: "Sean Morrison (R - Last GOP Commissioner in Cook County, Retiring)",
    primarySummary: "With Sean Morrison (R, the lone Republican on the 17-member Cook County Board) retiring, Democrat Elyse Hoffenberg faces former GOP Commissioner Elizabeth 'Liz' Doody Gorman (R) in a marquee battle for the 17th District. Meanwhile, in the March 2026 Democratic primaries, urban planner Drake Warren unseated Dist. 10 Commissioner Bridget Gainer (North Lakefront) and CTU-backed teacher Miranda Hernandez unseated Dist. 16 Commissioner Frank Aguilar (Cicero/Berwyn/West Side).",
    candidates: [
      {
        id: "elyse-hoffenberg",
        name: "Elyse Hoffenberg",
        party: "Democrat",
        role: "Democratic Nominee for Cook County Commissioner (17th Dist.) & Municipal/Public Finance Advisor",
        hometown: "Western Springs / Lyons Township, IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "EH",
        fecRaised: "$840,000",
        fecCashOnHand: "$580,000",
        pacPolicy: "Backed by Toni Preckwinkle, Cook County Dems, SEIU, IUOE Local 150 & Personal PAC",
        pacSummary: "Top Cook County Democratic pickup target to sweep all 17 seats on the County Board; backed by President Preckwinkle, SEIU, IUOE Local 150, CFL, and Personal PAC.",
        pacs: [
          { name: "Cook County Democratic Party & Preckwinkle PAC", type: "Party Committee", amount: "$380,000+", stance: "Supporting" },
          { name: "SEIU, IUOE Local 150, LIUNA & Personal PAC", type: "Labor PAC", amount: "$290,000+", stance: "Supporting" }
        ],
        endorsements: ["Cook County Democratic Party", "Toni Preckwinkle", "SEIU", "IUOE Local 150", "Personal PAC"],
        issues: {
          assessmentBurden: "Public finance expert who pledges to modernize Cook County property tax software, protect suburban homeowners from commercial tax shifts, and keep the County property tax levy flat.",
          transitMma: "Supports Metra BNSF, Rock Island, and UP-NW commuter rail reliability and suburban Pace connections.",
          leadWaterFlood: "Champions MWRD and County infrastructure grants to replace lead pipes and stop Des Plaines River / Southwest Suburban flooding.",
          migrantBudgets: "Supports rigorous fiscal oversight of County contracts and balanced budgets without new taxes.",
          dataCenterZoning: "Supports responsible suburban economic development and Forest Preserve trail expansion.",
          solarWindSiting: "Supports Cook County Forest Preserve conservation and clean energy.",
          localPublicSafety: "Supports suburban police cross-jurisdictional task forces, Cook County mental health crisis response, and gun safety."
        }
      },
      {
        id: "liz-doody-gorman",
        name: "Elizabeth 'Liz' Doody Gorman",
        party: "Republican",
        role: "Former Cook County Commissioner (17th Dist., 2002-2015) & Orland Township Republican Leader",
        hometown: "Orland Park (Cook County), IL",
        incumbentStatus: "Open Seat Nominee (Former Commissioner)",
        photoInitials: "LG",
        fecRaised: "$620,000",
        fecCashOnHand: "$410,000",
        pacPolicy: "Backed by Cook County GOP, Retiring Comm. Sean Morrison, FOP & Business PACs",
        pacSummary: "Backed by retiring GOP Commissioner Sean Morrison, Orland/Palos/Maine Township GOP organizations, Fraternal Order of Police, and suburban business owners seeking to keep a Republican watchdog voice on the 17-member County Board.",
        pacs: [
          { name: "Citizens for Sean Morrison & Cook County GOP", type: "Party Committee", amount: "$340,000+", stance: "Supporting" },
          { name: "FOP & Suburban Business PACs", type: "Trade PAC", amount: "$160,000+", stance: "Supporting" }
        ],
        endorsements: ["Comm. Sean Morrison", "Cook County GOP", "Fraternal Order of Police"],
        issues: {
          assessmentBurden: "Points to her record repealing the Stroger sales tax hike as Commissioner; campaigns on stopping one-party Democratic tax-and-spend rule on the Cook County Board.",
          transitMma: "Opposes the $1.5B NITA transit tax package and demands suburban taxpayer protections.",
          leadWaterFlood: "Supports suburban road and flood relief.",
          migrantBudgets: "Campaigns strongly against Cook County spending hundreds of millions on migrant healthcare and shelters.",
          dataCenterZoning: "Supports Class 6b/7 business tax incentives to stop Cook County companies from fleeing to Will and DuPage counties or Indiana.",
          solarWindSiting: "Opposes green building mandates that raise construction costs.",
          localPublicSafety: "Calls for repealing cashless bail under the SAFE-T Act and increasing funding for the Cook County Sheriff's police and State's Attorney prosecutors."
        }
      },
      {
        id: "drake-warren-miranda-hernandez",
        name: "Drake Warren (Dist. 10) & Miranda Hernandez (Dist. 16)",
        party: "Democrat",
        role: "2026 Democratic Primary Upset Winners: Drake Warren (Defeated Bridget Gainer in Dist. 10) & Miranda Hernandez (Defeated Frank Aguilar in Dist. 16)",
        hometown: "Chicago (Lakeview / Dist. 10) & Cicero/Berwyn (Dist. 16), IL",
        incumbentStatus: "Democratic Nominees (Defeated Incumbents in Primary)",
        photoInitials: "WH",
        fecRaised: "$910,000 (Combined)",
        fecCashOnHand: "$340,000",
        pacPolicy: "Backed by CTU, SEIU, Abundant Housing IL & Progressive Coalitions",
        pacSummary: "Represent a major progressive and transit/housing-focused shift on the Cook County Board: Drake Warren won Dist. 10 (Lakeview/Lincoln Park/Uptown) with Abundant Housing and transit advocate backing; high school teacher Miranda Hernandez won Dist. 16 (Cicero/Berwyn/Little Village/Melrose Park) with heavy CTU, SEIU, and Chuy Garcia organization support.",
        pacs: [
          { name: "Chicago Teachers Union (CTU) & SEIU Local 73", type: "Labor PAC", amount: "$520,000+", stance: "Supporting" },
          { name: "United Working Families & Abundant Housing Advocates", type: "Ideological PAC", amount: "$210,000+", stance: "Supporting" }
        ],
        endorsements: ["Chicago Teachers Union (CTU)", "SEIU Local 73", "United Working Families", "Abundant Housing Illinois"],
        issues: {
          assessmentBurden: "Demand progressive property tax relief for working-class homeowners and renters in Cicero, Berwyn, and Chicago while ensuring wealthy corporate downtown landlords pay their fair share.",
          transitMma: "Staunch champions of frequent CTA/Pace bus rapid transit, pedestrian safety, and transit-oriented affordable housing.",
          leadWaterFlood: "Prioritize emergency lead water line replacement and basement flood mitigation in Cicero, Berwyn, and West Cook.",
          migrantBudgets: "Support Cook County Health clinics, immigrant legal defense funds, and safety-net hospital investment.",
          dataCenterZoning: "Call for strict environmental justice reviews on industrial trucking corridors in West Cook.",
          solarWindSiting: "Support 100% renewable energy for Cook County buildings and Forest Preserve expansion.",
          localPublicSafety: "Support the SAFE-T Act, non-police mental health crisis response, and restorative justice."
        }
      }
    ]
  },

  // ================= COLLAR COUNTIES (DUPAGE, LAKE, WILL, KANE & MCHENRY) =================
  {
    id: "dupage-county-2026",
    level: "local",
    sublevel: "Collar County Government",
    office: "DuPage County Board Chair, Sheriff, Clerk & Treasurer (2026 Elections)",
    districtCode: "DUPAGE-2026",
    districtName: "DuPage County (Naperville, Wheaton, Downers Grove, Elmhurst, Lombard, Glen Ellyn, Carol Stream & Oak Brook - 930k Residents)",
    region: "Collar Counties (DuPage County)",
    counties: ["DuPage"],
    cities: ["Naperville", "Wheaton", "Downers Grove", "Elmhurst", "Lombard", "Glen Ellyn", "Carol Stream", "Bloomingdale", "Roselle", "Bartlett", "Westmont", "Hinsdale", "Burr Ridge", "Oak Brook", "Lisle", "Woodridge", "Darien", "Villa Park", "Addison", "Bensenville", "Warrenville", "West Chicago", "Winfield", "Aurora"],
    pvi: "D+9",
    rating: "Likely Democratic (Chair Deb Conroy vs. Gary Grasso; Open Sheriff & Clerk Races)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Board Chair Deb Conroy (D) | Retiring GOP Sheriff James Mendrick | Treasurer Gwen Henry (R)",
    primarySummary: "Once the citadel of Illinois Republicanism, DuPage County sees a marquee 2026 County Board Chair contest between incumbent Deb Conroy (D, DuPage's first female and Democratic Chair) and former Burr Ridge Mayor Gary Grasso (R). In open-seat countywide races, Democrat Peter Joseph Coolidge faces Republican Sean T. Noonan to succeed retiring Sheriff James Mendrick (R); Paula Deacon Garcia (D, who unseated incumbent Clerk Jean Kaczmarek in the March 2026 primary over auditing/billing disputes) faces Patricia Kladis-Schiappa (R); and Democrat Yeena Yoo challenges veteran GOP Treasurer Gwen Henry (R).",
    candidates: [
      {
        id: "deb-conroy-dupage-dems",
        name: "Deb Conroy (Chair) & DuPage Democratic Slate (Coolidge, Garcia, Yoo)",
        party: "Democrat",
        role: "DuPage County Board Chair Deb Conroy (2022-present); Sheriff Nominee Peter Coolidge; Clerk Nominee Paula Deacon Garcia; Treasurer Nominee Yeena Yoo",
        hometown: "Villa Park / Wheaton / Naperville (DuPage County), IL",
        incumbentStatus: "Incumbent Chair & Democratic Countywide Slate",
        photoInitials: "DC",
        fecRaised: "$1,950,000 (Combined Slate)",
        fecCashOnHand: "$1,280,000",
        pacPolicy: "Backed by IUOE Local 150, DuPage Building Trades, IEA, IFT & Personal PAC",
        pacSummary: "Chair Deb Conroy has forged a powerful alliance with IUOE Local 150, IBEW, LIUNA, DuPage Federation of Labor, IEA, IFT, and Personal PAC.",
        pacs: [
          { name: "IUOE Local 150, IBEW, LIUNA & DuPage Building Trades", type: "Labor PAC", amount: "$680,000+", stance: "Supporting" },
          { name: "IEA/IPACE, IFT, SEIU & Personal PAC", type: "Ideological PAC", amount: "$490,000+", stance: "Supporting" }
        ],
        endorsements: ["IUOE Local 150", "Chicago/DuPage Building Trades", "Personal PAC", "IEA", "IFT", "Sierra Club"],
        issues: {
          assessmentBurden: "Chair Conroy highlights balanced DuPage County budgets, AAA bond ratings, paying off county debt early, and keeping the DuPage County portion of property tax bills under 2% of the total bill.",
          transitMma: "Secured increased suburban DuPage representation and Pace/Metra BNSF & UP-W funding guarantees during NITA transit negotiations.",
          leadWaterFlood: "Invested tens of millions in DuPage County stormwater management, East Branch DuPage River flood control, and Lake Michigan water access.",
          migrantBudgets: "Funded a $5M+ DuPage food pantry and community crisis relief network while maintaining strict county fiscal reserves; Paula Deacon Garcia pledges full Clerk financial transparency after unseating Jean Kaczmarek.",
          dataCenterZoning: "Enforces noise, power, and stormwater buffer standards for new data centers along the I-88 and Route 83 corridors.",
          solarWindSiting: "Expanded solar arrays on the DuPage County campus in Wheaton and EV fleet infrastructure.",
          localPublicSafety: "Conroy spearheaded the new DuPage County Crisis Recovery Center (mental health & substance-use triage center in Wheaton so police don't have to take patients to ERs or jail); Sheriff nominee Peter Coolidge pledges full compliance with Illinois gun safety laws (unlike outgoing Sheriff Mendrick)."
        }
      },
      {
        id: "gary-grasso-dupage-gop",
        name: "Gary Grasso (Chair) & DuPage Republican Slate (Noonan, Kladis-Schiappa, Gwen Henry)",
        party: "Republican",
        role: "Former Burr Ridge Mayor & Former DuPage County Board Member Gary Grasso (Chair); Sean Noonan (Sheriff); Patricia Kladis-Schiappa (Clerk); Incumbent Treasurer Gwen Henry",
        hometown: "Burr Ridge / Wheaton (DuPage County), IL",
        incumbentStatus: "Challenger Chair & Incumbent GOP Treasurer Gwen Henry",
        photoInitials: "GG",
        fecRaised: "$1,320,000 (Combined Slate)",
        fecCashOnHand: "$840,000",
        pacPolicy: "Backed by DuPage GOP, FOP, Realtors RPAC & Suburban Business PACs",
        pacSummary: "Backed by the DuPage County Republican Party, Fraternal Order of Police lodges, Illinois Realtors RPAC (supporting Treasurer Gwen Henry), and suburban business leaders.",
        pacs: [
          { name: "DuPage County GOP & Suburban Business Donors", type: "Party Committee", amount: "$620,000+", stance: "Supporting" },
          { name: "Fraternal Order of Police (FOP) & Realtors RPAC", type: "Trade PAC", amount: "$310,000+", stance: "Supporting" }
        ],
        endorsements: ["DuPage County GOP", "Fraternal Order of Police", "Retiring Sheriff James Mendrick"],
        issues: {
          assessmentBurden: "Grasso and incumbent Treasurer Gwen Henry campaign on freezing the DuPage County tax levy, cutting county spending, and providing fiscal checks and balances against all-Democratic rule in Wheaton.",
          transitMma: "Oppose the $1.5B NITA regional transit tax package, arguing DuPage commuters are being taxed to bail out Chicago's CTA.",
          leadWaterFlood: "Support core road, bridge, and stormwater infrastructure without green mandates.",
          migrantBudgets: "Point to the Clerk's office billing scandals under Democrat Jean Kaczmarek as proof that one-party Democratic control in DuPage lacks fiscal oversight.",
          dataCenterZoning: "Support pro-business commercial development along I-88 to keep Oak Brook and Downers Grove corporate headquarters in DuPage.",
          solarWindSiting: "Oppose costly green building mandates.",
          localPublicSafety: "Sheriff nominee Sean Noonan and Grasso campaign on aggressive prosecution of organized retail theft at Oakbrook Center and carjackings along I-290/I-88, and repealing cashless bail under the SAFE-T Act."
        }
      }
    ]
  },
  {
    id: "lake-county-2026",
    level: "local",
    sublevel: "Collar County Government",
    office: "Lake County Board, Sheriff, Clerk & Treasurer (2026 Elections)",
    districtCode: "LAKE-2026",
    districtName: "Lake County (Waukegan, Buffalo Grove, Highland Park, Mundelein, Gurnee, Lake Zurich, Libertyville, Deerfield & Round Lake - 710k Residents)",
    region: "Collar Counties (Lake County)",
    counties: ["Lake"],
    cities: ["Waukegan", "Buffalo Grove", "Highland Park", "Deerfield", "Vernon Hills", "Mundelein", "Gurnee", "Libertyville", "Lake Zurich", "Barrington", "Wauconda", "Antioch", "Grayslake", "Round Lake", "Round Lake Beach", "Zion", "North Chicago", "Lake Forest"],
    pvi: "D+11",
    rating: "Likely Democratic (Sandy Hart Runs for Treasurer; Sheriff John Idleburg vs. Roman Buchberger)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Sheriff John Idleburg (D), Clerk Anthony Vega (D) & Outgoing Chair Sandy Hart (D - Running for Treasurer)",
    primarySummary: "Longtime Lake County Board Chair Sandy Hart (D) is running for Lake County Treasurer in 2026 (succeeding Holly Kim, who ran for Comptroller) against Republican David Penaherrera (R). Two-term Sheriff John Idleburg (D) faces Republican Roman Buchberger (R), and Clerk Anthony Vega (D) seeks a full term.",
    candidates: [
      {
        id: "lake-county-dems",
        name: "Sandy Hart (Treasurer), Sheriff John Idleburg & Clerk Anthony Vega",
        party: "Democrat",
        role: "Lake County Board Chair Sandy Hart (Treasurer Nominee); Incumbent Sheriff John Idleburg (2018-present); Incumbent Clerk Anthony Vega",
        hometown: "Lake Bluff / Zion / Waukegan (Lake County), IL",
        incumbentStatus: "Incumbents / Countywide Democratic Slate",
        photoInitials: "SH",
        fecRaised: "$1,420,000 (Combined Slate)",
        fecCashOnHand: "$910,000",
        pacPolicy: "Backed by Lake County Dems, IUOE Local 150, Teachers, SEIU & Gun Safety PACs",
        pacSummary: "Supported by Lake County Democrats, IUOE Local 150, IBEW, IEA, IFT, SEIU, Personal PAC, and G-PAC / Everytown.",
        pacs: [
          { name: "Lake County Democrats, IUOE Local 150 & Building Trades", type: "Labor PAC", amount: "$520,000+", stance: "Supporting" },
          { name: "Personal PAC, G-PAC, IEA & IFT", type: "Ideological PAC", amount: "$380,000+", stance: "Supporting" }
        ],
        endorsements: ["Lake County Democrats", "IUOE Local 150", "Personal PAC", "G-PAC", "Sierra Club"],
        issues: {
          assessmentBurden: "Sandy Hart highlights Lake County's AAA bond rating, balanced budgets, and property tax relief tools while pushing for state EBF equity for high-tax Lake County school districts.",
          transitMma: "Support Metra UP-N, MD-N, and NCS commuter rail and Pace Paratransit expansion across Lake County.",
          leadWaterFlood: "Prioritize Des Plaines River and Chain O'Lakes flood mitigation, Central Lake County JAWA water main expansion, and Waukegan lakefront coal-ash cleanup.",
          migrantBudgets: "Clerk Anthony Vega expanded multilingual voter registration and transparent online tax/vital record portals.",
          dataCenterZoning: "Support clean tech and pharmaceutical/biotech job growth (AbbVie, Abbott, Horizon corridor) with strict environmental safeguards.",
          solarWindSiting: "Protected thousands of acres in the Lake County Forest Preserves and committed County facilities to 100% clean energy.",
          localPublicSafety: "Following the 2022 Highland Park parade shooting, Sheriff John Idleburg and Sandy Hart championed Illinois's assault weapons ban, red-flag firearm restraining orders, and 911 mental health crisis co-responder teams."
        }
      },
      {
        id: "lake-county-gop",
        name: "Roman Buchberger (Sheriff) & David Penaherrera (Treasurer)",
        party: "Republican",
        role: "Law Enforcement Veteran Roman Buchberger (Sheriff Nominee) & Financial Professional David Penaherrera (Treasurer Nominee)",
        hometown: "Lake County, IL",
        incumbentStatus: "Challengers",
        photoInitials: "RB",
        fecRaised: "$580,000 (Combined)",
        fecCashOnHand: "$340,000",
        pacPolicy: "Backed by Lake County GOP, Police Unions & Business PACs",
        pacSummary: "Supported by Lake County Republican Central Committee, FOP lodges, and suburban taxpayers' associations.",
        pacs: [
          { name: "Lake County GOP & Law Enforcement PACs", type: "Party Committee", amount: "$340,000+", stance: "Supporting" }
        ],
        endorsements: ["Lake County Republican Party", "Local Law Enforcement Groups"],
        issues: {
          assessmentBurden: "Campaign on Lake County having some of the highest median property tax bills in the United States ($9,000+ average) and demand County levy cuts.",
          transitMma: "Oppose NITA regional transit tax hikes on Lake County drivers and consumers.",
          leadWaterFlood: "Support Fox River/Chain O'Lakes dredging and flood control.",
          migrantBudgets: "Demand strict auditing of County ARPA funds and opposing sanctuary policies.",
          dataCenterZoning: "Support business tax relief to stop corporate employers from moving across the border to Kenosha County, Wisconsin.",
          solarWindSiting: "Protect rural and unincorporated property rights.",
          localPublicSafety: "Buchberger campaigns on reversing Sheriff Idleburg's progressive jail policies, repealing the SAFE-T Act's cashless bail rules, and boosting patrol deputies in unincorporated Lake County."
        }
      }
    ]
  },
  {
    id: "will-county-2026",
    level: "local",
    sublevel: "Collar County Government",
    office: "Will County Sheriff, Clerk, Treasurer & County Board (2026 Battleground)",
    districtCode: "WILL-2026",
    districtName: "Will County (Joliet, Bolingbrook, Plainfield, Romeoville, New Lenox, Mokena, Frankfort, Lockport, Homer Glen & Naperville - 700k Residents)",
    region: "Collar Counties (Will County)",
    counties: ["Will"],
    cities: ["Joliet", "Bolingbrook", "Plainfield", "Romeoville", "Lockport", "New Lenox", "Frankfort", "Mokena", "Homer Glen", "Crest Hill", "Shorewood", "Channahon", "Manhattan", "Peotone", "University Park", "Monee", "Naperville", "Orland Park", "Tinley Park"],
    pvi: "D+3",
    rating: "Toss-Up (Split 11D-11R County Board + Open Sheriff Race)",
    isOpenSeat: true,
    isBattleground: true,
    incumbent: "County Exec Jennifer Bertino-Tarrant (D) | Retiring Sheriff Mike Kelley (D) | Appointed GOP Clerk Annette Parker | Treasurer Tim Brophy (D)",
    primarySummary: "Will County is the most politically purple collar county in Illinois (its County Board is tied 11D-11R). With longtime Sheriff Mike Kelley (D) retiring, Democrat Patrick Jones faces Republican Jim Reilly in a toss-up open race for Sheriff. Appointed GOP Clerk Annette Parker (R) defends her office against Democrat Michelle Stiff (D), and incumbent Democratic Treasurer Tim Brophy (D) faces Republican Carmen Maurella III (R).",
    candidates: [
      {
        id: "will-county-dems",
        name: "Patrick Jones (Sheriff), Michelle Stiff (Clerk) & Tim Brophy (Treasurer)",
        party: "Democrat",
        role: "Law Enforcement Veteran Patrick Jones (Sheriff); Michelle Stiff (Clerk); Incumbent Treasurer Tim Brophy (with County Exec Jennifer Bertino-Tarrant)",
        hometown: "Joliet / Bolingbrook / Plainfield (Will County), IL",
        incumbentStatus: "Incumbent Treasurer & Open-Seat Sheriff/Clerk Nominees",
        photoInitials: "PJ",
        fecRaised: "$1,380,000 (Combined Slate)",
        fecCashOnHand: "$890,000",
        pacPolicy: "Backed by Will County Dems, IUOE Local 150, Building Trades & Teachers",
        pacSummary: "Supported by Will County Democratic Central Committee, IUOE Local 150, IBEW, Teamsters, LIUNA, IEA, and IFT.",
        pacs: [
          { name: "IUOE Local 150, Teamsters, LIUNA & IBEW", type: "Labor PAC", amount: "$540,000+", stance: "Supporting" },
          { name: "Will County Democrats, IEA & IFT", type: "Party Committee", amount: "$420,000+", stance: "Supporting" }
        ],
        endorsements: ["Retiring Sheriff Mike Kelley", "County Exec Jennifer Bertino-Tarrant", "IUOE Local 150", "Teamsters", "IEA", "IFT"],
        issues: {
          assessmentBurden: "Treasurer Tim Brophy modernized Will County tax payment options and works with County Exec Bertino-Tarrant to ensure intermodal logistics developers pay impact fees so homeowners aren't stuck with the road bill.",
          transitMma: "Support I-80 and I-55 reconstruction, Metra Rock Island/Heritage Corridor upgrades, and Pace bus connections to logistics parks.",
          leadWaterFlood: "Support Joliet's regional Lake Michigan water pipeline and Des Plaines/DuPage River flood control.",
          migrantBudgets: "Clerk nominee Michelle Stiff campaigns on expanding early voting locations in fast-growing Plainfield, Bolingbrook, and Joliet.",
          dataCenterZoning: "Call for strict county zoning buffer zones so semi-truck warehouses and hyperscale data centers are kept away from residential subdivisions and schools.",
          solarWindSiting: "Support union-built community solar and renewable natural gas capture at the Prairie View landfill.",
          localPublicSafety: "Sheriff nominee Patrick Jones pledges to continue Sheriff Kelley's opioid-interdiction and high-tech license-plate reader task forces while expanding mental health diversion."
        }
      },
      {
        id: "will-county-gop",
        name: "Jim Reilly (Sheriff), Annette Parker (Clerk) & Carmen Maurella III (Treasurer)",
        party: "Republican",
        role: "Veteran Police Commander Jim Reilly (Sheriff); Incumbent Clerk Annette Parker (R); Carmen Maurella III (Treasurer)",
        hometown: "New Lenox / Frankfort / Homer Glen (Will County), IL",
        incumbentStatus: "Incumbent GOP Clerk & Challenger Slate",
        photoInitials: "JR",
        fecRaised: "$1,290,000 (Combined Slate)",
        fecCashOnHand: "$840,000",
        pacPolicy: "Backed by Will County GOP, FOP, Realtors RPAC & Business PACs",
        pacSummary: "Heavily backed by Will County Republicans (who won countywide races in 2024), Fraternal Order of Police, Realtors RPAC, and Southwest Suburban business owners.",
        pacs: [
          { name: "Will County GOP & Conservative Donors", type: "Party Committee", amount: "$580,000+", stance: "Supporting" },
          { name: "Fraternal Order of Police (FOP) & Realtors RPAC", type: "Trade PAC", amount: "$340,000+", stance: "Supporting" }
        ],
        endorsements: ["Will County Republican Party", "Fraternal Order of Police", "Illinois Realtors RPAC"],
        issues: {
          assessmentBurden: "Campaign on capping Will County property tax levies and cutting County government spending.",
          transitMma: "Strongly oppose the $1.5B NITA transit bailout bill, arguing Will County receives minimal CTA/Metra return for its sales and gas taxes.",
          leadWaterFlood: "Focus County capital funds on widening truck-congested county highways (Laraway Rd, Weber Rd, Gougar Rd, 143rd St).",
          migrantBudgets: "Incumbent Clerk Annette Parker highlights clean voter-roll maintenance and election integrity; slate opposes any sanctuary county policies.",
          dataCenterZoning: "Protect rural townships (Manhattan, Peotone, Monee, Homer Glen) from unwanted high-density industrial rezoning.",
          solarWindSiting: "Support rural township veto power over commercial solar farms on prime Will County farmland.",
          localPublicSafety: "Sheriff nominee Jim Reilly campaigns on cracking down on I-80/I-55 cartel drug trafficking, organized retail theft, and repealing cashless bail under the SAFE-T Act."
        }
      }
    ]
  },
  {
    id: "kane-county-2026",
    level: "local",
    sublevel: "Collar County Government",
    office: "Kane County Sheriff, Clerk & Treasurer (2026 Fox Valley Showdowns)",
    districtCode: "KANE-2026",
    districtName: "Kane County (Aurora, Elgin, St. Charles, Geneva, Batavia, Carpentersville, West Dundee, North Aurora, Montgomery & Algonquin - 515k Residents)",
    region: "Collar Counties (Kane County)",
    counties: ["Kane"],
    cities: ["Aurora", "Elgin", "St. Charles", "Geneva", "Batavia", "Carpentersville", "West Dundee", "East Dundee", "South Elgin", "North Aurora", "Montgomery", "Sugar Grove", "Algonquin", "Hampshire", "Pingree Grove"],
    pvi: "D+7",
    rating: "Toss-Up (Incumbent GOP Clerk Jack Cunningham & Treasurer Chris Lauzen vs. Democratic Challengers; Open Sheriff Race)",
    isOpenSeat: true,
    isBattleground: true,
    incumbent: "Board Chair Corinne Pierog (D) | Retiring Sheriff Ron Hain (D) | Clerk Jack Cunningham (R) | Treasurer Chris Lauzen (R)",
    primarySummary: "With popular two-term Democratic Sheriff Ron Hain retiring, Kane County Undersheriff Amy Johnson (D) faces former Republican Kane County Treasurer/Coroner Rob Russell (R) in an open Sheriff race. Meanwhile, longtime Republican incumbents Clerk Jack Cunningham (R) and Treasurer Chris Lauzen (R, former State Senator and County Board Chair) defend their offices against Democrats Brenda Rodgers (D, Clerk) and Penny Wegman (D, County Auditor running for Treasurer).",
    candidates: [
      {
        id: "kane-county-dems",
        name: "Amy Johnson (Sheriff), Brenda Rodgers (Clerk) & Penny Wegman (Treasurer)",
        party: "Democrat",
        role: "Kane County Undersheriff Amy Johnson (Sheriff); Brenda Rodgers (Clerk); Kane County Auditor Penny Wegman (Treasurer) - with Board Chair Corinne Pierog",
        hometown: "Elgin / Aurora / St. Charles (Kane County), IL",
        incumbentStatus: "Democratic Countywide Slate",
        photoInitials: "AJ",
        fecRaised: "$1,120,000 (Combined Slate)",
        fecCashOnHand: "$740,000",
        pacPolicy: "Backed by Kane County Dems, Retiring Sheriff Ron Hain, IUOE Local 150 & Teachers",
        pacSummary: "Supported by outgoing Sheriff Ron Hain, Board Chair Corinne Pierog, IUOE Local 150, IBEW, IEA, IFT, and Personal PAC.",
        pacs: [
          { name: "Kane County Democrats, IUOE Local 150 & IBEW", type: "Labor PAC", amount: "$480,000+", stance: "Supporting" },
          { name: "IEA, IFT & Personal PAC", type: "Ideological PAC", amount: "$290,000+", stance: "Supporting" }
        ],
        endorsements: ["Retiring Sheriff Ron Hain", "Board Chair Corinne Pierog", "IUOE Local 150", "IEA", "IFT"],
        issues: {
          assessmentBurden: "County Auditor Penny Wegman runs against Treasurer Chris Lauzen on modernizing Kane County's investment returns so interest income funds county operations instead of property tax hikes.",
          transitMma: "Support Metra BNSF (Aurora) and MD-W (Elgin) commuter rail upgrades and Fox Valley Pace bus corridors.",
          leadWaterFlood: "Support Fox River dam removal/environmental restoration and lead water line replacement in older Aurora and Elgin neighborhoods.",
          migrantBudgets: "Clerk candidate Brenda Rodgers pledges modernized election systems and shorter early-voting lines.",
          dataCenterZoning: "Support balanced clean manufacturing and agricultural preservation in western Kane County.",
          solarWindSiting: "SupportKane County's Longmeadow Parkway solar/green corridors and farmland protection.",
          localPublicSafety: "Undersheriff Amy Johnson pledges to continue Sheriff Ron Hain's nationally praised jail addiction-recovery and vocational training model that cut Kane County Jail overdoses and recidivism by over 50%."
        }
      },
      {
        id: "kane-county-gop",
        name: "Rob Russell (Sheriff), Jack Cunningham (Clerk) & Chris Lauzen (Treasurer)",
        party: "Republican",
        role: "Former Coroner Rob Russell (Sheriff); Incumbent Clerk Jack Cunningham (2002-present); Incumbent Treasurer & Former State Sen. Chris Lauzen",
        hometown: "Aurora / Geneva / St. Charles (Kane County), IL",
        incumbentStatus: "Incumbent GOP Clerk & Treasurer + Challenger for Sheriff",
        photoInitials: "CL",
        fecRaised: "$1,050,000 (Combined Slate)",
        fecCashOnHand: "$680,000",
        pacPolicy: "Backed by Kane County GOP, Realtors RPAC & Fox Valley Business Donors",
        pacSummary: "Chris Lauzen and Jack Cunningham are two of the longest-serving Republican officeholders in the suburbs, backed by Kane County GOP, Realtors RPAC, and conservative business donors.",
        pacs: [
          { name: "Citizens for Chris Lauzen, Jack Cunningham & Kane GOP", type: "Party Committee", amount: "$640,000+", stance: "Supporting" }
        ],
        endorsements: ["Kane County Republican Party", "Illinois Realtors RPAC", "NFIB Supporters"],
        issues: {
          assessmentBurden: "Treasurer Chris Lauzen is famous for his multi-year 'Freeze the Levy' crusade on the Kane County Board, opposing any county property tax or sales tax increases.",
          transitMma: "Oppose NITA transit tax increases and celebrated removing the toll from the new Longmeadow Parkway Fox River Bridge.",
          leadWaterFlood: "Support core road and bridge infrastructure without tax hikes.",
          migrantBudgets: "Clerk Jack Cunningham emphasizes voter ID / signature verification and fiscal discipline.",
          dataCenterZoning: "Support private property rights and cutting county permit red tape.",
          solarWindSiting: "Protect western Kane County farmland from state-mandated solar/wind preemption.",
          localPublicSafety: "Rob Russell campaigns on traditional tough-on-crime policing, repealing the SAFE-T Act's cashless bail provisions, and opposing sanctuary state policies."
        }
      }
    ]
  },
  {
    id: "mchenry-county-2026",
    level: "local",
    sublevel: "Collar County Government",
    office: "McHenry County Clerk, Treasurer, Sheriff & County Board (2026 Elections)",
    districtCode: "MCHENRY-2026",
    districtName: "McHenry County (Crystal Lake, Algonquin, McHenry, Woodstock, Huntley, Cary, Marengo & Harvard - 312k Residents)",
    region: "Collar Counties (McHenry County)",
    counties: ["McHenry"],
    cities: ["Crystal Lake", "Algonquin", "McHenry", "Woodstock", "Huntley", "Cary", "Fox River Grove", "Lake in the Hills", "Marengo", "Harvard", "Johnsburg", "Island Lake", "Wonder Lake"],
    pvi: "R+6",
    rating: "Lean Republican (Only GOP-Controlled Collar County)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Board Chair Mike Buehler (R) | Sheriff Robb Tadelman (R) | Clerk Joe Tirio (R) | Treasurer Donna Kurtz (R)",
    primarySummary: "McHenry County is the last Republican-controlled collar county in the Chicago metro area. Incumbent GOP Clerk Joe Tirio (R) faces Democrat Bill McNeese (D); incumbent GOP Treasurer Donna Kurtz (R) faces Democrat Amin Karim (D); and GOP Sheriff Robb Tadelman (R) and Board Chair Mike Buehler (R) lead the Republican ticket.",
    candidates: [
      {
        id: "mchenry-county-gop",
        name: "Robb Tadelman (Sheriff), Joe Tirio (Clerk) & Donna Kurtz (Treasurer)",
        party: "Republican",
        role: "Incumbent Sheriff Robb Tadelman (R); Incumbent Clerk/Recorder Joe Tirio (R); Incumbent Treasurer Donna Kurtz (R) - with Chair Mike Buehler (R)",
        hometown: "Crystal Lake / Woodstock / McHenry, IL",
        incumbentStatus: "Incumbent GOP Countywide Slate",
        photoInitials: "RT",
        fecRaised: "$820,000 (Combined Slate)",
        fecCashOnHand: "$540,000",
        pacPolicy: "Backed by McHenry County GOP, FOP, IUOE Local 150 & Realtors RPAC",
        pacSummary: "Supported by McHenry County Republican Party, Fraternal Order of Police, IUOE Local 150, Realtors RPAC, and Farm Bureau.",
        pacs: [
          { name: "McHenry County GOP, FOP, IUOE Local 150 & Realtors RPAC", type: "Party Committee", amount: "$520,000+", stance: "Supporting" }
        ],
        endorsements: ["McHenry County GOP", "Fraternal Order of Police", "Illinois Realtors RPAC"],
        issues: {
          assessmentBurden: "Highlight that McHenry County has cut or frozen its county property tax levy over the past decade while eliminating county debt.",
          transitMma: "Strongly opposed the NITA transit merger and fought to stop McHenry County sales taxes from being diverted to the CTA.",
          leadWaterFlood: "Protect McHenry County's shallow groundwater aquifers and Fox River/Nippersink Creek watersheds.",
          migrantBudgets: "Clerk Joe Tirio consolidated the Recorder's office into the Clerk's office to save taxpayers $500k+ annually.",
          dataCenterZoning: "Support manufacturing and logistics growth along the Route 47 and I-90 Huntley corridors.",
          solarWindSiting: "Enforce strict county agricultural preservation standards on commercial solar installations.",
          localPublicSafety: "Sheriff Robb Tadelman was one of the lead plaintiffs challenging Illinois's SAFE-T Act and assault weapons ban while expanding the McHenry County Sheriff's regional SWAT and narcotics units."
        }
      },
      {
        id: "mchenry-county-dems",
        name: "Bill McNeese (Clerk) & Amin Karim (Treasurer)",
        party: "Democrat",
        role: "Democratic Nominee for Clerk Bill McNeese & Democratic Nominee for Treasurer Amin Karim",
        hometown: "Crystal Lake / Algonquin (McHenry County), IL",
        incumbentStatus: "Challengers",
        photoInitials: "BM",
        fecRaised: "$390,000 (Combined)",
        fecCashOnHand: "$240,000",
        pacPolicy: "Backed by McHenry County Dems, Teachers & Labor PACs",
        pacSummary: "Supported by Democratic Party of McHenry County, IEA, IFT, and suburban labor councils.",
        pacs: [
          { name: "McHenry County Democrats, IEA & IFT", type: "Party Committee", amount: "$240,000+", stance: "Supporting" }
        ],
        endorsements: ["McHenry County Democratic Party", "IEA", "IFT"],
        issues: {
          assessmentBurden: "Advocate higher state school funding for Crystal Lake D47/D155, Huntley D158, and Woodstock D200 so local school levies don't crush homeowners.",
          transitMma: "Support expanding Metra UP-NW commuter rail frequency to Crystal Lake, Woodstock, and Harvard plus MCRide dial-a-ride transit.",
          leadWaterFlood: "Support county groundwater protection against industrial PFAS contamination.",
          migrantBudgets: "Bill McNeese campaigns on fixing Joe Tirio's primary ballot-printing errors and expanding early voting sites.",
          dataCenterZoning: "Support green jobs and open-space conservation.",
          solarWindSiting: "Support community solar arrays to lower ComEd bills.",
          localPublicSafety: "Support the McHenry County Mental Health Board (708 Board) and co-responder crisis teams."
        }
      }
    ]
  },

  // ================= MAJOR DOWNSTATE COUNTY ELECTIONS (SANGAMON, WINNEBAGO, PEORIA, CHAMPAIGN, MCLEAN, METRO EAST & SOUTHERN IL) =================
  {
    id: "sangamon-county-2026",
    level: "local",
    sublevel: "Downstate County Government",
    office: "Sangamon County Sheriff & County Board (Springfield - Post-Sonya Massey Reform Race)",
    districtCode: "SANGAMON-2026",
    districtName: "Sangamon County (Springfield, Chatham, Rochester, Sherman, Auburn & Riverton - 196k Residents)",
    region: "Central Illinois (Sangamon County)",
    counties: ["Sangamon"],
    cities: ["Springfield", "Chatham", "Rochester", "Sherman", "Auburn", "Riverton", "Jerome", "Leland Grove"],
    pvi: "R+6",
    rating: "Lean Republican (High-Spotlight Sheriff Race: Paula Crouch vs. Marc Bell)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Sheriff Paula Crouch (R - Appointed Sept 2024 after Jack Campbell retired) | Board Chair Andy Van Meter (R) | Clerk Don Gray (R)",
    primarySummary: "Following the July 2024 fatal shooting of Sonya Massey by a Sangamon County deputy and the forced retirement of Sheriff Jack Campbell, appointed GOP Sheriff Paula Crouch (R, retired Springfield Police Commander and first female Sangamon Sheriff) faces retired Illinois State Police Master Sergeant Marc Bell (D, who would be Sangamon's first Black Sheriff) in one of the most closely watched county races in America.",
    candidates: [
      {
        id: "paula-crouch",
        name: "Paula Crouch",
        party: "Republican",
        role: "Sangamon County Sheriff (Appointed Sept 2024-present) & Retired Springfield Police Commander",
        hometown: "Springfield (Sangamon County), IL",
        incumbentStatus: "Incumbent (Appointed)",
        photoInitials: "PC",
        fecRaised: "$420,000",
        fecCashOnHand: "$275,000",
        pacPolicy: "Backed by Sangamon County GOP, Business & Civic Leaders",
        pacSummary: "Supported by Sangamon County Republican Organization, Board Chair Andy Van Meter, and Central Illinois business and law enforcement donors.",
        pacs: [
          { name: "Sangamon County Republican Central Committee", type: "Party Committee", amount: "$240,000+", stance: "Supporting" }
        ],
        endorsements: ["Sangamon County GOP", "Board Chair Andy Van Meter"],
        issues: {
          assessmentBurden: "Works with the Sangamon County Board to keep county property tax rates stable while modernizing the new Sangamon County courthouse/hub.",
          transitMma: "Coordinates traffic and security for the Springfield Rail Improvements Project (10th Street corridor consolidation) and Sangamon Mass Transit District (SMTD).",
          leadWaterFlood: "Supports Lake Springfield watershed protection and emergency management.",
          migrantBudgets: "Maintains balanced Sheriff's department budgets and DOJ consent-agreement compliance.",
          dataCenterZoning: "Supports rural and suburban Sangamon public safety coverage.",
          solarWindSiting: "N/A - Law Enforcement Office.",
          localPublicSafety: "Implemented mandatory pre-hire psychological and full disciplinary-file background checks across all prior agencies, upgraded body-camera review protocols, and partnered with the U.S. Department of Justice and Massey Commission following the Sonya Massey tragedy."
        }
      },
      {
        id: "marc-bell",
        name: "Marc Bell",
        party: "Democrat",
        role: "Retired Illinois State Police Master Sergeant (25-Year Veteran)",
        hometown: "Springfield (Sangamon County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "MB",
        fecRaised: "$380,000",
        fecCashOnHand: "$250,000",
        pacPolicy: "Backed by Sangamon Dems, State Sen. Doris Turner, AFSCME & Civil Rights Coalitions",
        pacSummary: "Backed by Sangamon County Democrats, Sen. Doris Turner, AFSCME Council 31, NAACP leaders, and Springfield labor unions.",
        pacs: [
          { name: "Sangamon County Democrats, AFSCME & Labor PACs", type: "Labor PAC", amount: "$220,000+", stance: "Supporting" }
        ],
        endorsements: ["Sangamon County Democratic Party", "State Sen. Doris Turner", "Springfield Trades & Labor Council"],
        issues: {
          assessmentBurden: "Pledges to end costly civil-rights lawsuit settlements that drain Sangamon County taxpayer funds.",
          transitMma: "Supports community policing along SMTD transit corridors.",
          leadWaterFlood: "Supports transparent county emergency response.",
          migrantBudgets: "Focuses on independent audit and culture change inside the Sheriff's office.",
          dataCenterZoning: "N/A - Law Enforcement Office.",
          solarWindSiting: "N/A - Law Enforcement Office.",
          localPublicSafety: "25-year Illinois State Police veteran who argues true systemic reform requires an outsider not tied to the existing Sangamon GOP courthouse establishment; pledges an independent civilian oversight board, mobile mental-health crisis co-responders on 911 calls, and strict hiring standards."
        }
      }
    ]
  },
  {
    id: "winnebago-peoria-2026",
    level: "local",
    sublevel: "Downstate County Government",
    office: "Winnebago County (Rockford) & Peoria County 2026 Elections",
    districtCode: "NORTH-CENTRAL-2026",
    districtName: "Winnebago County (Sheriff Gary Caruana vs. Dominick Barcellona) & Peoria County (Clerk Rachael Parker vs. Kari Gabbert)",
    region: "Northern & Central Illinois (Rockford & Peoria)",
    counties: ["Winnebago", "Peoria"],
    cities: ["Rockford", "Loves Park", "Machesney Park", "Cherry Valley", "Roscoe", "Rockton", "Pecatonica", "Peoria", "West Peoria", "Peoria Heights", "Bartonville", "Chillicothe"],
    pvi: "Even",
    rating: "Competitive (Winnebago Sheriff & Peoria Clerk Races)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Winnebago Sheriff Gary Caruana (R) & Chair Joe Chiarelli (R) | Peoria Clerk Rachael Parker (D), Chair Jimmy Dillon (D) & Sheriff Chris Watkins (R)",
    primarySummary: "In Winnebago County (Rockford), three-term GOP Sheriff Gary Caruana (R) faces Independent challenger Dominick Barcellona (Ind, veteran Winnebago Sheriff's detective). In Peoria County, Democratic County Clerk Rachael Parker (D) defends her office against Republican Kari Gabbert (R), alongside Democratic Board Chair Jimmy Dillon and bipartisan Sheriff Chris Watkins (R).",
    candidates: [
      {
        id: "caruana-parker-incumbents",
        name: "Winnebago Sheriff Gary Caruana (R) & Peoria Clerk Rachael Parker (D)",
        party: "Bipartisan / Incumbents",
        role: "Winnebago County Sheriff Gary Caruana (R, 2014-present) & Peoria County Clerk Rachael Parker (D, 2020-present)",
        hometown: "Rockford (Winnebago) & Peoria (Peoria County), IL",
        incumbentStatus: "Incumbents",
        photoInitials: "CP",
        fecRaised: "$590,000 (Combined)",
        fecCashOnHand: "$380,000",
        pacPolicy: "Backed by Building Trades (IUOE Local 150, IBEW, LIUNA) & Local Party Committees",
        pacSummary: "Both Winnebago Sheriff Gary Caruana (R) and Peoria Clerk Rachael Parker (D) enjoy strong backing from local building trades (IUOE Local 150, IBEW, LIUNA) and civic coalitions.",
        pacs: [
          { name: "IUOE Local 150, IBEW, LIUNA & Local Party Committees", type: "Labor PAC", amount: "$340,000+", stance: "Supporting" }
        ],
        endorsements: ["IUOE Local 150", "Local Labor Councils"],
        issues: {
          assessmentBurden: "Peoria Clerk Rachael Parker and Board Chair Jimmy Dillon stabilized Peoria County property tax extensions while Winnebago County uses casino and cannabis revenues to hold down property tax levies.",
          transitMma: "Support Rockford-to-Chicago and Peoria-to-Chicago passenger rail projects and CityLink/RMTD bus modernization.",
          leadWaterFlood: "Support Rock River and Illinois River flood mitigation and older urban lead pipe replacement.",
          migrantBudgets: "Rachael Parker modernized Peoria County vote-by-mail tracking and early voting centers.",
          dataCenterZoning: "Support Rockford airport logistics and Peoria medical/ag-tech redevelopment.",
          solarWindSiting: "Support balanced county commercial solar ordinances.",
          localPublicSafety: "Winnebago Sheriff Gary Caruana highlights the County's 0.5% Public Safety Sales Tax funding jail mental health pods and violent crime task forces."
        }
      },
      {
        id: "barcellona-gabbert-challengers",
        name: "Dominick Barcellona (Ind - Winnebago Sheriff) & Kari Gabbert (R - Peoria Clerk)",
        party: "Challengers (Ind / GOP)",
        role: "Winnebago Sheriff's Detective Dominick Barcellona (Independent) & Peoria GOP Clerk Nominee Kari Gabbert (R)",
        hometown: "Rockford & Peoria, IL",
        incumbentStatus: "Challengers",
        photoInitials: "BG",
        fecRaised: "$360,000 (Combined)",
        fecCashOnHand: "$210,000",
        pacPolicy: "Law Enforcement Rank-and-File & Local GOP Support",
        pacSummary: "Barcellona runs an independent reform campaign backed by rank-and-file deputies and Rockford business donors; Gabbert is backed by the Peoria County GOP.",
        pacs: [
          { name: "Rank-and-File Law Enforcement & Peoria County GOP", type: "Party Committee", amount: "$210,000+", stance: "Supporting" }
        ],
        endorsements: ["Peoria County GOP (for Gabbert)", "Local Patrol Deputies (for Barcellona)"],
        issues: {
          assessmentBurden: "Call for stricter audits of county tax dollars and property tax relief in Winnebago and Peoria counties.",
          transitMma: "Prioritize local road and bridge repair.",
          leadWaterFlood: "Support core water and sewer infrastructure.",
          migrantBudgets: "Kari Gabbert campaigns on strict voter-roll cleanup and signature verification in Peoria County.",
          dataCenterZoning: "Support cutting county regulatory red tape for small businesses.",
          solarWindSiting: "Support rural township input on commercial wind and solar siting.",
          localPublicSafety: "Dominick Barcellona campaigns on boosting patrol deputy morale, ending administrative bloat in the Winnebago Sheriff's Office, and aggressively targeting Rockford gun and fentanyl crime."
        }
      }
    ]
  },
  {
    id: "champaign-mclean-2026",
    level: "local",
    sublevel: "Downstate County Government",
    office: "Champaign County & McLean County (Bloomington-Normal) 2026 Elections",
    districtCode: "CENTRAL-UNIV-2026",
    districtName: "Champaign County (Sheriff Dustin Heuerman & Clerk Aaron Ammons) & McLean County (Clerk Kathy Michael vs. Joshua Crockett & 10-10 Split Board)",
    region: "Central Illinois (Champaign-Urbana & Bloomington-Normal)",
    counties: ["Champaign", "McLean"],
    cities: ["Champaign", "Urbana", "Savoy", "Rantoul", "Mahomet", "Bloomington", "Normal"],
    pvi: "D+6",
    rating: "Battleground in McLean (10D-10R Board + Clerk Race) | Safe Democratic in Champaign",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Champaign Exec Michelle Jett (D), Sheriff Dustin Heuerman (D) & Clerk Aaron Ammons (D) | McLean Clerk Kathy Michael (R) & Board Chair Elizabeth Johnston (D)",
    primarySummary: "In McLean County (Bloomington-Normal, where the County Board is deadlocked 10 Democrats to 10 Republicans), veteran GOP County Clerk Kathy Michael (R) defends her seat against Democrat Joshua Crockett (D). In Champaign County, two-term Democratic Sheriff Dustin Heuerman (D) faces Republican Gregory Worrell (R), and Clerk Aaron Ammons (D) faces Republican Alan Anderson (R) alongside newly elected County Executive Michelle Jett (D).",
    candidates: [
      {
        id: "champaign-mclean-dems",
        name: "Sheriff Dustin Heuerman (D), Clerk Aaron Ammons (D) & McLean Nominee Joshua Crockett (D)",
        party: "Democrat",
        role: "Champaign Sheriff Dustin Heuerman (D) & Clerk Aaron Ammons (D); McLean County Clerk Nominee Joshua Crockett (D) & Board Chair Elizabeth Johnston (D)",
        hometown: "Champaign-Urbana & Bloomington-Normal, IL",
        incumbentStatus: "Incumbents (Champaign) & Challenger (McLean Clerk)",
        photoInitials: "DH",
        fecRaised: "$640,000 (Combined)",
        fecCashOnHand: "$410,000",
        pacPolicy: "Backed by Champaign & McLean Dems, UIUC/ISU Labor, IEA, IFT & Building Trades",
        pacSummary: "Supported by Champaign and McLean County Democratic Parties, IEA, IFT, AFSCME, SEIU, LIUNA, and IBEW.",
        pacs: [
          { name: "Champaign & McLean Dems, IEA, IFT, AFSCME & LIUNA", type: "Labor PAC", amount: "$390,000+", stance: "Supporting" }
        ],
        endorsements: ["Champaign County Democrats", "McLean County Democrats", "IEA", "IFT", "Illinois AFL-CIO"],
        issues: {
          assessmentBurden: "Support closing hospital tax-exemption loopholes and expanding Rivian/UIUC commercial tax bases so Champaign and McLean homeowners aren't overburdened.",
          transitMma: "Support Champaign-Urbana MTD and Bloomington-Normal Connect Transit electric bus fleets and high-speed rail.",
          leadWaterFlood: "Unanimously back strict protection of the Mahomet Aquifer (drinking water source for 800,000+ Central Illinois residents) against carbon sequestration leaks.",
          migrantBudgets: "Aaron Ammons and Joshua Crockett champion accessible on-campus voting at UIUC and Illinois State University (ISU).",
          dataCenterZoning: "Support clean-tech, quantum, and EV battery manufacturing with union labor agreements.",
          solarWindSiting: "Support commercial wind and solar revenue that provides millions in new property taxes to rural McLean and Champaign school districts.",
          localPublicSafety: "Champaign Sheriff Dustin Heuerman is one of the few downstate sheriffs who supported the SAFE-T Act's elimination of cash bail, paired with closing the dilapidated downtown Champaign satellite jail and expanding behavioral health diversion."
        }
      },
      {
        id: "champaign-mclean-gop",
        name: "McLean Clerk Kathy Michael (R), Gregory Worrell (R - Champaign Sheriff) & Alan Anderson (R - Champaign Clerk)",
        party: "Republican",
        role: "Incumbent McLean County Clerk Kathy Michael (R, 2010-present); Champaign GOP Nominees Gregory Worrell (Sheriff) & Alan Anderson (Clerk)",
        hometown: "Bloomington-Normal & Champaign, IL",
        incumbentStatus: "Incumbent (McLean Clerk) & Challengers (Champaign)",
        photoInitials: "KM",
        fecRaised: "$520,000 (Combined)",
        fecCashOnHand: "$330,000",
        pacPolicy: "Backed by McLean & Champaign GOP, Farm Bureau & NFIB",
        pacSummary: "Supported by McLean and Champaign County Republican Central Committees, business donors, and agricultural leaders.",
        pacs: [
          { name: "McLean & Champaign County GOP Committees", type: "Party Committee", amount: "$310,000+", stance: "Supporting" }
        ],
        endorsements: ["McLean County GOP", "Champaign County GOP", "Local Farm & Business Leaders"],
        issues: {
          assessmentBurden: "Campaign on capping county property tax levies in McLean and Champaign counties and opposing new local sales taxes.",
          transitMma: "Prioritize rural township road and bridge maintenance.",
          leadWaterFlood: "Support protecting the Mahomet Aquifer and agricultural drainage districts.",
          migrantBudgets: "McLean Clerk Kathy Michael runs on her 16-year track record of bipartisan election administration, voter roll accuracy, and fiscal restraint; Alan Anderson challenges Aaron Ammons over Champaign primary ballot administration.",
          dataCenterZoning: "Support private property rights and lower business taxes.",
          solarWindSiting: "Call for restoring county board authority over wind turbine and solar farm setbacks on prime Class A farmland.",
          localPublicSafety: "Gregory Worrell campaigns on repealing cashless bail under the SAFE-T Act and increasing rural patrol staffing in Champaign County."
        }
      }
    ]
  },
  {
    id: "metro-east-quad-south-2026",
    level: "local",
    sublevel: "Downstate County Government",
    office: "Metro East (St. Clair & Madison), Quad Cities (Rock Island) & Jackson County (Carbondale) 2026 Races",
    districtCode: "METRO-SOUTH-2026",
    districtName: "St. Clair (Belleville/E. St. Louis), Madison (Edwardsville/Alton), Rock Island (Quad Cities) & Jackson (Carbondale) County Offices",
    region: "Metro East, Western & Southern Illinois",
    counties: ["St. Clair", "Madison", "Rock Island", "Jackson"],
    cities: ["Belleville", "East St. Louis", "O'Fallon", "Cahokia Heights", "Fairview Heights", "Collinsville", "Edwardsville", "Alton", "Granite City", "Godfrey", "Glen Carbon", "Rock Island", "Moline", "East Moline", "Silvis", "Carbondale", "Murphysboro"],
    pvi: "Even",
    rating: "Competitive Battlegrounds Across All 4 Regional Hub Counties",
    isOpenSeat: true,
    isBattleground: true,
    incumbent: "St. Clair Chair Mark Kern (D) | Madison Chair Chris Slusser (R) & Clerk Linda Andreas (R) | Rock Island Chair Richard Brunk (D) | Jackson Sheriff Robert Burns (D)",
    primarySummary: "Key 2026 Downstate races: In Madison County, County Clerk Linda Andreas (R, who defeated former County Chair Kurt Prenzler in the March 2026 GOP primary) faces Democrat Rachelle Bauerle (D). In St. Clair County, Democrat Laura Kaemmerer faces Republican Gary Hursey for Clerk and Treasurer Andrew Lopinot (D) faces Myki Rhodes (R). In Rock Island County, Democrat Marcus Herbert faces Republican Jamie Shoemaker for Open Sheriff. In Jackson County (Carbondale), Sheriff Robert Burns (D) faces Jay Wittenborn (R) and Clerk Frank Byrd (D) faces Doug Gill (R).",
    candidates: [
      {
        id: "downstate-hub-dems",
        name: "Rachelle Bauerle (Madison), Laura Kaemmerer & Andrew Lopinot (St. Clair), Marcus Herbert (Rock Island) & Sheriff Robert Burns (Jackson)",
        party: "Democrat",
        role: "Democratic County Nominees Across St. Clair, Madison, Rock Island & Jackson Counties",
        hometown: "Belleville / Edwardsville / Rock Island / Carbondale, IL",
        incumbentStatus: "Incumbents (St. Clair, Rock Island, Jackson) & Challenger (Madison)",
        photoInitials: "MK",
        fecRaised: "$1,480,000 (Combined Regional Slate)",
        fecCashOnHand: "$960,000",
        pacPolicy: "Backed by St. Clair Chairman Mark Kern, UAW, USW, IUOE Local 150, LIUNA & SIU Unions",
        pacSummary: "Supported by St. Clair County Board Chair Mark Kern's powerhouse Democratic organization, United Steelworkers (Granite City/Alton), UAW (Quad Cities), LIUNA, IUOE Local 150, IEA, and IFT.",
        pacs: [
          { name: "St. Clair, Madison, Rock Island & Jackson Democratic Parties", type: "Party Committee", amount: "$780,000+", stance: "Supporting" },
          { name: "LIUNA, IUOE Local 150, USW, UAW, IEA & IFT", type: "Labor PAC", amount: "$540,000+", stance: "Supporting" }
        ],
        endorsements: ["St. Clair Chair Mark Kern", "LIUNA", "IUOE Local 150", "UAW", "United Steelworkers", "IEA", "IFT"],
        issues: {
          assessmentBurden: "St. Clair Treasurer Andrew Lopinot and Chair Mark Kern highlight senior/veteran tax relief and Scott Air Force Base economic growth to stabilize local tax rates.",
          transitMma: "Support MetroLink extension to MidAmerica St. Louis Airport in St. Clair County, Quad Cities MetroLINK buses, and Amtrak Saluki service to Carbondale.",
          leadWaterFlood: "Prioritize American Bottoms Mississippi River levee reconstruction and federal/state sanitary sewer overhauls in Cahokia Heights and East St. Louis.",
          migrantBudgets: "Rachelle Bauerle (Madison), Laura Kaemmerer (St. Clair), Maggie Crouch (Rock Island), and Frank Byrd (Jackson) champion expanded early voting at SIUE, SIUC, and Augustana.",
          dataCenterZoning: "Support union industrial jobs at Granite City Works, Boeing MidAmerica Airport, and Rock Island Arsenal.",
          solarWindSiting: "Support clean energy transition grants in Southern and Western Illinois.",
          localPublicSafety: "Jackson Sheriff Robert Burns and Rock Island Sheriff nominee Marcus Herbert emphasize community policing, mental health co-responders, and violent crime reduction."
        }
      },
      {
        id: "downstate-hub-gop",
        name: "Madison Clerk Linda Andreas (R), Gary Hursey (St. Clair), Jamie Shoemaker (Rock Island Sheriff) & Jay Wittenborn (Jackson Sheriff)",
        party: "Republican",
        role: "Incumbent Madison County Clerk Linda Andreas (R) & Republican County Nominees Across St. Clair, Rock Island & Jackson Counties",
        hometown: "Edwardsville / O'Fallon / Moline / Murphysboro, IL",
        incumbentStatus: "Incumbent (Madison County) & Challengers (St. Clair, Rock Island, Jackson)",
        photoInitials: "LA",
        fecRaised: "$1,120,000 (Combined Regional Slate)",
        fecCashOnHand: "$710,000",
        pacPolicy: "Backed by Madison County Chair Chris Slusser, FOP, Farm Bureau & Business PACs",
        pacSummary: "Led by Madison County GOP Chair Chris Slusser and Clerk Linda Andreas (who defeated intra-party rival Kurt Prenzler in the March 2026 primary), backed by Fraternal Order of Police, Realtors RPAC, and Farm Bureau.",
        pacs: [
          { name: "Madison, St. Clair, Rock Island & Jackson GOP Committees", type: "Party Committee", amount: "$680,000+", stance: "Supporting" },
          { name: "Fraternal Order of Police (FOP) & Local Business PACs", type: "Trade PAC", amount: "$290,000+", stance: "Supporting" }
        ],
        endorsements: ["Madison County Board Chair Chris Slusser", "Fraternal Order of Police", "County GOP Committees"],
        issues: {
          assessmentBurden: "Point to Madison County's 'Property Tax Cap (PTELL)' and levy cuts as the model for St. Clair, Rock Island, and Jackson counties.",
          transitMma: "Oppose diverting downstate Road Fund money to Chicago transit and demand stricter security on MetroLink trains.",
          leadWaterFlood: "Demand state and local accountability for decades of neglected flood and sewer infrastructure in St. Clair County.",
          migrantBudgets: "Madison Clerk Linda Andreas runs on election integrity, paper-ballot security, and ending intra-party chaos in the Madison County courthouse; GOP slates back non-sanctuary county resolutions.",
          dataCenterZoning: "Support cutting business taxes and lawsuit abuse in Madison and St. Clair counties to compete with Missouri and Iowa.",
          solarWindSiting: "Support county board authority over commercial wind and solar siting on farmland.",
          localPublicSafety: "Rock Island Sheriff nominee Jamie Shoemaker and Jackson Sheriff nominee Jay Wittenborn campaign on repealing cashless bail under the SAFE-T Act and backing rural and municipal deputies."
        }
      }
    ]
  },

  // ================= STATEWIDE & REGIONAL 2026 BALLOT REFERENDUMS / JUDICIAL RETENTION =================
  {
    id: "il-ballot-referendums-2026",
    level: "local",
    sublevel: "Ballot Measures & Judicial",
    office: "2026 Illinois Local Ballot Referendums & Judicial Retention Overview",
    districtCode: "BALLOT-2026",
    districtName: "2026 Municipal/County Referendums (Property Tax Relief, Mental Health Boards, Sanctuary/Tax Caps) & Appellate/Circuit Court Retentions",
    region: "Statewide & Local Jurisdictions",
    counties: ["All 102 Illinois Counties"],
    cities: ["All Illinois Municipalities"],
    pvi: "Even",
    rating: "Key Local Voter Decisions",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "No Illinois Supreme Court Justices Up for Retention in 2026 (Next in 2028); Local Referendums & Circuit/Appellate Judges on Ballot",
    primarySummary: "While none of the 7 Illinois Supreme Court justices face retention in November 2026 (Chief Justice P. Scott Neville Jr.'s retention is in 2028), voters across Illinois face Appellate and Circuit Court races (requiring 60% for retention) plus dozens of high-stakes county, municipal, and school district ballot referendums on property tax relief, Community Mental Health (708) Boards, school construction bonds, and data-center/sanctuary advisory questions.",
    candidates: [
      {
        id: "yes-mental-health-school-referendums",
        name: "YES on Local Mental Health (708) Boards, Lead Water Bonds & EBF Tax-Relief Referendums",
        party: "Coalition / Yes Campaigns",
        role: "Civic, Healthcare, Labor & Public Education Ballot Coalitions",
        hometown: "Statewide (Cook, Collar & Downstate Townships/Counties)",
        incumbentStatus: "Ballot Measure Coalition",
        photoInitials: "YS",
        fecRaised: "$2,400,000+ (Statewide Local Committees)",
        fecCashOnHand: "$1,100,000",
        pacPolicy: "Backed by NAMI Illinois, SEIU, IEA, IFT, IUOE Local 150 & League of Women Voters",
        pacSummary: "Supported by healthcare advocates (NAMI), teachers' unions (IEA, IFT, CTU), building trades (IUOE Local 150, LIUNA), and Cook/Collar County civic groups.",
        pacs: [
          { name: "NAMI, SEIU, IEA, IFT & Building Trades Ballot Committees", type: "Ideological PAC", amount: "$2,000,000+", stance: "Supporting" }
        ],
        endorsements: ["NAMI Illinois", "IEA", "IFT", "IUOE Local 150", "League of Women Voters"],
        issues: {
          assessmentBurden: "Support advisory referendums demanding that Springfield require corporations and ultra-millionaires to pay more so local school property taxes can be reduced.",
          transitMma: "Support dedicated transit and Complete Streets infrastructure bonds.",
          leadWaterFlood: "Support municipal water-bond referendums to accelerate 100% lead service line replacement and flood reservoir construction.",
          migrantBudgets: "Support welcoming-city protections and safety-net hospital funding.",
          dataCenterZoning: "Support community benefit agreements (CBAs) requiring data centers to fund local schools and grid upgrades.",
          solarWindSiting: "Support municipal green-energy aggregation and Forest Preserve open-space bonds.",
          localPublicSafety: "Champion creating voter-approved Township and County Community Mental Health (708) Boards (approved in 15+ Illinois townships/counties since 2022) to fund 24/7 crisis triage and youth behavioral care."
        }
      },
      {
        id: "no-tax-cap-advisory-referendums",
        name: "YES on Hard Property Tax Caps (PTELL) / NO on Bond Hikes & Sanctuary Spending",
        party: "Taxpayer / No Bond Campaigns",
        role: "Taxpayer Watchdogs, Downstate County Boards & Conservative Ballot Coalitions",
        hometown: "Statewide (Suburban & Downstate Counties)",
        incumbentStatus: "Ballot Measure Coalition",
        photoInitials: "TC",
        fecRaised: "$1,650,000+ (Statewide Local Committees)",
        fecCashOnHand: "$820,000",
        pacPolicy: "Backed by Illinois Policy Action, Realtors RPAC, NFIB & County GOP Coalitions",
        pacSummary: "Supported by local taxpayer groups, NFIB, Illinois Policy network, and county Republican committees.",
        pacs: [
          { name: "Local Taxpayer PACs, NFIB & Conservative Ballot Committees", type: "Ideological PAC", amount: "$1,400,000+", stance: "Supporting" }
        ],
        endorsements: ["Taxpayer Watchdog Groups", "NFIB Supporters", "County GOP Committees"],
        issues: {
          assessmentBurden: "Campaign for binding PTELL (Property Tax Extension Limitation Law) caps in non-home-rule municipalities and voting NO on new school or park district bond referendums that raise homeowner property taxes.",
          transitMma: "Support suburban advisory referendums opposing the NITA regional transit tax hike.",
          leadWaterFlood: "Argue state and federal mandates (like lead pipe replacement) must be 100% funded by Springfield and Washington, not local water-bill hikes.",
          migrantBudgets: "Sponsor county advisory referendums (passed in 30+ downstate counties) prohibiting county tax dollars from funding migrant shelters or sanctuary policies.",
          dataCenterZoning: "Support advisory referendums protecting residential neighborhoods from industrial warehouse and battery-storage rezoning.",
          solarWindSiting: "Support county advisory referendums demanding the repeal of Illinois's 2023 law that stripped counties of local zoning veto power over commercial wind and solar farms.",
          localPublicSafety: "Campaign against retaining judges perceived as lenient under the SAFE-T Act."
        }
      }
    ]
  }
];
