// 2026 Illinois Midterm Elections - Statewide Constitutional Officers Dataset
// Election Date: November 3, 2026 | Primary Date: March 17, 2026

window.IL_STATEWIDE_RACES = [
  {
    id: "il-governor-2026",
    level: "statewide",
    office: "Governor & Lieutenant Governor of Illinois (Joint Ticket)",
    districtCode: "IL-GOV",
    districtName: "Statewide Constitutional Executive",
    region: "Statewide",
    counties: ["All 102 Illinois Counties"],
    cities: ["All Illinois Municipalities"],
    pvi: "D+7",
    rating: "Solid Democratic",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "JB Pritzker (D) & Outgoing Lt. Gov. Juliana Stratton (D - running for U.S. Senate)",
    primarySummary: "Two-term incumbent Gov. JB Pritzker (D) selected former Deputy Governor and State Rep. Christian Mitchell as his 2026 running mate after Juliana Stratton ran for U.S. Senate. In the March 17, 2026 GOP primary, 2022 nominee Darren Bailey & Cook County GOP Chair Aaron Del Mar defeated Ted Dabrowski, Rick Heidner, and James Mendrick. Former GOP strategist Collin Corbett & McHenry County Board member Carolyn Schofield run on a centrist Independent ticket.",
    candidates: [
      {
        id: "jb-pritzker-christian-mitchell",
        name: "JB Pritzker & Christian Mitchell",
        party: "Democrat",
        role: "Governor of Illinois (2019-present) & Former Deputy Governor / State Rep. (HD-26)",
        hometown: "Chicago (Gold Coast & Bronzeville), IL",
        incumbentStatus: "Incumbent Governor",
        photoInitials: "JP",
        fecRaised: "$90,500,000+ (2026 Self-Funded)",
        fecCashOnHand: "$68,100,000+",
        pacPolicy: "Billionaire Self-Funded ($439M+ Career) + Full Labor & Progressive PAC Backing",
        pacSummary: "Almost entirely self-funded by billionaire Hyatt heir JB Pritzker, who injected another $65M into JB for Governor in mid-2026 ($90.5M total in the 2026 cycle; $439M+ across 2018-2026). Pritzker is the chief patron of the Democratic Party of Illinois (DPI) and Illinois Future PAC ($5M), and holds endorsements from every major Illinois labor union.",
        pacs: [
          { name: "JB Pritzker Personal Self-Funding", type: "Self-Funding", amount: "$90,500,000 (2026 Cycle)", stance: "Supporting" },
          { name: "Illinois AFL-CIO, IEA, IFT & SEIU State Council", type: "Labor PAC", amount: "Full Statewide Labor Mobilization", stance: "Supporting" },
          { name: "IUOE Local 150, LIUNA & Chicago Federation of Labor", type: "Labor PAC", amount: "Endorsed + Field", stance: "Supporting" },
          { name: "Personal PAC, Equality Illinois & Giffords PAC", type: "Ideological PAC", amount: "Endorsed", stance: "Supporting" },
          { name: "Democratic Party of Illinois (DPI)", type: "Party Committee", amount: "Primary Patron & Coordinated Campaign", stance: "Supporting" }
        ],
        endorsements: ["Illinois AFL-CIO", "Illinois Education Association (IEA)", "Illinois Federation of Teachers (IFT)", "SEIU Illinois", "IUOE Local 150", "Personal PAC", "Equality Illinois", "Giffords PAC"],
        issues: {
          propertyTaxes: "Champions increasing the state share of K-12 school funding by $350M+ annually under the Evidence-Based Funding (EBF) formula ($2.5B+ cumulative increase), launching Smart Start universal preschool, and eliminating the 1% statewide grocery tax to ease local tax pressure.",
          safetAct: "Signed and staunchly defends the Pretrial Fairness Act (SAFE-T Act), arguing that abolishing cash bail stops wealthy violent offenders from buying release while preventing poverty-based jailing. Highlights record ISP trooper classes, body cameras, and the Protect Illinois Communities Act (assault weapons ban).",
          budgetTaxes: "Touts 8 consecutive balanced budgets, 9 credit rating upgrades, a $2.3B+ Rainy Day Fund, and elimination of the bill backlog. Continues to favor a graduated income tax in principle while balancing budgets via corporate tax loophole closures and gaming/sportsbook taxes.",
          pensions: "Paid 100% of statutory pension contributions plus $700M+ in supplemental surplus paydowns. Directed actuarial analysis on Tier 2 Social Security Safe Harbor compliance while insisting any Tier 2 benefit adjustment remain fiscally neutral to protect Illinois's bond ratings.",
          energyGrid: "Signed CEJA (100% clean energy by 2050), lifted the moratorium on Small Modular Nuclear Reactors (SMRs), and passed battery storage incentives. In July 2026, froze new AI data center tax breaks for 2 years and backed the POWER Act to force hyperscale data centers to pay for their own grid upgrades.",
          transit: "Signed SB 2111 (Northern Illinois Transit Authority Act) effective June 1, 2026, replacing the RTA with an empowered NITA board and providing $1.5B in redirected motor fuel sales tax and Road Fund interest to avert the $770M+ CTA/Metra/Pace fiscal cliff.",
          healthcare: "Established Illinois as the Midwest's reproductive sanctuary (Reproductive Health Act, interstate provider/patient shield laws, OTC birth control), erased $1B+ in medical debt for working families, and capped insulin at $35.",
          education: "Allowed the Invest in Kids private school voucher tax credit to sunset in 2023 and refuses to opt Illinois into the federal Education Choice for Children Act (ECCA) voucher program, keeping public funds strictly in public schools."
        }
      },
      {
        id: "darren-bailey-aaron-del-mar",
        name: "Darren Bailey & Aaron B. Del Mar",
        party: "Republican",
        role: "Former State Senator (SD-55) & 2022 GOP Nominee / Cook County Republican Chairman",
        hometown: "Xenia (Clay County) & Palatine (Cook County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "DB",
        fecRaised: "$580,000",
        fecCashOnHand: "$128,000",
        pacPolicy: "Grassroots Conservative & Downstate County GOP Network",
        pacSummary: "Unlike 2022 (when megadonor Richard Uihlein spent tens of millions backing Bailey), Uihlein stayed out of the 2026 race and the ILGOP State Central Committee voted down Del Mar's request for a $150k party transfer. Bailey runs a lean, grassroots small-donor campaign backed by downstate county GOP organizations and Illinois Family Action.",
        pacs: [
          { name: "Downstate County GOP Coalitions & Small Donors", type: "Party Committee", amount: "$450,000+ Grassroots", stance: "Supporting" },
          { name: "Illinois Family Action & Pro-Life / Pro-2A PACs", type: "Ideological PAC", amount: "Endorsed + Voter Guides", stance: "Supporting" },
          { name: "ILGOP State Central Committee Establishment", type: "Party Committee", amount: "Voted Down $150k Transfer Request", stance: "Opposing" }
        ],
        endorsements: ["Illinois Family Action", "Gun Owners of America / ISRA Grassroots", "Downstate GOP County Chairs Coalition"],
        issues: {
          propertyTaxes: "Proposes a hard statewide cap on property tax growth paired with zero-based state budgeting and repealing unfunded Springfield mandates that drive up local school district levies.",
          safetAct: "Demands immediate repeal of the SAFE-T Act's cashless bail provisions, restoring judicial discretion to detain repeat offenders, repealing the TRUST Act (sanctuary state law) to cooperate with ICE, and repealing the FOID card and assault weapons ban.",
          budgetTaxes: "Pledges to freeze state spending (which grew $15B+ under Pritzker), conduct forensic agency audits, eliminate state-funded migrant healthcare, protect the constitutional flat income tax, enact No Tax on Tips, and abolish the Illinois estate tax.",
          pensions: "Explicitly distances himself from former Gov. Bruce Rauner in 2026 ('I am not Bruce Rauner. I am not coming for your pension'), arguing pension solvency comes from cutting non-essential state bureaucracy and growing private-sector jobs.",
          energyGrid: "Calls for repealing CEJA's coal and natural gas plant closure deadlines, blaming Pritzker's green mandates and corporate data center giveaways for surging Ameren and ComEd utility bills.",
          transit: "Fiercely opposes SB 2111 / the $1.5B NITA transit bailout, condemning it as a raid on downstate and suburban motorists' Road Fund interest and motor fuel taxes to subsidize a mismanaged CTA.",
          healthcare: "Pro-life conservative who opposes Medicaid funding for abortions and state-funded healthcare for undocumented immigrants, while focusing 2026 messaging on household healthcare affordability.",
          education: "Founder of Full Armor Christian Academy; pledges to immediately reinstate Illinois's Invest in Kids tax-credit scholarship program and opt Illinois into the federal Education Choice for Children Act (ECCA) universal school choice program."
        }
      },
      {
        id: "collin-corbett-carolyn-schofield",
        name: "Collin Corbett & Carolyn Schofield",
        party: "Independent",
        role: "Political Strategist & Small Business Owner / McHenry County Board Member",
        hometown: "Palatine (Cook County) & Crystal Lake (McHenry County), IL",
        incumbentStatus: "Independent Challenger",
        photoInitials: "CC",
        fecRaised: "$565,000 ($500k Self-Loan)",
        fecCashOnHand: "$60,603",
        pacPolicy: "Centrist Self-Seeded & Independent Reform Donors",
        pacSummary: "Seeded with a $500,000 personal loan from Corbett after leaving the GOP in April 2026 to build a 'Mainstream Independent' coalition; refuses partisan machine and extremist PAC money.",
        pacs: [
          { name: "Collin Corbett Personal Candidate Loan", type: "Self-Funding", amount: "$500,000", stance: "Supporting" },
          { name: "Mainstream Independent & Suburban Civic Donors", type: "Ideological PAC", amount: "$65,000+", stance: "Supporting" }
        ],
        endorsements: ["Mainstream Independent Coalition", "McHenry & Northwest Suburban Civic Leaders"],
        issues: {
          propertyTaxes: "Proposes a bipartisan structural commission to swap local school property tax reliance for capped state revenue growth and municipal mandate relief.",
          safetAct: "Advocates surgical, bipartisan fixes to the SAFE-T Act: giving judges broader detention discretion for repeat offenses and burglary while keeping non-violent poverty bail reform intact.",
          budgetTaxes: "Supports constitutionally capping annual state budget growth to the rate of inflation + population growth while retaining the flat income tax.",
          pensions: "Supports fixing the Tier 2 Social Security Safe Harbor compliance issue while amortizing long-term pension debt without partisan pension holidays.",
          energyGrid: "Advocates pragmatic grid reliability: fast-tracking modular nuclear reactors and retaining natural gas peaker plants alongside renewables to stop consumer rate spikes.",
          transit: "Supports NITA regional fare and schedule integration but demands strict farebox recovery, crime reduction, and independent auditing metrics before releasing state funds.",
          healthcare: "Supports preserving current Illinois reproductive healthcare laws without ideological extremes and expanding county-level mental health boards (drawing on Schofield's McHenry County work).",
          education: "Supports local school board control, Evidence-Based Funding accountability, and expanding vocational/trade career pathways."
        }
      }
    ]
  },
  {
    id: "il-attorney-general-2026",
    level: "statewide",
    office: "Attorney General of Illinois",
    districtCode: "IL-AG",
    districtName: "Statewide Chief Legal & Law Enforcement Officer",
    region: "Statewide",
    counties: ["All 102 Illinois Counties"],
    cities: ["All Illinois Municipalities"],
    pvi: "D+7",
    rating: "Solid Democratic",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Kwame Raoul (D)",
    primarySummary: "Two-term incumbent Attorney General Kwame Raoul (D) ran unopposed in the Democratic primary and faces former Chicago 2nd Ward Alderman and civil litigator Bob Fioretti (R).",
    candidates: [
      {
        id: "kwame-raoul",
        name: "Kwame Raoul",
        party: "Democrat",
        role: "Attorney General of Illinois (2019-present); Former State Senator (SD-13)",
        hometown: "Chicago (Hyde Park / Kenwood), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "KR",
        fecRaised: "$2,850,000 (Cycle)",
        fecCashOnHand: "$1,700,000",
        pacPolicy: "Heavy Trial Lawyer (ITLA), Labor Union & DAGA Backing",
        pacSummary: "Commands ~$1.7M cash on hand, heavily funded by the Illinois Trial Lawyers Association (ITLA), plaintiffs' law firms, major labor unions (AFL-CIO, SEIU, IUOE Local 150, IFT, IEA), and the Democratic Attorneys General Association (DAGA).",
        pacs: [
          { name: "Illinois Trial Lawyers Association (ITLA PAC) & Law Firms", type: "Trade PAC", amount: "$650,000+", stance: "Supporting" },
          { name: "Democratic Attorneys General Association (DAGA)", type: "Party Committee", amount: "$250,000+", stance: "Supporting" },
          { name: "Illinois AFL-CIO, SEIU, IUOE Local 150 & IFT/IEA", type: "Labor PAC", amount: "$480,000+", stance: "Supporting" },
          { name: "Personal PAC & Giffords PAC", type: "Ideological PAC", amount: "Endorsed + Support", stance: "Supporting" }
        ],
        endorsements: ["Illinois Trial Lawyers Association", "Illinois AFL-CIO", "SEIU", "IUOE Local 150", "Personal PAC", "Giffords PAC"],
        issues: {
          propertyTaxes: "Defends county property tax exemptions for seniors and disabled veterans while prosecuting deed-fraud and predatory tax-buyer schemes.",
          safetAct: "Successfully defended the constitutionality of the SAFE-T Act (Pretrial Fairness Act) and Protect Illinois Communities Act (assault weapons ban) before the Illinois Supreme Court; leads the AG's Organized Retail Crime Task Force.",
          budgetTaxes: "Expanded the AG's Workplace Rights Bureau to recover millions in stolen wages, payroll tax fraud, and prevailing wage violations.",
          pensions: "Defends constitutional pension protection clause while prosecuting financial fraud against state retirement systems.",
          energyGrid: "Regularly intervenes before the Illinois Commerce Commission (ICC) to slash ComEd, Ameren, Peoples Gas, and Nicor rate-hike requests and hold utilities accountable for pollution.",
          transit: "Supports NITA regional transit policing coordination and prosecutes organized cargo and transit theft rings.",
          healthcare: "Co-leads multistate Democratic AG lawsuits defending medication abortion (mifepristone), EMTALA emergency care, and the ACA; secured $1.3B+ in opioid settlements for Illinois.",
          education: "Enforces civil rights protections in schools, prosecutes student loan servicers for deceptive practices, and defends Illinois's anti-book-ban statute."
        }
      },
      {
        id: "bob-fioretti",
        name: "Robert 'Bob' W. Fioretti",
        party: "Republican",
        role: "Civil Trial Attorney & Former Chicago 2nd Ward Alderman (2007-2015)",
        hometown: "Chicago (South Loop / Near West Side), IL",
        incumbentStatus: "Challenger",
        photoInitials: "BF",
        fecRaised: "$115,000",
        fecCashOnHand: "$28,303",
        pacPolicy: "Small-Dollar Conservative & Legal Network Donors",
        pacSummary: "Former Democrat turned Republican running on a lean budget (~$28.3k Q2 cash on hand), funded by legal colleagues, county GOP groups, and small-dollar donors.",
        pacs: [
          { name: "Cook & Collar County GOP Organizations", type: "Party Committee", amount: "$35,000+", stance: "Supporting" },
          { name: "Fraternal Order of Police (FOP) Grassroots Allies", type: "Labor PAC", amount: "Support", stance: "Supporting" }
        ],
        endorsements: ["Cook County Republican Party", "Suburban GOP Coalitions"],
        issues: {
          propertyTaxes: "Pledges to investigate Cook County property tax assessment corruption and challenge unconstitutional property tax shifts in court.",
          safetAct: "Makes repealing and overhauling the SAFE-T Act his #1 priority; formed a campaign commission to restore pretrial detention for repeat offenders and cooperate with federal ICE authorities.",
          budgetTaxes: "Accuses Raoul of being a rubber stamp for Gov. Pritzker; pledges to create an independent Public Integrity Unit with grand jury power to prosecute state contracting fraud.",
          pensions: "Supports stripping public pensions from any official or lobbyist convicted of public corruption.",
          energyGrid: "Promises to challenge CEJA green energy surcharges and aggressively block utility rate hikes at the ICC.",
          transit: "Demands forensic audits of CTA and RTA spending and strict prosecution of violent crime on public transit.",
          healthcare: "Criticizes state spending on non-citizen healthcare while supporting hospital billing transparency.",
          education: "Supports parental rights in education, school choice, and local school board autonomy."
        }
      }
    ]
  },
  {
    id: "il-secretary-of-state-2026",
    level: "statewide",
    office: "Secretary of State of Illinois",
    districtCode: "IL-SOS",
    districtName: "Statewide Driver Services, Business Registry, State Librarian & Capitol Upkeep",
    region: "Statewide",
    counties: ["All 102 Illinois Counties"],
    cities: ["All Illinois Municipalities"],
    pvi: "D+7",
    rating: "Solid Democratic",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Alexi Giannoulias (D)",
    primarySummary: "First-term incumbent Secretary of State Alexi Giannoulias (D) commands a massive $21.7M+ war chest (while also exploring a 2027 Chicago Mayoral run) and faces Joliet Junior College Trustee and retired ComEd union steward Diane M. Harris (R).",
    candidates: [
      {
        id: "alexi-giannoulias",
        name: "Alexi Giannoulias",
        party: "Democrat",
        role: "Secretary of State of Illinois (2023-present); Former State Treasurer (2007-2011)",
        hometown: "Chicago, IL",
        incumbentStatus: "Incumbent",
        photoInitials: "AG",
        fecRaised: "$24,500,000+ (Cumulative War Chest)",
        fecCashOnHand: "$21,750,000",
        pacPolicy: "Largest Non-Self-Funded War Chest in IL ($21.75M COH); Heavy Labor & Civic Backing",
        pacSummary: "Holds $21.7M-$21.8M cash on hand. Strictly bars contributions from entities regulated by the SOS office (auto dealers/remitters) while raising millions from building trades (IUOE Local 150, LIUNA, IBEW), SEIU, teachers' unions, and business/real estate donors.",
        pacs: [
          { name: "IUOE Local 150, LIUNA, IBEW & Teamsters PACs", type: "Labor PAC", amount: "$1,800,000+ Cumulative", stance: "Supporting" },
          { name: "SEIU, IEA, IFT & Illinois AFL-CIO", type: "Labor PAC", amount: "$950,000+ Cumulative", stance: "Supporting" },
          { name: "Chicagoland Civic, Legal & Real Estate Donor Network", type: "Business Donor Network", amount: "$8,000,000+", stance: "Supporting" },
          { name: "Personal PAC & Giffords PAC", type: "Ideological PAC", amount: "Endorsed", stance: "Supporting" }
        ],
        endorsements: ["Illinois AFL-CIO", "IUOE Local 150", "SEIU", "Teamsters Joint Council 25", "IEA", "IFT", "Personal PAC"],
        issues: {
          propertyTaxes: "Supports state library and literacy grants that reduce pressure on local municipal and school property tax levies.",
          safetAct: "Uses the Secretary of State Police to lead statewide license-plate reader (ALPR) carjacking task forces and crack down onchop shops and organized auto theft.",
          budgetTaxes: "Modernized SOS Business Services to speed up LLC registrations and launched 'Skip the Line' DMV scheduling, mobile Digital IDs (Apple/Google Wallet), and grocery-store kiosks.",
          pensions: "Supports full statutory funding of SERS and Tier 2 Safe Harbor fixes for state employees.",
          energyGrid: "Oversees EV license plate administration and Capitol complex energy-efficiency retrofits.",
          transit: "Champions traffic safety, pedestrian protection laws, and integrating digital IDs with regional transit systems.",
          healthcare: "Manages Illinois's nation-leading Organ and Tissue Donor Registry and champions banning credit-score and ZIP-code discrimination in auto insurance pricing ('Drivingalyzer').",
          education: "As State Librarian, authored and implemented Public Act 103-0100, the first-in-the-nation law withholding state library grants from libraries that ban books unless they adopt the ALA Library Bill of Rights."
        }
      },
      {
        id: "diane-harris",
        name: "Diane M. Harris",
        party: "Republican",
        role: "Joliet Junior College Trustee, Joliet Library Trustee, Small Business Owner & Retired IBEW Local 15 Steward",
        hometown: "Joliet (Will County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "DH",
        fecRaised: "$18,500",
        fecCashOnHand: "$1,816",
        pacPolicy: "Shoestring Grassroots Campaign ($0 Corporate PACs)",
        pacSummary: "Operating on a grassroots shoestring budget ($1,816 cash on hand in Q2 2026), supported by Will County and downstate Republican committees.",
        pacs: [
          { name: "Will County & Downstate GOP Committees", type: "Party Committee", amount: "Grassroots Support", stance: "Supporting" }
        ],
        endorsements: ["Will County Republican Central Committee", "Illinois Family Action"],
        issues: {
          propertyTaxes: "As a Joliet Junior College trustee, advocates fiscal restraint and keeping community college and library property tax levies flat.",
          safetAct: "Supports repealing cashless bail provisions and strengthening penalties for vehicular hijacking and fleeing police.",
          budgetTaxes: "Campaigns on 'Give Service Back to the People': pledges to end mandatory appointment-only DMV gates that turn away seniors and working people without smartphones, and cut LLC filing fees.",
          pensions: "Retired 30-year ComEd employee and former IBEW Local 15 union steward who supports protecting earned worker pensions while auditing administrative bloat.",
          energyGrid: "Draws on 30 years at ComEd to advocate reliable baseload nuclear and natural gas power.",
          transit: "Opposes diverting suburban and downstate Road Fund money to bail out Chicago transit.",
          healthcare: "Calls for strict auditing of Automatic Voter Registration (AVR) at DMVs and social-service agencies to ensure non-citizens are never added to voter rolls.",
          education: "As a Joliet Public Library Trustee, opposes Giannoulias's state law tying library grants to the ALA Library Bill of Rights, arguing local elected library boards and parents should decide age-appropriate shelving."
        }
      }
    ]
  },
  {
    id: "il-comptroller-2026",
    level: "statewide",
    office: "State Comptroller of Illinois (Open Seat)",
    districtCode: "IL-COMP",
    districtName: "Statewide Chief Fiscal Officer & Bill-Paying Watchdog",
    region: "Statewide",
    counties: ["All 102 Illinois Counties"],
    cities: ["All Illinois Municipalities"],
    pvi: "D+7",
    rating: "Solid Democratic",
    isOpenSeat: true,
    isBattleground: false,
    incumbent: "Susana Mendoza (D - Declined to seek re-election in 2026 ahead of 2027 Chicago Mayoral bid)",
    primarySummary: "With three-term Comptroller Susana Mendoza stepping down, State Rep. Margaret Croke (D, HD-12) won a fierce 4-way March 2026 Democratic primary (defeating Rep. Stephanie Kifowit, Sen. Karina Villa, and Lake County Treasurer Holly Kim) with heavy backing from Gov. JB Pritzker and Mendoza. She faces Benton trial attorney Bryan Drew (R) and Green Party write-in Anna Schiefelbein.",
    candidates: [
      {
        id: "margaret-croke",
        name: "Margaret Croke",
        party: "Democrat",
        role: "Illinois State Representative (HD-12, 2021-present); Chair, House Financial Institutions Committee",
        hometown: "Chicago (Lincoln Park), IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "MC",
        fecRaised: "$2,360,000+",
        fecCashOnHand: "$108,583 (Post-Primary)",
        pacPolicy: "Backed by Pritzker Network, Outgoing Comptroller Mendoza, Labor & Fintech PACs",
        pacSummary: "Raised $2.36M+ and spent $2.57M winning the competitive March 2026 Democratic primary. Heavily backed by Gov. JB Pritzker's political network, outgoing Comptroller Susana Mendoza, IUOE Local 150, SEIU, Illinois AFL-CIO, Personal PAC, and financial-sector PACs.",
        pacs: [
          { name: "JB Pritzker & Democratic Leadership Transfers", type: "Party Committee", amount: "$650,000+ Primary Support", stance: "Supporting" },
          { name: "IUOE Local 150, SEIU & Illinois AFL-CIO", type: "Labor PAC", amount: "$380,000+", stance: "Supporting" },
          { name: "Susana Mendoza Political Network", type: "Ideological PAC", amount: "Endorsed + Donor Network", stance: "Supporting" },
          { name: "Financial Institutions, Banking & Tech PACs", type: "Corporate PAC", amount: "$210,000+", stance: "Supporting" },
          { name: "Personal PAC & Equality Illinois", type: "Ideological PAC", amount: "Endorsed", stance: "Supporting" }
        ],
        endorsements: ["Gov. JB Pritzker", "Comptroller Susana Mendoza", "Illinois AFL-CIO", "IUOE Local 150", "SEIU", "Personal PAC", "Equality Illinois"],
        issues: {
          propertyTaxes: "Supports transparent local government fiscal reporting through the Comptroller's Warehouse and full EBF school funding to curb local property tax hikes.",
          safetAct: "Voted for and defends the SAFE-T Act and gun violence prevention funding.",
          budgetTaxes: "Pledges to maintain Susana Mendoza's fiscal framework: zero bill backlog, prioritizing human-service provider payments, and mandating automatic deposits into the Rainy Day Fund.",
          pensions: "Pledges to make automatic supplemental deposits into the Pension Stabilization Fund and use the Comptroller's stop-payment power against state contractors that violate the Prevailing Wage Act.",
          energyGrid: "Supports CEJA clean energy goals, modernizing state SAMS accounting software, and regulating digital asset / cryptocurrency lending.",
          transit: "Supported SB 2111 / NITA transit reform and pledges real-time public transparency tracking for all state transit disbursements.",
          healthcare: "Authored Illinois's landmark IVF and fertility insurance coverage laws in the House; staunch defender of reproductive freedom.",
          education: "Strong supporter of public school EBF funding and Smart Start universal pre-K; opposes private school voucher tax credits."
        }
      },
      {
        id: "bryan-drew",
        name: "Bryan A. Drew",
        party: "Republican",
        role: "Managing Partner, Drew Law Group; Small Business Owner & Former Rend Lake College Board Chair",
        hometown: "Benton (Franklin County / Southern Illinois), IL",
        incumbentStatus: "Open Seat Nominee",
        photoInitials: "BD",
        fecRaised: "$141,000 ($115.9k Raised + $25.1k Loan)",
        fecCashOnHand: "$54,236",
        pacPolicy: "Downstate Business, Legal & County GOP Donors",
        pacSummary: "Runs as an independent fiscal check against one-party rule, attacking Croke's reliance on Gov. Pritzker's money. Funded by Southern Illinois business owners, legal colleagues, and county GOP organizations.",
        pacs: [
          { name: "Southern Illinois Business & Legal Donors", type: "Business Donor Network", amount: "$85,000+", stance: "Supporting" },
          { name: "Downstate Republican County Committees", type: "Party Committee", amount: "$30,000+", stance: "Supporting" }
        ],
        endorsements: ["Illinois Republican Party", "Southern Illinois County Chairs Coalition", "NFIB Supporters"],
        issues: {
          propertyTaxes: "Calls for auditing state unfunded mandates and capping state spending so revenue can be returned as property tax relief.",
          safetAct: "Supports repealing cashless bail provisions and restoring judicial detention authority.",
          budgetTaxes: "Campaigns on 'A Check on One-Party Rule': argues Illinois taxpayers cannot afford a Comptroller bankrolled by Gov. Pritzker to audit Pritzker's $53B+ budget; pledges line-item transparency on DHS migrant spending and DCEO no-bid grants.",
          pensions: "Supports auditing state pension payouts and vendor contracts to protect taxpayers and public retirees.",
          energyGrid: "Southern Illinois native who warns that CEJA power-plant closures are devastating downstate coal communities and spiking Ameren electric rates.",
          transit: "Condemns the diversion of statewide Road Fund interest to bail out Chicago's NITA/CTA transit system.",
          healthcare: "Opposes state taxpayer funding for undocumented immigrant healthcare.",
          education: "Former Rend Lake College Board Chair; champions community college vocational training and school choice."
        }
      }
    ]
  },
  {
    id: "il-treasurer-2026",
    level: "statewide",
    office: "State Treasurer of Illinois",
    districtCode: "IL-TREAS",
    districtName: "Statewide Chief Investment Officer & Administrator of Bright Start / Secure Choice / I-CASH",
    region: "Statewide",
    counties: ["All 102 Illinois Counties"],
    cities: ["All Illinois Municipalities"],
    pvi: "D+7",
    rating: "Solid Democratic",
    isOpenSeat: false,
    isBattleground: false,
    incumbent: "Mike Frerichs (D)",
    primarySummary: "Three-term incumbent State Treasurer Mike Frerichs (D) seeks a fourth term against Hazel Crest attorney and political science adjunct professor Max Solomon (R) and Green Party write-in Timi Papas.",
    candidates: [
      {
        id: "mike-frerichs",
        name: "Mike Frerichs",
        party: "Democrat",
        role: "State Treasurer of Illinois (2015-present); Former State Senator (SD-52) & Champaign County Auditor",
        hometown: "Champaign (Champaign County), IL",
        incumbentStatus: "Incumbent",
        photoInitials: "MF",
        fecRaised: "$2,400,000+ (Cycle)",
        fecCashOnHand: "$1,741,569",
        pacPolicy: "Backed by Labor Unions, Police/Firefighter Associations & Financial PACs",
        pacSummary: "Enters the general election with $1.74M cash on hand and $0 debt. Endorsed and funded by IUOE Local 150, SEIU, Illinois AFL-CIO, IEA, IFT, Associated Fire Fighters of Illinois, Fraternal Order of Police, and financial PACs.",
        pacs: [
          { name: "IUOE Local 150, IBEW, LIUNA & Building Trades", type: "Labor PAC", amount: "$320,000+", stance: "Supporting" },
          { name: "Illinois AFL-CIO, SEIU, IEA & IFT PACs", type: "Labor PAC", amount: "$290,000+", stance: "Supporting" },
          { name: "Associated Fire Fighters of IL (AFFI) & Police Unions", type: "Labor PAC", amount: "$65,000+", stance: "Supporting" },
          { name: "Financial Services & Venture Capital PACs", type: "Corporate PAC", amount: "$180,000+", stance: "Supporting" }
        ],
        endorsements: ["Illinois AFL-CIO", "IUOE Local 150", "Associated Fire Fighters of Illinois", "Fraternal Order of Police", "IEA", "IFT"],
        issues: {
          propertyTaxes: "Chaired the consolidation of 650+ suburban and downstate police and firefighter pension funds into two statewide investment boards, boosting investment returns by hundreds of millions to lower local municipal property tax levies.",
          safetAct: "Supports balanced public safety funding alongside law enforcement pension stability.",
          budgetTaxes: "Touts generating over $2 billion in investment earnings for state and local governments via Illinois Funds and returning a record $2B+ in unclaimed property through I-CASH.",
          pensions: "Administers Illinois Secure Choice (auto-IRA retirement savings program for 150,000+ private-sector workers without employer 401ks) and supports Tier 2 Safe Harbor fixes.",
          energyGrid: "Champions the Illinois Sustainable Investing Act (integrating ESG climate and governance risk metrics into the state's $60B portfolio) and low-interest Ag Invest loans for clean farm equipment.",
          transit: "Supports municipal infrastructure investment pools that lower borrowing costs for local transit and road districts.",
          healthcare: "Expanded Illinois ABLE tax-advantaged savings accounts for residents with disabilities.",
          education: "Slashed fees and earned Morningstar Gold ratings for the Bright Start 529 college savings program ($18B+ in assets)."
        }
      },
      {
        id: "max-solomon",
        name: "Max Solomon",
        party: "Republican",
        role: "Attorney, College Political Science Adjunct Professor & Ordained Minister",
        hometown: "Hazel Crest (South Suburban Cook County), IL",
        incumbentStatus: "Challenger",
        photoInitials: "MS",
        fecRaised: "$22,000",
        fecCashOnHand: "$7,167",
        pacPolicy: "Grassroots & Self-Funded Conservative",
        pacSummary: "Legal immigrant from Nigeria (arrived 1992) running a grassroots campaign with $7,167 cash on hand, backed by South Suburban and downstate GOP groups and Illinois Family Action.",
        pacs: [
          { name: "South Suburban & County GOP Organizations", type: "Party Committee", amount: "Grassroots Support", stance: "Supporting" },
          { name: "Illinois Family Action", type: "Ideological PAC", amount: "Endorsed", stance: "Supporting" }
        ],
        endorsements: ["Bremen Township GOP", "Illinois Family Action"],
        issues: {
          propertyTaxes: "Campaigns on a statewide property tax freeze, arguing Illinois has a spending problem rather than a revenue problem.",
          safetAct: "Calls for repealing cashless bail under the SAFE-T Act and backing suburban police.",
          budgetTaxes: "Proposes a real-time public dashboard showing every state investment and management fee paid to Wall Street firms, and pledges to deposit more state linked-deposit funds into local community banks across all 102 counties.",
          pensions: "Opposes using public pension and treasury funds for political activism; demands strict actuarial returns.",
          energyGrid: "Pledges to immediately strip 'woke ESG' mandates from the Treasurer's $60B investment portfolio and invest freely in American oil, natural gas, coal, and defense companies.",
          transit: "Opposes state tax hikes or Road Fund diversions for transit agencies.",
          healthcare: "Pro-life minister; opposes taxpayer funding for abortion.",
          education: "Supports expanding 529 savings accounts to cover K-12 private, parochial, and homeschool tuition expenses."
        }
      }
    ]
  }
];
