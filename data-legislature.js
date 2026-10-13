// 2026 Illinois Midterm Elections - State Legislature Dataset (State Senate & State House Across All Regions)
// Chamber Balance Entering Election: Senate 40D-19R (39 of 59 up in 2026) | House 78D-40R (All 118 up in 2026)

window.IL_LEGISLATURE_RACES = [
  // ================= LEGISLATIVE LEADERSHIP ("THE FOUR TOPS") =================
  {
    id: "il-sen-39",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 39th District (President of the Senate)",
    districtCode: "SD-39",
    districtName: "39th Senate District (Oak Park, Elmwood Park, Franklin Park, Melrose Park, Northlake & Far West Chicago)",
    region: "Suburban Cook & Chicago West Side",
    counties: ["Cook"],
    cities: ["Oak Park", "Elmwood Park", "Franklin Park", "Melrose Park", "Northlake", "Stone Park", "Schiller Park", "River Grove", "Chicago - Austin"],
    pvi: "D+24",
    rating: "Safe Democratic (Leadership)",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Don Harmon (D - President of the Illinois Senate)",
    primarySummary: "Senate President Don Harmon (D) runs unopposed in the November 2026 general election while directing the Illinois Senate Democratic Fund (ISDF) across statewide battlegrounds.",
    candidates: [
      {
        id: "don-harmon",
        name: "Don Harmon",
        party: "Democrat",
        role: "President of the Illinois Senate (2020-present); State Senator (SD-39, 2003-present) & Attorney",
        hometown: "Oak Park (Cook County), IL",
        incumbentStatus: "Incumbent (Senate President)",
        photoInitials: "DH",
        fecRaised: "$14,200,000+ (Friends of Don Harmon + ISDF)",
        fecCashOnHand: "$8,900,000+",
        pacPolicy: "Controls Senate Democratic Campaign Apparatus (ISDF)",
        pacSummary: "Chairs the Illinois Senate Democratic Fund (ISDF), the primary financial engine for Senate Democrats, funded by trial lawyers (ITLA), IUOE Local 150, teachers' unions (IFT, IEA), SEIU, IBEW, and Realtors RPAC.",
        pacs: [
          { name: "Illinois Senate Democratic Fund (ISDF)", type: "Party Committee", amount: "Controls $10M+ Caucus War Chest", stance: "Supporting" },
          { name: "Illinois Trial Lawyers Association (ITLA PAC)", type: "Trade PAC", amount: "$500,000+ to Caucus", stance: "Supporting" },
          { name: "IUOE Local 150, IBEW & LIUNA", type: "Labor PAC", amount: "$750,000+ to Caucus", stance: "Supporting" },
          { name: "IFT, IEA/IPACE & SEIU Healthcare", type: "Labor PAC", amount: "$850,000+ to Caucus", stance: "Supporting" },
          { name: "Personal PAC & Illinois Realtors RPAC", type: "Ideological PAC", amount: "$250,000+", stance: "Supporting" }
        ],
        endorsements: ["Illinois AFL-CIO", "ITLA", "IUOE Local 150", "IEA", "IFT", "Personal PAC"],
        issues: {
          propertyTaxes: "Supports expanding state Evidence-Based Funding (EBF) by $350M+ per year and reforming Cook County commercial-to-residential assessment rules to relieve Oak Park and West Suburban homeowners.",
          safetAct: "Presided over Senate passage of the SAFE-T Act and subsequent trailer clarifications; defends ending cash bail while funding police training and violence prevention.",
          budgetTaxes: "Architect of Illinois's 8 balanced budgets and Rainy Day Fund build-up; chief legislative champion of replacing the flat tax with a graduated income tax.",
          pensions: "Supports actuarial fixes for Tier 2 Social Security Safe Harbor compliance while protecting the state's 9 credit rating upgrades.",
          energyGrid: "Shepherded CEJA, the SMR nuclear moratorium lift, and the 2026 POWER Act framework requiring AI data centers to pay for grid upgrades.",
          transit: "Engineered Senate passage of SB 2111 creating the Northern Illinois Transit Authority (NITA) with $1.5B in dedicated funding for CTA, Metra, and Pace.",
          healthcare: "Championed Illinois's Reproductive Health Act, interstate provider shield laws, and prescription drug board oversight.",
          education: "Supports public school EBF funding, early childhood Smart Start grants, and letting the Invest in Kids voucher tax credit expire."
        }
      }
    ]
  },
  {
    id: "il-sen-41",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 41st District (Senate Minority Leader)",
    districtCode: "SD-41",
    districtName: "41st Senate District (Downers Grove, Lemont, Homer Glen, Burr Ridge, Darien, Woodridge & Willowbrook)",
    region: "Collar Counties (DuPage, Will & SW Cook)",
    counties: ["DuPage", "Will", "Cook"],
    cities: ["Downers Grove", "Lemont", "Homer Glen", "Burr Ridge", "Woodridge", "Darien", "Willowbrook", "Lisle", "Hinsdale"],
    pvi: "R+4",
    rating: "Safe Republican (Leadership)",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "John Curran (R - Senate Minority Leader)",
    primarySummary: "Senate Republican Leader John Curran (R) runs unopposed in the November 2026 general election, allowing him to focus SRCC/SRVF funds on top Senate battlegrounds like SD-48, SD-26, SD-33, and SD-56.",
    candidates: [
      {
        id: "john-curran",
        name: "John Curran",
        party: "Republican",
        role: "Senate Minority Leader (2023-present); State Senator (SD-41, 2017-present) & Former Cook County Prosecutor",
        hometown: "Downers Grove (DuPage County), IL",
        incumbentStatus: "Incumbent (Senate GOP Leader)",
        photoInitials: "JC",
        fecRaised: "$6,400,000+ (Citizens for Curran + SRCC/SRVF)",
        fecCashOnHand: "$4,100,000+",
        pacPolicy: "Controls Senate Republican Campaign Committee (SRCC/SRVF) + Bipartisan Trade PACs",
        pacSummary: "Leads the Senate Republican Campaign Committee (SRCC); heavily backed by the Illinois Manufacturers' Association (IMA), Illinois Chamber, Realtors RPAC, and bipartisan building trades led by IUOE Local 150.",
        pacs: [
          { name: "Senate Republican Campaign Committee (SRCC / SRVF)", type: "Party Committee", amount: "Controls $4M+ Caucus Fund", stance: "Supporting" },
          { name: "IUOE Local 150 (Operating Engineers)", type: "Labor PAC", amount: "$350,000+ to Curran/Caucus", stance: "Supporting" },
          { name: "Illinois Manufacturers' Association (IMA) & IL Chamber", type: "Trade PAC", amount: "$450,000+", stance: "Supporting" },
          { name: "Illinois Realtors RPAC", type: "Trade PAC", amount: "$220,000+", stance: "Supporting" }
        ],
        endorsements: ["IUOE Local 150", "Illinois Manufacturers' Association", "Illinois Chamber of Commerce", "Illinois Realtors"],
        issues: {
          propertyTaxes: "Proposes dollar-for-dollar property tax relief tied to state revenue growth, hard local levy caps, and eliminating unfunded state mandates on DuPage and Will County schools.",
          safetAct: "Former prosecutor who calls for expanding detainable offenses under the SAFE-T Act and restoring judicial discretion to hold repeat offenders.",
          budgetTaxes: "Criticizes the $15B+ growth in state spending since 2019; opposes progressive tax hikes and calls for Eliminating non-citizen healthcare spending.",
          pensions: "Supports targeted Tier 2 Safe Harbor compliance fixes for police and firefighters while opposing unfunded $40B pension sweeteners.",
          energyGrid: "Co-sponsored lifting Illinois's nuclear moratorium; warns that premature coal and natural gas plant closures under CEJA threaten grid reliability.",
          transit: "Opposes diverting suburban Road Fund interest to bail out the CTA without strict governance parity for suburban Metra and Pace riders.",
          healthcare: "Focuses on behavioral health access, hospital stability, and developmental disability funding.",
          education: "Supports Evidence-Based Funding alongside reviving the Invest in Kids tax-credit scholarship program for working families."
        }
      }
    ]
  },
  {
    id: "il-house-07",
    level: "state_legislature",
    chamber: "State House",
    office: "Illinois State Representative - 7th District (Speaker of the House)",
    districtCode: "HD-7",
    districtName: "7th House District (Maywood, Hillside, Westchester, Bellwood, Forest Park, Oak Park & River Forest)",
    region: "Suburban Cook (Proviso & West Suburbs)",
    counties: ["Cook"],
    cities: ["Maywood", "Hillside", "Westchester", "Bellwood", "Berkeley", "Broadview", "Forest Park", "Oak Park", "River Forest", "La Grange Park"],
    pvi: "D+28",
    rating: "Safe Democratic (Leadership)",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Emanuel 'Chris' Welch (D - Speaker of the Illinois House)",
    primarySummary: "Illinois’s first Black House Speaker Emanuel 'Chris' Welch (D) runs unopposed on the November 2026 ballot while directing Democrats for the Illinois House across suburban and downstate battlegrounds.",
    candidates: [
      {
        id: "emanuel-chris-welch",
        name: "Emanuel 'Chris' Welch",
        party: "Democrat",
        role: "Speaker of the Illinois House (2021-present); State Rep. (HD-7, 2013-present) & Education/Municipal Attorney",
        hometown: "Hillside (Cook County), IL",
        incumbentStatus: "Incumbent (Speaker of the House)",
        photoInitials: "CW",
        fecRaised: "$18,500,000+ (People for Welch + House Dem Caucus)",
        fecCashOnHand: "$12,400,000+",
        pacPolicy: "Controls House Democratic Campaign Apparatus (Democrats for the IL House)",
        pacSummary: "Commands over $12M across his personal and House Democratic caucus committees, backed by IFT, IEA, SEIU, LIUNA, IUOE Local 150, ITLA (Trial Lawyers), and Personal PAC.",
        pacs: [
          { name: "Democrats for the Illinois House & DPI", type: "Party Committee", amount: "Controls $12M+ Caucus War Chest", stance: "Supporting" },
          { name: "IFT, IEA/IPACE & CTU", type: "Labor PAC", amount: "$1,200,000+ to Caucus", stance: "Supporting" },
          { name: "SEIU Healthcare, LIUNA, IUOE Local 150 & IBEW", type: "Labor PAC", amount: "$1,500,000+ to Caucus", stance: "Supporting" },
          { name: "Illinois Trial Lawyers Association (ITLA PAC)", type: "Trade PAC", amount: "$750,000+ to Caucus", stance: "Supporting" },
          { name: "Personal PAC & G-PAC", type: "Ideological PAC", amount: "$300,000+", stance: "Supporting" }
        ],
        endorsements: ["Illinois AFL-CIO", "IFT", "IEA", "SEIU", "LIUNA", "IUOE Local 150", "Personal PAC"],
        issues: {
          propertyTaxes: "Former Proviso Township school board president; champions $350M+ annual Evidence-Based Funding (EBF) increases and South/West Cook commercial property tax assessment reform.",
          safetAct: "Led House passage of the SAFE-T Act and Protect Illinois Communities Act; defends ending wealth-based cash bail while funding co-responder and police retention grants.",
          budgetTaxes: "Shepherded balanced state budgets, eliminated the 1% statewide grocery tax, and expanded the Illinois Child Tax Credit.",
          pensions: "Created the House Tier 2 Pension Working Group with organized labor to fix Social Security Safe Harbor compliance and improve teacher/worker recruitment.",
          energyGrid: "Championed CEJA, union prevailing wage standards on all clean energy projects, and the 2026 pause on unchecked AI data center tax subsidies.",
          transit: "Passed SB 2111 establishing the Northern Illinois Transit Authority (NITA) and securing $1.5B for CTA, Metra, and Pace.",
          healthcare: "Passed landmark reproductive shield laws, IVF insurance mandates, and $1B+ in medical debt forgiveness.",
          education: "Opposed extending the Invest in Kids private school voucher program; champions full public K-12 and community college funding."
        }
      }
    ]
  },
  {
    id: "il-house-89",
    level: "state_legislature",
    chamber: "State House",
    office: "Illinois State Representative - 89th District (House Minority Leader)",
    districtCode: "HD-89",
    districtName: "89th House District (Savanna, Freeport, Galena, Byron, Mount Carroll & NW Illinois)",
    region: "Northern & Northwest Illinois",
    counties: ["Carroll", "Jo Daviess", "Stephenson", "Ogle", "Winnebago", "DeKalb"],
    cities: ["Savanna", "Freeport", "Galena", "Byron", "Pecatonica", "Mount Carroll", "East Dubuque", "Lena", "Forreston"],
    pvi: "R+18",
    rating: "Safe Republican (Leadership)",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Tony McCombie (R - House Minority Leader)",
    primarySummary: "House Minority Leader Tony McCombie (R) defeated right-wing primary challenger Victoria Onorato in March 2026 and runs unopposed in the November general election.",
    candidates: [
      {
        id: "tony-mccombie",
        name: "Tony McCombie",
        party: "Republican",
        role: "House Minority Leader (2023-present); State Rep. (HD-89, 2017-present); Former Mayor of Savanna & Realtor",
        hometown: "Savanna (Carroll County), IL",
        incumbentStatus: "Incumbent (House GOP Leader)",
        photoInitials: "TM",
        fecRaised: "$5,800,000+ (McCombie + HRO)",
        fecCashOnHand: "$3,600,000+",
        pacPolicy: "Controls House Republican Organization (HRO) + Realtors, Business & IUOE Local 150 Backing",
        pacSummary: "Chairs the House Republican Organization (HRO). Heavily backed by Illinois Realtors RPAC (she is a broker/appraiser), IUOE Local 150, Illinois Manufacturers' Association, Illinois Chamber, and Illinois Farm Bureau.",
        pacs: [
          { name: "House Republican Organization (HRO)", type: "Party Committee", amount: "Controls $3.6M+ Caucus Fund", stance: "Supporting" },
          { name: "Illinois Realtors RPAC", type: "Trade PAC", amount: "$350,000+ to McCombie/HRO", stance: "Supporting" },
          { name: "IUOE Local 150 (Operating Engineers)", type: "Labor PAC", amount: "$300,000+ to McCombie/HRO", stance: "Supporting" },
          { name: "IMA, Illinois Chamber & Farm Bureau ACTIVATOR", type: "Trade PAC", amount: "$450,000+", stance: "Supporting" }
        ],
        endorsements: ["Illinois Realtors RPAC", "IUOE Local 150", "Illinois Farm Bureau", "Illinois Manufacturers' Association"],
        issues: {
          propertyTaxes: "Real estate appraiser who proposes a comprehensive property tax swap using state school funding and reforming assessment practices.",
          safetAct: "Supports law enforcement trailer bills to expand pretrial detention for repeat offenders, drug traffickers, and domestic abusers.",
          budgetTaxes: "Opposes state spending increases and tax hikes; demands auditing state agency programs and ending non-citizen Medicaid coverage.",
          pensions: "Supports targeted Tier 2 pension fixes for police and firefighters paired with bipartisan fiscal guardrails.",
          energyGrid: "Protects the Byron Nuclear Generating Station and rural grid reliability; opposes EV mandates and premature fossil-fuel closures.",
          transit: "Opposes diverting downstate and rural Road Fund interest to subsidize Chicago transit.",
          healthcare: "Focuses on rural hospital reimbursement rates and EMS ambulance funding in Northwest Illinois.",
          education: "Supports career and technical education (CTE), Evidence-Based Funding reform, and reviving Invest in Kids scholarships."
        }
      }
    ]
  },

  // ================= MARQUEE STATE SENATE BATTLEGROUNDS & KEY RACES =================
  {
    id: "il-sen-48",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 48th District",
    districtCode: "SD-48",
    districtName: "48th Senate District (Springfield, Decatur, Taylorville & Rochester)",
    region: "Central Illinois",
    counties: ["Sangamon", "Macon", "Christian"],
    cities: ["Springfield", "Decatur", "Taylorville", "Pana", "Rochester", "Forsyth", "Mt. Zion"],
    pvi: "D+1",
    rating: "Toss-Up (#1 Statewide Senate Battleground)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Doris Turner (D)",
    primarySummary: "In the #1 most expensive State Senate race in Illinois ($4M+ projected spending), incumbent Sen. Doris Turner (D) faces popular Sangamon County Recorder Frank Lesko (R).",
    candidates: [
      {
        id: "doris-turner",
        name: "Doris Turner",
        party: "Democrat",
        role: "Illinois State Senator (SD-48, 2021-present); Chair, Senate Agriculture Committee & Former Springfield Alderwoman",
        hometown: "Springfield (Sangamon County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "DT",
        fecRaised: "$2,150,000",
        fecCashOnHand: "$1,480,000",
        pacPolicy: "Top ISDF Defense Priority + Public Sector Labor, Building Trades & Farm Bureau Backing",
        pacSummary: "Receives massive financial support from Senate President Don Harmon's ISDF ($1.5M+), AFSCME Council 31 (representing thousands of Springfield state workers), IEA, IFT, SEIU, IUOE Local 150, Realtors RPAC, and Illinois Farm Bureau.",
        pacs: [
          { name: "Illinois Senate Democratic Fund (ISDF)", type: "Party Committee", amount: "$1,400,000+ Transfers/In-Kind", stance: "Supporting" },
          { name: "AFSCME Council 31, SEIU, IEA & IFT PACs", type: "Labor PAC", amount: "$380,000+", stance: "Supporting" },
          { name: "IUOE Local 150, LIUNA & IBEW", type: "Labor PAC", amount: "$210,000+", stance: "Supporting" },
          { name: "Illinois Realtors RPAC & Illinois Farm Bureau ACTIVATOR", type: "Trade PAC", amount: "$85,000+", stance: "Supporting" }
        ],
        endorsements: ["AFSCME Council 31", "Illinois Farm Bureau ACTIVATOR", "IUOE Local 150", "IEA", "IFT", "Personal PAC"],
        issues: {
          propertyTaxes: "Supports increasing EBF school funding for Springfield District 186 and Decatur District 61 and expanding senior homestead exemptions.",
          safetAct: "Sponsored post-Sonya Massey law enforcement background-check transparency reforms while supporting funding for Springfield and Decatur police.",
          budgetTaxes: "Highlights state capital investments in the Springfield Rail Improvements Project, Downtown Springfield revitalization, and Decatur ADM agribusiness hub.",
          pensions: "Leading voice for Springfield state employees; champions fixing the Tier 2 pension salary cap and improving retirement security for SERS/TRS workers.",
          energyGrid: "Chairs Senate Agriculture; backs biofuels, carbon sequestration safety rules over the Mahomet Aquifer, and keeping Springfield CWLP municipal power affordable.",
          transit: "Supports Springfield high-speed rail hub completion and Decatur public transit grants.",
          healthcare: "Protects Springfield Memorial and HSHS St. John's hospital funding and reproductive healthcare access.",
          education: "Champions UIS (University of Illinois Springfield), Richland Community College, and public K-12 funding."
        }
      },
      {
        id: "frank-lesko",
        name: "Frank J. Lesko",
        party: "Republican",
        role: "Sangamon County Recorder & Former Springfield City Clerk",
        hometown: "Springfield (Sangamon County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "FL",
        fecRaised: "$1,650,000",
        fecCashOnHand: "$1,120,000",
        pacPolicy: "#1 SRCC/SRVF Pickup Target Statewide",
        pacSummary: "Top recruitment and funding priority for Senate GOP Leader John Curran's SRCC/SRVF ($1.2M+ committed), alongside Sangamon County GOP, IMA, Illinois Chamber, and NFIB.",
        pacs: [
          { name: "Senate Republican Campaign Committee (SRCC / SRVF)", type: "Party Committee", amount: "$1,200,000+ Transfers/IE", stance: "Supporting" },
          { name: "Sangamon & Macon County GOP Organizations", type: "Party Committee", amount: "$180,000+", stance: "Supporting" },
          { name: "Illinois Manufacturers' Association & NFIB", type: "Trade PAC", amount: "$140,000+", stance: "Supporting" }
        ],
        endorsements: ["Sangamon County GOP", "Illinois Manufacturers' Association", "Illinois Chamber of Commerce", "NFIB"],
        issues: {
          propertyTaxes: "Campaigns on capping Sangamon and Macon County property taxes and cutting unfunded state mandates on local governments.",
          safetAct: "Makes repealing cashless bail under the SAFE-T Act a central issue, arguing it has fueled violent crime and repeat retail theft in Springfield and Decatur.",
          budgetTaxes: "Opposes state tax hikes and criticizes state spending on non-citizen healthcare while Central Illinois roads and families face inflation.",
          pensions: "Promises to protect earned state-worker pensions in Springfield while opposing reckless budget deficits.",
          energyGrid: "Warns that CEJA mandates forcing the closure of Springfield's Dallman coal plant and Ameren baseload units are causing massive electric bill spikes.",
          transit: "Opposes diverting downstate Road Fund interest to bail out Chicago's NITA/CTA transit system.",
          healthcare: "Focuses on mental health services, veterans' care, and keeping Central Illinois healthcare costs down.",
          education: "Supports parental rights, vocational trade programs, and restoring Invest in Kids scholarships."
        }
      }
    ]
  },
  {
    id: "il-sen-56",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 56th District",
    districtCode: "SD-56",
    districtName: "56th Senate District (Metro East - Edwardsville, Alton, Granite City, Collinsville, Godfrey & Glen Carbon)",
    region: "Metro East & Southern Illinois",
    counties: ["Madison", "St. Clair"],
    cities: ["Edwardsville", "Alton", "Godfrey", "Granite City", "Collinsville", "Wood River", "Glen Carbon", "Bethalto", "Maryville"],
    pvi: "Even",
    rating: "Toss-Up (Marquee Metro East Battleground)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Erica Harriss (R)",
    primarySummary: "First-term incumbent Sen. Erica Harriss (R, who won SD-56 by just 2 points in 2022) faces civil engineer and former American Society of Civil Engineers (ASCE) National President Marsia Geldert-Murphey (D).",
    candidates: [
      {
        id: "erica-harriss",
        name: "Erica Harriss",
        party: "Republican",
        role: "Illinois State Senator (SD-56, 2023-present); Former Madison County Board Member & Small Business Owner",
        hometown: "Glen Carbon (Madison County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "EH",
        fecRaised: "$1,820,000",
        fecCashOnHand: "$1,250,000",
        pacPolicy: "Top SRCC Defense + Business, Realtors & Manufacturing PACs",
        pacSummary: "Top incumbent defense priority for Senate Republicans (SRCC/SRVF), backed by Realtors RPAC, Illinois Manufacturers' Association, Illinois Chamber, and Metro East business groups.",
        pacs: [
          { name: "Senate Republican Campaign Committee (SRCC / SRVF)", type: "Party Committee", amount: "$1,300,000+ Defense", stance: "Supporting" },
          { name: "Illinois Realtors RPAC", type: "Trade PAC", amount: "$95,000+", stance: "Supporting" },
          { name: "Illinois Manufacturers' Association (IMA) & Chamber", type: "Trade PAC", amount: "$145,000+", stance: "Supporting" }
        ],
        endorsements: ["Illinois Realtors RPAC", "Illinois Manufacturers' Association", "Illinois Chamber", "NFIB"],
        issues: {
          propertyTaxes: "Campaigns on capping Madison and St. Clair County property taxes and expanding senior property tax freezes.",
          safetAct: "Calls for overhauling the SAFE-T Act to restore judicial detention discretion for repeat offenders and cross-river Metro East crime.",
          budgetTaxes: "Focuses on keeping U.S. Steel Granite City Works operating, cutting business red tape to compete with Missouri, and opposing tax hikes.",
          pensions: "Supports SURS stability for SIUE employees and police/fire pension consolidation.",
          energyGrid: "Blames CEJA power plant closures and MISO capacity rules for skyrocketing Ameren Illinois electric bills in the Metro East.",
          transit: "Supports Metro East road, bridge, and levee upgrades while opposing diverting downstate Road Fund money to Chicago transit.",
          healthcare: "Focuses on maternal and pediatric care access in the Metro East and opposing taxpayer-funded migrant healthcare.",
          education: "Strong advocate for SIU Edwardsville (SIUE) capital funding, K-12 literacy, and parental rights."
        }
      },
      {
        id: "marsia-geldert-murphey",
        name: "Marsia Geldert-Murphey",
        party: "Democrat",
        role: "Geotechnical Civil Engineer & Former National President, American Society of Civil Engineers (ASCE)",
        hometown: "Glen Carbon / Edwardsville (Madison County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "MG",
        fecRaised: "$1,580,000",
        fecCashOnHand: "$1,040,000",
        pacPolicy: "#1 ISDF Downstate Pickup Target + Building Trades, USW & Personal PAC",
        pacSummary: "Recruited by Senate Democrats as their #1 downstate flip target; heavily backed by ISDF, IUOE Local 150, LIUNA, United Steelworkers (USW), IEA, IFT, and Personal PAC.",
        pacs: [
          { name: "Illinois Senate Democratic Fund (ISDF)", type: "Party Committee", amount: "$1,200,000+ Target Support", stance: "Supporting" },
          { name: "IUOE Local 150, LIUNA, IBEW & United Steelworkers", type: "Labor PAC", amount: "$260,000+", stance: "Supporting" },
          { name: "Personal PAC, IEA/IPACE & IFT", type: "Ideological PAC", amount: "$140,000+", stance: "Supporting" }
        ],
        endorsements: ["IUOE Local 150", "United Steelworkers (Granite City)", "Illinois AFL-CIO", "Personal PAC", "IEA", "IFT"],
        issues: {
          propertyTaxes: "Supports increasing state EBF funding for Edwardsville, Collinsville, Alton, and Granite City schools to ease homeowner property tax levies.",
          safetAct: "Supports violent crime prosecution alongside community mental health and police training resources.",
          budgetTaxes: "Civil engineer who champions Rebuild Illinois infrastructure investments, Mississippi River flood levee modernization, and protecting union jobs at Granite City Works.",
          pensions: "Supports fixing the Tier 2 pension penalty for SIUE faculty/staff (SURS) and public school teachers.",
          energyGrid: "Advocates engineering-driven grid modernization, battery storage, and holding Ameren accountable before the ICC for rate hikes.",
          transit: "Supports MetroCTD bus expansion, Amtrak high-speed rail, and Chain of Rocks / I-270 bridge modernization.",
          healthcare: "Champions reproductive freedom (highlighting Metro East's role serving patients from Missouri) and lowering prescription costs.",
          education: "Supports full SIUE operational funding, STEM/engineering K-12 pathways, and public education."
        }
      }
    ]
  },
  {
    id: "il-sen-26",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 26th District",
    districtCode: "SD-26",
    districtName: "26th Senate District (Barrington, Crystal Lake, Lake Zurich, Cary, Algonquin, Mundelein & Hoffman Estates)",
    region: "Collar Counties (Lake, McHenry, Cook & Kane)",
    counties: ["Lake", "McHenry", "Cook", "Kane"],
    cities: ["Barrington", "Lake Zurich", "Crystal Lake", "Cary", "Algonquin", "Fox River Grove", "Mundelein", "Hawthorn Woods", "Hoffman Estates", "Inverness", "Palatine", "Wauconda", "Island Lake"],
    pvi: "D+2",
    rating: "Toss-Up (Marquee Suburban Battleground)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Darby Hills (R - Appointed 2025 to succeed Dan McConchie)",
    primarySummary: "Marquee suburban clash between appointed GOP Sen. Darby Hills (R, former Barrington Hills trustee and prosecutor) and sitting Democratic State Rep. Nabeela Syed (D, HD-51).",
    candidates: [
      {
        id: "darby-hills",
        name: "Darby Hills",
        party: "Republican",
        role: "Illinois State Senator (SD-26, appointed 2025); Former Prosecutor, Barrington Hills Trustee & Nonprofit Founder",
        hometown: "Barrington Hills, IL",
        incumbentStatus: "Incumbent (Appointed)",
        photoInitials: "DH",
        fecRaised: "$1,450,000",
        fecCashOnHand: "$980,000",
        pacPolicy: "Top SRCC Suburban Defense + IUOE Local 150 & Realtors RPAC",
        pacSummary: "Backed by over $1M in SRCC/SRVF support, bipartisan infrastructure union IUOE Local 150, Illinois Realtors RPAC, and suburban business donors.",
        pacs: [
          { name: "Senate Republican Campaign Committee (SRCC / SRVF)", type: "Party Committee", amount: "$1,050,000+ Defense", stance: "Supporting" },
          { name: "IUOE Local 150 & Illinois Realtors RPAC", type: "Trade PAC", amount: "$185,000+", stance: "Supporting" },
          { name: "IMA & Illinois Chamber of Commerce", type: "Trade PAC", amount: "$95,000+", stance: "Supporting" }
        ],
        endorsements: ["IUOE Local 150", "Illinois Realtors RPAC", "Illinois Chamber of Commerce", "Suburban Mayors"],
        issues: {
          propertyTaxes: "Makes Lake, McHenry, and NW Cook property tax relief her #1 issue; proposes capping local levy spikes and increasing state school funding equity for suburban districts.",
          safetAct: "Former prosecutor who advocates strengthening pretrial detention rules for residential burglary, domestic violence, and repeat offenders.",
          budgetTaxes: "Opposes state tax hikes and criticizes Springfield budget growth.",
          pensions: "Supports police and firefighter pension stability while opposing unfunded state debt expansions.",
          energyGrid: "Supports nuclear power and grid reliability to prevent suburban ComEd bill spikes.",
          transit: "Demands suburban Metra (UP-NW) safety, reliability, and board parity under the new NITA transit structure.",
          healthcare: "Runs a children's charity; focuses on pediatric mental health and maternal health access.",
          education: "Supports local school control in Barrington 220, Lake Zurich 95, and Crystal Lake 47/155."
        }
      },
      {
        id: "nabeela-syed",
        name: "Nabeela Syed",
        party: "Democrat",
        role: "Illinois State Representative (HD-51, 2023-present) & Civic Leader",
        hometown: "Palatine / Inverness, IL",
        incumbentStatus: "Challenger (Sitting State Rep.)",
        photoInitials: "NS",
        fecRaised: "$1,680,000",
        fecCashOnHand: "$1,150,000",
        pacPolicy: "Top ISDF Suburban Flip Target + Personal PAC, Teachers & Giffords",
        pacSummary: "One of the strongest fundraisers in the General Assembly; backed by ISDF ($1M+ target), Personal PAC, IEA, IFT, SEIU, and Giffords/G-PAC.",
        pacs: [
          { name: "Illinois Senate Democratic Fund (ISDF)", type: "Party Committee", amount: "$1,100,000+ Support", stance: "Supporting" },
          { name: "Personal PAC, EMILYs List & G-PAC", type: "Ideological PAC", amount: "$220,000+", stance: "Supporting" },
          { name: "IEA/IPACE, IFT & SEIU", type: "Labor PAC", amount: "$240,000+", stance: "Supporting" }
        ],
        endorsements: ["Personal PAC", "EMILYs List", "IEA", "IFT", "Giffords PAC", "Illinois AFL-CIO"],
        issues: {
          propertyTaxes: "Authored legislation expanding the senior citizen property tax freeze income threshold and demands higher EBF state returns for suburban school districts.",
          safetAct: "Supports gun violence prevention (assault weapons ban, safe storage) alongside funding for suburban police departments.",
          budgetTaxes: "Focuses on middle-class affordability, repealing the grocery tax, and cracking down on corporate price-gouging.",
          pensions: "Supports fixing Tier 2 teacher and municipal pensions.",
          energyGrid: "Backs clean energy transition, solar incentives, and holding utilities & AI data centers accountable for rate hikes.",
          transit: "Supports Metra UP-NW frequency and suburban Pace bus modernization under NITA.",
          healthcare: "Passed laws capping prescription drug prices and banning step-therapy insurance delays; staunch champion of reproductive freedom.",
          education: "Champions public schools, library freedom against book bans, and college affordability."
        }
      }
    ]
  },
  {
    id: "il-sen-33",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 33rd District (Open Seat)",
    districtCode: "SD-33",
    districtName: "33rd Senate District (Elgin, St. Charles, Geneva, Batavia, West Dundee, Carpentersville & Algonquin)",
    region: "Collar Counties (Fox Valley - Kane & McHenry)",
    counties: ["Kane", "McHenry", "DuPage"],
    cities: ["Elgin", "St. Charles", "Geneva", "Batavia", "West Dundee", "East Dundee", "Carpentersville", "Algonquin", "South Elgin", "Sleepy Hollow"],
    pvi: "D+4",
    rating: "Lean Democratic (Open GOP-Held Seat)",
    isOpenSeat: true,
    isBattleground: true,
    incumbent: "Don DeWitte (R - Retiring)",
    primarySummary: "With moderate GOP Sen. Don DeWitte retiring, Fox Valley educator/advocate Michele Clark (D) faces Danielle Penman (R, daughter of former GOP Sen. Karen McConnaughay) in a marquee open-seat battle.",
    candidates: [
      {
        id: "michele-clark",
        name: "Michele Clark",
        party: "Democrat",
        role: "Community Advocate & Fox Valley Civic Leader",
        hometown: "St. Charles / Geneva (Kane County), IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "MC",
        fecRaised: "$1,120,000",
        fecCashOnHand: "$780,000",
        pacPolicy: "ISDF Open-Seat Flip Priority + Personal PAC, IEA & Labor",
        pacSummary: "Heavily backed by Senate Democrats (ISDF), Personal PAC, IEA/IPACE, IFT, LIUNA, and SEIU to flip this Biden/Harris-won Fox Valley district.",
        pacs: [
          { name: "Illinois Senate Democratic Fund (ISDF)", type: "Party Committee", amount: "$850,000+", stance: "Supporting" },
          { name: "Personal PAC, IEA/IPACE, IFT & LIUNA", type: "Labor PAC", amount: "$220,000+", stance: "Supporting" }
        ],
        endorsements: ["Personal PAC", "IEA", "IFT", "LIUNA", "Kane County Democrats"],
        issues: {
          propertyTaxes: "Advocates increasing state EBF funding for Elgin U-46, St. Charles D303, Geneva D304, and Batavia D101 to curb local property tax bills.",
          safetAct: "Supports the SAFE-T Act and gun safety laws alongside mental health crisis response.",
          budgetTaxes: "Focuses on working-family tax credits, child care affordability, and Fox River environmental restoration.",
          pensions: "Supports Tier 2 pension reform for teachers and public workers.",
          energyGrid: "Supports clean energy and protecting municipal electric utilities (St. Charles, Geneva, Batavia) from unfair capacity charges.",
          transit: "Supports Metra UP-W and MD-W commuter rail frequency and Pace Fox Valley bus connections.",
          healthcare: "Runs strongly on protecting reproductive rights, IVF access, and Northwestern Delnor / Sherman Hospital healthcare access.",
          education: "Champions public schools and opposes private school voucher diversions."
        }
      },
      {
        id: "danielle-penman",
        name: "Danielle Penman",
        party: "Republican",
        role: "Business & Community Leader; Daughter of Former State Sen. Karen McConnaughay",
        hometown: "St. Charles (Kane County), IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "DP",
        fecRaised: "$1,050,000",
        fecCashOnHand: "$710,000",
        pacPolicy: "Top SRCC Open-Seat Defense + IUOE Local 150, Realtors & IMA",
        pacSummary: "Backed by retiring Sen. Don DeWitte, SRCC/SRVF, IUOE Local 150, Illinois Realtors RPAC, and Fox Valley business PACs.",
        pacs: [
          { name: "Senate Republican Campaign Committee (SRCC / SRVF)", type: "Party Committee", amount: "$750,000+", stance: "Supporting" },
          { name: "IUOE Local 150 & Illinois Realtors RPAC", type: "Trade PAC", amount: "$190,000+", stance: "Supporting" },
          { name: "IMA & Illinois Chamber", type: "Trade PAC", amount: "$85,000+", stance: "Supporting" }
        ],
        endorsements: ["Retiring Sen. Don DeWitte", "IUOE Local 150", "Illinois Realtors RPAC", "IMA"],
        issues: {
          propertyTaxes: "Campaigns on capping Kane and McHenry property taxes and reducing unfunded state mandates.",
          safetAct: "Calls for revising the SAFE-T Act to give judges broader authority to detain repeat offenders.",
          budgetTaxes: "Runs in the pragmatic business-focused mold of DeWitte and McConnaughay: capital infrastructure investment paired with state spending restraint.",
          pensions: "Supports bipartisan pension debt management without raising taxes.",
          energyGrid: "Protects Geneva, Batavia, and St. Charles municipal electric utilities (NIMPA) and supports nuclear/gas reliability.",
          transit: "Demands accountability and suburban representation on the new NITA board.",
          healthcare: "Focuses on lowering family insurance premiums and expanding behavioral health services.",
          education: "Supports local school control and career/technical education partnerships with Elgin Community College and Waubonsee."
        }
      }
    ]
  },
  {
    id: "il-sen-24",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 24th District",
    districtCode: "SD-24",
    districtName: "24th Senate District (Wheaton, Glen Ellyn, Bloomingdale, Carol Stream, Roselle, Bartlett & Hanover Park)",
    region: "Collar Counties (DuPage & NW Cook)",
    counties: ["DuPage", "Cook"],
    cities: ["Wheaton", "Glen Ellyn", "Bloomingdale", "Carol Stream", "Roselle", "Bartlett", "Hanover Park", "Elk Grove Village"],
    pvi: "D+2",
    rating: "Toss-Up (Marquee DuPage Battleground)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Seth Lewis (R)",
    primarySummary: "Incumbent Sen. Seth Lewis (R) defends one of the most closely divided suburban districts in DuPage and Cook counties against Democratic nominee Ben McAdams (D).",
    candidates: [
      {
        id: "seth-lewis",
        name: "Seth Lewis",
        party: "Republican",
        role: "Illinois State Senator (SD-24, 2023-present) & Small Business Owner / Insurance Agent",
        hometown: "Bartlett (DuPage/Cook County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "SL",
        fecRaised: "$1,320,000",
        fecCashOnHand: "$890,000",
        pacPolicy: "SRCC Defense Priority + IUOE Local 150, Realtors & Business PACs",
        pacSummary: "Backed by SRCC/SRVF, IUOE Local 150, Illinois Realtors RPAC, NFIB, and Illinois Manufacturers' Association.",
        pacs: [
          { name: "Senate Republican Campaign Committee (SRCC)", type: "Party Committee", amount: "$900,000+", stance: "Supporting" },
          { name: "IUOE Local 150 & Illinois Realtors RPAC", type: "Trade PAC", amount: "$175,000+", stance: "Supporting" },
          { name: "NFIB, IMA & Illinois Chamber", type: "Trade PAC", amount: "$110,000+", stance: "Supporting" }
        ],
        endorsements: ["IUOE Local 150", "Illinois Realtors RPAC", "NFIB Illinois", "IMA"],
        issues: {
          propertyTaxes: "Proposes freezing suburban property assessments for seniors and capping local tax levy growth.",
          safetAct: "Calls for repealing cashless bail provisions and strengthening penalties for organized retail and catalytic converter theft.",
          budgetTaxes: "Opposes progressive income taxes, corporate tax hikes, and state spending on non-citizens.",
          pensions: "Advocates structural pension reform and opposing unfunded benefit expansions.",
          energyGrid: "Supports nuclear and natural gas reliability to curb ComEd capacity price spikes.",
          transit: "Opposes suburban sales or Road Fund tax diversions to bail out the CTA.",
          healthcare: "Insurance agent advocating market competition and association health plans.",
          education: "Supports parental rights and reviving the Invest in Kids scholarship credit."
        }
      },
      {
        id: "ben-mcadams",
        name: "Benjamin 'Ben' McAdams",
        party: "Democrat",
        role: "DuPage Community Advocate & Attorney",
        hometown: "Wheaton / Glen Ellyn (DuPage County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "BM",
        fecRaised: "$1,150,000",
        fecCashOnHand: "$760,000",
        pacPolicy: "ISDF Pickup Target + Personal PAC, IEA, IFT & G-PAC",
        pacSummary: "Backed by ISDF, Personal PAC, IEA/IPACE, IFT, and G-PAC in a district that voted for Kamala Harris and JB Pritzker.",
        pacs: [
          { name: "Illinois Senate Democratic Fund (ISDF)", type: "Party Committee", amount: "$850,000+", stance: "Supporting" },
          { name: "Personal PAC, G-PAC, IEA & IFT", type: "Ideological PAC", amount: "$210,000+", stance: "Supporting" }
        ],
        endorsements: ["Personal PAC", "IEA", "IFT", "G-PAC", "DuPage County Democrats"],
        issues: {
          propertyTaxes: "Supports increasing state EBF school funding for Wheaton-Warrenville D200, Glenbard D87, and Elgin U-46 to relieve DuPage homeowners.",
          safetAct: "Supports the SAFE-T Act and Illinois's assault weapons ban alongside police mental-health co-responder grants.",
          budgetTaxes: "Focuses on middle-class tax relief and child care affordability.",
          pensions: "Supports Tier 2 Safe Harbor fixes for teachers and municipal workers.",
          energyGrid: "Supports CEJA clean energy goals and requiring Elk Grove/DuPage data centers to fund grid upgrades.",
          transit: "Supports Metra UP-W and MD-W commuter rail and Pace suburban bus integration.",
          healthcare: "Campaigns heavily on protecting reproductive rights, IVF, and lowering prescription drug prices.",
          education: "Champions public schools and opposes private school vouchers."
        }
      }
    ]
  },
  {
    id: "il-sen-27",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 27th District (Open Seat)",
    districtCode: "SD-27",
    districtName: "27th Senate District (Arlington Heights, Mount Prospect, Palatine, Rolling Meadows, Prospect Heights & Des Plaines)",
    region: "Suburban Cook (Northwest Suburbs)",
    counties: ["Cook"],
    cities: ["Arlington Heights", "Mount Prospect", "Palatine", "Rolling Meadows", "Prospect Heights", "Des Plaines", "Hoffman Estates", "Buffalo Grove"],
    pvi: "D+9",
    rating: "Likely Democratic (Open Seat - Arlington Park Bears Stadium District)",
    isOpenSeat: true,
    isBattleground: true,
    incumbent: "Mark Walker (D - Retiring)",
    primarySummary: "In the district home to the former Arlington International Racecourse (proposed Chicago Bears stadium site), nonprofit executive Carina Santa Maria (D) faces Republican David Mathis (R) to succeed retiring Sen. Mark Walker.",
    candidates: [
      {
        id: "carina-santa-maria",
        name: "Carina Santa Maria",
        party: "Democrat",
        role: "Nonprofit Executive (Shelter, Inc.) & Licensed Clinical Social Worker",
        hometown: "Arlington Heights / Palatine area, IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "CS",
        fecRaised: "$780,000",
        fecCashOnHand: "$490,000",
        pacPolicy: "ISDF, Personal PAC, Teachers & IUOE Local 150 Backed",
        pacSummary: "Backed by outgoing Sen. Mark Walker, ISDF, Personal PAC, IEA, IFT, IUOE Local 150, and social-work/healthcare coalitions.",
        pacs: [
          { name: "Illinois Senate Democratic Fund (ISDF)", type: "Party Committee", amount: "$450,000+", stance: "Supporting" },
          { name: "Personal PAC, IEA, IFT & IUOE Local 150", type: "Labor PAC", amount: "$210,000+", stance: "Supporting" }
        ],
        endorsements: ["Sen. Mark Walker", "Personal PAC", "IEA", "IFT", "IUOE Local 150"],
        issues: {
          propertyTaxes: "Opposes any taxpayer bailout for a Chicago Bears stadium that would shift property tax burdens onto Arlington Heights, Palatine, or D214/D211 homeowners; supports public infrastructure only with strict taxpayer protections.",
          safetAct: "Supports the SAFE-T Act, assault weapons ban, and expanding 988 CESSA mental health crisis response.",
          budgetTaxes: "Prioritizes human-service funding, child welfare (DCFS reform), and middle-class tax relief.",
          pensions: "Supports Tier 2 pension reform for teachers and public employees.",
          energyGrid: "Supports clean energy and strict grid/water rules for Northwest Suburban data centers.",
          transit: "Supports Metra UP-NW commuter rail and Pace bus investments under NITA.",
          healthcare: "Clinical social worker championing mental health parity, reproductive freedom, and youth behavioral care.",
          education: "Supports full EBF funding for Township High School Districts 214 and 211."
        }
      },
      {
        id: "david-mathis",
        name: "David Mathis",
        party: "Republican",
        role: "Northwest Suburban Business & Civic Advocate",
        hometown: "Arlington Heights / Palatine area, IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "DM",
        fecRaised: "$195,000",
        fecCashOnHand: "$85,000",
        pacPolicy: "Suburban GOP & Small Business PACs",
        pacSummary: "Backed by Wheeling and Palatine Township GOP organizations and small-business donors.",
        pacs: [
          { name: "SRCC & Wheeling/Palatine Township GOP", type: "Party Committee", amount: "$95,000+", stance: "Supporting" }
        ],
        endorsements: ["Wheeling Township GOP", "Palatine Township GOP", "NFIB Supporters"],
        issues: {
          propertyTaxes: "Campaigns on Cook County property tax assessment spikes in the Northwest Suburbs and opposes corporate stadium handouts.",
          safetAct: "Calls for repealing cashless bail under the SAFE-T Act.",
          budgetTaxes: "Demands capping state spending and cutting corporate and income taxes.",
          pensions: "Opposes unfunded Tier 2 pension expansions that would increase state debt.",
          energyGrid: "Supports reliable nuclear and gas generation to lower ComEd bills.",
          transit: "Opposes RTA/NITA tax hikes on suburban commuters.",
          healthcare: "Supports market-based healthcare and ending non-citizen Medicaid spending.",
          education: "Supports parental rights and reviving Invest in Kids scholarships."
        }
      }
    ]
  },

  // ================= MARQUEE STATE HOUSE BATTLEGROUNDS & REGIONAL RACES =================
  {
    id: "il-house-52",
    level: "state_legislature",
    chamber: "State House",
    office: "Illinois State Representative - 52nd District",
    districtCode: "HD-52",
    districtName: "52nd House District (Barrington, Crystal Lake, Wauconda, Cary, Algonquin, Island Lake & Mundelein)",
    region: "Collar Counties (Lake, McHenry, Cook & Kane)",
    counties: ["Lake", "McHenry", "Cook", "Kane"],
    cities: ["Barrington", "Barrington Hills", "Crystal Lake", "Wauconda", "Island Lake", "Cary", "Algonquin", "Fox River Grove", "Mundelein"],
    pvi: "Even",
    rating: "Toss-Up (Rematch of 47-Vote 2024 Cliffhanger)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Martin McLaughlin (R)",
    primarySummary: "In a rematch of the closest House race in Illinois in 2024 (decided by just 47 votes), incumbent Rep. Martin McLaughlin (R) faces attorney Maria Peterson (D).",
    candidates: [
      {
        id: "martin-mclaughlin",
        name: "Martin McLaughlin",
        party: "Republican",
        role: "Illinois State Representative (HD-52, 2021-present) & Former Barrington Hills Village President",
        hometown: "Barrington Hills, IL",
        incumbentStatus: "Incumbent",
        photoInitials: "MM",
        fecRaised: "$1,280,000",
        fecCashOnHand: "$840,000",
        pacPolicy: "Top HRO Defense + Realtors RPAC, IMA & Chamber",
        pacSummary: "Top incumbent defense priority for House GOP Leader Tony McCombie (HRO); backed by Realtors RPAC, IMA, Illinois Chamber, and NFIB.",
        pacs: [
          { name: "House Republican Organization (HRO)", type: "Party Committee", amount: "$850,000+ Defense", stance: "Supporting" },
          { name: "Illinois Realtors RPAC, IMA & Chamber", type: "Trade PAC", amount: "$210,000+", stance: "Supporting" }
        ],
        endorsements: ["Illinois Realtors RPAC", "IMA", "Illinois Chamber", "NFIB"],
        issues: {
          propertyTaxes: "Points to his record cutting the Barrington Hills municipal property tax levy by 30%+ as Mayor; demands local levy caps and consolidation across Illinois.",
          safetAct: "Vocal critic of the SAFE-T Act; demands restoring judicial discretion to detain repeat and property-crime offenders.",
          budgetTaxes: "Opposes state budget growth, progressive tax schemes, and corporate tax hikes.",
          pensions: "Opposes unfunded Tier 2 benefit expansions that would add billions to state pension liabilities.",
          energyGrid: "Supports nuclear and natural gas energy to stop ComEd rate hikes.",
          transit: "Opposes suburban tax increases for Chicago transit.",
          healthcare: "Supports market-based healthcare reform and halting non-citizen healthcare spending.",
          education: "Supports school choice (Invest in Kids) and local school board accountability."
        }
      },
      {
        id: "maria-peterson",
        name: "Maria Peterson",
        party: "Democrat",
        role: "Healthcare & Regulatory Attorney",
        hometown: "North Barrington (Lake County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "MP",
        fecRaised: "$1,410,000",
        fecCashOnHand: "$920,000",
        pacPolicy: "#1 DPI House Pickup Target + Personal PAC, IEA, IFT & G-PAC",
        pacSummary: "Top House pickup target for Speaker Chris Welch's DPI; heavily backed by Personal PAC, IEA/IPACE, IFT, G-PAC, and Illinois Environmental Council.",
        pacs: [
          { name: "Democrats for the Illinois House / DPI", type: "Party Committee", amount: "$950,000+ Target Support", stance: "Supporting" },
          { name: "Personal PAC, G-PAC, IEA/IPACE & IFT", type: "Ideological PAC", amount: "$310,000+", stance: "Supporting" }
        ],
        endorsements: ["Personal PAC", "IEA", "IFT", "G-PAC", "Sierra Club / IEC", "Illinois AFL-CIO"],
        issues: {
          propertyTaxes: "Argues the best way to lower Lake and McHenry property taxes is increasing state EBF returns to suburban school districts and expanding senior homestead exemptions.",
          safetAct: "Supports gun violence prevention (assault weapons ban, red-flag laws) and funding local police.",
          budgetTaxes: "Highlights Illinois's 9 credit rating upgrades and elimination of the grocery tax.",
          pensions: "Supports fixing the Tier 2 Safe Harbor compliance issue for teachers and municipal workers.",
          energyGrid: "Supports clean energy, open-space conservation, and protecting homeowners from utility rate hikes.",
          transit: "Supports Metra UP-NW commuter rail reliability and suburban Pace service.",
          healthcare: "Healthcare attorney who campaigns on protecting reproductive rights, IVF, and lowering prescription drug costs.",
          education: "Strong defender of public schools and public libraries against book bans."
        }
      }
    ]
  },
  {
    id: "il-house-47",
    level: "state_legislature",
    chamber: "State House",
    office: "Illinois State Representative - 47th District (Open Seat)",
    districtCode: "HD-47",
    districtName: "47th House District (Wheaton, Naperville, Warrenville, West Chicago, Winfield & Glen Ellyn)",
    region: "Collar Counties (DuPage)",
    counties: ["DuPage"],
    cities: ["Wheaton", "Naperville", "Warrenville", "West Chicago", "Winfield", "Glen Ellyn"],
    pvi: "D+3",
    rating: "Toss-Up (Open GOP-Held DuPage Seat)",
    isOpenSeat: true,
    isBattleground: true,
    incumbent: "Amy Grant (R - Retiring)",
    primarySummary: "With GOP Rep. Amy Grant retiring in this Biden/Harris-won DuPage district, Wheaton City Councilwoman and teacher Erica Bray-Parker (D) faces Republican Robert Vrankovich (R).",
    candidates: [
      {
        id: "erica-bray-parker",
        name: "Erica Bray-Parker",
        party: "Democrat",
        role: "Wheaton City Councilwoman & High School Civics Teacher",
        hometown: "Wheaton (DuPage County), IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "EB",
        fecRaised: "$1,180,000",
        fecCashOnHand: "$790,000",
        pacPolicy: "Top DPI Open-Seat Flip Target + IEA, IFT & Personal PAC",
        pacSummary: "Heavily funded by Speaker Welch's DPI ($800k+), Illinois Education Association (IPACE), IFT, Personal PAC, and G-PAC.",
        pacs: [
          { name: "Democrats for the Illinois House / DPI", type: "Party Committee", amount: "$800,000+", stance: "Supporting" },
          { name: "IEA/IPACE, IFT, Personal PAC & G-PAC", type: "Labor PAC", amount: "$290,000+", stance: "Supporting" }
        ],
        endorsements: ["Personal PAC", "IEA", "IFT", "G-PAC", "DuPage Democrats"],
        issues: {
          propertyTaxes: "Wheaton Councilwoman who emphasizes balanced municipal budgets and increasing state EBF school funding for Wheaton D200 and Naperville D203 to hold down property taxes.",
          safetAct: "Supports Illinois's assault weapons ban, safe storage laws, and local DuPage police funding.",
          budgetTaxes: "Focuses on middle-class affordability and protecting municipal LGDF (Local Government Distributive Fund) revenue shares.",
          pensions: "Public school teacher who champions fixing the Tier 2 teacher pension penalty.",
          energyGrid: "Supports clean energy, Fermilab research in Warrenville, and stormwater infrastructure.",
          transit: "Supports Metra BNSF and UP-W commuter rail and Pace bus connections.",
          healthcare: "Campaigns on protecting reproductive freedom, IVF access, and mental health services.",
          education: "Veteran classroom teacher opposing private school vouchers and book bans."
        }
      },
      {
        id: "robert-vrankovich",
        name: "Robert Vrankovich",
        party: "Republican",
        role: "DuPage Business Professional & Civic Advocate",
        hometown: "Wheaton / Naperville area (DuPage County), IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "RV",
        fecRaised: "$820,000",
        fecCashOnHand: "$540,000",
        pacPolicy: "Top HRO Open-Seat Defense + DuPage GOP & Business PACs",
        pacSummary: "Backed by HRO, DuPage County GOP, Realtors RPAC, and suburban business groups seeking to hold their last seat in central DuPage County.",
        pacs: [
          { name: "House Republican Organization (HRO)", type: "Party Committee", amount: "$600,000+", stance: "Supporting" },
          { name: "DuPage GOP, Realtors RPAC & NFIB", type: "Trade PAC", amount: "$160,000+", stance: "Supporting" }
        ],
        endorsements: ["Retiring Rep. Amy Grant", "DuPage County GOP", "Illinois Realtors RPAC", "NFIB"],
        issues: {
          propertyTaxes: "Campaigns on capping DuPage County property taxes and cutting state mandates.",
          safetAct: "Calls for repealing cashless bail under the SAFE-T Act and backing DuPage County law enforcement.",
          budgetTaxes: "Opposes state spending increases and tax hikes.",
          pensions: "Supports fiscal restraint on state pension liabilities.",
          energyGrid: "Supports nuclear and natural gas reliability to keep ComEd bills down.",
          transit: "Opposes suburban subsidies for the CTA.",
          healthcare: "Pro-life; opposes state taxpayer funding for undocumented immigrant healthcare.",
          education: "Supports parental rights and reviving the Invest in Kids scholarship program."
        }
      }
    ]
  },
  {
    id: "il-house-76",
    level: "state_legislature",
    chamber: "State House",
    office: "Illinois State Representative - 76th District",
    districtCode: "HD-76",
    districtName: "76th House District (Ottawa, LaSalle, Peru, Streator, Mendota, Spring Valley & DeKalb NIU Precincts)",
    region: "Northern Illinois & Illinois Valley",
    counties: ["LaSalle", "DeKalb", "Bureau"],
    cities: ["Ottawa", "LaSalle", "Peru", "Streator", "Mendota", "Spring Valley", "DeKalb"],
    pvi: "Even",
    rating: "Toss-Up (Rematch of Razor-Thin 2024 Race)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Amy 'Murri' Briel (D)",
    primarySummary: "In a rematch of their 2024 cliffhanger (won by Briel by ~1%), first-term Rep. Amy 'Murri' Briel (D) faces Republican Liz Bishop (R).",
    candidates: [
      {
        id: "amy-murri-briel",
        name: "Amy 'Murri' Briel",
        party: "Democrat",
        role: "Illinois State Representative (HD-76, 2025-present) & Former Legislative Chief of Staff",
        hometown: "Ottawa (LaSalle County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "AB",
        fecRaised: "$1,350,000",
        fecCashOnHand: "$910,000",
        pacPolicy: "Top DPI Downstate Defense + Building Trades, IBEW & Teachers",
        pacSummary: "Heavily defended by Speaker Welch's DPI ($950k+), IUOE Local 150, IBEW, LIUNA, IEA, IFT, and Personal PAC.",
        pacs: [
          { name: "Democrats for the Illinois House / DPI", type: "Party Committee", amount: "$950,000+ Defense", stance: "Supporting" },
          { name: "IUOE Local 150, IBEW, LIUNA & Building Trades", type: "Labor PAC", amount: "$240,000+", stance: "Supporting" },
          { name: "IEA/IPACE, IFT & Personal PAC", type: "Ideological PAC", amount: "$140,000+", stance: "Supporting" }
        ],
        endorsements: ["IUOE Local 150", "IBEW", "LIUNA", "IEA", "IFT", "Personal PAC"],
        issues: {
          propertyTaxes: "Focuses on expanding property tax exemptions for seniors and disabled veterans and increasing state EBF funding for Illinois Valley and DeKalb schools.",
          safetAct: "Supports targeted funding for rural and municipal police departments alongside domestic violence protections.",
          budgetTaxes: "Champions Starved Rock / Illinois Valley state park infrastructure, prevailing wage union jobs, and NIU funding in DeKalb.",
          pensions: "Strongly backs fixing Tier 2 pensions for teachers, state workers, and university staff (SURS).",
          energyGrid: "Protects union jobs at the LaSalle County Nuclear Generating Station and supports clean energy manufacturing.",
          transit: "Supports Illinois River bridge replacements and rural transit grants.",
          healthcare: "Defends reproductive freedom and rural hospital stability in Peru, Ottawa, and Streator.",
          education: "Champions Northern Illinois University (NIU), Illinois Valley Community College (IVCC), and public K-12 schools."
        }
      },
      {
        id: "liz-bishop",
        name: "Liz Bishop",
        party: "Republican",
        role: "Peru City Clerk / Local Business & Conservative Activist",
        hometown: "Peru (LaSalle County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "LB",
        fecRaised: "$1,120,000",
        fecCashOnHand: "$740,000",
        pacPolicy: "#1 HRO Northern IL Pickup Target + Farm Bureau & NFIB",
        pacSummary: "Top House GOP target backed by HRO ($800k+), LaSalle and DeKalb County GOP organizations, NFIB, and Illinois Right to Life.",
        pacs: [
          { name: "House Republican Organization (HRO)", type: "Party Committee", amount: "$800,000+ Target Support", stance: "Supporting" },
          { name: "NFIB, Farm Bureau & Right to Life PACs", type: "Ideological PAC", amount: "$160,000+", stance: "Supporting" }
        ],
        endorsements: ["NFIB Illinois", "Illinois Right to Life", "LaSalle & DeKalb County GOP"],
        issues: {
          propertyTaxes: "Campaigns on capping LaSalle and DeKalb property taxes and repealing unfunded state mandates.",
          safetAct: "Makes repealing the SAFE-T Act and ending Illinois's sanctuary state law her top campaign issues.",
          budgetTaxes: "Attacks state budget growth and non-citizen healthcare spending.",
          pensions: "Calls for state fiscal restraint before expanding pension obligations.",
          energyGrid: "Supports nuclear and fossil-fuel power while opposing state preemption of county zoning on commercial wind and solar farms.",
          transit: "Opposes diverting downstate Road Fund money to Chicago transit.",
          healthcare: "Pro-life conservative; focuses on reopening and stabilizing Illinois Valley hospital services.",
          education: "Supports parental rights and reviving Invest in Kids private school scholarships."
        }
      }
    ]
  },
  {
    id: "il-house-97",
    level: "state_legislature",
    chamber: "State House",
    office: "Illinois State Representative - 97th District",
    districtCode: "HD-97",
    districtName: "97th House District (Plainfield, Joliet, Bolingbrook, Oswego, Shorewood, Montgomery & Naperville)",
    region: "Collar Counties (Will, Kendall & DuPage)",
    counties: ["Will", "Kendall", "DuPage"],
    cities: ["Plainfield", "Joliet", "Bolingbrook", "Oswego", "Shorewood", "Montgomery", "Naperville"],
    pvi: "D+2",
    rating: "Toss-Up (Marquee Will/Kendall Battleground)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Jessica Dixon Heitman (D - Appointed July 2026 after Harry Benton resigned)",
    primarySummary: "Upended in July 2026 when Democratic Rep. Harry Benton resigned amid an ethics probe; local Democrats appointed Jessica Dixon Heitman (D, granddaughter of U.S. Sen. Alan Dixon) to face Republican Gabby Shanahan (R).",
    candidates: [
      {
        id: "jessica-dixon-heitman",
        name: "Jessica Dixon Heitman",
        party: "Democrat",
        role: "Illinois State Representative (HD-97, appointed July 2026); Granddaughter of Former U.S. Sen. Alan Dixon",
        hometown: "Plainfield (Will County), IL",
        incumbentStatus: "Incumbent (Appointed)",
        photoInitials: "JD",
        fecRaised: "$1,250,000",
        fecCashOnHand: "$890,000",
        pacPolicy: "Emergency DPI Defense + IUOE Local 150, Building Trades & Teachers",
        pacSummary: "Backed by an emergency $1M+ defense effort from Speaker Welch's DPI, IUOE Local 150, IBEW, LIUNA, IEA, IFT, and Personal PAC.",
        pacs: [
          { name: "Democrats for the Illinois House / DPI", type: "Party Committee", amount: "$900,000+ Emergency Defense", stance: "Supporting" },
          { name: "IUOE Local 150, IBEW & LIUNA", type: "Labor PAC", amount: "$220,000+", stance: "Supporting" },
          { name: "IEA/IPACE, IFT & Personal PAC", type: "Ideological PAC", amount: "$120,000+", stance: "Supporting" }
        ],
        endorsements: ["IUOE Local 150", "IBEW", "LIUNA", "IEA", "IFT", "Personal PAC"],
        issues: {
          propertyTaxes: "Focuses on surging Will and Kendall County residential property tax bills by demanding higher state EBF school funding for fast-growing Plainfield D202 and Oswego D308.",
          safetAct: "Supports local police funding and domestic violence protections.",
          budgetTaxes: "Pledges strict ethics reform and middle-class tax relief.",
          pensions: "Supports Tier 2 pension reform for teachers, police, and firefighters.",
          energyGrid: "Supports grid reliability and strict local input on warehouse and data center siting.",
          transit: "Supports I-55 and Route 59 corridor widening and Metra commuter service.",
          healthcare: "Champions reproductive rights, IVF access, and lowering family healthcare costs.",
          education: "Strong advocate for Plainfield D202 and Oswego D308 public schools."
        }
      },
      {
        id: "gabby-shanahan",
        name: "Gabby Shanahan",
        party: "Republican",
        role: "Will/Kendall Small Business & Community Advocate",
        hometown: "Plainfield / Joliet area, IL",
        incumbentStatus: "Challenger",
        photoInitials: "GS",
        fecRaised: "$1,150,000",
        fecCashOnHand: "$810,000",
        pacPolicy: "#1 HRO Suburban Flip Target + Will/Kendall GOP & Business PACs",
        pacSummary: "Elevated to HRO's #1 suburban pickup target following Harry Benton's resignation; heavily backed by HRO, Will and Kendall GOP, NFIB, and IMA.",
        pacs: [
          { name: "House Republican Organization (HRO)", type: "Party Committee", amount: "$850,000+ Target Support", stance: "Supporting" },
          { name: "Will/Kendall GOP, NFIB & IMA", type: "Trade PAC", amount: "$190,000+", stance: "Supporting" }
        ],
        endorsements: ["Will County GOP", "Kendall County GOP", "NFIB Illinois", "IMA"],
        issues: {
          propertyTaxes: "Makes Will and Kendall County property tax relief and Springfield ethics corruption her centerpiece issues.",
          safetAct: "Calls for repealing cashless bail under the SAFE-T Act and backing Will/Kendall sheriffs.",
          budgetTaxes: "Opposes state spending growth and tax hikes.",
          pensions: "Supports fiscal discipline on state pension debt.",
          energyGrid: "Opposes CEJA green mandates that raise ComEd bills.",
          transit: "Prioritizes Southwest Suburban highway and truck-routing relief over Chicago transit bailouts.",
          healthcare: "Opposes taxpayer-funded healthcare for undocumented immigrants.",
          education: "Supports parental rights and reviving Invest in Kids scholarships."
        }
      }
    ]
  },
  {
    id: "il-house-104",
    level: "state_legislature",
    chamber: "State House",
    office: "Illinois State Representative - 104th District",
    districtCode: "HD-104",
    districtName: "104th House District (Danville, Champaign, Rantoul, Savoy & Mahomet)",
    region: "Central Illinois (Champaign & Vermilion Counties)",
    counties: ["Champaign", "Vermilion"],
    cities: ["Danville", "Champaign", "Rantoul", "Savoy", "Mahomet", "Gifford", "Tilton"],
    pvi: "R+1",
    rating: "Toss-Up (Marquee East-Central IL Battleground)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Brandun Schweizer (R)",
    primarySummary: "First-term incumbent Rep. Brandun Schweizer (R, retired U.S. Marine) defends this competitive Champaign-Danville district against Democrat Mary Catherine Roberson (D, former aide to Rep. Nikki Budzinski).",
    candidates: [
      {
        id: "brandun-schweizer",
        name: "Brandun Schweizer",
        party: "Republican",
        role: "Illinois State Representative (HD-104, appointed Dec 2023, elected 2024); Retired U.S. Marine Sergeant & Former Danville Code Official",
        hometown: "Danville (Vermilion County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "BS",
        fecRaised: "$1,150,000",
        fecCashOnHand: "$780,000",
        pacPolicy: "Top HRO Downstate Defense + IUOE Local 150, IBEW & Realtors",
        pacSummary: "Bipartisan labor-friendly Republican heavily backed by HRO, IUOE Local 150, IBEW, Illinois Realtors RPAC, and Illinois Farm Bureau.",
        pacs: [
          { name: "House Republican Organization (HRO)", type: "Party Committee", amount: "$780,000+ Defense", stance: "Supporting" },
          { name: "IUOE Local 150 & IBEW Local PACs", type: "Labor PAC", amount: "$195,000+", stance: "Supporting" },
          { name: "Illinois Realtors RPAC & Farm Bureau ACTIVATOR", type: "Trade PAC", amount: "$110,000+", stance: "Supporting" }
        ],
        endorsements: ["IUOE Local 150", "IBEW", "Illinois Realtors RPAC", "Illinois Farm Bureau"],
        issues: {
          propertyTaxes: "Focuses on veteran property tax relief, Danville commercial redevelopment, and capping residential property taxes in Champaign and Vermilion counties.",
          safetAct: "Supports restoring pretrial detention for repeat violent and fentanyl offenders while funding local police.",
          budgetTaxes: "Supports Danville Golden Nugget casino/economic development, prevailing wage infrastructure, and state budget discipline.",
          pensions: "Supports Tier 2 police, firefighter, and SURS pension fixes.",
          energyGrid: "Protects the Mahomet Aquifer from carbon pipeline risks and backs reliable Ameren baseload power.",
          transit: "Supports I-74 corridor upgrades and rural road funding.",
          healthcare: "Focuses on Danville VA Illiana Health Care System and Carle Foundation Hospital access.",
          education: "Supports Danville Area Community College (DACC), UIUC, and career technical education."
        }
      },
      {
        id: "mary-catherine-roberson",
        name: "Mary Catherine Roberson",
        party: "Democrat",
        role: "Former Constituent Services & District Aide to U.S. Rep. Nikki Budzinski",
        hometown: "Champaign / Danville area, IL",
        incumbentStatus: "Challenger",
        photoInitials: "MR",
        fecRaised: "$1,080,000",
        fecCashOnHand: "$720,000",
        pacPolicy: "#1 DPI Downstate Flip Target + Personal PAC, IEA, IFT & SEIU",
        pacSummary: "Top downstate House target for Speaker Welch's DPI; backed by Personal PAC, IEA, IFT, LIUNA, and SEIU.",
        pacs: [
          { name: "Democrats for the Illinois House / DPI", type: "Party Committee", amount: "$750,000+ Target Support", stance: "Supporting" },
          { name: "Personal PAC, IEA/IPACE, IFT & SEIU", type: "Labor PAC", amount: "$220,000+", stance: "Supporting" }
        ],
        endorsements: ["U.S. Rep. Nikki Budzinski", "Personal PAC", "IEA", "IFT", "SEIU"],
        issues: {
          propertyTaxes: "Advocates increasing state EBF school funding for Danville D118, Rantoul, and Champaign Unit 4 to lower local property tax burdens.",
          safetAct: "Supports gun safety laws and community violence intervention alongside local police resources.",
          budgetTaxes: "Focuses on working-family tax credits, child care access, and economic investment in Danville and Rantoul.",
          pensions: "Champions fixing the Tier 2 pension penalty for UIUC (SURS) workers and teachers.",
          energyGrid: "Supports protecting the Mahomet Aquifer, clean energy jobs, and holding Ameren accountable for utility rate hikes.",
          transit: "Supports Champaign-Urbana MTD bus expansion and regional passenger rail.",
          healthcare: "Campaigns on protecting reproductive rights and expanding maternal and rural healthcare in Vermilion County.",
          education: "Strong advocate for UIUC, DACC, and public K-12 education."
        }
      }
    ]
  },
  {
    id: "il-house-112",
    level: "state_legislature",
    chamber: "State House",
    office: "Illinois State Representative - 112th District",
    districtCode: "HD-112",
    districtName: "112th House District (Edwardsville, Collinsville, O'Fallon, Glen Carbon, Maryville & Fairview Heights)",
    region: "Metro East & Southern Illinois",
    counties: ["Madison", "St. Clair"],
    cities: ["Edwardsville", "Collinsville", "O'Fallon", "Glen Carbon", "Maryville", "Fairview Heights", "Caseyville", "Pontoon Beach"],
    pvi: "D+2",
    rating: "Lean Democratic (Perennial Metro East Battleground)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Katie Stuart (D)",
    primarySummary: "Assistant Majority Leader Rep. Katie Stuart (D, former SIUE math instructor) defends her Metro East battleground seat against O'Fallon City Councilman Jimmy Ford (R).",
    candidates: [
      {
        id: "katie-stuart",
        name: "Katie Stuart",
        party: "Democrat",
        role: "Illinois State Representative (HD-112, 2017-present); Assistant Majority Leader & Former SIUE Math Instructor",
        hometown: "Edwardsville (Madison County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "KS",
        fecRaised: "$1,620,000",
        fecCashOnHand: "$1,150,000",
        pacPolicy: "Top DPI Metro East Defense + Teachers, Building Trades & Personal PAC",
        pacSummary: "One of the most battle-tested Democrats in Illinois; heavily backed by DPI ($1.1M+), IEA, IFT, IUOE Local 150, LIUNA, IBEW, and Personal PAC.",
        pacs: [
          { name: "Democrats for the Illinois House / DPI", type: "Party Committee", amount: "$1,100,000+ Defense", stance: "Supporting" },
          { name: "IEA/IPACE, IFT & Personal PAC", type: "Labor PAC", amount: "$260,000+", stance: "Supporting" },
          { name: "IUOE Local 150, LIUNA & IBEW", type: "Labor PAC", amount: "$190,000+", stance: "Supporting" }
        ],
        endorsements: ["IEA", "IFT", "IUOE Local 150", "LIUNA", "Personal PAC", "Illinois AFL-CIO"],
        issues: {
          propertyTaxes: "Focuses on increasing state EBF school funding for Edwardsville D7, Collinsville U10, and O'Fallon schools and expanding veteran/senior property tax exemptions.",
          safetAct: "Supports police training grants and domestic violence detention standards.",
          budgetTaxes: "Sponsored professional licensure reciprocity for military spouses at Scott Air Force Base and eliminated the statewide grocery tax.",
          pensions: "Chairs Higher Education; leading champion of fixing Tier 2 SURS and TRS pensions for SIUE and K-12 educators.",
          energyGrid: "Supports holding Ameren accountable for Metro East rate spikes and investing in grid storage.",
          transit: "Supports MetroLink extension to MidAmerica Airport/Scott AFB and MCT bus transit.",
          healthcare: "Strong defender of reproductive freedom, IVF coverage, and capping insulin costs.",
          education: "Former SIUE math teacher; champions SIUE equity funding and public K-12 schools."
        }
      },
      {
        id: "jimmy-ford",
        name: "Jimmy Ford",
        party: "Republican",
        role: "O'Fallon City Council Member & Small Business Professional",
        hometown: "O'Fallon (St. Clair County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "JF",
        fecRaised: "$1,180,000",
        fecCashOnHand: "$790,000",
        pacPolicy: "Top HRO Metro East Target + Madison/St. Clair GOP & Business PACs",
        pacSummary: "Backed by over $900k in HRO support, St. Clair and Madison County GOP, NFIB, and IMA.",
        pacs: [
          { name: "House Republican Organization (HRO)", type: "Party Committee", amount: "$900,000+ Target Support", stance: "Supporting" },
          { name: "NFIB, IMA & Metro East Business Donors", type: "Trade PAC", amount: "$180,000+", stance: "Supporting" }
        ],
        endorsements: ["St. Clair County GOP", "Madison County GOP", "NFIB Illinois", "IMA"],
        issues: {
          propertyTaxes: "O'Fallon Councilman campaigning on high St. Clair and Madison County property taxes and cutting state spending.",
          safetAct: "Makes repealing cashless bail under the SAFE-T Act a central plank to combat cross-river vehicle thefts and crime.",
          budgetTaxes: "Opposes state tax hikes and non-citizen healthcare spending; supports Scott AFB military families.",
          pensions: "Calls for fiscal discipline before expanding state pension liabilities.",
          energyGrid: "Attacks CEJA green mandates for shutting down downstate power plants and spiking Ameren electric bills.",
          transit: "Opposes diverting downstate Road Fund money to bail out Chicago transit.",
          healthcare: "Pro-life; supports market-based healthcare reforms.",
          education: "Supports parental rights and reviving Invest in Kids tax-credit scholarships."
        }
      }
    ]
  },
  {
    id: "il-house-114",
    level: "state_legislature",
    chamber: "State House",
    office: "Illinois State Representative - 114th District",
    districtCode: "HD-114",
    districtName: "114th House District (East St. Louis, O'Fallon, Mascoutah, Cahokia Heights, Millstadt, Freeburg & Lebanon)",
    region: "Metro East & Southern Illinois",
    counties: ["St. Clair"],
    cities: ["East St. Louis", "O'Fallon", "Mascoutah", "Cahokia Heights", "Millstadt", "Freeburg", "Lebanon", "Dupo", "New Athens"],
    pvi: "Even",
    rating: "Toss-Up (Marquee St. Clair County Battleground)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Kevin Schmidt (R)",
    primarySummary: "Two-term incumbent Rep. Kevin Schmidt (R) defends this uniquely split urban-rural St. Clair County district (combining East St. Louis and Cahokia Heights with Mascoutah, O'Fallon, and Millstadt) against Democrat George McClellan Jr. (D).",
    candidates: [
      {
        id: "kevin-schmidt",
        name: "Kevin Schmidt",
        party: "Republican",
        role: "Illinois State Representative (HD-114, 2023-present) & Chiropractor",
        hometown: "Millstadt (St. Clair County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "KS",
        fecRaised: "$1,380,000",
        fecCashOnHand: "$940,000",
        pacPolicy: "Top HRO Metro East Defense + IUOE Local 150, Realtors & IMA",
        pacSummary: "Heavily defended by HRO ($1M+), Illinois Realtors RPAC, IUOE Local 150, IMA, and Illinois Chamber.",
        pacs: [
          { name: "House Republican Organization (HRO)", type: "Party Committee", amount: "$950,000+ Defense", stance: "Supporting" },
          { name: "IUOE Local 150 & Illinois Realtors RPAC", type: "Trade PAC", amount: "$210,000+", stance: "Supporting" },
          { name: "IMA, Illinois Chamber & NFIB", type: "Trade PAC", amount: "$120,000+", stance: "Supporting" }
        ],
        endorsements: ["IUOE Local 150", "Illinois Realtors RPAC", "IMA", "NFIB"],
        issues: {
          propertyTaxes: "Campaigns on St. Clair County property tax relief, senior assessment freezes, and Scott AFB military family exemptions.",
          safetAct: "Calls for repealing cashless bail under the SAFE-T Act and increasing police funding across St. Clair County.",
          budgetTaxes: "Focuses on Cahokia Heights / East St. Louis sewer and flood infrastructure accountability and cutting state waste.",
          pensions: "Supports police and firefighter pension stability.",
          energyGrid: "Protects Prairie State Energy Campus coal plant jobs and opposes CEJA rate hikes.",
          transit: "Supports MetroLink security and Scott AFB/MidAmerica Airport road infrastructure.",
          healthcare: "Chiropractor focused on rural and urban clinic access and lowering insurance mandates.",
          education: "Supports local schools and reviving Invest in Kids scholarships."
        }
      },
      {
        id: "george-mcclellan-jr",
        name: "George McClellan Jr.",
        party: "Democrat",
        role: "East St. Louis / St. Clair County Community & Labor Advocate",
        hometown: "East St. Louis / Cahokia Heights, IL",
        incumbentStatus: "Challenger",
        photoInitials: "GM",
        fecRaised: "$1,050,000",
        fecCashOnHand: "$690,000",
        pacPolicy: "DPI Pickup Target + St. Clair Dems, SEIU, IEA & IFT",
        pacSummary: "Backed by DPI ($750k+), St. Clair County Democratic Chairman Mark Kern's organization, SEIU, IEA, IFT, and Personal PAC.",
        pacs: [
          { name: "Democrats for the Illinois House / DPI", type: "Party Committee", amount: "$750,000+ Target Support", stance: "Supporting" },
          { name: "SEIU, IEA/IPACE, IFT & St. Clair Democratic Party", type: "Labor PAC", amount: "$240,000+", stance: "Supporting" }
        ],
        endorsements: ["St. Clair County Democratic Party", "SEIU", "IEA", "IFT", "Personal PAC"],
        issues: {
          propertyTaxes: "Advocates EBF state school funding for East St. Louis D189, Cahokia D187, and Mascoutah D19 to relieve homeowner property taxes.",
          safetAct: "Defends the SAFE-T Act and violence prevention funding.",
          budgetTaxes: "Prioritizes state/federal EPA flood and sanitary sewer reconstruction for Cahokia Heights and East St. Louis.",
          pensions: "Supports Tier 2 pension reform for teachers and public workers.",
          energyGrid: "Supports clean energy job training and low-income utility bill assistance (LIHEAP).",
          transit: "Supports MetroLink expansion and Bi-State transit funding.",
          healthcare: "Champions Medicaid protection, maternal health equity, and reproductive freedom.",
          education: "Supports public school funding and opposes private school vouchers."
        }
      }
    ]
  },
  {
    id: "il-house-68",
    level: "state_legislature",
    chamber: "State House",
    office: "Illinois State Representative - 68th District",
    districtCode: "HD-68",
    districtName: "68th House District (Rockford, Loves Park, Machesney Park & Cherry Valley)",
    region: "Northern Illinois (Winnebago County)",
    counties: ["Winnebago"],
    cities: ["Rockford", "Loves Park", "Machesney Park", "Cherry Valley"],
    pvi: "D+1",
    rating: "Lean Democratic (Marquee Rockford Battleground)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Dave Vella (D)",
    primarySummary: "Three-term moderate pro-labor incumbent Rep. Dave Vella (D) defends his Rockford/Loves Park seat against Republican Kathy Easton (R).",
    candidates: [
      {
        id: "dave-vella",
        name: "Dave Vella",
        party: "Democrat",
        role: "Illinois State Representative (HD-68, 2021-present) & Labor/Workers' Compensation Attorney",
        hometown: "Rockford (Winnebago County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "DV",
        fecRaised: "$1,420,000",
        fecCashOnHand: "$960,000",
        pacPolicy: "Top DPI Northern IL Defense + UAW, IUOE Local 150, ITLA & Police/Fire Unions",
        pacSummary: "Runs as an independent-minded pro-labor, pro-police Democrat; heavily backed by DPI, UAW, IUOE Local 150, IBEW, ITLA, Associated Fire Fighters (AFFI), and local police unions.",
        pacs: [
          { name: "Democrats for the Illinois House / DPI", type: "Party Committee", amount: "$900,000+ Defense", stance: "Supporting" },
          { name: "UAW, IUOE Local 150, IBEW & LIUNA", type: "Labor PAC", amount: "$280,000+", stance: "Supporting" },
          { name: "ITLA (Trial Lawyers), AFFI & Police Unions", type: "Trade PAC", amount: "$180,000+", stance: "Supporting" }
        ],
        endorsements: ["United Auto Workers (UAW)", "IUOE Local 150", "AFFI (Firefighters)", "Rockford Police PBPA", "IEA", "IFT"],
        issues: {
          propertyTaxes: "Sponsored legislation expanding Winnebago County senior property tax freezes and bringing manufacturing jobs back to expand the commercial tax base.",
          safetAct: "Pro-police moderate who voted against initial versions of the SAFE-T Act and sponsored trailer bills tightening pretrial detention and funding Rockford police body cameras and hiring.",
          budgetTaxes: "Championed the REV Illinois tax incentives that secured the $5B Stellantis deal to reopen the Belvidere Assembly Plant.",
          pensions: "Leading House advocate for restoring Tier 2 police, firefighter, and teacher pension benefits.",
          energyGrid: "Supports Byron nuclear plant preservation and industrial grid reliability.",
          transit: "Championed state capital funding to restore passenger rail (Metra/Amtrak) between Rockford and Chicago.",
          healthcare: "Supports lowering prescription drug costs and protecting Rockford hospital systems (UW Health SwedishAmerican, OSF).",
          education: "Supports Rockford RPS 205, Harlem D122, and Rock Valley College."
        }
      },
      {
        id: "kathy-easton",
        name: "Kathy Easton",
        party: "Republican",
        role: "Winnebago County Conservative & Business Advocate",
        hometown: "Rockford / Loves Park (Winnebago County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "KE",
        fecRaised: "$680,000",
        fecCashOnHand: "$410,000",
        pacPolicy: "HRO Target Support + Winnebago GOP & NFIB",
        pacSummary: "Backed by HRO, Winnebago County GOP, NFIB, and conservative grassroots organizations.",
        pacs: [
          { name: "House Republican Organization (HRO)", type: "Party Committee", amount: "$500,000+", stance: "Supporting" },
          { name: "Winnebago County GOP & NFIB", type: "Trade PAC", amount: "$110,000+", stance: "Supporting" }
        ],
        endorsements: ["Winnebago County GOP", "NFIB Illinois", "Illinois Family Action"],
        issues: {
          propertyTaxes: "Campaigns on Winnebago County's high property tax rates and calls for hard state property tax caps.",
          safetAct: "Demands full repeal of the SAFE-T Act and ending Illinois's sanctuary state status.",
          budgetTaxes: "Attacks state budget growth and corporate subsidy giveaways.",
          pensions: "Supports fiscal restraint on state pension obligations.",
          energyGrid: "Opposes CEJA green mandates and EV rules.",
          transit: "Questions the cost of the Rockford-to-Chicago passenger rail project vs. fixing local roads.",
          healthcare: "Pro-life; opposes state healthcare spending on undocumented immigrants.",
          education: "Supports universal school choice and reviving Invest in Kids scholarships."
        }
      }
    ]
  },

  // ================= ADDITIONAL REGIONAL ANCHOR RACES (CHICAGO, SUBURBS & DOWNSTATE) =================
  {
    id: "il-sen-08",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 8th District",
    districtCode: "SD-8",
    districtName: "8th Senate District (Far North Side Chicago, Skokie, Lincolnwood, Morton Grove & Niles)",
    region: "Chicago Far North Side & Near North Suburbs",
    counties: ["Cook"],
    cities: ["Chicago - West Ridge", "Chicago - Sauganash", "Skokie", "Lincolnwood", "Morton Grove", "Niles", "Glenview"],
    pvi: "D+22",
    rating: "Safe Democratic (Senate Transportation Chair)",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Ram Villivalam (D)",
    primarySummary: "Senate Transportation Chair Ram Villivalam (D, chief architect of SB 2111 / NITA transit overhaul) faces Republican Vince Romano (R) and independent write-in Aris Yanibas.",
    candidates: [
      {
        id: "ram-villivalam",
        name: "Ram Villivalam",
        party: "Democrat",
        role: "Illinois State Senator (SD-8, 2019-present); Chair, Senate Transportation Committee & Former SEIU Organizer",
        hometown: "Chicago (Sauganash / Far North Side), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "RV",
        fecRaised: "$1,450,000",
        fecCashOnHand: "$1,020,000",
        pacPolicy: "Heavy Building Trades (IUOE 150, LIUNA), SEIU & ISDF Backing",
        pacSummary: "As Senate Transportation Chair, receives major support from IUOE Local 150, LIUNA, IBEW, SEIU, IFT, IEA, and ISDF.",
        pacs: [
          { name: "IUOE Local 150, LIUNA, IBEW & Teamsters", type: "Labor PAC", amount: "$380,000+", stance: "Supporting" },
          { name: "SEIU Healthcare, IFT, IEA & Personal PAC", type: "Labor PAC", amount: "$240,000+", stance: "Supporting" }
        ],
        endorsements: ["IUOE Local 150", "LIUNA", "SEIU", "Chicago Federation of Labor", "Personal PAC"],
        issues: {
          propertyTaxes: "Supports senior property tax relief and EBF school funding for Skokie, Niles, and CPS.",
          safetAct: "Defends the SAFE-T Act and authored transit worker assault protection laws.",
          budgetTaxes: "Championed paid family leave and Asian American history curriculum in Illinois.",
          pensions: "Strong labor advocate for fixing Tier 2 pensions.",
          energyGrid: "Supports zero-emission transit buses, EV charging corridors, and CEJA.",
          transit: "Principal Senate author of SB 2111 creating the Northern Illinois Transit Authority (NITA) and securing $1.5B for CTA, Metra, and Pace.",
          healthcare: "Supports universal healthcare access, Medicaid expansion, and reproductive freedom.",
          education: "Supports public schools, Oakton College, and universal pre-K."
        }
      },
      {
        id: "vince-romano",
        name: "Vince Romano",
        party: "Republican",
        role: "Niles / North Suburban Business & Civic Candidate",
        hometown: "Niles (Cook County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "VR",
        fecRaised: "$28,000",
        fecCashOnHand: "$11,000",
        pacPolicy: "Local GOP Grassroots",
        pacSummary: "Funded by Niles and Maine Township GOP volunteers and small donors.",
        pacs: [
          { name: "Niles & Maine Township GOP", type: "Party Committee", amount: "Local Support", stance: "Supporting" }
        ],
        endorsements: ["Niles Township GOP"],
        issues: {
          propertyTaxes: "Campaigns against Cook County property tax spikes in Skokie, Niles, and Morton Grove.",
          safetAct: "Calls for repealing cashless bail under the SAFE-T Act.",
          budgetTaxes: "Opposes state tax hikes and migrant shelter spending.",
          pensions: "Supports capping unfunded state pension liabilities.",
          energyGrid: "Opposes costly EV and building electrification mandates.",
          transit: "Criticizes the $1.5B NITA transit bill for raising regional taxes without firing failing transit executives.",
          healthcare: "Supports market-based healthcare.",
          education: "Supports parental rights and reviving Invest in Kids scholarships."
        }
      }
    ]
  },
  {
    id: "il-house-26",
    level: "state_legislature",
    chamber: "State House",
    office: "Illinois State Representative - 26th District",
    districtCode: "HD-26",
    districtName: "26th House District (Downtown Chicago, The Loop, Gold Coast, Streeterville, South Loop, Bronzeville & Hyde Park)",
    region: "Chicago Downtown & Lakefront",
    counties: ["Cook"],
    cities: ["Chicago - The Loop", "Chicago - River North", "Chicago - Gold Coast", "Chicago - Streeterville", "Chicago - South Loop", "Chicago - Bronzeville", "Chicago - Hyde Park", "Chicago - Kenwood", "Chicago - South Shore"],
    pvi: "D+36",
    rating: "Safe Democratic (Speaker Pro Tempore)",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Kam Buckner (D)",
    primarySummary: "Speaker Pro Tempore Kam Buckner (D, House lead on NITA transit reform and Downtown Chicago revitalization) runs unopposed on the November 2026 ballot.",
    candidates: [
      {
        id: "kam-buckner",
        name: "Kambium 'Kam' Buckner",
        party: "Democrat",
        role: "Illinois State Representative (HD-26, 2019-present); Speaker Pro Tempore",
        hometown: "Chicago (Bronzeville), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "KB",
        fecRaised: "$980,000",
        fecCashOnHand: "$610,000",
        pacPolicy: "Backed by DPI, Building Trades, Trial Lawyers & Civic PACs",
        pacSummary: "Supported by DPI, LIUNA, IUOE Local 150, ITLA, Illinois Realtors RPAC, IEA, and Personal PAC.",
        pacs: [
          { name: "LIUNA, IUOE Local 150 & IBEW", type: "Labor PAC", amount: "$160,000+", stance: "Supporting" },
          { name: "ITLA, Illinois Realtors RPAC & Personal PAC", type: "Trade PAC", amount: "$140,000+", stance: "Supporting" }
        ],
        endorsements: ["Illinois AFL-CIO", "LIUNA", "IUOE Local 150", "Personal PAC", "Sierra Club"],
        issues: {
          propertyTaxes: "Champions LaSalle Street / Loop office-to-residential conversions to rebuild Downtown Chicago's commercial property tax base and relieve neighborhood homeowners.",
          safetAct: "Co-sponsored the SAFE-T Act, banned deceptive police interrogation of juveniles, and backs downtown public safety deployment.",
          budgetTaxes: "Opposes taxpayer handouts for a new Chicago Bears lakefront stadium unless existing Soldier Field bond debt ($500M+) is paid off first.",
          pensions: "Supports Tier 2 pension reform for city and state workers.",
          energyGrid: "Supports the Illinois Quantum and Microelectronics Park at the former South Works site and lakefront shoreline protection.",
          transit: "House chief sponsor of SB 2111 (Northern Illinois Transit Authority Act) and the People Over Parking Act eliminating transit-oriented parking mandates.",
          healthcare: "Supports Bronzeville and South Side hospital equity and reproductive freedom.",
          education: "Supports CPS EBF funding and Illinois HBCU / public university investments."
        }
      }
    ]
  },
  {
    id: "il-house-92",
    level: "state_legislature",
    chamber: "State House",
    office: "Illinois State Representative - 92nd District",
    districtCode: "HD-92",
    districtName: "92nd House District (Peoria, West Peoria & Bartonville)",
    region: "Central Illinois (Peoria County)",
    counties: ["Peoria"],
    cities: ["Peoria", "West Peoria", "Bartonville"],
    pvi: "D+12",
    rating: "Safe Democratic (Chief House Budget Negotiator)",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Jehan Gordon-Booth (D)",
    primarySummary: "Speaker Pro Tempore and Chief House Budget Negotiator Rep. Jehan Gordon-Booth (D) runs unopposed in the November 2026 general election.",
    candidates: [
      {
        id: "jehan-gordon-booth",
        name: "Jehan Gordon-Booth",
        party: "Democrat",
        role: "Illinois State Representative (HD-92, 2009-present); Speaker Pro Tempore & Chair, Appropriations-General Services",
        hometown: "Peoria (Peoria County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "JG",
        fecRaised: "$1,350,000",
        fecCashOnHand: "$940,000",
        pacPolicy: "Chief House Budget Architect; Backed by Labor, Healthcare & Business PACs",
        pacSummary: "As chief House Democratic budget negotiator, commands broad backing from DPI, IUOE Local 150, IBEW, Illinois Hospital Association, ITLA, Realtors RPAC, and Personal PAC.",
        pacs: [
          { name: "IUOE Local 150, IBEW & LIUNA", type: "Labor PAC", amount: "$220,000+", stance: "Supporting" },
          { name: "Illinois Hospital Association (IHA), ITLA & Realtors RPAC", type: "Trade PAC", amount: "$240,000+", stance: "Supporting" }
        ],
        endorsements: ["Illinois AFL-CIO", "IUOE Local 150", "Illinois Hospital Association", "Personal PAC"],
        issues: {
          propertyTaxes: "Uses state budget surpluses to boost EBF funding for Peoria Public Schools D150 and fund municipal infrastructure without local property tax hikes.",
          safetAct: "Architect of bipartisan criminal justice and re-entry investments alongside funding for Peoria police violence-interruption programs.",
          budgetTaxes: "Chief House author of Illinois's $53B balanced state budgets, Rainy Day Fund deposits, and grocery tax elimination.",
          pensions: "Supports full pension funding plus supplemental debt paydowns and Tier 2 Safe Harbor fixes.",
          energyGrid: "Supports Illinois River port modernization and clean energy manufacturing in Central Illinois.",
          transit: "Secures state funding for CityLink Peoria buses and Peoria-to-Chicago passenger rail.",
          healthcare: "Champions Peoria's OSF HealthCare and Carle Health medical district and Medicaid reimbursement equity.",
          education: "Supports Bradley University MAP grants, Illinois Central College, and Peoria D150."
        }
      }
    ]
  },
  {
    id: "il-house-91",
    level: "state_legislature",
    chamber: "State House",
    office: "Illinois State Representative - 91st District",
    districtCode: "HD-91",
    districtName: "91st House District (Bloomington, Normal, East Peoria & Bartonville)",
    region: "Central Illinois (McLean & Tazewell Counties)",
    counties: ["McLean", "Tazewell", "Peoria"],
    cities: ["Bloomington", "Normal", "East Peoria", "Bartonville", "Creve Coeur"],
    pvi: "D+5",
    rating: "Likely Democratic",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Sharon Chung (D)",
    primarySummary: "Two-term Rep. Sharon Chung (D) runs unopposed on the November 2026 general election ballot after consolidating support in Bloomington-Normal and East Peoria.",
    candidates: [
      {
        id: "sharon-chung",
        name: "Sharon Chung",
        party: "Democrat",
        role: "Illinois State Representative (HD-91, 2023-present); Professional Violinist/Music Teacher & Former McLean County Board Member",
        hometown: "Bloomington (McLean County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "SC",
        fecRaised: "$840,000",
        fecCashOnHand: "$590,000",
        pacPolicy: "Backed by DPI, IEA, IFT, Personal PAC & Building Trades",
        pacSummary: "Supported by DPI, IEA/IPACE, IFT, IUOE Local 150, IBEW, LIUNA, and Personal PAC.",
        pacs: [
          { name: "IEA/IPACE, IFT & Personal PAC", type: "Labor PAC", amount: "$180,000+", stance: "Supporting" },
          { name: "IUOE Local 150, IBEW & LIUNA", type: "Labor PAC", amount: "$140,000+", stance: "Supporting" }
        ],
        endorsements: ["IEA", "IFT", "Personal PAC", "IUOE Local 150", "IBEW"],
        issues: {
          propertyTaxes: "Focuses on state EBF school funding for McLean County Unit 5 and Bloomington District 87 to ease local property taxes.",
          safetAct: "Supports the SAFE-T Act and mental health crisis response funding.",
          budgetTaxes: "Champions state workforce and infrastructure grants supporting Rivian's EV manufacturing plant in Normal.",
          pensions: "Advocates fixing Tier 2 SURS and TRS pensions for Illinois State University (ISU) and K-12 educators.",
          energyGrid: "Supports EV manufacturing, clean energy, and protecting ratepayers from Ameren capacity spikes.",
          transit: "Supports Connect Transit in Bloomington-Normal and high-speed Amtrak service.",
          healthcare: "Strong defender of reproductive rights and Carle BroMenn / OSF St. Joseph hospital access.",
          education: "Champions Illinois State University (ISU) and Heartland Community College."
        }
      }
    ]
  },
  {
    id: "il-sen-59",
    level: "state_legislature",
    chamber: "State Senate",
    office: "Illinois State Senator - 59th District (Open Seat)",
    districtCode: "SD-59",
    districtName: "59th Senate District (Carbondale, Marion, Herrin, Harrisburg, West Frankfort, Benton, Anna, Metropolis & Cairo)",
    region: "Southern Illinois",
    counties: ["Jackson", "Williamson", "Franklin", "Saline", "Union", "Massac", "Johnson", "Alexander", "Pulaski", "Hardin", "Pope", "Gallatin", "Hamilton"],
    cities: ["Carbondale", "Marion", "Herrin", "Harrisburg", "West Frankfort", "Benton", "Anna", "Metropolis", "Vienna", "Cairo", "Carterville"],
    pvi: "R+19",
    rating: "Safe Republican (Open Seat)",
    isOpenSeat: true,
    isBattleground: false,
    incumbent: "Dale Fowler (R - Retiring)",
    primarySummary: "With GOP Sen. Dale Fowler retiring, sitting State Rep. Paul Jacobs (R, HD-118) won the Republican nomination and faces Carbondale Democrat Tamiko Mueller (D).",
    candidates: [
      {
        id: "paul-jacobs",
        name: "Paul Jacobs",
        party: "Republican",
        role: "Illinois State Representative (HD-118, 2021-2026); Optometrist & Vineyard/Winery Owner",
        hometown: "Pomona (Jackson County), IL",
        incumbentStatus: "Open Seat Nominee (Sitting State Rep.)",
        photoInitials: "PJ",
        fecRaised: "$420,000",
        fecCashOnHand: "$265,000",
        pacPolicy: "Backed by SRCC, Farm Bureau, IMA, ISRA & Right to Life",
        pacSummary: "Supported by SRCC, Illinois Farm Bureau ACTIVATOR, IMA, NFIB, Illinois Right to Life, and Illinois State Rifle Association.",
        pacs: [
          { name: "SRCC & Southern Illinois GOP Committees", type: "Party Committee", amount: "$160,000+", stance: "Supporting" },
          { name: "Illinois Farm Bureau ACTIVATOR, IMA & NFIB", type: "Trade PAC", amount: "$110,000+", stance: "Supporting" },
          { name: "Illinois Right to Life & ISRA PVF", type: "Ideological PAC", amount: "Endorsed", stance: "Supporting" }
        ],
        endorsements: ["Illinois Farm Bureau ACTIVATOR", "IMA", "NFIB", "Illinois Right to Life", "ISRA"],
        issues: {
          propertyTaxes: "Calls for capping Southern Illinois property taxes and cutting state mandates.",
          safetAct: "Demands repealing the SAFE-T Act and ending Illinois's sanctuary state law.",
          budgetTaxes: "Supports Shawnee Hills tourism, Marion STAR bonds, and cutting business regulations.",
          pensions: "Supports SURS stability for SIU Carbondale employees while opposing state tax hikes.",
          energyGrid: "Defends Southern Illinois coal mines and natural gas plants against CEJA closures.",
          transit: "Supports Shawnee/Southern IL highway, bridge, and Cairo river port construction.",
          healthcare: "Staunchly pro-life; opposes Carbondale's abortion clinics while supporting rural hospital funding.",
          education: "Supports SIU Carbondale, John A. Logan College, Shawnee CC, and school choice."
        }
      },
      {
        id: "tamiko-mueller",
        name: "Tamiko Mueller",
        party: "Democrat",
        role: "Carbondale Educator & Community Advocate",
        hometown: "Carbondale (Jackson County), IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "TM",
        fecRaised: "$68,000",
        fecCashOnHand: "$29,000",
        pacPolicy: "Grassroots, SIU Labor & Personal PAC Backed",
        pacSummary: "Backed by Jackson and Williamson County Democrats, IEA, IFT, SIUC faculty/staff unions, and Personal PAC.",
        pacs: [
          { name: "IEA, IFT & SIU Labor Unions", type: "Labor PAC", amount: "$30,000+", stance: "Supporting" },
          { name: "Personal PAC", type: "Ideological PAC", amount: "Endorsed", stance: "Supporting" }
        ],
        endorsements: ["Personal PAC", "IEA", "IFT", "Jackson County Democratic Party"],
        issues: {
          propertyTaxes: "Supports increasing state EBF school funding to relieve Southern Illinois property owners.",
          safetAct: "Supports balanced criminal justice reform and mental health co-responders.",
          budgetTaxes: "Champions state investment in SIU Carbondale, Alexander/Pulaski County flood recovery, and union jobs.",
          pensions: "Strongly supports fixing Tier 2 SURS and TRS pensions for SIUC and K-12 educators.",
          energyGrid: "Supports clean energy transition grants for former coal communities.",
          transit: "Supports Amtrak Illini/Saluki rail service to Carbondale and rural transit.",
          healthcare: "Defends Carbondale's reproductive healthcare clinics and Southern Illinois Healthcare (SIH) rural hospitals.",
          education: "Champions SIU Carbondale, public K-12 schools, and opposing voucher diversions."
        }
      }
    ]
  }
];
