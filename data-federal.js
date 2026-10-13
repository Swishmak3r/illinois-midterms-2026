// 2026 Illinois Midterm Elections - Federal Dataset (U.S. Senate + All 17 U.S. House Districts)
// Election Date: November 3, 2026 | Primary Date: March 17, 2026

window.IL_FEDERAL_RACES = [
  {
    id: "us-senate-il",
    level: "federal",
    office: "U.S. Senator from Illinois",
    districtCode: "IL-SEN",
    districtName: "Statewide (Open Seat - Retiring Incumbent: Sen. Dick Durbin)",
    region: "Statewide",
    counties: ["All 102 Illinois Counties"],
    cities: ["All Illinois Municipalities"],
    pvi: "D+7",
    rating: "Solid Democratic",
    isOpenSeat: true,
    isBattleground: false,
    incumbent: "Dick Durbin (D - Retiring after 5 terms / 30 years)",
    primarySummary: "In the March 17, 2026 primaries triggered by Senate Democratic Whip Dick Durbin's retirement, Lt. Gov. Juliana Stratton won the Democratic nomination (~40.4%) over Rep. Raja Krishnamoorthi (~33.0%, who spent $31.5M) and Rep. Robin Kelly (~18.2%). Former IL GOP Chair Don Tracy won the 6-way Republican primary (~39.9%).",
    candidates: [
      {
        id: "juliana-stratton",
        name: "Juliana Stratton",
        party: "Democrat",
        role: "48th Lieutenant Governor of Illinois (2019-present); Former State Rep. (HD-5)",
        hometown: "Chicago (Bronzeville), IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "JS",
        fecRaised: "$5,900,000",
        fecCashOnHand: "$1,107,958",
        pacPolicy: "Rejects Corporate PACs",
        pacSummary: "Refuses direct corporate PAC donations. Heavily backed by Illinois Future PAC (Super PAC funded with $5M from Gov. JB Pritzker) and major labor unions. Targeted with ~$10M in negative primary spending by crypto Super PACs Fairshake and Protect Progress due to her alignment with Sen. Elizabeth Warren on digital asset regulation.",
        pacs: [
          { name: "Illinois Future PAC (Pro-Stratton Super PAC)", type: "Super PAC", amount: "$5,000,000+ IE (funded by JB Pritzker)", stance: "Supporting" },
          { name: "EMILYs List", type: "Ideological PAC", amount: "Bundled & PAC Max", stance: "Supporting" },
          { name: "Illinois AFL-CIO & SEIU State Council", type: "Labor PAC", amount: "Major Labor Endorsement & PAC Max", stance: "Supporting" },
          { name: "Chicago Teachers Union (CTU) PAC", type: "Labor PAC", amount: "Endorsed + Field Mobilization", stance: "Supporting" },
          { name: "League of Conservation Voters (LCV Action Fund)", type: "Ideological PAC", amount: "Endorsed + Bundled Support", stance: "Supporting" },
          { name: "Giffords PAC & Gun Safety Coalitions", type: "Ideological PAC", amount: "Endorsed", stance: "Supporting" },
          { name: "Fairshake / Protect Progress (Crypto Super PACs)", type: "Super PAC", amount: "$10,000,000 IE Against (Primary)", stance: "Opposing" }
        ],
        endorsements: ["Former Pres. Barack Obama", "Gov. JB Pritzker", "U.S. Sen. Elizabeth Warren", "U.S. Sen. Tammy Duckworth", "Illinois AFL-CIO", "SEIU", "Chicago Teachers Union"],
        issues: {
          economy: "Advocates raising the federal minimum wage to $25/hour, passing the PRO Act, cracking down on corporate price-gouging, opposing blanket tariffs, and penalizing hedge funds and private equity firms that buy single-family homes while offering tax credits to builders of affordable starter homes. Supports abolishing the Senate filibuster.",
          healthcare: "Explicitly endorses Medicare for All (single-payer universal coverage), expanding Medicare prescription drug price negotiation, protecting the ACA and Medicaid from federal block-grant cuts, and funding Black maternal health initiatives.",
          immigration: "Called during the primary to abolish ICE and overhaul federal immigration enforcement into a humanitarian system; fiercely opposes mass deportations and Operation Midway Blitz while backing pathways to citizenship for Dreamers and farmworkers.",
          energy: "Supports a federal clean energy transition modeled on Illinois CEJA: phasing out fossil fuels, expanding IRA green energy tax credits, modernizing transmission grids, and investing in environmental justice communities.",
          taxes: "Supports lifting or repealing the federal SALT deduction cap for middle-class homeowners while raising corporate tax rates and establishing billionaire minimum wealth taxes.",
          reproductive: "Pledges to carve out or abolish the Senate filibuster to codify Roe v. Wade nationwide, repeal the Hyde Amendment, protect medication abortion (mifepristone), and enact federal shield protections for providers.",
          foreignPolicy: "Supports NATO and continued aid to Ukraine; advocates a negotiated ceasefire and two-state framework in Israel/Gaza with humanitarian protections and conditions on offensive weaponry while condemning October 7 terrorism and antisemitism.",
          guns: "Champions a federal assault weapons ban, universal background checks, federal red-flag extreme risk laws, repealing PLCAA gun manufacturer immunity, and federal funding for Peacekeeper violence intervention programs."
        }
      },
      {
        id: "don-tracy",
        name: "Don Tracy",
        party: "Republican",
        role: "Attorney, Dot Foods Family Co-Owner, Former IL GOP Chair (2021-2024) & Former IL Gaming Board Chair",
        hometown: "Springfield, IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "DT",
        fecRaised: "$2,460,000",
        fecCashOnHand: "$1,512,424",
        pacPolicy: "Accepts Business & Trade PACs",
        pacSummary: "Combines personal/family business network resources (co-founders of Dot Foods, the nation's largest food redistributor) with Illinois business associations and county GOP committees. National GOP Senate Super PAC (SLF) has largely bypassed Illinois due to its blue lean.",
        pacs: [
          { name: "Technology & Manufacturing Association (TMA)", type: "Trade PAC", amount: "Endorsed + Member Support", stance: "Supporting" },
          { name: "Illinois Family Action", type: "Ideological PAC", amount: "Endorsed", stance: "Supporting" },
          { name: "Illinois Republican Party / County Chairs Coalition", type: "Party Committee", amount: "Coordinated Support", stance: "Supporting" },
          { name: "Downstate Agribusiness & Distribution Networks", type: "Business Donor Network", amount: "$1,500,000+ Bundled/Self", stance: "Supporting" }
        ],
        endorsements: ["Technology & Manufacturing Association", "Illinois Family Action", "Chicago Contrarian", "IL GOP County Chairs Association"],
        issues: {
          economy: "Campaigns on representing all 102 counties (especially the 101 counties outside Cook). Focuses on slashing federal deficit spending to curb inflation, cutting EPA and labor regulations on manufacturers and family farms, and stopping corporate out-migration.",
          healthcare: "Strongly opposes Medicare for All and government-run healthcare systems; advocates market competition, hospital price transparency, association health plans for small businesses, and medical malpractice tort reform.",
          immigration: "Demands immediate completion of southern border wall infrastructure, strict interior enforcement of immigration law, ending sanctuary city/state policies, and barring federal funds for undocumented immigrant housing or healthcare.",
          energy: "Opposes CEJA-style green mandates and federal EV rules; champions an all-of-the-above energy strategy expanding Illinois coal, natural gas, nuclear power, and corn ethanol/soy biodiesel.",
          taxes: "Supports making the 2017 Tax Cuts and Jobs Act (TCJA) permanent, eliminating the federal estate (death) tax on family farms, enacting No Tax on Tips for service workers, and cutting corporate tax rates.",
          reproductive: "Holds a post-Dobbs federalist position that abortion laws belong at the state level; strongly supports retaining the federal Hyde Amendment barring taxpayer funding of abortion.",
          foreignPolicy: "Advocates Peace Through Strength, rebuilding the U.S. defense industrial base, countering Chinese economic and military aggression, standing unconditionally with Israel against Iran, and auditing Ukraine aid.",
          guns: "Staunch Second Amendment defender; opposes federal assault weapon bans, magazine limits, and red-flag laws, arguing for mandatory minimum sentences for violent gun crimes and repealing cashless bail."
        }
      },
      {
        id: "whitfield-harrington",
        name: "Whitfield Harrington Jr.",
        party: "Independent",
        role: "American Center Party Nominee & Civic Reform Advocate",
        hometown: "Chicago Metro, IL",
        incumbentStatus: "Independent Challenger",
        photoInitials: "WH",
        fecRaised: "$42,000",
        fecCashOnHand: "$14,500",
        pacPolicy: "Zero PAC Money",
        pacSummary: "Refuses all corporate, labor, and partisan PAC money; funded strictly by small individual donations.",
        pacs: [
          { name: "American Center Party Grassroots", type: "Ideological PAC", amount: "Ballot Access Support", stance: "Supporting" }
        ],
        endorsements: ["American Center Party", "Independent Voter Project Supporters"],
        issues: {
          economy: "Supports balanced federal budgets, bipartisan infrastructure investment, anti-monopoly enforcement, and reducing cost-of-living pressures through supply-chain reform.",
          healthcare: "Favors a universal public option alongside private insurance, aggressive PBM and hospital billing transparency, and preventive care incentives.",
          immigration: "Supports pairing modernized border security technology and orderly legal immigration pathways with E-Verify and humane asylum processing.",
          energy: "Backs nuclear energy expansion, grid modernization, and market-driven carbon reduction without sudden rate shocks.",
          taxes: "Advocates simplifying the federal tax code, closing carried-interest loopholes, and restoring the SALT deduction for middle-income households.",
          reproductive: "Supports codifying baseline federal viability standards matching pre-Dobbs Roe v. Wade while respecting medical privacy.",
          foreignPolicy: "Supports NATO allies and rules-based international trade while demanding strict congressional War Powers oversight.",
          guns: "Supports universal background checks, safe storage incentives, and violent crime prosecution while respecting lawful gun ownership."
        }
      }
    ]
  },
  {
    id: "us-house-il-01",
    level: "federal",
    office: "U.S. Representative - District 1",
    districtCode: "IL-01",
    districtName: "1st Congressional District (Chicago South Side, Southwest Suburbs & Eastern Will/Kankakee)",
    region: "Chicago & South Suburbs",
    counties: ["Cook", "Will", "Kankakee"],
    cities: ["Chicago (South Side)", "Chicago - Bronzeville", "Chicago - Hyde Park", "Chicago - Kenwood", "Chicago - Chatham", "Chicago - Roseland", "Chicago - Morgan Park", "Blue Island", "Harvey", "Robbins", "Midlothian", "Tinley Park", "Orland Hills", "Mokena", "Frankfort", "New Lenox", "Manhattan", "Peotone", "Bourbonnais", "Joliet", "Elwood"],
    pvi: "D+18",
    rating: "Safe Democratic",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Jonathan Jackson (D)",
    primarySummary: "Two-term incumbent Rep. Jonathan Jackson (D) comfortably won renomination in the March 2026 primary and faces businesswoman Christian Maxwell (R).",
    candidates: [
      {
        id: "jonathan-jackson",
        name: "Jonathan L. Jackson",
        party: "Democrat",
        role: "U.S. Representative (IL-01, 2023-present); Civil Rights Advocate & Former Rainbow PUSH Spokesperson",
        hometown: "Chicago (Kenwood), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "JJ",
        fecRaised: "$645,000",
        fecCashOnHand: "$290,000",
        pacPolicy: "Accepts Labor, Caucus & Select Ag PACs",
        pacSummary: "Supported by labor unions, the Congressional Black Caucus PAC, and agricultural/rail PACs tied to his House Agriculture Committee assignment, plus ~$20.5k in career pro-Israel PAC receipts.",
        pacs: [
          { name: "Congressional Black Caucus PAC (CBC PAC)", type: "Ideological PAC", amount: "$10,000", stance: "Supporting" },
          { name: "Illinois AFL-CIO & SEIU COPE", type: "Labor PAC", amount: "$25,000+", stance: "Supporting" },
          { name: "Chicago Teachers Union (CTU) PAC", type: "Labor PAC", amount: "$10,000", stance: "Supporting" },
          { name: "House Agriculture Committee Trade PACs", type: "Trade PAC", amount: "$45,000+", stance: "Supporting" },
          { name: "Pro-Israel PAC Networks (J Street / AIPAC Career)", type: "Ideological PAC", amount: "$20,500 (Career)", stance: "Supporting" }
        ],
        endorsements: ["Congressional Black Caucus PAC", "Illinois AFL-CIO", "SEIU", "Chicago Teachers Union"],
        issues: {
          economy: "Supports raising the federal minimum wage to $20-$25/hr, expanding minority business capital access, investing in South Side and South Suburban rail/freight corridors, and eliminating urban food deserts.",
          healthcare: "Co-sponsors Medicare for All, champions federal funding for South Side safety-net hospitals and trauma centers, and supports capping insulin and prescription prices.",
          immigration: "Supports humane asylum processing, work permits for long-term undocumented residents and newly arrived migrants, and pathways to citizenship.",
          energy: "Supports clean energy job training on the South Side, environmental justice remediation of industrial brownfields, and lead water pipe replacement.",
          taxes: "Supports expanding the Child Tax Credit and Earned Income Tax Credit (EITC), lifting the SALT cap, and raising corporate tax rates.",
          reproductive: "Staunch supporter of codifying Roe v. Wade and repealing the Hyde Amendment.",
          foreignPolicy: "Sits on House Foreign Affairs; emphasizes African diplomatic and trade engagement, humanitarian aid in Gaza and Sudan, and multilateral diplomacy.",
          guns: "Advocates banning assault weapons, cracking down on interstate iron-pipeline gun trafficking into Chicago, and funding community violence intervention."
        }
      },
      {
        id: "christian-maxwell",
        name: "Christian Maxwell",
        party: "Republican",
        role: "Businesswoman, Marketing Strategist & Homeschool Educator",
        hometown: "Frankfort / Will County, IL",
        incumbentStatus: "Challenger",
        photoInitials: "CM",
        fecRaised: "$38,000",
        fecCashOnHand: "$12,400",
        pacPolicy: "Grassroots Small-Dollar Only",
        pacSummary: "Runs a grassroots campaign funded by small individual donations from Will and southern Cook County voters with zero corporate PAC funding.",
        pacs: [
          { name: "Will & South Cook GOP Grassroots", type: "Party Committee", amount: "Local Support", stance: "Supporting" },
          { name: "Illinois Family Action / Parental Rights Groups", type: "Ideological PAC", amount: "Endorsed", stance: "Supporting" }
        ],
        endorsements: ["Will County GOP Organization", "Illinois Family Action"],
        issues: {
          economy: "Proposes the Essential Goods Tax Relief Act to eliminate federal taxes on groceries and everyday essentials, alongside cutting federal spending and small-business red tape.",
          healthcare: "Favors healthcare price transparency, expanded Health Savings Accounts (HSAs), and protecting patient choice over government mandates.",
          immigration: "Calls for securing the southern border immediately and ending federal and local taxpayer subsidies for migrant sanctuary shelters.",
          energy: "Supports expanding domestic oil, natural gas, and nuclear power to lower Will and Cook County household utility bills.",
          taxes: "Supports making the 2017 TCJA tax cuts permanent and eliminating federal taxes on tips and overtime.",
          reproductive: "Pro-life; supports parental notification and barring federal taxpayer funding for abortion.",
          foreignPolicy: "America First foreign policy; opposes open-ended foreign aid packages while domestic infrastructure and border security remain underfunded.",
          guns: "Strong Second Amendment supporter; backs community policing partnerships and tougher prosecution of repeat violent offenders."
        }
      }
    ]
  },
  {
    id: "us-house-il-02",
    level: "federal",
    office: "U.S. Representative - District 2",
    districtCode: "IL-02",
    districtName: "2nd Congressional District (Far South Side, South Suburbs, Kankakee & Danville)",
    region: "Chicago South Suburbs & East Central",
    counties: ["Cook", "Will", "Kankakee", "Iroquois", "Ford", "Vermilion", "Champaign", "Livingston", "Grundy"],
    cities: ["Chicago - South Shore", "Chicago - Hegewisch", "Chicago - Pullman", "Calumet City", "Lansing", "Dolton", "South Holland", "Homewood", "Flossmoor", "Chicago Heights", "Matteson", "Park Forest", "Richton Park", "University Park", "Crete", "Monee", "Kankakee", "Bradley", "Bourbonnais", "Watseka", "Paxton", "Rantoul", "Danville"],
    pvi: "D+19",
    rating: "Safe Democratic",
    isOpenSeat: true,
    isBattleground: false,
    incumbent: "Robin Kelly (D - Vacated seat to run for U.S. Senate)",
    primarySummary: "Cook County Commissioner Donna Miller (D) won the crowded 11-way March 2026 Democratic primary (defeating State Sen. Robert Peters and former Rep. Jesse Jackson Jr.) after receiving over $4.3M in independent expenditure support from Affordable Chicago Now (an AIPAC-donor-linked Super PAC). She faces truck driver Mike Noack (R).",
    candidates: [
      {
        id: "donna-miller",
        name: "Donna Miller",
        party: "Democrat",
        role: "Cook County Commissioner (6th District, 2018-present) & Healthcare Consultant",
        hometown: "Lynwood, IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "DM",
        fecRaised: "$1,150,000",
        fecCashOnHand: "$310,000",
        pacPolicy: "Accepts PACs & Super PAC Backing",
        pacSummary: "Major beneficiary of outside Super PAC spending in the March 2026 primary: Affordable Chicago Now (linked to AIPAC donors) spent over $4.3 million boosting Miller against progressive rival Sen. Robert Peters. Also backed by EMILYs List and healthcare/labor PACs.",
        pacs: [
          { name: "Affordable Chicago Now (AIPAC-Aligned Super PAC)", type: "Super PAC", amount: "$4,300,000+ IE (Primary)", stance: "Supporting" },
          { name: "EMILYs List", type: "Ideological PAC", amount: "Endorsed + Bundled Support", stance: "Supporting" },
          { name: "Pro-Israel PAC Direct Contributions", type: "Ideological PAC", amount: "$14,650 Direct", stance: "Supporting" },
          { name: "Reproductive Freedom for All", type: "Ideological PAC", amount: "Endorsed", stance: "Supporting" },
          { name: "IUOE Local 150 & Suburban Building Trades", type: "Labor PAC", amount: "$25,000+", stance: "Supporting" }
        ],
        endorsements: ["EMILYs List", "Reproductive Freedom for All", "Cook County Democratic Party", "Suburban Mayors Coalition"],
        issues: {
          economy: "Focuses on South Suburban economic revitalization, securing federal funding for the South Suburban Airport and intermodal logistics, and supporting Kankakee and Vermilion County family farms.",
          healthcare: "Former biotech/healthcare professional; prioritizes protecting the ACA, expanding rural and South Suburban hospital funding, and reducing Black maternal mortality.",
          immigration: "Supports comprehensive immigration reform with border technology investments, orderly legal pathways, and federal reimbursement for local municipalities.",
          energy: "Supports federal infrastructure grants for Southland flood mitigation, lead service line replacement, and clean energy manufacturing jobs.",
          taxes: "Supports targeted middle-class tax relief, expanding the Child Tax Credit, and relieving South Suburban property tax pressures via federal school/infrastructure grants.",
          reproductive: "Former Planned Parenthood Illinois board member; champions codifying Roe v. Wade and protecting nationwide access to contraception and IVF.",
          foreignPolicy: "Strong supporter of the U.S.-Israel alliance, unconditional defense cooperation, and bipartisan support for NATO and Ukraine.",
          guns: "Backs a federal assault weapons ban, universal background checks, and federal community violence intervention funding."
        }
      },
      {
        id: "mike-noack",
        name: "Michael Scott 'Mike' Noack",
        party: "Republican",
        role: "Commercial Truck Driver & Working-Class Populist",
        hometown: "Bonfield (Kankakee County), IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "MN",
        fecRaised: "$24,500",
        fecCashOnHand: "$8,900",
        pacPolicy: "Zero Corporate PAC Money",
        pacSummary: "Blue-collar populist campaign taking zero corporate PAC money; funded by small-dollar working-class donors and Kankakee/Vermilion GOP committees.",
        pacs: [
          { name: "Kankakee & Vermilion County GOP Committees", type: "Party Committee", amount: "Grassroots Support", stance: "Supporting" }
        ],
        endorsements: ["Kankakee County Republican Central Committee", "Downstate Grassroots Conservatives"],
        issues: {
          economy: "Runs as a working-class truck driver fighting inflation, high diesel/gasoline prices, and corporate executive greed while opposing career politicians.",
          healthcare: "Supports lowering out-of-pocket medical and prescription costs for working families and protecting rural hospitals in Iroquois and Vermilion counties.",
          immigration: "Demands strict southern border enforcement and an end to taxpayer-funded benefits for undocumented immigrants.",
          energy: "Calls for unleashing American oil, natural gas, and biofuels to immediately lower diesel and home heating prices.",
          taxes: "Supports eliminating federal taxes on overtime, tips, and Social Security benefits, and cutting wasteful federal spending.",
          reproductive: "Pro-life; opposes taxpayer funding of abortion.",
          foreignPolicy: "America First; opposes sending billions of taxpayer dollars overseas while American roads and working towns struggle.",
          guns: "Unwavering defender of the Second Amendment and repeal of state/federal firearm bans."
        }
      }
    ]
  },
  {
    id: "us-house-il-03",
    level: "federal",
    office: "U.S. Representative - District 3",
    districtCode: "IL-03",
    districtName: "3rd Congressional District (Chicago Northwest Side & DuPage/Cook West Suburbs)",
    region: "Chicago NW Side & West Suburbs",
    counties: ["Cook", "DuPage"],
    cities: ["Chicago - Logan Square", "Chicago - Humboldt Park", "Chicago - West Town", "Chicago - Avondale", "Chicago - Irving Park", "Chicago - Albany Park", "Chicago - Belmont Cragin", "Chicago - Portage Park", "Elmwood Park", "River Grove", "Franklin Park", "Bensenville", "Wood Dale", "Addison", "Glendale Heights", "Carol Stream", "Wheaton", "West Chicago", "Bartlett", "Hanover Park"],
    pvi: "D+17",
    rating: "Safe Democratic",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Delia Ramirez (D)",
    primarySummary: "Two-term progressive incumbent Rep. Delia Ramirez (D) ran unopposed in the Democratic primary and faces Wheaton small business owner Angel Oakley (R).",
    candidates: [
      {
        id: "delia-ramirez",
        name: "Delia C. Ramirez",
        party: "Democrat",
        role: "U.S. Representative (IL-03, 2023-present); Congressional Progressive Caucus Vice Chair",
        hometown: "Chicago (Humboldt Park), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "DR",
        fecRaised: "$1,480,000",
        fecCashOnHand: "$690,000",
        pacPolicy: "Rejects Corporate PACs & AIPAC (PEACE Pledge)",
        pacSummary: "Rejects all corporate PAC and AIPAC/pro-Israel lobby money ($0). Roughly 25% of campaign receipts come from progressive labor unions (CTU, SEIU) and ideological progressive PACs (Working Families Party, Justice Democrats).",
        pacs: [
          { name: "Working Families Party PAC", type: "Ideological PAC", amount: "$15,000+ & Field", stance: "Supporting" },
          { name: "Justice Democrats PAC", type: "Ideological PAC", amount: "$10,000", stance: "Supporting" },
          { name: "Chicago Teachers Union (CTU) & AFT PACs", type: "Labor PAC", amount: "$25,000+", stance: "Supporting" },
          { name: "SEIU Healthcare & SEIU COPE", type: "Labor PAC", amount: "$25,000+", stance: "Supporting" },
          { name: "EMILYs List", type: "Ideological PAC", amount: "$10,000", stance: "Supporting" }
        ],
        endorsements: ["Working Families Party", "Justice Democrats", "Chicago Teachers Union", "SEIU Healthcare", "United Working Families"],
        issues: {
          economy: "Champions a $25/hour federal minimum wage, federal social housing construction, national rent stabilization, student debt cancellation, and the PRO Act.",
          healthcare: "Lead co-sponsor of Medicare for All; advocates expanding Medicaid/ACA eligibility regardless of immigration status.",
          immigration: "Calls for abolishing ICE, halting deportations, enacting a pathway to citizenship for all undocumented immigrants, and expanding federal shelter/work-permit support.",
          energy: "Supports the Green New Deal, halting new fossil fuel leases, and investing in public transit and lead pipe replacement.",
          taxes: "Advocates wealth taxes on billionaires, raising corporate tax rates to 28%+, and permanent refundable Child Tax Credits.",
          reproductive: "Champions codifying Roe v. Wade, repealing the Hyde Amendment, and funding community reproductive clinics.",
          foreignPolicy: "Signed the PEACE Pledge; co-sponsored ceasefire resolutions and legislation to block offensive U.S. weapons transfers to Israel over human rights in Gaza.",
          guns: "Supports banning assault weapons, universal background checks, repealing gun maker immunity, and investing in root-cause community safety."
        }
      },
      {
        id: "angel-oakley",
        name: "Angel Oakley",
        party: "Republican",
        role: "Marketing Business Owner & Former Winfield Village Trustee",
        hometown: "Wheaton (DuPage County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "AO",
        fecRaised: "$14,200",
        fecCashOnHand: "$6,100",
        pacPolicy: "Zero PAC Money",
        pacSummary: "Explicitly pledges to accept zero PAC or corporate lobbyist funds, relying on individual suburban and city contributors.",
        pacs: [
          { name: "DuPage County GOP Grassroots", type: "Party Committee", amount: "Volunteer Support", stance: "Supporting" }
        ],
        endorsements: ["DuPage County Republican Organization", "Winfield Civic Leaders"],
        issues: {
          economy: "Focuses on cutting federal deficit spending, reducing small-business regulatory burdens, and lowering grocery and housing costs.",
          healthcare: "Opposes single-payer Medicare for All; proposes medical billing transparency, tort reform, and guaranteed catastrophic care coverage.",
          immigration: "Supports enforcing federal border laws, ending sanctuary city policies, and prioritizing legal immigration.",
          energy: "Emphasizes practical clean air and water conservation paired with affordable, reliable nuclear and natural gas energy.",
          taxes: "Supports extending the 2017 tax cuts and providing middle-class property and income tax relief.",
          reproductive: "Supports state-level consensus and parental involvement while opposing late-term taxpayer-funded abortions.",
          foreignPolicy: "Supports strong national defense, cybersecurity readiness, and accountability for U.S. foreign aid.",
          guns: "Supports Second Amendment rights for law-abiding citizens alongside strong backing for local police departments."
        }
      }
    ]
  },
  {
    id: "us-house-il-04",
    level: "federal",
    office: "U.S. Representative - District 4",
    districtCode: "IL-04",
    districtName: "4th Congressional District (Chicago Southwest Side, Pilsen, Little Village, Cicero & Berwyn)",
    region: "Chicago SW Side & Near West Suburbs",
    counties: ["Cook", "DuPage"],
    cities: ["Chicago - Pilsen", "Chicago - Little Village", "Chicago - Brighton Park", "Chicago - Gage Park", "Chicago - West Lawn", "Chicago - Garfield Ridge", "Cicero", "Berwyn", "Lyons", "Stickney", "Summit", "Brookfield", "La Grange Park", "Melrose Park", "Northlake", "Elmhurst", "Oak Brook"],
    pvi: "D+20",
    rating: "Safe Democratic",
    isOpenSeat: true,
    isBattleground: false,
    incumbent: "Jesus 'Chuy' Garcia (D - Retired)",
    primarySummary: "Longtime Rep. Jesus 'Chuy' Garcia retired and backed his chief of staff Patty Garcia (D), who won the March 2026 primary. She faces Little Village conservative activist Lupe Castillo (R) and Lyons Mayor Christopher Getty (Ind).",
    candidates: [
      {
        id: "patty-garcia",
        name: "Patty Garcia",
        party: "Democrat",
        role: "Former Chief of Staff to U.S. Rep. Jesus 'Chuy' Garcia",
        hometown: "Chicago (Southwest Side), IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "PG",
        fecRaised: "$395,000",
        fecCashOnHand: "$145,000",
        pacPolicy: "Labor & Progressive Caucus PACs",
        pacSummary: "Backed by Rep. Chuy Garcia's political organization, the Congressional Hispanic Caucus BOLD PAC, Chicago Federation of Labor, SEIU, and CTU.",
        pacs: [
          { name: "CHC BOLD PAC (Hispanic Caucus PAC)", type: "Ideological PAC", amount: "$15,000+", stance: "Supporting" },
          { name: "Chicago Federation of Labor (CFL) & SEIU", type: "Labor PAC", amount: "$35,000+", stance: "Supporting" },
          { name: "Chicago Teachers Union (CTU) PAC", type: "Labor PAC", amount: "$10,000", stance: "Supporting" },
          { name: "Teamsters & Amalgamated Transit Union (ATU)", type: "Labor PAC", amount: "$20,000", stance: "Supporting" }
        ],
        endorsements: ["U.S. Rep. Jesus 'Chuy' Garcia", "CHC BOLD PAC", "Chicago Federation of Labor", "SEIU", "CTU"],
        issues: {
          economy: "Runs on Chuy Garcia's progressive-labor platform: $25/hour minimum wage, PRO Act union rights, affordable housing, and Midway Airport/rail corridor jobs.",
          healthcare: "Supports Medicare for All, expanding community health centers in Pilsen, Little Village, and Cicero, and removing immigration barriers to ACA coverage.",
          immigration: "Fierce defender of immigrant families against mass deportations; advocates DACA permanence, TPS expansion, and comprehensive immigration reform.",
          energy: "Prioritizes environmental justice along the I-55 freight corridor, replacing diesel trucks with zero-emission fleets, and lead water line replacement in Cicero and Berwyn.",
          taxes: "Supports expanding the Child Tax Credit and taxing corporate stock buybacks and billionaire wealth.",
          reproductive: "Supports federal codification of Roe v. Wade and repealing the Hyde Amendment.",
          foreignPolicy: "Supports human-rights-driven diplomacy in Latin America and the Middle East, including a bilateral ceasefire and humanitarian relief in Gaza.",
          guns: "Champions a federal assault weapons ban, ghost-gun prohibitions, and federal funding for youth violence prevention."
        }
      },
      {
        id: "lupe-castillo",
        name: "Lupe Castillo",
        party: "Republican",
        role: "Community Activist & Working-Class Conservative",
        hometown: "Chicago (Little Village), IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "LC",
        fecRaised: "$28,000",
        fecCashOnHand: "$9,500",
        pacPolicy: "Grassroots Small-Dollar Only",
        pacSummary: "Funded by small-dollar individual contributions from Southwest Side and western suburban voters; takes zero corporate PAC funds.",
        pacs: [
          { name: "Chicago & West Suburban GOP Committees", type: "Party Committee", amount: "Grassroots Support", stance: "Supporting" }
        ],
        endorsements: ["Chicago Republican Party", "Illinois Family Action"],
        issues: {
          economy: "Focuses on lowering grocery and rent inflation for Southwest Side working families by slashing federal spending and energy regulations.",
          healthcare: "Supports community hospital access, medical price transparency, and prioritizing American citizens and veterans in federal health funding.",
          immigration: "Demands securing the southern border and defunding NGOs managing migrant resettlement that strained Chicago neighborhood budgets.",
          energy: "Supports affordable natural gas and gasoline by rolling back federal green energy mandates.",
          taxes: "Opposes property and income tax hikes; supports No Tax on Tips and No Tax on Overtime.",
          reproductive: "Pro-life and pro-traditional family values; supports parental rights in schools and protecting girls' sports.",
          foreignPolicy: "America First; opposes foreign aid packages while urban neighborhoods need infrastructure and crime relief.",
          guns: "Supports Second Amendment rights and hiring more police officers to combat street gang violence and carjackings."
        }
      },
      {
        id: "christopher-getty",
        name: "Christopher Getty",
        party: "Independent",
        role: "Mayor / Village President of Lyons",
        hometown: "Lyons (Cook County), IL",
        incumbentStatus: "Independent Challenger",
        photoInitials: "CG",
        fecRaised: "$165,000",
        fecCashOnHand: "$78,000",
        pacPolicy: "Local Municipal & Trade PACs",
        pacSummary: "Backed by western suburban municipal leaders, local operating engineers/building trades, and small business owners seeking a centrist alternative.",
        pacs: [
          { name: "West Suburban Municipal & Business Donors", type: "Business Donor Network", amount: "$110,000+", stance: "Supporting" },
          { name: "Local Building Trades & Municipal PACs", type: "Labor PAC", amount: "$30,000+", stance: "Supporting" }
        ],
        endorsements: ["West Suburban Mayors Coalition", "Lyons Township Civic Leaders"],
        issues: {
          economy: "Pragmatic municipal focus on industrial corridor job retention, infrastructure grants for western Cook towns, and fiscal discipline.",
          healthcare: "Supports stabilizing ACA premiums and strengthening suburban community hospitals.",
          immigration: "Calls for bipartisan border security paired with practical work-authorization reform.",
          energy: "Supports balanced grid modernization and municipal water/sewer grant funding.",
          taxes: "Prioritizes federal infrastructure matches that allow towns like Lyons, Berwyn, and Cicero to hold the line on property taxes.",
          reproductive: "Supports maintaining existing Illinois reproductive healthcare access.",
          foreignPolicy: "Mainstream bipartisan national security posture.",
          guns: "Strongly backs local police departments, illegal gun prosecution, and mental health co-responder funding."
        }
      }
    ]
  },
  {
    id: "us-house-il-05",
    level: "federal",
    office: "U.S. Representative - District 5",
    districtCode: "IL-05",
    districtName: "5th Congressional District (Chicago North/NW Side, O'Hare Corridor & NW Suburbs)",
    region: "Chicago North Side & NW Suburbs",
    counties: ["Cook", "Lake"],
    cities: ["Chicago - Lincoln Park", "Chicago - Lakeview", "Chicago - North Center", "Chicago - Lincoln Square", "Chicago - Jefferson Park", "Chicago - Norwood Park", "Chicago - Edison Park", "Park Ridge", "Des Plaines", "Rosemont", "Norridge", "Mount Prospect", "Arlington Heights", "Palatine", "Barrington", "Lake Zurich", "Hawthorn Woods", "Long Grove"],
    pvi: "D+19",
    rating: "Safe Democratic",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Mike Quigley (D)",
    primarySummary: "Senior Appropriations member Rep. Mike Quigley (D) defeated primary challengers in March 2026 and faces commercial real estate broker Tommy Hanson (R).",
    candidates: [
      {
        id: "mike-quigley",
        name: "Mike Quigley",
        party: "Democrat",
        role: "U.S. Representative (IL-05, 2009-present); Senior Member, House Appropriations & Intelligence",
        hometown: "Chicago (Lakeview), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "MQ",
        fecRaised: "$719,060",
        fecCashOnHand: "$1,340,000",
        pacPolicy: "Accepts Corporate, Labor & Ideological PACs",
        pacSummary: "Holds a $1.34M+ war chest funded by transportation, real estate, and financial corporate PACs (via his Appropriations subcommittee leadership), labor unions, and over $150,000 in career pro-Israel PAC contributions.",
        pacs: [
          { name: "AIPAC PAC & Pro-Israel Networks", type: "Ideological PAC", amount: "$150,000+ (Career)", stance: "Supporting" },
          { name: "Human Rights Campaign (HRC) & Equality PAC", type: "Ideological PAC", amount: "$20,000+", stance: "Supporting" },
          { name: "League of Conservation Voters & Sierra Club", type: "Ideological PAC", amount: "$15,000+", stance: "Supporting" },
          { name: "Brady PAC & Giffords PAC", type: "Ideological PAC", amount: "$15,000+", stance: "Supporting" },
          { name: "Transportation, Aviation & Building Trades PACs", type: "Trade PAC", amount: "$180,000+", stance: "Supporting" }
        ],
        endorsements: ["Illinois AFL-CIO", "Human Rights Campaign", "Sierra Club", "Brady PAC", "AIPAC"],
        issues: {
          economy: "Uses his senior Appropriations seat to deliver federal earmarks for O'Hare modernization, CTA/Metra transit, and municipal water projects across the North Side and northwest suburbs.",
          healthcare: "Supports strengthening the ACA, expanding NIH medical research funding, and lowering prescription drug prices.",
          immigration: "Supports comprehensive immigration reform, DACA protections, and federal funding for cities welcoming asylum seekers.",
          energy: "Leading congressional advocate for Great Lakes restoration, urban bird-safe building standards, national parks, and clean energy transition.",
          taxes: "Supports repealing the SALT deduction cap for North Side and suburban homeowners and increasing corporate tax enforcement.",
          reproductive: "Staunch supporter of codifying Roe v. Wade and protecting contraception and IVF.",
          foreignPolicy: "Co-Chair of the Congressional Ukraine Caucus; leading House champion of military/humanitarian aid to Ukraine, NATO expansion, and strong U.S.-Israel defense ties.",
          guns: "Advocates a federal assault weapons ban, universal background checks, and ATF gun-tracing resources."
        }
      },
      {
        id: "tommy-hanson",
        name: "Tommy Hanson",
        party: "Republican",
        role: "Commercial Real Estate Broker",
        hometown: "Chicago / Northwest Side, IL",
        incumbentStatus: "Challenger",
        photoInitials: "TH",
        fecRaised: "$19,500",
        fecCashOnHand: "$7,200",
        pacPolicy: "Self-Funded & Small Donors",
        pacSummary: "Self-funded and small-dollar donor campaign with zero corporate PAC contributions.",
        pacs: [
          { name: "Northwest Side & Suburban GOP Clubs", type: "Party Committee", amount: "Local Support", stance: "Supporting" }
        ],
        endorsements: ["Northwest Side GOP Organization"],
        issues: {
          economy: "Proposes eliminating federal taxes on food and gasoline and making first-time homebuyer closing expenses tax-deductible.",
          healthcare: "Supports free-market healthcare competition and price transparency.",
          immigration: "Supports securing the southern border while arguing federal ICE operations should coordinate with state requests.",
          energy: "Supports expanding domestic oil and gas supply to cut utility and commuter fuel prices.",
          taxes: "Calls for slashing federal spending and dedicating cannabis tax revenues strictly to road and infrastructure repair.",
          reproductive: "Favors state-level regulation and barring federal taxpayer funding for abortion.",
          foreignPolicy: "Opposes open-ended foreign military aid packages to Ukraine; advocates America First trade policies.",
          guns: "Supports Second Amendment rights and stronger prosecution of urban violent crime."
        }
      }
    ]
  },
  {
    id: "us-house-il-06",
    level: "federal",
    office: "U.S. Representative - District 6",
    districtCode: "IL-06",
    districtName: "6th Congressional District (DuPage & Southwest Cook Suburbs - Downers Grove, Orland Park, Oak Lawn, Glen Ellyn)",
    region: "DuPage & SW Cook Suburbs",
    counties: ["DuPage", "Cook"],
    cities: ["Downers Grove", "Glen Ellyn", "Wheaton", "Lisle", "Naperville", "Lombard", "Villa Park", "Hinsdale", "Clarendon Hills", "Darien", "Burr Ridge", "La Grange", "Palos Heights", "Palos Hills", "Oak Lawn", "Orland Park", "Alsip", "Crestwood", "Chicago - Beverly", "Chicago - Mount Greenwood"],
    pvi: "D+3",
    rating: "Likely Democratic",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Sean Casten (D)",
    primarySummary: "Four-term clean-energy scientist Rep. Sean Casten (D) faces Glen Ellyn healthcare/energy consultant Niki Conforti (R) in a 2024 general election rematch.",
    candidates: [
      {
        id: "sean-casten",
        name: "Sean Casten",
        party: "Democrat",
        role: "U.S. Representative (IL-06, 2019-present); Former Clean Energy Engineer & CEO",
        hometown: "Downers Grove (DuPage County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "SC",
        fecRaised: "$2,108,920",
        fecCashOnHand: "$1,420,000",
        pacPolicy: "Accepts Clean Energy, Financial & Ideological PACs",
        pacSummary: "Raised $2.11M in the 2026 cycle. Heavily backed by League of Conservation Voters (GiveGreen), New Democrat Coalition, J Street PAC & JACPAC ($33k+ in 2026; $200k+ career pro-Israel networks), and financial services PACs.",
        pacs: [
          { name: "League of Conservation Voters (LCV) / GiveGreen", type: "Ideological PAC", amount: "$85,000+ Bundled/PAC", stance: "Supporting" },
          { name: "J Street PAC & JACPAC", type: "Ideological PAC", amount: "$33,000+ (2026) / $200k+ Career", stance: "Supporting" },
          { name: "New Democrat Coalition Action Fund", type: "Ideological PAC", amount: "$25,000+", stance: "Supporting" },
          { name: "Brady PAC & Giffords PAC", type: "Ideological PAC", amount: "$15,000+", stance: "Supporting" },
          { name: "House Financial Services Sector PACs", type: "Corporate PAC", amount: "$240,000+", stance: "Supporting" }
        ],
        endorsements: ["League of Conservation Voters", "New Democrat Coalition", "J Street PAC", "Illinois AFL-CIO", "Brady PAC"],
        issues: {
          economy: "Opposes Trump blanket tariffs as inflationary taxes on suburban families; focuses on clean-tech manufacturing, capital markets stability, and R&D investment.",
          healthcare: "Supports expanding ACA premium subsidies, Medicare drug price negotiation, and protecting reproductive and mental healthcare.",
          immigration: "Supports bipartisan border security funding paired with expanded legal visa pathways for STEM and healthcare workers.",
          energy: "Congress's foremost clean-energy hawk; champions FERC transmission reform, battery storage, carbon pricing, and defending Inflation Reduction Act clean energy credits.",
          taxes: "Leads suburban efforts to repeal the SALT deduction cap while closing fossil-fuel and private-equity tax loopholes.",
          reproductive: "Strong advocate for codifying Roe v. Wade, protecting mifepristone access, and federal IVF protections.",
          foreignPolicy: "Backs military aid to Ukraine and NATO; supports Israel's security while pressing for humanitarian access in Gaza and a two-state diplomatic horizon.",
          guns: "Supports banning assault weapons, universal background checks, and federal safe-storage laws."
        }
      },
      {
        id: "niki-conforti",
        name: "Niki Conforti",
        party: "Republican",
        role: "Energy Consultant & Healthcare Staffing Executive",
        hometown: "Glen Ellyn (DuPage County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "NC",
        fecRaised: "$315,000",
        fecCashOnHand: "$118,000",
        pacPolicy: "Accepts GOP Women & Business PACs",
        pacSummary: "Backed by DuPage and Southwest Cook Republican organizations, VIEW PAC / conservative women's networks, and suburban small-business donors.",
        pacs: [
          { name: "VIEW PAC / Suburban GOP Women Networks", type: "Ideological PAC", amount: "$25,000+", stance: "Supporting" },
          { name: "DuPage & Orland/Palos GOP Organizations", type: "Party Committee", amount: "$40,000+", stance: "Supporting" }
        ],
        endorsements: ["DuPage County GOP", "Orland Township GOP", "Illinois Family Action"],
        issues: {
          economy: "Attacks Casten for federal deficit spending and high suburban cost of living; supports deregulation and targeted tariffs to protect U.S. manufacturing.",
          healthcare: "Draws on healthcare staffing background to advocate market competition, nurse workforce expansion, and repealing ACA mandates.",
          immigration: "Demands immediate southern border closure, ending sanctuary policies, and halting taxpayer spending on migrant housing.",
          energy: "Energy consultant who advocates fossil fuel and nuclear expansion, blaming green mandates for ComEd capacity rate spikes.",
          taxes: "Supports making the 2017 TCJA tax cuts permanent and cutting corporate and small-business tax rates.",
          reproductive: "Pro-life; supports parental notification and barring federal taxpayer funding for abortion.",
          foreignPolicy: "Supports Peace Through Strength, unconditional backing for Israel, and strict limits on Ukraine aid.",
          guns: "Defends Second Amendment rights and calls for repealing the SAFE-T Act and backing suburban police."
        }
      }
    ]
  },
  {
    id: "us-house-il-07",
    level: "federal",
    office: "U.S. Representative - District 7",
    districtCode: "IL-07",
    districtName: "7th Congressional District (Downtown Chicago, Loop, West Side, Oak Park & Near West Suburbs)",
    region: "Chicago Loop, West Side & Near West Suburbs",
    counties: ["Cook"],
    cities: ["Chicago - The Loop", "Chicago - River North", "Chicago - Gold Coast", "Chicago - West Loop", "Chicago - Austin", "Chicago - Garfield Park", "Chicago - North Lawndale", "Chicago - Englewood", "Chicago - Bridgeport", "Chicago - Chinatown", "Oak Park", "Forest Park", "River Forest", "Maywood", "Bellwood", "Broadview", "Hillside", "Westchester"],
    pvi: "D+35",
    rating: "Safe Democratic",
    isOpenSeat: true,
    isBattleground: false,
    incumbent: "Danny K. Davis (D - Retired after 15 terms)",
    primarySummary: "Veteran State Rep. La Shawn K. Ford (D) won the 13-candidate March 2026 Democratic primary to succeed retiring Rep. Danny Davis, overcoming nearly $2M in attack ads from crypto Super PAC Fairshake (over Ford's crypto kiosk regulations) and heavy AIPAC/UDP spending for rival Melissa Conyears-Ervin.",
    candidates: [
      {
        id: "la-shawn-ford",
        name: "La Shawn K. Ford",
        party: "Democrat",
        role: "Illinois State Representative (HD-8, 2007-present) & Former Teacher",
        hometown: "Chicago (Austin / West Side), IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "LF",
        fecRaised: "$620,000",
        fecCashOnHand: "$185,000",
        pacPolicy: "Grassroots & Labor Backed (Defeated $2M Crypto Super PAC Opposition)",
        pacSummary: "Won the March 2026 primary despite nearly $2M in negative independent expenditures from Fairshake (crypto Super PAC) and heavy United Democracy Project (AIPAC) spending for rival Melissa Conyears-Ervin. Backed by West Side community coalitions, SEIU, and local labor.",
        pacs: [
          { name: "SEIU Healthcare & Local Labor Coalitions", type: "Labor PAC", amount: "$45,000+", stance: "Supporting" },
          { name: "Illinois Trial Lawyers & Community PACs", type: "Trade PAC", amount: "$35,000+", stance: "Supporting" },
          { name: "Fairshake (Crypto Super PAC)", type: "Super PAC", amount: "$1,950,000 IE Against (Primary)", stance: "Opposing" },
          { name: "United Democracy Project (AIPAC Super PAC)", type: "Super PAC", amount: "Backed Primary Rival Conyears-Ervin", stance: "Opposing" }
        ],
        endorsements: ["U.S. Rep. Danny K. Davis", "SEIU Healthcare", "West Side Ministers Coalition", "Illinois AFL-CIO"],
        issues: {
          economy: "Focuses on West Side economic reconstruction, federal funding for vocational apprenticeships, second-chance hiring for returning citizens, and downtown Loop office-to-residential conversions.",
          healthcare: "Champions federal funding for West and South Side safety-net hospitals (Loretto, Mount Sinai), Medicare for All, and expanded mental health/opioid treatment.",
          immigration: "Supports humane immigrant protections, work authorization for both new arrivals and long-term undocumented residents, and equitable federal funding for Black and brown communities.",
          energy: "Supports urban solar, weatherization grants for West Side two-flats, and full federal funding to replace Chicago's 400,000 lead service lines.",
          taxes: "Supports expanding the EITC and Child Tax Credit, taxing Wall Street speculation, and regulating predatory cryptocurrency ATMs/kiosks.",
          reproductive: "Strong supporter of codifying Roe v. Wade and expanding maternal healthcare clinics.",
          foreignPolicy: "Supports a permanent ceasefire in Gaza, human rights accountability for U.S. military aid, and increased development aid to Africa and the Caribbean.",
          guns: "Advocates banning assault weapons, cracking down on out-of-state gun straw purchasers, and treating gun violence as a public health crisis."
        }
      },
      {
        id: "chad-koppie",
        name: "Chad N. Koppie",
        party: "Republican",
        role: "Retired Delta Air Lines Captain & Farmer",
        hometown: "Gilberts / Cook County, IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "CK",
        fecRaised: "$11,000",
        fecCashOnHand: "$4,200",
        pacPolicy: "Grassroots Conservative Only",
        pacSummary: "Minimal fundraising; backed by pro-life and constitutional conservative activist groups.",
        pacs: [
          { name: "Illinois Right to Life / Pro-Life Action", type: "Ideological PAC", amount: "Endorsed", stance: "Supporting" }
        ],
        endorsements: ["Illinois Family Action", "Pro-Life Action League"],
        issues: {
          economy: "Calls for strict constitutional limits on federal spending, auditing the Federal Reserve, and slashing business regulations.",
          healthcare: "Opposes government healthcare mandates and ACA subsidies.",
          immigration: "Demands immediate deportation of undocumented immigrants and ending Chicago's sanctuary city status.",
          energy: "Opposes climate change regulations and green energy subsidies; favors coal, oil, and nuclear.",
          taxes: "Supports a flat federal tax and abolishing the estate tax.",
          reproductive: "Hardline anti-abortion advocate supporting federal personhood legislation without exceptions.",
          foreignPolicy: "Non-interventionist America First posture.",
          guns: "Supports constitutional carry and repealing all federal gun control laws."
        }
      }
    ]
  },
  {
    id: "us-house-il-08",
    level: "federal",
    office: "U.S. Representative - District 8",
    districtCode: "IL-08",
    districtName: "8th Congressional District (Northwest & West Suburbs - Schaumburg, Elgin, Hoffman Estates, Elk Grove Village)",
    region: "Northwest & Fox Valley Suburbs",
    counties: ["Cook", "DuPage", "Kane"],
    cities: ["Schaumburg", "Hoffman Estates", "Elgin", "South Elgin", "Elk Grove Village", "Palatine", "Rolling Meadows", "Streamwood", "Hanover Park", "Bartlett", "Roselle", "Bloomingdale", "Carol Stream", "Itasca", "Wood Dale", "Carpentersville", "East Dundee", "West Dundee"],
    pvi: "D+6",
    rating: "Likely Democratic",
    isOpenSeat: true,
    isBattleground: true,
    incumbent: "Raja Krishnamoorthi (D - Vacated seat to run for U.S. Senate)",
    primarySummary: "Former U.S. Rep. Melissa Bean (D, who held IL-08 from 2005-2011) won the crowded March 2026 Democratic primary (~32%) over progressive Junaid Ahmed after receiving millions in Super PAC support from Elect Chicago Women and Fairshake allies. She faces well-funded tech CEO Jennifer Davis (R, $1.5M+ raised).",
    candidates: [
      {
        id: "melissa-bean",
        name: "Melissa L. Bean",
        party: "Democrat",
        role: "Former U.S. Representative (IL-08, 2005-2011) & Financial/Business Executive",
        hometown: "Barrington / Schaumburg area, IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "MB",
        fecRaised: "$2,150,000",
        fecCashOnHand: "$680,000",
        pacPolicy: "Accepts Corporate, New Dem & Super PAC Support",
        pacSummary: "Propelled in the March 2026 primary by millions in independent expenditures from Elect Chicago Women (AIPAC-donor-aligned Super PAC) and Fairshake-aligned crypto networks to defeat progressive Junaid Ahmed. Also backed by the New Democrat Coalition and business PACs.",
        pacs: [
          { name: "Elect Chicago Women (AIPAC-Aligned Super PAC)", type: "Super PAC", amount: "$2,800,000+ IE (Primary)", stance: "Supporting" },
          { name: "Fairshake / Crypto Industry Super PAC Network", type: "Super PAC", amount: "$1,500,000+ IE (Primary)", stance: "Supporting" },
          { name: "New Democrat Coalition Action Fund", type: "Ideological PAC", amount: "$35,000+", stance: "Supporting" },
          { name: "Financial Services & Suburban Corporate PACs", type: "Corporate PAC", amount: "$290,000+", stance: "Supporting" },
          { name: "IUOE Local 150 & Building Trades", type: "Labor PAC", amount: "$30,000+", stance: "Supporting" }
        ],
        endorsements: ["New Democrat Coalition", "U.S. Chamber / Business Allies", "IUOE Local 150", "DMFI"],
        issues: {
          economy: "Centrist, pro-business New Democrat; focuses on Schaumburg/Golden Corridor corporate growth, bipartisan workforce training, fiscal discipline, and balanced digital-asset regulation.",
          healthcare: "Opposes single-payer Medicare for All; supports strengthening the ACA private marketplace, lowering drug costs, and protecting suburban hospital systems.",
          immigration: "Supports bipartisan border security enforcement paired with high-skilled H-1B and manufacturing workforce visa reform.",
          energy: "Supports grid reliability for Elk Grove Village's massive data center park alongside pragmatic clean energy tax credits.",
          taxes: "Prioritizes repealing the SALT deduction cap for suburban homeowners and maintaining competitive R&D tax credits for manufacturers.",
          reproductive: "Supports codifying Roe v. Wade and protecting access to contraception and IVF.",
          foreignPolicy: "Staunch supporter of the U.S.-Israel strategic alliance, NATO, and countering Chinese trade practices.",
          guns: "Supports universal background checks, red-flag laws, and assault weapon restrictions."
        }
      },
      {
        id: "jennifer-davis",
        name: "Jennifer Davis",
        party: "Republican",
        role: "Tech Entrepreneur, Founder of Davisware & BExponential",
        hometown: "West Dundee / Elgin area (Kane County), IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "JD",
        fecRaised: "$1,540,000",
        fecCashOnHand: "$610,000",
        pacPolicy: "Self-Funded + Business & GOP Women PACs",
        pacSummary: "One of the best-funded Republican House challengers in Illinois ($1.54M+ raised), combining personal tech entrepreneurship wealth with VIEW PAC and suburban business donor networks.",
        pacs: [
          { name: "Candidate Self-Funding & Tech Executive Network", type: "Business Donor Network", amount: "$850,000+", stance: "Supporting" },
          { name: "VIEW PAC & Winning For Women", type: "Ideological PAC", amount: "$35,000+", stance: "Supporting" },
          { name: "Suburban Small Business & Manufacturing PACs", type: "Trade PAC", amount: "$95,000+", stance: "Supporting" }
        ],
        endorsements: ["VIEW PAC", "Kane & Schaumburg Township GOP", "Suburban Business Leaders"],
        issues: {
          economy: "Campaigns as a Main Street software CEO; focuses on cutting federal deficit spending, fostering U.S. AI and manufacturing competitiveness, and expanding vocational education.",
          healthcare: "Advocates small-business association health plans, transparent hospital pricing, and telehealth expansion.",
          immigration: "Calls for strict southern border security combined with merit-based legal immigration.",
          energy: "Supports nuclear and natural gas expansion to power AI data centers and manufacturing without raising household electric bills.",
          taxes: "Supports extending the 2017 TCJA tax cuts, full immediate R&D expensing for small businesses, and property tax relief.",
          reproductive: "Focuses on maternal health, adoption tax credits, and state-level governance on abortion.",
          foreignPolicy: "Emphasizes national cybersecurity defense against China, Russia, and Iran, and strong support for Israel.",
          guns: "Supports Second Amendment rights, school resource officers, and mental health intervention."
        }
      }
    ]
  },
  {
    id: "us-house-il-09",
    level: "federal",
    office: "U.S. Representative - District 9",
    districtCode: "IL-09",
    districtName: "9th Congressional District (Chicago Far North Side, Evanston, Skokie, North Shore & McHenry Suburbs)",
    region: "Chicago Far North Side & North Shore",
    counties: ["Cook", "Lake", "McHenry"],
    cities: ["Chicago - Rogers Park", "Chicago - Edgewater", "Chicago - Uptown", "Chicago - Andersonville", "Chicago - Albany Park", "Chicago - Sauganash", "Evanston", "Skokie", "Lincolnwood", "Morton Grove", "Niles", "Wilmette", "Kenilworth", "Winnetka", "Northfield", "Glenview", "Des Plaines", "Prospect Heights", "Wheeling", "Mount Prospect", "Arlington Heights", "Buffalo Grove", "Wauconda", "Cary", "Algonquin", "Lake in the Hills", "Crystal Lake"],
    pvi: "D+19",
    rating: "Safe Democratic",
    isOpenSeat: true,
    isBattleground: false,
    incumbent: "Jan Schakowsky (D - Retired after 14 terms / 27 years)",
    primarySummary: "In the most expensive House primary in Illinois ($17M+ combined spending), Evanston Mayor Daniel Biss (D) won the 14-candidate March 2026 primary (~29.5%) over State Sen. Laura Fine, Kat Abughazaleh, and Bushra Amiwala, overcoming $1.4M+ in attack ads from AIPAC-aligned Super PACs (which spent $5.8M boosting Fine). Biss faces pastor John Elleson (R).",
    candidates: [
      {
        id: "daniel-biss",
        name: "Daniel Biss",
        party: "Democrat",
        role: "Mayor of Evanston (2021-2026); Former Illinois State Senator & Mathematician",
        hometown: "Evanston (Cook County), IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "DB",
        fecRaised: "$2,450,000",
        fecCashOnHand: "$410,000",
        pacPolicy: "Rejects Corporate PACs & AIPAC; Backed by J Street & Labor",
        pacSummary: "Publicly rejected AIPAC money and overcame $1.4M+ in attack ads from AIPAC-linked Elect Chicago Women (which spent $5.8M for rival Laura Fine). Backed by J Street PAC ($200k+ bundled/PAC), Working Families Party, SEIU, CTU, and LCV.",
        pacs: [
          { name: "J Street PAC", type: "Ideological PAC", amount: "$200,000+ Bundled & PAC", stance: "Supporting" },
          { name: "Working Families Party & PCCC", type: "Ideological PAC", amount: "$50,000+ & Field", stance: "Supporting" },
          { name: "SEIU & Chicago Teachers Union (CTU)", type: "Labor PAC", amount: "$60,000+", stance: "Supporting" },
          { name: "League of Conservation Voters (LCV Action Fund)", type: "Ideological PAC", amount: "$25,000+", stance: "Supporting" },
          { name: "Elect Chicago Women / AIPAC Network", type: "Super PAC", amount: "$1,400,000+ IE Against (Backed Fine with $5.8M)", stance: "Opposing" }
        ],
        endorsements: ["U.S. Sen. Elizabeth Warren", "Outgoing Rep. Jan Schakowsky", "J Street PAC", "Working Families Party", "SEIU", "LCV Action Fund"],
        issues: {
          economy: "Progressive economist/mathematician platform: $25/hour minimum wage, universal child care, federal investments in transit and social housing, and abolishing the Senate filibuster.",
          healthcare: "Longtime champion of Medicare for All (single-payer), capping out-of-pocket drug costs, and expanding federal mental health crisis funding.",
          immigration: "Fiercely opposes Trump ICE raids (Operation Midway Blitz); championed municipal sanctuary protections in Evanston and pathways to citizenship.",
          energy: "Advocates a Green New Deal, phasing out fossil fuel subsidies, Lake Michigan shoreline resilience, and clean public transit.",
          taxes: "Supports billionaire wealth taxes, closing carried-interest loopholes, and restoring the SALT deduction for middle-class homeowners.",
          reproductive: "Supports codifying Roe v. Wade, repealing the Hyde Amendment, and protecting gender-affirming and reproductive healthcare.",
          foreignPolicy: "Supports conditioning U.S. offensive military aid to Israel on human rights compliance, a permanent Gaza ceasefire, host-release diplomacy, and a two-state solution.",
          guns: "Champions a federal assault weapons ban, universal background checks, and local reparations/community investment programs."
        }
      },
      {
        id: "john-elleson",
        name: "John D. Elleson",
        party: "Republican",
        role: "Evangelical Pastor & Community Leader",
        hometown: "Arlington Heights, IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "JE",
        fecRaised: "$32,000",
        fecCashOnHand: "$11,500",
        pacPolicy: "Grassroots Small-Dollar Only",
        pacSummary: "Retail door-to-door grassroots campaign funded by individual conservative donors in Cook, Lake, and McHenry counties.",
        pacs: [
          { name: "North Suburban & McHenry GOP Committees", type: "Party Committee", amount: "Grassroots Support", stance: "Supporting" }
        ],
        endorsements: ["Wheeling & Maine Township GOP", "Illinois Family Action"],
        issues: {
          economy: "Opposes progressive tax-and-spend policies and democratic socialism; calls for balanced federal budgets to lower inflation.",
          healthcare: "Opposes government-run healthcare; supports faith-based and community health clinics and market choice.",
          immigration: "Demands strict border enforcement, ending sanctuary city policies, and enforcing federal immigration law.",
          energy: "Supports nuclear and natural gas reliability to lower winter heating and summer electric bills.",
          taxes: "Calls for making the 2017 tax cuts permanent and curbing property and income tax burdens.",
          reproductive: "Pro-life pastor; supports protecting unborn life and parental rights in education.",
          foreignPolicy: "Advocates unconditional U.S. support for Israel and confronting Iranian aggression.",
          guns: "Supports Second Amendment rights and increased funding and legal protections for local police."
        }
      }
    ]
  },
  {
    id: "us-house-il-10",
    level: "federal",
    office: "U.S. Representative - District 10",
    districtCode: "IL-10",
    districtName: "10th Congressional District (Lake County, North Shore & Northern Cook - Waukegan, Highland Park, Glenview, Mundelein)",
    region: "Lake County & North Shore",
    counties: ["Lake", "Cook", "McHenry"],
    cities: ["Waukegan", "North Chicago", "Zion", "Gurnee", "Round Lake", "Round Lake Beach", "Grayslake", "Antioch", "Fox Lake", "Mundelein", "Libertyville", "Vernon Hills", "Lake Forest", "Highland Park", "Deerfield", "Lincolnshire", "Buffalo Grove", "Wheeling", "Northbrook", "Glenview"],
    pvi: "D+11",
    rating: "Safe Democratic",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Brad Schneider (D)",
    primarySummary: "New Democrat Coalition Chair Rep. Brad Schneider (D) won renomination and faces Highland Park accountant Carl Lambrecht (R).",
    candidates: [
      {
        id: "brad-schneider",
        name: "Brad Schneider",
        party: "Democrat",
        role: "U.S. Representative (IL-10, 2013-2015, 2017-present); Chair, New Democrat Coalition",
        hometown: "Highland Park (Lake County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "BS",
        fecRaised: "$3,010,000",
        fecCashOnHand: "$2,150,000",
        pacPolicy: "Major AIPAC & Corporate Ways and Means PAC Recipient",
        pacSummary: "Raised ~$3.0M for 2026. One of the top recipients of pro-Israel PAC funding in the U.S. House ($400,000+ in 2026 cycle from AIPAC, NORPAC, JACPAC; $1.1M+ career), alongside major pharmaceutical/biotech (AbbVie, Baxter) and financial services PACs via his Ways and Means seat.",
        pacs: [
          { name: "AIPAC PAC, NORPAC & JACPAC", type: "Ideological PAC", amount: "$400,000+ (2026) / $1,100,000+ Career", stance: "Supporting" },
          { name: "New Democrat Coalition Action Fund", type: "Ideological PAC", amount: "$50,000+ (Chairs Coalition)", stance: "Supporting" },
          { name: "Healthcare/Pharma Corporate PACs (AbbVie, Baxter, Abbott)", type: "Corporate PAC", amount: "$280,000+", stance: "Supporting" },
          { name: "Brady PAC, Giffords PAC & Everytown", type: "Ideological PAC", amount: "$30,000+", stance: "Supporting" },
          { name: "League of Conservation Voters (LCV)", type: "Ideological PAC", amount: "$15,000+", stance: "Supporting" }
        ],
        endorsements: ["New Democrat Coalition", "AIPAC", "Brady PAC", "Giffords PAC", "Illinois AFL-CIO", "LCV"],
        issues: {
          economy: "Chairs the centrist New Democrat Coalition; champions bipartisan R&D tax credits, Lake County pharmaceutical/biotech job growth, and fiscal stability.",
          healthcare: "Supports shoring up the Affordable Care Act, expanding telehealth and mental health parity, and fostering life-sciences innovation.",
          immigration: "Advocates bipartisan border security paired with legal pathways for DACA recipients and high-skilled workers.",
          energy: "Supports Great Lakes environmental restoration, clean energy tax incentives on the Ways and Means Committee, and Zion nuclear waste solutions.",
          taxes: "Leading House Democratic negotiator to repeal or raise the federal SALT deduction cap for Lake and northern Cook County homeowners.",
          reproductive: "Staunch supporter of codifying Roe v. Wade and protecting access to IVF and contraception.",
          foreignPolicy: "One of Congress's most vocal champions of unconditional U.S.-Israel defense aid, the Abraham Accords, confronting Iran, and supporting Ukraine.",
          guns: "Following the 2022 Highland Park Fourth of July parade shooting in his hometown, makes passing a federal assault weapons ban and universal background checks a core priority."
        }
      },
      {
        id: "carl-lambrecht",
        name: "Carl Lambrecht",
        party: "Republican",
        role: "Certified Public Accountant (CPA) & Civic Activist",
        hometown: "Highland Park (Lake County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "CL",
        fecRaised: "$44,000",
        fecCashOnHand: "$18,200",
        pacPolicy: "Grassroots & Local Business Donors",
        pacSummary: "Modest grassroots fundraising supported by Lake County Republican organizations and local small-business owners.",
        pacs: [
          { name: "Lake County Republican Central Committee", type: "Party Committee", amount: "Local Support", stance: "Supporting" }
        ],
        endorsements: ["Lake County GOP", "North Shore Conservative Coalition"],
        issues: {
          economy: "CPA who focuses on the $36T+ national debt, curbing federal spending, and stopping Lake County businesses from moving across the border to Wisconsin.",
          healthcare: "Supports market-based insurance competition, HSA expansion, and reducing regulatory mandates.",
          immigration: "Calls for strict southern border enforcement and ending federal subsidies for sanctuary jurisdictions.",
          energy: "Advocates reliable nuclear and natural gas generation to prevent utility rate spikes.",
          taxes: "Supports making the 2017 TCJA tax rates permanent while demanding Illinois cut state and local property taxes.",
          reproductive: "Supports state-level determination and parental involvement.",
          foreignPolicy: "Supports a strong U.S.-Israel alliance and strict fiscal auditing of overseas aid.",
          guns: "Supports enforcing existing gun laws against violent criminals and expanding mental health resources rather than banning firearms for law-abiding citizens."
        }
      }
    ]
  },
  {
    id: "us-house-il-11",
    level: "federal",
    office: "U.S. Representative - District 11",
    districtCode: "IL-11",
    districtName: "11th Congressional District (Aurora, Naperville, Bolingbrook, Geneva, St. Charles, Crystal Lake, McHenry & Belvidere)",
    region: "Fox Valley, Western & NW Collar Suburbs",
    counties: ["Kane", "DuPage", "Will", "McHenry", "Lake", "Cook", "DeKalb", "Boone"],
    cities: ["Aurora", "Naperville", "Bolingbrook", "Joliet", "Plainfield", "Warrenville", "Geneva", "Batavia", "St. Charles", "Elburn", "Sugar Grove", "North Aurora", "Elgin", "Algonquin", "Crystal Lake", "Woodstock", "McHenry", "Marengo", "Harvard", "Belvidere"],
    pvi: "D+5",
    rating: "Likely Democratic",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Bill Foster (D)",
    primarySummary: "Fermilab physicist Rep. Bill Foster (D) faces Elburn Mayor and retired Navy Master Chief Jeff Walter (R) in a suburban collar-county race.",
    candidates: [
      {
        id: "bill-foster",
        name: "Bill Foster",
        party: "Democrat",
        role: "U.S. Representative (IL-11, 2008-2011, 2013-present); Ph.D. Physicist (Fermilab) & Businessman",
        hometown: "Naperville, IL",
        incumbentStatus: "Incumbent",
        photoInitials: "BF",
        fecRaised: "$2,180,937",
        fecCashOnHand: "$1,610,000",
        pacPolicy: "Accepts Financial, Tech, Labor & AIPAC PACs",
        pacSummary: "Raised $2.18M in the 2026 cycle, including $833,000+ directly from PACs (financial services, banking, tech, labor unions, and $200k+ career pro-Israel PAC support).",
        pacs: [
          { name: "Financial Services, Banking & Fintech PACs", type: "Corporate PAC", amount: "$380,000+", stance: "Supporting" },
          { name: "AIPAC PAC & Pro-Israel Networks", type: "Ideological PAC", amount: "$200,000+ (Career)", stance: "Supporting" },
          { name: "Illinois AFL-CIO, IBEW & Building Trades PACs", type: "Labor PAC", amount: "$140,000+", stance: "Supporting" },
          { name: "New Democrat Coalition Action Fund", type: "Ideological PAC", amount: "$30,000+", stance: "Supporting" },
          { name: "League of Conservation Voters & Brady PAC", type: "Ideological PAC", amount: "$25,000+", stance: "Supporting" }
        ],
        endorsements: ["New Democrat Coalition", "Illinois AFL-CIO", "IBEW", "AIPAC", "LCV", "Brady PAC"],
        issues: {
          economy: "Congress's lone Ph.D. physicist; champions federal funding for Fermilab and Argonne National Labs, AI safety standards, secure digital IDs, and semiconductor/quantum manufacturing.",
          healthcare: "Supports protecting the ACA, expanding Medicare drug price negotiations, and funding biomedical research.",
          immigration: "Supports border security technology and expanding STEM green cards for international scientists and engineers.",
          energy: "Strong advocate for next-generation nuclear power, battery storage R&D, and clean energy grid modernization.",
          taxes: "Supports lifting the SALT deduction cap for DuPage, Kane, and McHenry homeowners and expanding the R&D tax credit.",
          reproductive: "Supports codifying Roe v. Wade and protecting access to contraception and IVF.",
          foreignPolicy: "Backs military and intelligence support for Ukraine, NATO, and Israel while monitoring nuclear non-proliferation.",
          guns: "Supports universal background checks, red-flag laws, and banning assault weapons."
        }
      },
      {
        id: "jeff-walter",
        name: "Jeffrey 'Jeff' D. Walter",
        party: "Republican",
        role: "Village President (Mayor) of Elburn; Retired U.S. Navy Master Chief & Manufacturing Executive",
        hometown: "Elburn (Kane County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "JW",
        fecRaised: "$310,000",
        fecCashOnHand: "$135,000",
        pacPolicy: "Accepts Veteran, Municipal & Small-Business PACs",
        pacSummary: "Backed by Fox Valley and McHenry County mayors, veterans' PACs, and suburban small-business contributors.",
        pacs: [
          { name: "Veterans & Military Retiree PACs", type: "Ideological PAC", amount: "$35,000+", stance: "Supporting" },
          { name: "Kane, McHenry & DuPage GOP Committees", type: "Party Committee", amount: "$45,000+", stance: "Supporting" }
        ],
        endorsements: ["Fox Valley Municipal Leaders", "Kane & McHenry County GOP", "Veterans for Conservative Leadership"],
        issues: {
          economy: "Focuses on reigning in federal deficit spending, defending suburban local zoning control against federal high-density housing mandates, and boosting Fox Valley manufacturing.",
          healthcare: "Prioritizes VA healthcare reform for veterans and market-driven health insurance options for small businesses.",
          immigration: "Attacks Foster for voting against the SAVE Act; demands strict southern border security and ending sanctuary state policies.",
          energy: "Supports nuclear and natural gas base-load power to keep industrial and residential electric rates affordable.",
          taxes: "Supports extending the 2017 TCJA tax cuts and reducing federal burdens on retirees and homeowners.",
          reproductive: "Favors state-level regulation and opposes taxpayer funding for abortion.",
          foreignPolicy: "26-year Navy veteran advocating a stronger U.S. Navy to deter China in the Indo-Pacific and strict oversight of foreign aid.",
          guns: "Staunch Second Amendment defender and supporter of local law enforcement."
        }
      }
    ]
  },
  {
    id: "us-house-il-12",
    level: "federal",
    office: "U.S. Representative - District 12",
    districtCode: "IL-12",
    districtName: "12th Congressional District (Southern Illinois & Metro East - Belleville, O'Fallon, Carbondale, Marion, Mount Vernon, Effingham)",
    region: "Southern Illinois & Metro East",
    counties: ["St. Clair", "Monroe", "Randolph", "Jackson", "Williamson", "Franklin", "Jefferson", "Marion", "Effingham", "Coles", "Saline", "Massac", "Union"],
    cities: ["Belleville", "O'Fallon", "Mascoutah", "Waterloo", "Columbia", "Carbondale", "Murphysboro", "Marion", "Herrin", "Benton", "Mount Vernon", "Centralia", "Salem", "Effingham", "Mattoon", "Charleston", "Olney", "Harrisburg", "Anna", "Cairo", "Metropolis"],
    pvi: "R+23",
    rating: "Safe Republican",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Mike Bost (R)",
    primarySummary: "House Veterans' Affairs Chair Rep. Mike Bost (R) won renomination and faces O'Fallon Air Force veteran and cancer researcher Dr. Julie Fortier (D).",
    candidates: [
      {
        id: "mike-bost",
        name: "Mike Bost",
        party: "Republican",
        role: "U.S. Representative (IL-12, 2015-present); Chair, House Veterans' Affairs Committee",
        hometown: "Murphysboro (Jackson County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "MB",
        fecRaised: "$1,340,000",
        fecCashOnHand: "$820,000",
        pacPolicy: "Accepts Agribusiness, Energy, Defense & Conservative PACs",
        pacSummary: "Backed by Donald Trump, NRA Political Victory Fund, Illinois Farm Bureau ACTIVATOR, AIPAC, and major agribusiness (ADM, Deere), railroad (Union Pacific, BNSF), and coal/utility (Ameren, Peabody) corporate PACs.",
        pacs: [
          { name: "Illinois Farm Bureau ACTIVATOR & Agribusiness PACs", type: "Trade PAC", amount: "$185,000+", stance: "Supporting" },
          { name: "Railroad, Trucking & Infrastructure PACs (BNSF, UP)", type: "Corporate PAC", amount: "$140,000+", stance: "Supporting" },
          { name: "NRA Political Victory Fund (A-Rated)", type: "Ideological PAC", amount: "$10,000", stance: "Supporting" },
          { name: "AIPAC PAC", type: "Ideological PAC", amount: "$35,000+", stance: "Supporting" },
          { name: "National Right to Life PAC", type: "Ideological PAC", amount: "Endorsed + Support", stance: "Supporting" }
        ],
        endorsements: ["Pres. Donald Trump", "NRA Political Victory Fund", "Illinois Farm Bureau ACTIVATOR", "National Right to Life"],
        issues: {
          economy: "Focuses on passing a producer-friendly Farm Bill, expanding crop insurance, modernizing Mississippi/Ohio River locks and dams, and protecting Scott Air Force Base.",
          healthcare: "Chairs Veterans' Affairs; focuses on VA community care access, rural hospital regulatory relief, and opposing government-run healthcare.",
          immigration: "Staunch supporter of border wall completion, Remain in Mexico, and deporting undocumented immigrants who commit crimes.",
          energy: "Defends Southern Illinois coal mining, oil/gas production, and Ameren fossil-fuel plants against EPA and Illinois CEJA closure mandates; backs corn ethanol and soy biodiesel.",
          taxes: "Supports permanent extension of the 2017 Trump tax cuts and repealing the estate tax on family farms.",
          reproductive: "A+ pro-life rating; supports federal abortion restrictions and banning taxpayer funding for abortion.",
          foreignPolicy: "Advocates Peace Through Strength, strong defense funding for Scott AFB, confronting China, and backing Israel.",
          guns: "A-rated by the NRA; opposes all federal firearm bans, magazine limits, and universal background check mandates."
        }
      },
      {
        id: "julie-fortier",
        name: "Julie Fortier",
        party: "Democrat",
        role: "U.S. Air Force Veteran & Ph.D. Cancer Research Scientist",
        hometown: "O'Fallon (St. Clair County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "JF",
        fecRaised: "$145,000",
        fecCashOnHand: "$58,000",
        pacPolicy: "Rejects Corporate PACs",
        pacSummary: "Funded by small-dollar individual donors, veterans' Democratic groups, and Southern Illinois labor unions; takes zero corporate PAC money.",
        pacs: [
          { name: "Southern Illinois Labor & Teachers Unions", type: "Labor PAC", amount: "$25,000+", stance: "Supporting" },
          { name: "VoteVets / Democratic Veterans Networks", type: "Ideological PAC", amount: "$15,000+", stance: "Supporting" }
        ],
        endorsements: ["Illinois AFL-CIO", "Southern Illinois Labor Council", "VoteVets Supporters"],
        issues: {
          economy: "Campaigns on rebuilding rural Southern Illinois infrastructure, supporting SIU Carbondale research jobs, and protecting union collective bargaining.",
          healthcare: "Cancer scientist who warns that federal Medicaid cuts threaten to close Southern Illinois rural hospitals and OB-GYN clinics; supports lowering drug prices and protecting NIH funding.",
          immigration: "Supports bipartisan border security paired with humane legal pathways for agricultural and healthcare workers.",
          energy: "Supports clean energy manufacturing and grid modernization grants that transition coal communities without leaving workers behind.",
          taxes: "Supports middle-class and family farm tax relief paid for by closing billionaire corporate loopholes.",
          reproductive: "Supports codifying Roe v. Wade and protecting Carbondale's status as a regional reproductive healthcare hub.",
          foreignPolicy: "Air Force veteran supporting NATO allies, Scott AFB readiness, and diplomatic human-rights standards.",
          guns: "Supports universal background checks, safe storage laws, and red-flag protections while respecting Southern Illinois hunting traditions."
        }
      }
    ]
  },
  {
    id: "us-house-il-13",
    level: "federal",
    office: "U.S. Representative - District 13",
    districtCode: "IL-13",
    districtName: "13th Congressional District (Metro East to Central IL - Springfield, Champaign-Urbana, Decatur, Edwardsville, Alton, Belleville, East St. Louis)",
    region: "Central Illinois & Metro East Corridor",
    counties: ["Sangamon", "Champaign", "Macon", "Madison", "St. Clair", "Macoupin", "Christian", "Piatt"],
    cities: ["Springfield", "Champaign", "Urbana", "Decatur", "Edwardsville", "Glen Carbon", "Alton", "Godfrey", "Granite City", "Collinsville", "Wood River", "East St. Louis", "Belleville", "Taylorville", "Carlinville", "Monticello"],
    pvi: "D+3",
    rating: "Likely Democratic (Frontline Battleground)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Nikki Budzinski (D)",
    primarySummary: "Two-term DCCC Frontline incumbent Rep. Nikki Budzinski (D) faces Navy veteran and nuclear engineer Jeff Wilson (R) across the Springfield-Decatur-Champaign-Metro East corridor.",
    candidates: [
      {
        id: "nikki-budzinski",
        name: "Nikki Budzinski",
        party: "Democrat",
        role: "U.S. Representative (IL-13, 2023-present); Former Labor Leader & Pritzker Senior Advisor",
        hometown: "Springfield (Sangamon County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "NB",
        fecRaised: "$2,885,018",
        fecCashOnHand: "$2,110,000",
        pacPolicy: "Heavy Labor PAC, Agribusiness & Bipartisan PAC Backing",
        pacSummary: "Raised $2.89M in the 2026 cycle, including $751,000+ directly from PACs. One of the nation's top recipients of labor union PAC money (AFL-CIO, IBEW, LIUNA, IUOE, UFCW, IAFF), plus EMILYs List, AIPAC & J Street, and agribusiness PACs (ADM, Farm Credit).",
        pacs: [
          { name: "Labor Union PAC Coalition (IBEW, LIUNA, IUOE, UFCW, IAFF)", type: "Labor PAC", amount: "$390,000+", stance: "Supporting" },
          { name: "EMILYs List & DCCC Frontline Program", type: "Ideological PAC", amount: "$120,000+ Bundled/PAC", stance: "Supporting" },
          { name: "AIPAC PAC & J Street PAC", type: "Ideological PAC", amount: "$85,000+", stance: "Supporting" },
          { name: "Agribusiness & Biofuel PACs (ADM, Farm Credit, Growth Energy)", type: "Corporate PAC", amount: "$115,000+", stance: "Supporting" },
          { name: "New Democrat Coalition Action Fund", type: "Ideological PAC", amount: "$30,000+", stance: "Supporting" }
        ],
        endorsements: ["Illinois AFL-CIO", "EMILYs List", "New Democrat Coalition", "AIPAC", "J Street", "IUOE Local 150", "IBEW"],
        issues: {
          economy: "Bipartisan pro-labor moderate; champions the Farm Bill, U.S. Steel Granite City Works job preservation, UIUC Ag-tech research, Springfield high-speed rail, and the PRO Act.",
          healthcare: "Focuses on capping insulin at $35 for all Americans, protecting rural and downstate Medicaid reimbursements, and expanding VA mental health care.",
          immigration: "Backs bipartisan border security legislation (hiring more Border Patrol agents and fentanyl scanners) paired with agricultural workforce visa reform.",
          energy: "Leads bipartisan push for year-round E15 corn ethanol sales, sustainable aviation fuel (SAF) tax credits for Decatur/Central IL, and Ameren grid reliability.",
          taxes: "Supports expanding the Child Tax Credit and EITC while cutting red tape for family farms and small businesses.",
          reproductive: "Champions codifying Roe v. Wade and protecting access to IVF and contraception.",
          foreignPolicy: "Supports bipartisan defense aid for Israel, Ukraine, and Taiwan, and expanding agricultural export markets.",
          guns: "Supports universal background checks, red-flag laws, and federal grants for local downstate police departments."
        }
      },
      {
        id: "jeff-wilson",
        name: "Jeff Wilson",
        party: "Republican",
        role: "U.S. Navy Veteran, Nuclear Engineer & Former Champaign County Board Member",
        hometown: "Seymour (Champaign County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "JW",
        fecRaised: "$185,000",
        fecCashOnHand: "$74,000",
        pacPolicy: "Grassroots Conservative Donors",
        pacSummary: "Funded primarily by small-dollar individual donors and Central Illinois / Metro East county GOP organizations.",
        pacs: [
          { name: "Champaign, Sangamon & Madison GOP Committees", type: "Party Committee", amount: "$25,000+", stance: "Supporting" },
          { name: "Illinois Family Action / Conservative Grassroots", type: "Ideological PAC", amount: "Endorsed", stance: "Supporting" }
        ],
        endorsements: ["Champaign County GOP", "Sangamon County GOP", "Illinois Family Action"],
        issues: {
          economy: "Attacks Budzinski for Biden-Pritzker inflation; calls for deep cuts to federal spending and regulations on Central Illinois farmers and manufacturers.",
          healthcare: "Opposes government health mandates; favors price transparency and protecting healthcare workers' religious conscience rights.",
          immigration: "Demands completing the border wall, ending sanctuary state policies, and halting taxpayer spending on undocumented immigrants.",
          energy: "Nuclear engineer who champions building next-generation nuclear reactors and keeping coal/gas plants open to stop Ameren rate spikes.",
          taxes: "Supports making the 2017 TCJA tax cuts permanent and eliminating the federal estate tax on family farms.",
          reproductive: "Staunchly pro-life; supports federal restrictions on abortion and defunding Planned Parenthood.",
          foreignPolicy: "Navy veteran advocating Peace Through Strength against China, strong support for Israel, and ending blank-check aid to Ukraine.",
          guns: "Unconditional Second Amendment supporter; opposes assault weapon bans and red-flag laws."
        }
      }
    ]
  },
  {
    id: "us-house-il-14",
    level: "federal",
    office: "U.S. Representative - District 14",
    districtCode: "IL-14",
    districtName: "14th Congressional District (Joliet, Plainfield, Aurora, Naperville, Oswego, DeKalb & Ottawa/LaSalle)",
    region: "SW Collar Suburbs & Illinois Valley",
    counties: ["Will", "Kane", "Kendall", "DeKalb", "LaSalle", "Bureau", "Putnam"],
    cities: ["Joliet", "Plainfield", "Aurora", "Naperville", "Romeoville", "Lockport", "Shorewood", "Channahon", "Minooka", "Oswego", "Montgomery", "Yorkville", "Plano", "Sandwich", "Batavia", "DeKalb", "Sycamore", "Ottawa", "LaSalle", "Peru", "Spring Valley", "Princeton"],
    pvi: "D+4",
    rating: "Likely Democratic",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Lauren Underwood (D)",
    primarySummary: "House Democratic DPCC Co-Chair Rep. Lauren Underwood (D) faces Kendall County GOP Chair James Marter (R) in a rematch of their 2024 contest.",
    candidates: [
      {
        id: "lauren-underwood",
        name: "Lauren Underwood",
        party: "Democrat",
        role: "U.S. Representative (IL-14, 2019-present); Registered Nurse & House DPCC Co-Chair",
        hometown: "Naperville (Will/DuPage), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "LU",
        fecRaised: "$2,050,000",
        fecCashOnHand: "$1,180,000",
        pacPolicy: "Accepts Healthcare, Labor, Ag & Leadership PACs",
        pacSummary: "Backed by EMILYs List, American Nurses Association PAC, CBC PAC, Brady/Giffords PACs, labor unions, and agricultural PACs.",
        pacs: [
          { name: "EMILYs List", type: "Ideological PAC", amount: "$45,000+ Bundled/PAC", stance: "Supporting" },
          { name: "American Nurses Association & Healthcare PACs", type: "Trade PAC", amount: "$85,000+", stance: "Supporting" },
          { name: "Congressional Black Caucus PAC (CBC PAC)", type: "Ideological PAC", amount: "$10,000", stance: "Supporting" },
          { name: "Illinois AFL-CIO, SEIU & Building Trades", type: "Labor PAC", amount: "$110,000+", stance: "Supporting" },
          { name: "Brady PAC, Giffords PAC & LCV Action Fund", type: "Ideological PAC", amount: "$30,000+", stance: "Supporting" }
        ],
        endorsements: ["EMILYs List", "American Nurses Association", "Illinois AFL-CIO", "CBC PAC", "Brady PAC", "LCV"],
        issues: {
          economy: "Secures federal Appropriations earmarks for Joliet/Plainfield water infrastructure, I-80 expansion, Northern Illinois University (NIU) research, and Illinois Valley bridges.",
          healthcare: "Registered nurse; authored the Healthcare Affordability Act to make lowered ACA premiums permanent and leads the Black Maternal Health Momnibus Act.",
          immigration: "Ranking Member on Homeland Security Appropriations; backs border inspection technology to stop fentanyl alongside orderly legal asylum processing.",
          energy: "Supports clean energy manufacturing, nuclear preservation in LaSalle/Grundy counties, and agricultural conservation programs.",
          taxes: "Supports lifting the SALT deduction cap for Will, Kane, and Kendall County homeowners and expanding the Child Tax Credit.",
          reproductive: "Champions codifying Roe v. Wade, protecting contraception, and expanding maternal healthcare access.",
          foreignPolicy: "Supports NATO, aid to Ukraine, and U.S.-Israel defense cooperation.",
          guns: "Advocates universal background checks, banning assault weapons, and funding community violence intervention."
        }
      },
      {
        id: "james-marter",
        name: "James 'Jim' Marter",
        party: "Republican",
        role: "Software Consultant & Kendall County Republican Party Chairman",
        hometown: "Oswego (Kendall County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "JM",
        fecRaised: "$142,000",
        fecCashOnHand: "$48,000",
        pacPolicy: "Grassroots Conservative & Right-to-Life PACs",
        pacSummary: "Funded by small-dollar individual donors and conservative grassroots networks; endorsed by Illinois Family Action and Right to Life.",
        pacs: [
          { name: "Illinois Federation for Right to Life PAC", type: "Ideological PAC", amount: "Endorsed", stance: "Supporting" },
          { name: "Kendall, LaSalle & DeKalb GOP Organizations", type: "Party Committee", amount: "$20,000+", stance: "Supporting" }
        ],
        endorsements: ["Kendall County GOP", "Illinois Family Action", "Illinois Federation for Right to Life"],
        issues: {
          economy: "Aligned with Trump and DOGE; demands a balanced budget amendment, eliminating congressional earmarks, and slashing federal agencies.",
          healthcare: "Calls for repealing the Affordable Care Act (Obamacare) and replacing government mandates with free-market insurance.",
          immigration: "Demands immediate border closure, mass deportation of undocumented immigrants, and defunding sanctuary cities.",
          energy: "Opposes Green New Deal and CEJA mandates; supports coal, oil, natural gas, and nuclear power.",
          taxes: "Supports making the 2017 Trump tax cuts permanent and eliminating the federal estate tax.",
          reproductive: "100% pro-life; supports federal legislation protecting unborn life from conception.",
          foreignPolicy: "America First; opposes further U.S. funding for the war in Ukraine and supports tariffs on China.",
          guns: "Unconditional Second Amendment defender; opposes red-flag laws and firearm bans."
        }
      }
    ]
  },
  {
    id: "us-house-il-15",
    level: "federal",
    office: "U.S. Representative - District 15",
    districtCode: "IL-15",
    districtName: "15th Congressional District (West-Central & Central IL - Quincy, Jacksonville, Lincoln, Mahomet, Rantoul, Vandalia, Jerseyville, Troy)",
    region: "West-Central & Rural Central Illinois",
    counties: ["Adams", "Morgan", "Logan", "Madison", "Champaign", "Vermilion", "Coles", "Fayette", "Montgomery", "Macoupin", "Jersey", "Greene", "Hancock"],
    cities: ["Quincy", "Jacksonville", "Lincoln", "Mahomet", "Rantoul", "Pontiac", "Charleston", "Paris", "Vandalia", "Litchfield", "Hillsboro", "Jerseyville", "Greenville", "Highland", "Troy", "Shelbyville", "Beardstown"],
    pvi: "R+21",
    rating: "Safe Republican",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Mary Miller (R)",
    primarySummary: "House Freedom Caucus member Rep. Mary Miller (R) won renomination and faces Edwardsville registered nurse Jennifer Todd (D).",
    candidates: [
      {
        id: "mary-miller",
        name: "Mary Miller",
        party: "Republican",
        role: "U.S. Representative (IL-15, 2021-present); Farmer & House Freedom Caucus Member",
        hometown: "Oakland (Coles County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "MM",
        fecRaised: "$1,310,000",
        fecCashOnHand: "$790,000",
        pacPolicy: "Freedom Caucus, Pro-Life, Gun Rights & Select Ag PACs",
        pacSummary: "Backed by Donald Trump, House Freedom Fund, Club for Growth PAC, Gun Owners of America, and Susan B. Anthony Pro-Life America; takes minimal establishment corporate PAC money.",
        pacs: [
          { name: "House Freedom Fund & Club for Growth PAC", type: "Ideological PAC", amount: "$125,000+ Bundled/PAC", stance: "Supporting" },
          { name: "Gun Owners of America (GOA) & NRA PVF", type: "Ideological PAC", amount: "$15,000+", stance: "Supporting" },
          { name: "Susan B. Anthony Pro-Life America", type: "Ideological PAC", amount: "Endorsed + Support", stance: "Supporting" },
          { name: "Agricultural Producer PACs", type: "Trade PAC", amount: "$65,000+", stance: "Supporting" }
        ],
        endorsements: ["Pres. Donald Trump", "House Freedom Caucus", "Club for Growth", "Gun Owners of America", "Eagle Forum"],
        issues: {
          economy: "Champions family grain and cattle farmers (Protect Illinois Beef), slashing federal spending, dismantling the Department of Education, and opposing ESG banking rules.",
          healthcare: "Opposes vaccine and mask mandates, ACA subsidies, and gender-affirming care; supports rural hospital regulatory relief.",
          immigration: "Advocates mass deportations, finishing the border wall, ending birthright citizenship for children of undocumented immigrants, and defunding sanctuary states.",
          energy: "Fiercely opposes green energy subsidies, EV mandates, and solar/wind conversion of prime Illinois farmland; backs coal, oil, gas, and biofuels.",
          taxes: "Supports permanent 2017 tax cuts, abolishing the death tax on family farms, and deep cuts to IRS enforcement funding.",
          reproductive: "Co-sponsors federal life-at-conception legislation and bans on mail-order medication abortion.",
          foreignPolicy: "America First; voted against Ukraine aid packages, demands strict border-first national security, and backs Israel.",
          guns: "Gun Owners of America backed; supports national constitutional carry and abolishing the ATF."
        }
      },
      {
        id: "jennifer-todd",
        name: "Jennifer Todd",
        party: "Democrat",
        role: "Registered Nurse & Small Business Owner",
        hometown: "Edwardsville (Madison County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "JT",
        fecRaised: "$128,000",
        fecCashOnHand: "$49,000",
        pacPolicy: "Rejects Corporate PACs",
        pacSummary: "Rejects corporate PAC contributions; funded by small-dollar individual donors, nurses' unions, and Illinois AFL-CIO locals.",
        pacs: [
          { name: "Illinois AFL-CIO & Local Labor Unions", type: "Labor PAC", amount: "$20,000+", stance: "Supporting" },
          { name: "Citizen Action / Illinois & Nurses Coalitions", type: "Ideological PAC", amount: "Endorsed", stance: "Supporting" }
        ],
        endorsements: ["Illinois AFL-CIO", "Citizen Action/Illinois", "Downstate Nurses & Educators"],
        issues: {
          economy: "Criticizes Miller for refusing to request federal Community Project Funding (earmarks), costing IL-15 towns millions for rural water systems, bridges, and fire departments.",
          healthcare: "Registered nurse campaigning across all 35 counties to stop rural hospital and maternity ward closures caused by Medicaid cuts.",
          immigration: "Supports practical bipartisan border enforcement paired with legal farmworker visa reform.",
          energy: "Supports family farmers harvesting wind, solar, and biofuel income alongside grid upgrades to lower rural cooperative electric bills.",
          taxes: "Supports middle-class and family-farm tax relief and expanding the Child Tax Credit.",
          reproductive: "Supports restoring federal reproductive freedom and protecting rural OB-GYN access.",
          foreignPolicy: "Supports NATO allies and opening reliable international export markets for Illinois corn and soybeans.",
          guns: "Supports universal background checks and safe firearm storage while respecting rural hunting and sport shooting."
        }
      }
    ]
  },
  {
    id: "us-house-il-16",
    level: "federal",
    office: "U.S. Representative - District 16",
    districtCode: "IL-16",
    districtName: "16th Congressional District (Northern & Central IL - Rockford Suburbs, Freeport, Galena, Dixon, Ottawa, Morris, Pontiac, Morton, Washington, Pekin & Outer Peoria/Bloomington)",
    region: "Northern & Heart of Illinois",
    counties: ["Winnebago", "Boone", "Stephenson", "Jo Daviess", "Ogle", "Lee", "DeKalb", "LaSalle", "Grundy", "Livingston", "McLean", "Tazewell", "Peoria", "Woodford"],
    cities: ["Rockford", "Loves Park", "Machesney Park", "Roscoe", "Rockton", "Belvidere", "Freeport", "Galena", "Dixon", "Rochelle", "Oregon", "Sycamore", "Morris", "Streator", "Pontiac", "Eureka", "Washington", "Morton", "Chillicothe", "Pekin", "Peoria", "Bloomington", "Normal"],
    pvi: "R+13",
    rating: "Safe Republican",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Darin LaHood (R)",
    primarySummary: "Senior Ways and Means member Rep. Darin LaHood (R) faces Rockford union construction director Paul Nolley (D), who is running an anti-corporate-PAC working-class campaign.",
    candidates: [
      {
        id: "darin-lahood",
        name: "Darin LaHood",
        party: "Republican",
        role: "U.S. Representative (IL-16, 2015-present); Senior Member, Ways and Means & Intelligence Committees",
        hometown: "Peoria (Peoria County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "DL",
        fecRaised: "$3,672,739",
        fecCashOnHand: "$5,420,000",
        pacPolicy: " #1 Corporate & Trade PAC Recipient in IL House Delegation (~50% PACs)",
        pacSummary: "Raised $3.67M in the 2026 cycle with over $1.7M (~50%) coming directly from corporate and trade PACs via his Ways and Means Committee seat (Caterpillar, Deere, State Farm, Country Financial, AbbVie, Exelon, Goldman Sachs, U.S. Chamber), plus $140k+ career from AIPAC.",
        pacs: [
          { name: "Ways & Means Corporate PACs (State Farm, Caterpillar, Deere, AbbVie)", type: "Corporate PAC", amount: "$1,250,000+", stance: "Supporting" },
          { name: "U.S. Chamber of Commerce & Financial Trade PACs", type: "Trade PAC", amount: "$350,000+", stance: "Supporting" },
          { name: "AIPAC PAC", type: "Ideological PAC", amount: "$140,000+ (Career)", stance: "Supporting" },
          { name: "Illinois Farm Bureau ACTIVATOR", type: "Trade PAC", amount: "$45,000+", stance: "Supporting" },
          { name: "NRA Political Victory Fund (A-Rated)", type: "Ideological PAC", amount: "$10,000", stance: "Supporting" }
        ],
        endorsements: ["U.S. Chamber of Commerce", "Illinois Farm Bureau ACTIVATOR", "National Federation of Independent Business (NFIB)", "NRA PVF", "AIPAC"],
        issues: {
          economy: "Uses his senior Ways and Means seat to champion free-trade export agreements for Illinois corn, soybeans, and heavy machinery (Caterpillar/Deere) while countering Chinese IP theft.",
          healthcare: "Supports Medicare Advantage, rural telehealth expansion, and market-driven health savings accounts.",
          immigration: "Supports strict southern border enforcement alongside structured legal agricultural guest-worker programs.",
          energy: "Supports Illinois nuclear power plants (Byron, Dresden, LaSalle), clean coal/natural gas, and sustainable aviation fuel / ethanol tax credits.",
          taxes: "Leads House GOP efforts to extend and expand the 2017 Tax Cuts and Jobs Act (TCJA), pass-through small business deductions, and R&D expensing.",
          reproductive: "Pro-life; supports the Hyde Amendment and state-level abortion restrictions.",
          foreignPolicy: "Serves on House Intelligence and China Select Committee; advocates deterring Beijing, backing Israel and NATO, and targeted foreign-aid oversight.",
          guns: "A-rated by the NRA; opposes federal firearm bans and supports law enforcement funding."
        }
      },
      {
        id: "paul-nolley",
        name: "Paul Nolley",
        party: "Democrat",
        role: "Executive Director of Project First Rate (Union Construction Labor-Management Partnership)",
        hometown: "Rockford (Winnebago County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "PN",
        fecRaised: "$215,000",
        fecCashOnHand: "$88,000",
        pacPolicy: "Rejects Corporate PACs; Building Trades & Labor Backed",
        pacSummary: "Explicitly rejects all corporate PAC money, making LaHood's $1.7M+ in corporate PAC receipts a central campaign contrast. Funded by small-dollar donors and northern Illinois building trades (IBEW, Plumbers & Pipefitters, AFL-CIO).",
        pacs: [
          { name: "IBEW, Plumbers & Pipefitters & Building Trades PACs", type: "Labor PAC", amount: "$65,000+", stance: "Supporting" },
          { name: "Illinois AFL-CIO & UAW Locals", type: "Labor PAC", amount: "$30,000+", stance: "Supporting" }
        ],
        endorsements: ["Illinois AFL-CIO", "Northwestern Illinois Building & Construction Trades Council", "IBEW Local 364"],
        issues: {
          economy: "Blue-collar platform attacking corporate PAC influence; champions the PRO Act, prevailing wage, reopening the Belvidere auto plant, and opposing trade wars that hurt Illinois farmers.",
          healthcare: "Campaigns on protecting Social Security, traditional Medicare, Medicaid, and lowering prescription drug costs for working families.",
          immigration: "Supports bipartisan border security and cracking down on employers who exploit undocumented labor to undercut union wages.",
          energy: "Supports union construction jobs in nuclear, solar, wind, and grid modernization across northern and central Illinois.",
          taxes: "Attacks the 2017 TCJA as a giveaway to billionaires and corporations; supports middle-class tax cuts and expanded Child Tax Credits.",
          reproductive: "Supports codifying Roe v. Wade and protecting personal medical freedom.",
          foreignPolicy: "Supports domestic manufacturing supply chains, NATO allies, and fair trade enforcement.",
          guns: "Supports universal background checks and red-flag laws while respecting lawful gun owners and hunters."
        }
      }
    ]
  },
  {
    id: "us-house-il-17",
    level: "federal",
    office: "U.S. Representative - District 17",
    districtCode: "IL-17",
    districtName: "17th Congressional District (Quad Cities, Rockford, Peoria, Bloomington-Normal, Galesburg, Macomb & Sterling)",
    region: "Northwest & Central Urban Corridor",
    counties: ["Rock Island", "Winnebago", "Peoria", "McLean", "Knox", "Tazewell", "Whiteside", "Henry", "McDonough", "Warren", "Mercer", "Fulton", "Stephenson", "Carroll"],
    cities: ["Moline", "Rock Island", "East Moline", "Silvis", "Rockford", "Peoria", "Pekin", "Bloomington", "Normal", "Galesburg", "Macomb", "Monmouth", "Kewanee", "Geneseo", "Sterling", "Rock Falls", "Savanna"],
    pvi: "D+2",
    rating: "Lean Democratic (Top Toss-Up / Battleground)",
    isOpenSeat: false,
    isBattleground: true,
    incumbent: "Eric Sorensen (D)",
    primarySummary: "In Illinois's most competitive congressional district (D+2), two-term DCCC Frontline incumbent Rep. Eric Sorensen (D) faces Monmouth small-business coffee shop owner Dillan Vancil (R).",
    candidates: [
      {
        id: "eric-sorensen",
        name: "Eric Sorensen",
        party: "Democrat",
        role: "U.S. Representative (IL-17, 2023-present); Former Broadcast Meteorologist",
        hometown: "Moline (Rock Island County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "ES",
        fecRaised: "$2,240,000",
        fecCashOnHand: "$1,580,000",
        pacPolicy: "Accepts Labor, Pro-Israel, LCV & Frontline PACs",
        pacSummary: "Raised $2.24M+ as a top DCCC Frontline incumbent. Heavily backed by AIPAC, DMFI, and J Street ($300,000+ combined career pro-Israel support), UAW/AFL-CIO labor PACs, LGBTQ+ Victory Fund / Equality PAC, and LCV GiveGreen.",
        pacs: [
          { name: "AIPAC PAC, DMFI PAC & J Street PAC", type: "Ideological PAC", amount: "$300,000+ Combined Network", stance: "Supporting" },
          { name: "UAW, IBEW, LIUNA & Illinois AFL-CIO PACs", type: "Labor PAC", amount: "$290,000+", stance: "Supporting" },
          { name: "LGBTQ+ Victory Fund, Equality PAC & HRC", type: "Ideological PAC", amount: "$95,000+", stance: "Supporting" },
          { name: "League of Conservation Voters (LCV) / GiveGreen", type: "Ideological PAC", amount: "$75,000+", stance: "Supporting" },
          { name: "New Democrat Coalition & DCCC Frontline", type: "Ideological PAC", amount: "$110,000+", stance: "Supporting" }
        ],
        endorsements: ["Illinois AFL-CIO", "United Auto Workers (UAW)", "AIPAC", "LGBTQ+ Victory Fund", "League of Conservation Voters", "New Democrat Coalition"],
        issues: {
          economy: "Highlights federal funding for the Rock Island Arsenal, reopening the Belvidere Stellantis auto plant, Rivian EV manufacturing in Normal, and bipartisan Farm Bill crop insurance.",
          healthcare: "Focuses on capping insulin and prescription drug prices, protecting rural and urban hospitals in Galesburg, Peoria, and Rockford, and defending the ACA.",
          immigration: "Backs bipartisan border security bills adding Border Patrol agents and fentanyl detection while supporting legal pathways for agricultural and manufacturing workers.",
          energy: "Former TV meteorologist; champions extreme-weather flood resilience along the Mississippi and Illinois Rivers, corn ethanol/biofuels, and clean energy jobs.",
          taxes: "Supports middle-class tax cuts, expanding the Child Tax Credit, and closing tax breaks for corporations that ship manufacturing jobs overseas.",
          reproductive: "Staunch supporter of codifying Roe v. Wade and protecting access to IVF, contraception, and LGBTQ+ healthcare.",
          foreignPolicy: "Supports U.S. defense manufacturing at the Rock Island Arsenal, strong backing for Israel and Ukraine, and countering Chinese agricultural land purchases.",
          guns: "Supports universal background checks, red-flag laws, and federal COPS hiring grants for Rockford, Peoria, and Quad Cities police."
        }
      },
      {
        id: "dillan-vancil",
        name: "Dillan Vancil",
        party: "Republican",
        role: "Small-Business Coffee Shop Chain Owner",
        hometown: "Monmouth (Warren County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "DV",
        fecRaised: "$320,000",
        fecCashOnHand: "$142,000",
        pacPolicy: "Small-Business & Grassroots Conservative Donors",
        pacSummary: "Funded by small-dollar individual grassroots contributors and Western/Central Illinois small-business owners, campaigning on working-class pocketbook issues.",
        pacs: [
          { name: "Western & Central IL GOP County Coalitions", type: "Party Committee", amount: "$45,000+", stance: "Supporting" },
          { name: "Small Business & Conservative Grassroots PACs", type: "Ideological PAC", amount: "$35,000+", stance: "Supporting" }
        ],
        endorsements: ["Rock Island, Knox & Tazewell GOP", "NFIB Supporters", "Illinois Family Action"],
        issues: {
          economy: "Small-business owner campaigning on the cost of groceries, coffee/supply inflation, and small-business survival; calls for slashing federal deficit spending and regulations.",
          healthcare: "Attacks rising ACA insurance premiums for small business owners and self-employed workers; favors association health plans and price transparency.",
          immigration: "Demands securing the southern border immediately, ending sanctuary state policies, and stopping federal spending on migrant programs.",
          energy: "Blames green energy mandates for skyrocketing Ameren and ComEd electric bills across Central and Northwestern Illinois; backs coal, gas, and nuclear.",
          taxes: "Supports making the 2017 Trump tax cuts permanent, No Tax on Tips, and eliminating the death tax on family farms.",
          reproductive: "Pro-life; opposes taxpayer funding of abortion and supports parental rights.",
          foreignPolicy: "America First; opposes sending billions more to foreign conflicts while domestic infrastructure and working families struggle.",
          guns: "Strong Second Amendment defender; opposes federal firearm bans and supports local law enforcement."
        }
      }
    ]
  }
];
