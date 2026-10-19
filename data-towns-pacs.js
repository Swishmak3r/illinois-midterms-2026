// 2026 Illinois Midterm Elections - Issue Definitions, 110+ Towns/Cities Ballot Directory & PAC Power Broker Database

// 1. Multi-Tier Policy Issue Definitions (Federal, State, Local)
window.IL_ISSUE_DEFINITIONS = {
  federal: [
    {
      key: "economy",
      label: "Economy & Cost of Living",
      shortLabel: "Economy",
      summary: "Inflation, tariffs, child tax credits, housing supply, minimum wage, and manufacturing/agricultural trade."
    },
    {
      key: "healthcare",
      label: "Healthcare, Medicare & Rx",
      shortLabel: "Healthcare",
      summary: "Medicare for All vs. ACA public option vs. market plans, insulin/Rx price caps, PBM reform, and rural hospital survival."
    },
    {
      key: "immigration",
      label: "Immigration & Border Security",
      shortLabel: "Immigration",
      summary: "Border enforcement, asylum reform, DACA/Dreamers pathways, federal reimbursement for municipal migrant shelters, and ICE cooperation."
    },
    {
      key: "climate",
      label: "Climate, Energy & Grid",
      shortLabel: "Climate & Energy",
      summary: "Inflation Reduction Act (IRA) clean energy tax credits, nuclear baseload power, EV mandates, biofuels (E15), and PJM/MISO utility rates."
    },
    {
      key: "taxesSalt",
      label: "Federal Taxes & SALT Cap",
      shortLabel: "Taxes & SALT",
      summary: "Lifting or modifying the $10,000 State and Local Tax (SALT) deduction cap for Illinois homeowners, 2017 TCJA extensions, and corporate tax rates."
    },
    {
      key: "reproductiveRights",
      label: "Reproductive Rights & IVF",
      shortLabel: "Reproductive Rights",
      summary: "Codifying Roe v. Wade federally vs. national abortion restrictions, protecting interstate patient travel to Illinois, and IVF/contraception access."
    },
    {
      key: "foreignPolicy",
      label: "Foreign Policy (Israel/Gaza, Ukraine, Trade)",
      shortLabel: "Foreign Policy",
      summary: "U.S. military aid conditions to Israel, Gaza ceasefire debates, Ukraine defense funding, NATO alliances, and China trade/tariffs."
    },
    {
      key: "gunSafety",
      label: "Gun Safety & 2nd Amendment",
      shortLabel: "Gun Policy",
      summary: "Federal assault weapons bans, universal background checks, ghost gun/Glock switch crackdowns vs. national concealed-carry reciprocity."
    }
  ],
  state: [
    {
      key: "propertyTaxes",
      label: "Property Taxes & EBF School Funding",
      shortLabel: "Property Taxes",
      summary: "Illinois holds the 2nd-highest effective property tax rate in the U.S. (2.07%). Debate centers on state Evidence-Based Funding (EBF) increases vs. hard local levy caps."
    },
    {
      key: "safetAct",
      label: "SAFE-T Act & Pretrial Detention",
      shortLabel: "SAFE-T Act",
      summary: "Illinois became the first state to abolish cash bail under the Pretrial Fairness Act (Sept 2023). Candidates clash over expanding detainable offenses vs. full repeal."
    },
    {
      key: "budgetTaxes",
      label: "State Budget ($53B+), Taxes & Spending",
      shortLabel: "State Budget",
      summary: "Graduated vs. flat 4.95% income tax, corporate tax credits (REV Illinois), non-citizen healthcare elimination, and eliminating the 1% statewide grocery tax."
    },
    {
      key: "pensions",
      label: "Pension Debt ($144B) & Tier 2 Reform",
      shortLabel: "Pensions & Tier 2",
      summary: "Fixing the Tier 2 pension benefit gap for post-2011 teachers, police, and state workers to meet federal Social Security Safe Harbor rules without spiking state debt."
    },
    {
      key: "energyGrid",
      label: "CEJA, Nuclear, AI Data Centers & ComEd/Ameren Bills",
      shortLabel: "Grid & Data Centers",
      summary: "Climate and Equitable Jobs Act (CEJA) plant closure timelines, lifting the nuclear moratorium for SMRs, and forcing AI data centers to pay for grid upgrades."
    },
    {
      key: "transit",
      label: "NITA Transit Overhaul (CTA, Metra & Pace)",
      shortLabel: "Transit (NITA)",
      summary: "Implementation of SB 2111 replacing the RTA with the Northern Illinois Transit Authority (NITA) and $1.5B in road-fund/sales-tax transfers vs. downstate highway priorities."
    },
    {
      key: "healthcare",
      label: "Reproductive Shield Laws, Rx Boards & Medicaid",
      shortLabel: "State Healthcare",
      summary: "Illinois interstate abortion/gender-affirming care shield laws, Prescription Drug Affordability Board (PDAB), prior-authorization bans, and safety-net hospital rates."
    },
    {
      key: "education",
      label: "K-12 Schools, Higher Ed & Invest in Kids Vouchers",
      shortLabel: "Education & Vouchers",
      summary: "Public K-12 EBF funding, MAP college grants, and Chicago elected school board vs. reviving the expired Invest in Kids private school scholarship tax credit."
    }
  ],
  local: [
    {
      key: "assessmentBurden",
      label: "Property Tax Assessments (Commercial vs. Residential)",
      shortLabel: "Assessments & Levies",
      summary: "Cook County's 10%/25% split classification and commercial appeal reductions shifting taxes onto homeowners, plus Collar and Downstate county levy caps."
    },
    {
      key: "transitMma",
      label: "Local Transit, Metra/CTA Safety & Commuter Roads",
      shortLabel: "Local Transit & Roads",
      summary: "CTA/Metra/Pace frequency and policing, suburban NITA board representation, Downstate passenger rail (Rockford/Peoria/Quad Cities), and county highway widening."
    },
    {
      key: "leadWaterFlood",
      label: "Lead Water Pipe Replacement & Flood Control",
      shortLabel: "Water & Flooding",
      summary: "Replacing Illinois's 1.04 million toxic lead water service lines (400k in Chicago, plus Cicero/Aurora/Joliet/Rockford), MWRD reservoirs, and protecting the Mahomet Aquifer."
    },
    {
      key: "migrantBudgets",
      label: "Municipal Budgets, Election Admin & Shelter Costs",
      shortLabel: "Budgets & Elections",
      summary: "Structural municipal deficits, pension obligations, migrant healthcare/shelter costs vs. non-sanctuary county resolutions, and on-time tax bill/election administration."
    },
    {
      key: "dataCenterZoning",
      label: "AI Data Center & Logistics Warehouse Zoning",
      shortLabel: "Data Centers & Zoning",
      summary: "Zoning battles over hyperscale data centers (Elk Grove, Hoffman Estates, Aurora, DeKalb, Joliet) and semi-truck logistics warehouses vs. Class 6b/7 tax incentives."
    },
    {
      key: "solarWindSiting",
      label: "Commercial Solar/Wind Siting & Open Space",
      shortLabel: "Solar/Wind & Land",
      summary: "Downstate county frustration over Illinois's 2023 law preempting county bans on commercial wind/solar farms vs. Forest Preserve conservation and green energy revenue."
    },
    {
      key: "localPublicSafety",
      label: "County Sheriffs, Jails & 708 Mental Health Boards",
      shortLabel: "Sheriffs & 708 Boards",
      summary: "County Sheriff accountability (post-Sonya Massey reforms in Sangamon County), SAFE-T Act implementation, retail theft task forces, and voter-approved 708 Mental Health Boards."
    }
  ]
};

// 2. Comprehensive Directory of 105+ Illinois Towns, Cities, Suburbs & Chicago Neighborhoods
// Maps every community to its exact Federal, State Senate, State House, and County/Local races
window.IL_TOWNS_DIRECTORY = [
  // ================= CHICAGO NEIGHBORHOODS & CORRIDORS =================
  {
    id: "chicago-all",
    name: "Chicago (Citywide Overview)",
    zips: ["60601", "60602", "60603", "60604", "60699"],
    aliases: ["Chicago", "All of Chicago", "City of Chicago", "Chicago Citywide", "Downtown Chicago"],
    region: "Chicago",
    county: "Cook",
    population: "2,665,000",
    mayor: "Mayor Brandon Johnson (D - Term through 2027)",
    usHouse: ["IL-01", "IL-02", "IL-03", "IL-04", "IL-05", "IL-06", "IL-07", "IL-09"],
    stateSenate: ["SD-8", "SD-9", "SD-39"],
    stateHouse: ["HD-26", "HD-7"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-board-review-2", "cook-comm-17", "il-ballot-referendums-2026"],
    localContext: "Chicago voters cast ballots in the open U.S. Senate race, 8 different Congressional districts (including open seats in IL-02, IL-04, IL-07, and IL-09), Cook County President (Toni Preckwinkle), Cook County Assessor (where Pat Hynes upset Fritz Kaegi), and the fully elected 21-member Chicago Board of Education transition."
  },
  {
    id: "chicago-loop-downtown",
    name: "Chicago - The Loop, River North, Gold Coast, Streeterville & South Loop",
    zips: ["60601", "60602", "60603", "60604", "60605", "60606", "60607", "60610", "60611", "60654", "60661"],
    aliases: ["The Loop", "Chicago Loop", "Downtown", "River North", "Gold Coast", "Streeterville", "South Loop", "Near North Side", "Printer's Row", "Magnificent Mile", "Fulton Market", "Old Town South", "Lakeshore East", "Grant Park", "Millennium Park", "Chicago - River North", "Chicago - Gold Coast", "Chicago - Streeterville", "Chicago - South Loop", "Chicago - The Loop"],
    region: "Chicago",
    county: "Cook",
    population: "245,000",
    mayor: "Mayor Brandon Johnson (D) | Alds. Brendan Reilly (42), Bill Conway (34), Pat Dowell (3), Brian Hopkins (2)",
    usHouse: ["IL-07", "IL-05"],
    stateSenate: ["SD-8", "SD-39"],
    stateHouse: ["HD-26"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-board-review-2", "cook-comm-17", "il-ballot-referendums-2026"],
    localContext: "Downtown Chicago is the epicenter of the open IL-07 Congressional race (won by State Rep. La Shawn Ford after Richard Boykin, Jason Friedman, and Rory Hoskins split the moderate vote), Speaker Pro Tempore Kam Buckner's HD-26, LaSalle Street office-to-residential conversions, and CTA NITA transit safety."
  },
  {
    id: "chicago-lincoln-park-lakeview",
    name: "Chicago - Lincoln Park, Lakeview, Old Town & Uptown (North Lakefront)",
    zips: ["60613", "60614", "60618", "60625", "60640", "60657"],
    aliases: ["Lincoln Park", "Lakeview", "Old Town", "Uptown", "North Center", "Lincoln Square", "Ravenswood", "Roscoe Village", "Wrigleyville", "Boystown", "Buena Park", "North Halsted", "St. Ben's", "Bowmanville", "North Side", "Chicago - North Side", "Chicago - Lakeview", "Chicago - North Center", "Chicago - Lincoln Square", "Chicago - Uptown", "Chicago - Lincoln Park"],
    region: "Chicago",
    county: "Cook",
    population: "285,000",
    mayor: "Mayor Brandon Johnson (D) | Alds. Timmy Knudsen (43), Bennett Lawson (44), Angela Clay (46)",
    usHouse: ["IL-05", "IL-09"],
    stateSenate: ["SD-8", "SD-9"],
    stateHouse: ["HD-26", "HD-18"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-board-review-2", "cook-comm-17", "il-ballot-referendums-2026"],
    localContext: "North Lakefront voters are split between Rep. Mike Quigley (IL-05) and the open IL-09 seat (Daniel Biss vs. John Elleson). In the March 2026 primary, urban planner Drake Warren unseated longtime Cook County Commissioner Bridget Gainer in Dist. 10 and Liz Nicholson unseated Board of Review Commissioner Samantha Steele."
  },
  {
    id: "chicago-rogers-park-edgewater",
    name: "Chicago - Rogers Park, Edgewater, Andersonville & West Ridge (Far North Side)",
    zips: ["60626", "60645", "60646", "60659", "60660"],
    aliases: ["Rogers Park", "Edgewater", "Andersonville", "West Ridge", "West Rogers Park", "Peterson Park", "Sauganash", "Albany Park", "North Park", "Hollywood Park", "Loyola", "Devon Avenue", "Far North Side", "Chicago - Edgewater", "Chicago - Andersonville", "Chicago - Sauganash", "Chicago - Albany Park", "Chicago - West Ridge", "Chicago - Rogers Park"],
    region: "Chicago",
    county: "Cook",
    population: "215,000",
    mayor: "Mayor Brandon Johnson (D) | Alds. Maria Hadden (49), Leni Manaa-Hoppenworth (48), Debra Silverstein (50)",
    usHouse: ["IL-09", "IL-05"],
    stateSenate: ["SD-8", "SD-9"],
    stateHouse: ["HD-18"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-board-review-2", "il-ballot-referendums-2026"],
    localContext: "Anchor of the open IL-09 Congressional race (where Evanston Mayor Daniel Biss defeated Kat Abughazaleh and Laura Fine in a $12M+ primary featuring heavy AIPAC/Elect Chicago Women spending) and Senate Transportation Chair Ram Villivalam's SD-8."
  },
  {
    id: "chicago-logan-square-avondale",
    name: "Chicago - Logan Square, Humboldt Park, Avondale, West Town & Bucktown (NW Side)",
    zips: ["60622", "60639", "60641", "60647", "60651"],
    aliases: ["Logan Square", "Humboldt Park", "Avondale", "West Town", "Wicker Park", "Bucktown", "Ukrainian Village", "East Village", "Noble Square", "Palmer Square", "Hermosa", "Belmont Cragin", "Irving Park", "Old Irving Park", "Kelvyn Park", "Chicago - Humboldt Park", "Chicago - West Town", "Chicago - Avondale", "Chicago - Irving Park", "Chicago - Belmont Cragin", "Chicago - Logan Square"],
    region: "Chicago",
    county: "Cook",
    population: "260,000",
    mayor: "Mayor Brandon Johnson (D) | Alds. Carlos Ramirez-Rosa / Jessie Fuentes (26), Daniel La Spata (1)",
    usHouse: ["IL-03", "IL-05", "IL-07"],
    stateSenate: ["SD-8", "SD-39"],
    stateHouse: ["HD-7", "HD-26"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-board-review-2", "il-ballot-referendums-2026"],
    localContext: "Heart of Rep. Delia Ramirez's IL-03 district, where gentrification, 606 Trail property tax assessments, rent stabilization, and lead water service line replacement dominate voter priorities."
  },
  {
    id: "chicago-jefferson-park-norwood",
    name: "Chicago - Jefferson Park, Norwood Park, Edison Park, Portage Park & Dunning (Far NW Side)",
    zips: ["60630", "60631", "60634", "60656", "60666", "60706"],
    aliases: ["Jefferson Park", "Norwood Park", "Edison Park", "Portage Park", "Dunning", "Montclare", "Oriole Park", "O'Hare", "Edgebrook", "Forest Glen", "Mayfair", "Belmont Heights", "Belmont Terrace", "Schorsch Village", "Far Northwest Side", "Chicago - Portage Park", "Chicago - Norwood Park", "Chicago - Edison Park", "Chicago - Jefferson Park"],
    region: "Chicago",
    county: "Cook",
    population: "220,000",
    mayor: "Mayor Brandon Johnson (D) | Alds. Anthony Napolitano (41), Jim Gardiner (45), Nicholas Sposato / Samantha Nugent (39)",
    usHouse: ["IL-05", "IL-03"],
    stateSenate: ["SD-8", "SD-39"],
    stateHouse: ["HD-7"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-board-review-2", "cook-comm-17", "il-ballot-referendums-2026"],
    localContext: "Home to thousands of Chicago police officers, firefighters, and city workers (41st, 45th, 38th Wards). Key issues include Tier 2 police/fire pension reform, opposing the SAFE-T Act, O'Hare aircraft noise, and property tax assessments."
  },
  {
    id: "chicago-pilsen-little-village",
    name: "Chicago - Pilsen, Little Village, Brighton Park, Gage Park & Midway (SW Side)",
    zips: ["60608", "60609", "60616", "60623", "60629", "60632"],
    aliases: ["Pilsen", "Little Village", "La Villita", "Brighton Park", "Gage Park", "Midway", "Bridgeport", "Chinatown", "McKinley Park", "Back of the Yards", "New City", "Archer Heights", "West Elsdon", "West Lawn", "Chicago Lawn", "Marquette Park", "Heart of Chicago", "Armour Square", "Canaryville", "Chicago - Little Village", "Chicago - Brighton Park", "Chicago - Gage Park", "Chicago - West Lawn", "Chicago - Bridgeport", "Chicago - Chinatown", "Chicago - Pilsen"],
    region: "Chicago",
    county: "Cook",
    population: "275,000",
    mayor: "Mayor Brandon Johnson (D) | Alds. Byron Sigcho-Lopez (25), Michael Rodriguez (22), Julia Ramirez (12)",
    usHouse: ["IL-04", "IL-07"],
    stateSenate: ["SD-39"],
    stateHouse: ["HD-26", "HD-7"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-comm-17", "il-ballot-referendums-2026"],
    localContext: "Core of the open IL-04 Congressional race to succeed retiring Rep. Jesus 'Chuy' Garcia: Democratic nominee Patty Garcia faces Working Class Party nominee Lupe Castillo and Republican Chris Getty, while CTU-backed teacher Miranda Hernandez won the Cook County Board Dist. 16 primary."
  },
  {
    id: "chicago-west-side-austin",
    name: "Chicago - Austin, Garfield Park, North Lawndale & West Loop (West Side)",
    zips: ["60612", "60624", "60644"],
    aliases: ["Austin", "Garfield Park", "East Garfield Park", "West Garfield Park", "North Lawndale", "West Loop", "Near West Side", "Illinois Medical District", "Tri-Taylor", "Galewood", "United Center", "Greek Town", "Little Italy", "West Side", "Chicago - West Loop", "Chicago - Garfield Park", "Chicago - North Lawndale", "Chicago - Austin"],
    region: "Chicago",
    county: "Cook",
    population: "210,000",
    mayor: "Mayor Brandon Johnson (D) | Alds. Jason Ervin (28), Chris Taliaferro (29), Monique Scott (24), Walter Burnett (27)",
    usHouse: ["IL-07"],
    stateSenate: ["SD-39"],
    stateHouse: ["HD-7", "HD-26"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "il-ballot-referendums-2026"],
    localContext: "Home base of IL-07 Democratic nominee State Rep. La Shawn Ford (who defeated 12 primary rivals with $1.2M+ in Fairshake/Protect Progress Super PAC backing to succeed retiring Rep. Danny Davis), Senate President Don Harmon (SD-39), and House Speaker Chris Welch (HD-7)."
  },
  {
    id: "chicago-hyde-park-bronzeville",
    name: "Chicago - Hyde Park, Bronzeville, Kenwood, Woodlawn & South Shore (South Lakefront)",
    zips: ["60615", "60617", "60633", "60637", "60649", "60653"],
    aliases: ["Hyde Park", "Bronzeville", "Kenwood", "Woodlawn", "South Shore", "Oakland", "Douglas", "Grand Boulevard", "Washington Park", "South Chicago", "East Side", "Hegewisch", "South Deering", "Jeffrey Manor", "Calumet Heights", "Avalon Park", "Jackson Park", "Chicago - Bronzeville", "Chicago - Kenwood", "Chicago - South Shore", "Chicago - Hegewisch", "Chicago - Hyde Park"],
    region: "Chicago",
    county: "Cook",
    population: "230,000",
    mayor: "Mayor Brandon Johnson (D) | Alds. Desmon Yancy (5), Lamont Robinson (4), Jeanette Taylor (20), Greg Mitchell (7)",
    usHouse: ["IL-01", "IL-02", "IL-07"],
    stateSenate: ["SD-39"],
    stateHouse: ["HD-26"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "il-ballot-referendums-2026"],
    localContext: "Home to U.S. Senate nominee Lt. Gov. Juliana Stratton, Cook County Board President Toni Preckwinkle, U.S. Rep. Jonathan Jackson (IL-01), Speaker Pro Tempore Kam Buckner (HD-26), the Obama Presidential Center (opening 2026), and the new Illinois Quantum & Microelectronics Park at the former South Works steel site."
  },
  {
    id: "chicago-chatham-englewood",
    name: "Chicago - Chatham, Auburn Gresham, Englewood, Roseland & Pullman (South & Far South Side)",
    zips: ["60619", "60620", "60621", "60628", "60636"],
    aliases: ["Chatham", "Auburn Gresham", "Englewood", "West Englewood", "Roseland", "Pullman", "West Pullman", "Greater Grand Crossing", "Park Manor", "Burnside", "Washington Heights", "Riverdale Chicago", "Altgeld Gardens", "Rosemoor", "Gresham", "Far South Side", "Chicago - Roseland", "Chicago - Pullman", "Chicago - Englewood", "Chicago - Chatham"],
    region: "Chicago",
    county: "Cook",
    population: "250,000",
    mayor: "Mayor Brandon Johnson (D) | Alds. William Hall (6), Ronnie Mosley (21), Anthony Beale (9), Stephanie Coleman (16)",
    usHouse: ["IL-01", "IL-02"],
    stateSenate: ["SD-19"],
    stateHouse: ["HD-26"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "il-ballot-referendums-2026"],
    localContext: "Split between Rep. Jonathan Jackson (IL-01) and the open IL-02 seat (won by Cook County Commissioner Donna Miller over Jesse Jackson Jr. and Robert Peters). Voters are focused on the CTA Red Line Extension to 130th Street, South Side homeowner assessment spikes, and community violence prevention."
  },
  {
    id: "chicago-beverly-mt-greenwood",
    name: "Chicago - Beverly, Mount Greenwood, Morgan Park & Clearing (19th & 23rd Wards)",
    zips: ["60638", "60643", "60652", "60655"],
    aliases: ["Beverly", "Mount Greenwood", "Mt. Greenwood", "Morgan Park", "Clearing", "Garfield Ridge", "Ashburn", "Wrightwood", "Scottsdale", "Vittum Park", "Sleepy Hollow Chicago", "19th Ward", "23rd Ward", "Chicago - Morgan Park", "Chicago - Garfield Ridge", "Chicago - Mount Greenwood", "Chicago - Beverly"],
    region: "Chicago",
    county: "Cook",
    population: "135,000",
    mayor: "Mayor Brandon Johnson (D) | Alds. Matt O'Shea (19), Silvana Tabares (23)",
    usHouse: ["IL-06", "IL-01"],
    stateSenate: ["SD-19"],
    stateHouse: ["HD-37"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-comm-17", "il-ballot-referendums-2026"],
    localContext: "Home to Cook County Sheriff Tom Dart and thousands of union police, firefighters, and building trades families in Rep. Sean Casten's IL-06 district. Key issues include Tier 2 first-responder pensions, property tax assessments, and SAFE-T Act revisions."
  },

  // ================= SUBURBAN COOK COUNTY (NORTH, NW, WEST & SOUTH SUBURBS) =================
  {
    id: "evanston",
    name: "Evanston",
    zips: ["60201", "60202", "60203", "60204", "60208", "60209"],
    aliases: ["Evanston", "Northwestern University", "Rogers Park Border"],
    region: "Suburban Cook (North Shore)",
    county: "Cook",
    population: "76,500",
    mayor: "Mayor Daniel Biss (D - 2026 Democratic Nominee for Congress in IL-09)",
    usHouse: ["IL-09"],
    stateSenate: ["SD-9"],
    stateHouse: ["HD-18"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-board-review-2", "il-ballot-referendums-2026"],
    localContext: "Home to IL-09 Democratic Congressional nominee Mayor Daniel Biss (who won the March 2026 primary to succeed retiring 14-term Rep. Jan Schakowsky), House Majority Leader Robyn Gabel (HD-18), Sen. Laura Fine (SD-9), and Northwestern University."
  },
  {
    id: "skokie",
    name: "Skokie",
    zips: ["60076", "60077"],
    aliases: ["Skokie", "Niles Township", "Devon-McCormick"],
    region: "Suburban Cook (Near North Suburbs)",
    county: "Cook",
    population: "66,000",
    mayor: "Mayor Ann Tennes (Elected 2025, Succeeding George Van Dusen)",
    usHouse: ["IL-09"],
    stateSenate: ["SD-8", "SD-9"],
    stateHouse: ["HD-18"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-board-review-2", "il-ballot-referendums-2026"],
    localContext: "Key battleground in the March 2026 IL-09 primary; represented by Senate Transportation Chair Ram Villivalam (SD-8) and Sen. Laura Fine (SD-9), with major focus on CTA Yellow Line safety, Illinois Science + Technology Park growth, and Niles Township property taxes."
  },
  {
    id: "glenview",
    name: "Glenview",
    zips: ["60025", "60026", "60029"],
    aliases: ["Glenview", "Golf", "The Glen", "Northfield Township"],
    region: "Suburban Cook (North Shore)",
    county: "Cook",
    population: "48,000",
    mayor: "Village President Mike Jenny",
    usHouse: ["IL-09", "IL-05", "IL-10"],
    stateSenate: ["SD-9", "SD-8"],
    stateHouse: ["HD-18"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-board-review-2", "il-ballot-referendums-2026"],
    localContext: "Hometown of State Sen. Laura Fine (SD-9); voters prioritize lifting the federal $10,000 SALT deduction cap, New Trier/Glenbrook school excellence, and Northfield Township property tax relief."
  },
  {
    id: "northbrook",
    name: "Northbrook",
    zips: ["60062", "60065"],
    aliases: ["Northbrook", "Techny"],
    region: "Suburban Cook (North Shore)",
    county: "Cook",
    population: "34,800",
    mayor: "Village President Kathryn Ciesla",
    usHouse: ["IL-10", "IL-09"],
    stateSenate: ["SD-9"],
    stateHouse: ["HD-18"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-board-review-2", "il-ballot-referendums-2026"],
    localContext: "Split between Rep. Brad Schneider (IL-10) and the open IL-09 race; home to major corporate campuses, Glenbrook North High School, and strong voter focus on SALT cap repeal and gun safety."
  },
  {
    id: "wilmette-winnetka",
    name: "Wilmette, Winnetka, Glencoe & Kenilworth (New Trier Township)",
    zips: ["60022", "60043", "60091", "60093"],
    aliases: ["Wilmette", "Winnetka", "Glencoe", "Kenilworth", "Northfield", "New Trier", "New Trier Township"],
    region: "Suburban Cook (North Shore)",
    county: "Cook",
    population: "56,000",
    mayor: "Village Presidents Senta Plunkett (Wilmette) & Chris Rintz (Winnetka)",
    usHouse: ["IL-09", "IL-10"],
    stateSenate: ["SD-9"],
    stateHouse: ["HD-18"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-board-review-2", "il-ballot-referendums-2026"],
    localContext: "Affluent North Shore lakefront communities represented by House Majority Leader Robyn Gabel (HD-18) and Sen. Laura Fine (SD-9), where lifting the federal SALT cap, Lake Michigan shoreline erosion, and Metra UP-N service are top priorities."
  },
  {
    id: "niles-morton-grove",
    name: "Niles, Morton Grove & Lincolnwood",
    zips: ["60053", "60712", "60714"],
    aliases: ["Niles", "Morton Grove", "Lincolnwood"],
    region: "Suburban Cook (Near North Suburbs)",
    county: "Cook",
    population: "68,000",
    mayor: "Mayors George Alpogianis (Niles) & Dan DiMaria (Morton Grove)",
    usHouse: ["IL-09", "IL-05"],
    stateSenate: ["SD-8"],
    stateHouse: ["HD-18"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-board-review-2", "il-ballot-referendums-2026"],
    localContext: "Represented by Senate Transportation Chair Ram Villivalam (SD-8) vs. Niles Republican Vince Romano; key issues include senior property tax freezes, Golf Mill Mall redevelopment, and Pace Pulse bus rapid transit."
  },
  {
    id: "park-ridge",
    name: "Park Ridge",
    zips: ["60068", "60706"],
    aliases: ["Park Ridge", "Norridge", "Harwood Heights", "Maine Township"],
    region: "Suburban Cook (Northwest Suburbs)",
    county: "Cook",
    population: "39,000",
    mayor: "Mayor Marty Maloney",
    usHouse: ["IL-05", "IL-09"],
    stateSenate: ["SD-27", "SD-39"],
    stateHouse: ["HD-7"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-comm-17", "il-ballot-referendums-2026"],
    localContext: "Anchored in Rep. Mike Quigley's IL-05 and the open Cook County Board Dist. 17 battleground (Elyse Hoffenberg vs. Liz Gorman); voters focus on Maine Township property taxes, O'Hare runway noise, and storm sewer flood relief."
  },
  {
    id: "des-plaines",
    name: "Des Plaines",
    zips: ["60016", "60017", "60018", "60019"],
    aliases: ["Des Plaines", "Rosemont"],
    region: "Suburban Cook (Northwest Suburbs)",
    county: "Cook",
    population: "59,500",
    mayor: "Mayor Andrew Goczkowski",
    usHouse: ["IL-08", "IL-09", "IL-05"],
    stateSenate: ["SD-27", "SD-8"],
    stateHouse: ["HD-52"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-comm-17", "il-ballot-referendums-2026"],
    localContext: "Pivotal battleground in the open IL-08 Congressional race (Melissa Bean vs. Jennifer Davis) and the open SD-27 State Senate race (Carina Santa Maria vs. David Mathis). Des Plaines River flooding, Rivers Casino revenues, and Metra UP-NW upgrades are key local issues."
  },
  {
    id: "arlington-heights",
    name: "Arlington Heights",
    zips: ["60004", "60005", "60006", "60070", "60090"],
    aliases: ["Arlington Heights", "Prospect Heights", "Wheeling", "Wheeling Township"],
    region: "Suburban Cook (Northwest Suburbs)",
    county: "Cook",
    population: "76,000",
    mayor: "Mayor Jim Tinaglia (Elected 2025, Succeeding Tom Hayes)",
    usHouse: ["IL-08", "IL-05", "IL-09"],
    stateSenate: ["SD-27"],
    stateHouse: ["HD-52"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-board-review-2", "il-ballot-referendums-2026"],
    localContext: "Home to the 326-acre former Arlington International Racecourse owned by the Chicago Bears. Voters in the open IL-08 Congressional race (Melissa Bean vs. Jennifer Davis) and open SD-27 Senate race (Carina Santa Maria vs. David Mathis) are closely watching property tax pilot agreements for the stadium site and D214 schools."
  },
  {
    id: "schaumburg",
    name: "Schaumburg & Hoffman Estates",
    zips: ["60107", "60133", "60168", "60169", "60173", "60179", "60192", "60193", "60194", "60195", "60196"],
    aliases: ["Schaumburg", "Hoffman Estates", "Streamwood", "Hanover Park", "Schaumburg Township", "Woodfield"],
    region: "Suburban Cook (Northwest Suburbs)",
    county: "Cook",
    population: "128,000",
    mayor: "Mayors Tom Dailly (Schaumburg) & Bill McLeod (Hoffman Estates)",
    usHouse: ["IL-08"],
    stateSenate: ["SD-27", "SD-26", "SD-24"],
    stateHouse: ["HD-52"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-comm-17", "il-ballot-referendums-2026"],
    localContext: "Economic engine of the open IL-08 Congressional district (where former Rep. Melissa Bean faces Republican Jennifer Davis to succeed Raja Krishnamoorthi). Woodfield commercial corridor redevelopment, Bell Works / Compass data center campus in Hoffman Estates, and Schaumburg Airport/STAR Line transit lead local issues."
  },
  {
    id: "mount-prospect-palatine",
    name: "Mount Prospect, Palatine & Rolling Meadows",
    zips: ["60008", "60056", "60067", "60074", "60078"],
    aliases: ["Mount Prospect", "Mt. Prospect", "Palatine", "Rolling Meadows", "Inverness", "Palatine Township"],
    region: "Suburban Cook (Northwest Suburbs)",
    county: "Cook",
    population: "147,000",
    mayor: "Mayors Paul Hoefert (Mount Prospect), Jim Schwantz (Palatine) & Lara Sanoica (Rolling Meadows)",
    usHouse: ["IL-08", "IL-05", "IL-06"],
    stateSenate: ["SD-27", "SD-26"],
    stateHouse: ["HD-52"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-board-review-2", "il-ballot-referendums-2026"],
    localContext: "Key Northwest Suburban battleground in both the open IL-08 Congressional race (Melissa Bean vs. Jennifer Davis), the open SD-27 Senate race (Carina Santa Maria vs. David Mathis), and the SD-26 toss-up (Darby Hills vs. Palatine State Rep. Nabeela Syed)."
  },
  {
    id: "elk-grove-village",
    name: "Elk Grove Village",
    zips: ["60007", "60009", "60143"],
    aliases: ["Elk Grove Village", "Elk Grove", "Itasca", "Elk Grove Township"],
    region: "Suburban Cook & DuPage (Northwest Suburbs)",
    county: "Cook",
    population: "32,500",
    mayor: "Mayor Craig Johnson",
    usHouse: ["IL-08"],
    stateSenate: ["SD-24", "SD-27"],
    stateHouse: ["HD-52"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "dupage-county-2026", "il-ballot-referendums-2026"],
    localContext: "Home to the largest industrial park in North America and the #1 concentration of hyperscale AI data centers in the Midwest. Central to statewide debates over data center ComEd grid capacity, water usage, and industrial property tax revenue."
  },
  {
    id: "oak-park-river-forest",
    name: "Oak Park, River Forest & Forest Park",
    zips: ["60130", "60301", "60302", "60303", "60304", "60305", "60707"],
    aliases: ["Oak Park", "River Forest", "Forest Park", "Elmwood Park", "All Cook County Suburbs", "All of Cook County"],
    region: "Suburban Cook (Near West Suburbs)",
    county: "Cook",
    population: "78,000",
    mayor: "Village Presidents Vicki Scaman (Oak Park), Cathy Adduci (River Forest) & Rory Hoskins (Forest Park)",
    usHouse: ["IL-07"],
    stateSenate: ["SD-39"],
    stateHouse: ["HD-7"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "il-ballot-referendums-2026"],
    localContext: "Powerhouse political corridor: hometown of Senate President Don Harmon (SD-39), anchored in Speaker Chris Welch's HD-7 and the open IL-07 Congressional race (won by State Rep. La Shawn Ford over Oak Park President Danalem/Rory Hoskins/Richard Boykin). High Oak Park residential property tax bills and CTA Blue/Green Line safety are top concerns."
  },
  {
    id: "maywood-proviso",
    name: "Maywood, Bellwood, Hillside, Broadview & Westchester (Proviso Township)",
    zips: ["60104", "60131", "60153", "60154", "60155", "60160", "60162", "60163", "60164", "60165", "60171", "60176"],
    aliases: ["Maywood", "Bellwood", "Hillside", "Broadview", "Westchester", "Proviso Township", "Melrose Park", "Franklin Park", "Northlake", "Stone Park", "Schiller Park", "Berkeley", "River Grove", "Leyden Township"],
    region: "Suburban Cook (West Suburbs)",
    county: "Cook",
    population: "82,000",
    mayor: "Mayors Nathaniel Booker (Maywood), Andre Harvey (Bellwood) & Katrina Thompson (Broadview)",
    usHouse: ["IL-07", "IL-04"],
    stateSenate: ["SD-39"],
    stateHouse: ["HD-7"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-comm-17", "il-ballot-referendums-2026"],
    localContext: "Home base of Illinois House Speaker Emanuel 'Chris' Welch (HD-7) and part of the open IL-07 Congressional district. Key local issues include lead service line replacement, Proviso Township High School D209 funding, and West Cook commercial tax base revitalization."
  },
  {
    id: "cicero-berwyn",
    name: "Cicero & Berwyn",
    zips: ["60402", "60804"],
    aliases: ["Cicero", "Berwyn", "Stickney", "Forest View"],
    region: "Suburban Cook (Near West Suburbs)",
    county: "Cook",
    population: "136,000",
    mayor: "Town President Larry Dominick (Cicero) & Mayor Robert Lovero (Berwyn)",
    usHouse: ["IL-04"],
    stateSenate: ["SD-39"],
    stateHouse: ["HD-7"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-comm-17", "il-ballot-referendums-2026"],
    localContext: "Largest suburban anchor of the open IL-04 Congressional race (Patty Garcia vs. Lupe Castillo vs. Chris Getty). Cicero holds the highest number of lead water service lines of any Illinois suburb, and urban flooding, Morton J. Sterling D201 property taxes, and Miranda Hernandez's Dist. 16 County Board win dominate local politics."
  },
  {
    id: "la-grange-western-springs",
    name: "La Grange, Western Springs, Brookfield & Riverside (Lyons Township)",
    zips: ["60439", "60458", "60480", "60501", "60513", "60525", "60526", "60534", "60546", "60558"],
    aliases: ["La Grange", "LaGrange", "La Grange Park", "Western Springs", "Brookfield", "Riverside", "North Riverside", "Lyons", "Lyons Township", "Summit", "Countryside", "Indian Head Park", "Hodgkins", "McCook", "Bedford Park", "Justice", "Willow Springs"],
    region: "Suburban Cook (West Suburbs)",
    county: "Cook",
    population: "61,000",
    mayor: "Village Presidents Mark Kuchler (La Grange), Heidi Rudolph (Western Springs) & Michael Garvey (Brookfield)",
    usHouse: ["IL-04", "IL-06"],
    stateSenate: ["SD-41", "SD-39"],
    stateHouse: ["HD-7"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-comm-17", "il-ballot-referendums-2026"],
    localContext: "Hometown of newly nominated Cook County Assessor Patrick 'Pat' Hynes (Lyons Township Assessor who upset Fritz Kaegi) and Cook County Board Dist. 17 Democratic nominee Elyse Hoffenberg, as well as IL-04 GOP nominee former Lyons Mayor Chris Getty."
  },
  {
    id: "orland-park",
    name: "Orland Park",
    zips: ["60462", "60464", "60467"],
    aliases: ["Orland Park", "Orland Hills", "Palos Park", "Orland Township"],
    region: "Suburban Cook (Southwest Suburbs)",
    county: "Cook",
    population: "58,000",
    mayor: "Mayor Jim Dodge (Defeated Keith Pekau in April 2025 Municipal Election)",
    usHouse: ["IL-06", "IL-01"],
    stateSenate: ["SD-19"],
    stateHouse: ["HD-37"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-comm-17", "il-ballot-referendums-2026"],
    localContext: "Bellwether Southwest Suburban battleground: after former GOP Mayor Keith Pekau lost his 2025 municipal re-election bid to Jim Dodge, Orland Park is at the center of Rep. Sean Casten vs. Niki Conforti (IL-06), Sen. Michael Hastings vs. Hillary Kurzawa (SD-19), Rep. Patrick Sheehan vs. David Maher (HD-37), and the open Cook County Board Dist. 17 race (Elyse Hoffenberg vs. Orland Park's Liz Doody Gorman)."
  },
  {
    id: "tinley-park",
    name: "Tinley Park & Oak Forest",
    zips: ["60445", "60452", "60477", "60478", "60487"],
    aliases: ["Tinley Park", "Oak Forest", "Midlothian", "Crestwood", "Country Club Hills", "Bremen Township"],
    region: "Suburban Cook & Will (Southwest Suburbs)",
    county: "Cook",
    population: "83,000",
    mayor: "Mayors Michael Glotz (Tinley Park) & Henry Kuspa (Oak Forest)",
    usHouse: ["IL-01", "IL-06"],
    stateSenate: ["SD-19"],
    stateHouse: ["HD-37"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-comm-17", "will-county-2026", "il-ballot-referendums-2026"],
    localContext: "Split between Cook and Will counties and competitive legislative races (SD-19 Michael Hastings vs. Hillary Kurzawa; HD-37 Patrick Sheehan vs. David Maher). Key local issues include remediation of the former Tinley Park Mental Health Center site and South Suburban property tax relief."
  },
  {
    id: "oak-lawn-palos",
    name: "Oak Lawn, Palos Heights, Palos Hills, Worth & Evergreen Park",
    zips: ["60406", "60415", "60453", "60455", "60456", "60457", "60459", "60463", "60465", "60482", "60803", "60805"],
    aliases: ["Oak Lawn", "Palos Heights", "Palos Hills", "Worth", "Evergreen Park", "Alsip", "Blue Island", "Bridgeview", "Burbank", "Chicago Ridge", "Hickory Hills", "Hometown", "Merrionette Park", "Worth Township", "Palos Township"],
    region: "Suburban Cook (Southwest Suburbs)",
    county: "Cook",
    population: "118,000",
    mayor: "Mayors Terry Vorderer (Oak Lawn), Bob Straz (Palos Heights) & Kelly Burke (Evergreen Park)",
    usHouse: ["IL-06"],
    stateSenate: ["SD-19"],
    stateHouse: ["HD-37"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "cook-comm-17", "il-ballot-referendums-2026"],
    localContext: "Core of Rep. Sean Casten's IL-06 district and the open Cook County Board Dist. 17 race. Voters focus on Advocate Christ Medical Center healthcare workforce, Lake Michigan water supply regional rates, and Southwest Cook property taxes."
  },
  {
    id: "chicago-heights-flossmoor",
    name: "Chicago Heights, Flossmoor, Homewood, Matteson & Olympia Fields (South Suburbs)",
    zips: ["60401", "60411", "60417", "60422", "60423", "60425", "60429", "60430", "60443", "60449", "60461", "60466", "60468", "60471", "60475", "60484"],
    aliases: ["Chicago Heights", "Flossmoor", "Homewood", "Matteson", "Olympia Fields", "Park Forest", "Richton Park", "University Park", "Crete", "Monee", "Peotone", "Beecher", "Steger", "Sauk Village", "Glenwood", "Lynwood", "Hazel Crest", "East Hazel Crest", "Ford Heights", "South Chicago Heights", "Bloom Township", "Rich Township"],
    region: "Suburban Cook (South Suburbs)",
    county: "Cook",
    population: "95,000",
    mayor: "Mayors David Gonzalez (Chicago Heights), Michelle Nelson (Flossmoor) & Rich Hofeld (Homewood)",
    usHouse: ["IL-02"],
    stateSenate: ["SD-19"],
    stateHouse: ["HD-37"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "il-ballot-referendums-2026"],
    localContext: "Heart of the open IL-02 Congressional race (won by South Suburban Cook County Commissioner Donna Miller, who faces Republican Mike Noack to succeed Robin Kelly) and hometown of Cook County Clerk Monica Gordon. Top issues include South Suburban property tax rates (often 4% to 6% of home value), the South Suburban Airport in Peotone, and Metra Electric TOD."
  },
  {
    id: "calumet-city-harvey-dolton",
    name: "Calumet City, Harvey, Dolton, Lansing & South Holland (Thornton Township)",
    zips: ["60409", "60419", "60426", "60428", "60438", "60469", "60472", "60473", "60476", "60827"],
    aliases: ["Calumet City", "Harvey", "Dolton", "Lansing", "South Holland", "Thornton", "Thornton Township", "Riverdale", "Robbins", "Markham", "Posen", "Dixmoor", "Phoenix", "Burnham", "Calumet Park"],
    region: "Suburban Cook (South Suburbs)",
    county: "Cook",
    population: "145,000",
    mayor: "Mayors Thaddeus Jones (Calumet City), Christopher Clark (Harvey) & Jason House (Dolton - Defeated Tiffany Henyard in 2025)",
    usHouse: ["IL-02", "IL-01"],
    stateSenate: ["SD-19"],
    stateHouse: ["HD-26"],
    localRaces: ["cook-president", "cook-assessor", "cook-sheriff-clerk-treasurer", "il-ballot-referendums-2026"],
    localContext: "Following Dolton Trustee Jason House's landslide 2025 victory unseating controversial Mayor Tiffany Henyard in Dolton and Thornton Township, Southland voters in Donna Miller's IL-02 district are focused on municipal ethics reform, Cook County Scavenger Sale reform, flood reservoirs, and property tax relief."
  },

  // ================= COLLAR COUNTIES (DUPAGE, LAKE, WILL, KANE & MCHENRY) =================
  {
    id: "naperville",
    name: "Naperville",
    zips: ["60540", "60563", "60564", "60565", "60566", "60567"],
    aliases: ["Naperville", "Naperville Township", "Wheatland Township"],
    region: "Collar Counties (DuPage & Will)",
    county: "DuPage",
    population: "150,500",
    mayor: "Mayor Scott Wehrli",
    usHouse: ["IL-11", "IL-14", "IL-08"],
    stateSenate: ["SD-41", "SD-24"],
    stateHouse: ["HD-47", "HD-84", "HD-97"],
    localRaces: ["dupage-county-2026", "will-county-2026", "il-ballot-referendums-2026"],
    localContext: "Illinois's 3rd-largest city, split between DuPage and Will counties and represented by Rep. Bill Foster (IL-11) and Rep. Lauren Underwood (IL-14). Features the toss-up open HD-47 House race (Erica Bray-Parker vs. Robert Vrankovich), HD-97 toss-up (Jessica Dixon Heitman vs. Gabby Shanahan), DuPage Chair Deb Conroy vs. Gary Grasso, and major debate over Naperville's municipal electric utility contract with IMEA coal power."
  },
  {
    id: "aurora",
    name: "Aurora",
    zips: ["60502", "60503", "60504", "60505", "60506", "60507", "60538", "60542", "60554"],
    aliases: ["Aurora", "North Aurora", "Montgomery", "Sugar Grove", "Boulder Hill", "Fox Valley"],
    region: "Collar Counties (Kane, DuPage, Will & Kendall)",
    county: "Kane",
    population: "180,500",
    mayor: "Mayor John Laesch (Defeated Richard Irvin in April 2025 Municipal Election)",
    usHouse: ["IL-11", "IL-14"],
    stateSenate: ["SD-33", "SD-43"],
    stateHouse: ["HD-84", "HD-97"],
    localRaces: ["kane-county-2026", "dupage-county-2026", "will-county-2026", "il-ballot-referendums-2026"],
    localContext: "Illinois's 2nd-largest city ('City of Lights'), spanning four counties (Kane, DuPage, Kendall, Will) and anchored by Rep. Bill Foster (IL-11), Rep. Lauren Underwood (IL-14), and State Rep. Stephanie Kifowit (HD-84). Key issues include lead service line replacement, Hollywood Casino Aurora redevelopment, I-88 data centers, and the Kane County Sheriff/Treasurer elections."
  },
  {
    id: "joliet",
    name: "Joliet",
    zips: ["60403", "60404", "60408", "60410", "60416", "60421", "60431", "60432", "60433", "60434", "60435", "60436", "60447", "60481"],
    aliases: ["Joliet", "Crest Hill", "Rockdale", "Elwood", "Channahon", "Minooka", "Wilmington", "Braidwood", "Coal City", "diamond", "Will County"],
    region: "Collar Counties (Will & Kendall)",
    county: "Will",
    population: "151,000",
    mayor: "Mayor Terry D'Arcy",
    usHouse: ["IL-14", "IL-01"],
    stateSenate: ["SD-43", "SD-19"],
    stateHouse: ["HD-97", "HD-37"],
    localRaces: ["will-county-2026", "il-ballot-referendums-2026"],
    localContext: "Anchor of Rep. Lauren Underwood's IL-14 battleground against former GOP State Sen. Jim Marter, Sen. Rachel Ventura's SD-43, the HD-97 toss-up (Jessica Dixon Heitman vs. Gabby Shanahan), and the toss-up Will County Sheriff race (Patrick Jones vs. Jim Reilly). Key issues include the $1B+ Grand Prairie Lake Michigan water pipeline, I-80 Des Plaines River bridge replacement, and NorthPoint intermodal truck traffic."
  },
  {
    id: "elgin",
    name: "Elgin",
    zips: ["60120", "60121", "60123", "60124", "60136", "60140", "60170", "60177"],
    aliases: ["Elgin", "South Elgin", "Hampshire", "Pingree Grove", "Gilberts", "Burlington", "Plato Center"],
    region: "Collar Counties (Kane & Cook)",
    county: "Kane",
    population: "114,500",
    mayor: "Mayor David Kaptain",
    usHouse: ["IL-08", "IL-11"],
    stateSenate: ["SD-33"],
    stateHouse: ["HD-52"],
    localRaces: ["kane-county-2026", "cook-president", "cook-assessor", "il-ballot-referendums-2026"],
    localContext: "Pivotal Fox River city at the heart of the open IL-08 Congressional race (Melissa Bean vs. Jennifer Davis) and the open SD-33 State Senate battleground (Michele Clark vs. Danielle Penman to succeed retiring GOP Sen. Don DeWitte). Elgin School District U-46 funding, lead water pipe replacement, and Fox River dam removal are top local issues."
  },
  {
    id: "waukegan-north-chicago",
    name: "Waukegan & North Chicago",
    zips: ["60064", "60083", "60085", "60087", "60088", "60096", "60099"],
    aliases: ["Waukegan", "North Chicago", "Park City", "Zion", "Beach Park", "Winthrop Harbor", "Wadsworth", "Great Lakes"],
    region: "Collar Counties (Lake County)",
    county: "Lake",
    population: "119,000",
    mayor: "Mayors Sam Cunningham (Waukegan - Elected 2025) & Leon Rockingham Jr. (North Chicago)",
    usHouse: ["IL-10"],
    stateSenate: ["SD-30"],
    stateHouse: ["HD-52"],
    localRaces: ["lake-county-2026", "il-ballot-referendums-2026"],
    localContext: "Lake County's largest city and home to Naval Station Great Lakes (the U.S. Navy's only boot camp), represented by Rep. Brad Schneider (IL-10) and Sen. Adrienne Johnson (SD-30). Key issues include Waukegan lakefront coal-ash remediation, high Lake County property taxes, and Vista Medical Center healthcare stability."
  },
  {
    id: "wheaton-glen-ellyn",
    name: "Wheaton, Glen Ellyn, Warrenville & Winfield",
    zips: ["60137", "60138", "60185", "60186", "60187", "60189", "60190", "60555"],
    aliases: ["Wheaton", "Glen Ellyn", "Warrenville", "Winfield", "West Chicago", "Milton Township"],
    region: "Collar Counties (DuPage County)",
    county: "DuPage",
    population: "106,000",
    mayor: "Mayors Philip Suess (Wheaton), Mark Senak (Glen Ellyn) & Andrew Johnson (Warrenville)",
    usHouse: ["IL-03", "IL-06", "IL-11"],
    stateSenate: ["SD-24", "SD-41"],
    stateHouse: ["HD-47"],
    localRaces: ["dupage-county-2026", "il-ballot-referendums-2026"],
    localContext: "County seat of DuPage County and ground zero for two of the closest legislative races in Illinois: the SD-24 Senate toss-up (Incumbent Sen. Seth Lewis [R] vs. Ben McAdams [D]) and the open HD-47 House toss-up (Wheaton Councilwoman Erica Bray-Parker [D] vs. Robert Vrankovich [R]), plus DuPage Board Chair Deb Conroy vs. Gary Grasso."
  },
  {
    id: "downers-grove-hinsdale",
    name: "Downers Grove, Hinsdale, Burr Ridge, Lisle, Woodridge & Darien",
    zips: ["60514", "60515", "60516", "60517", "60521", "60527", "60532", "60559", "60561"],
    aliases: ["Downers Grove", "Hinsdale", "Burr Ridge", "Lisle", "Woodridge", "Darien", "Clarendon Hills", "Westmont", "Willowbrook", "Oakbrook Terrace", "Downers Grove Township"],
    region: "Collar Counties (SE DuPage County)",
    county: "DuPage",
    population: "152,000",
    mayor: "Mayors Bob Barnett (Downers Grove), Greg Hart (Hinsdale) & Tony Ragucci (Oakbrook Terrace)",
    usHouse: ["IL-06", "IL-11"],
    stateSenate: ["SD-41"],
    stateHouse: ["HD-47"],
    localRaces: ["dupage-county-2026", "il-ballot-referendums-2026"],
    localContext: "Home base of Senate Minority Leader John Curran (R, SD-41) and competitive battleground in Rep. Sean Casten vs. Niki Conforti (IL-06) and DuPage County Board Chair Deb Conroy (D) vs. former Burr Ridge Mayor Gary Grasso (R)."
  },
  {
    id: "elmhurst-lombard-oak-brook",
    name: "Elmhurst, Lombard, Villa Park & Oak Brook",
    zips: ["60126", "60148", "60181", "60523"],
    aliases: ["Elmhurst", "Lombard", "Villa Park", "Oak Brook", "Oakbrook", "York Township"],
    region: "Collar Counties (East DuPage County)",
    county: "DuPage",
    population: "123,000",
    mayor: "Mayors Scott Levin (Elmhurst), Anthony Puccio (Lombard) & Laurence Herman (Oak Brook)",
    usHouse: ["IL-06", "IL-03", "IL-08"],
    stateSenate: ["SD-24", "SD-39"],
    stateHouse: ["HD-47"],
    localRaces: ["dupage-county-2026", "il-ballot-referendums-2026"],
    localContext: "Villa Park is the hometown of DuPage County Board Chair Deb Conroy (D), while Oak Brook is the hometown of IL-06 GOP nominee Niki Conforti (challenging Rep. Sean Casten). Key issues include Oakbrook Center retail theft policing, SALT cap relief, and Salt Creek stormwater control."
  },
  {
    id: "carol-stream-bloomingdale-bartlett",
    name: "Carol Stream, Bloomingdale, Roselle, Bartlett, Addison & Bensenville",
    zips: ["60101", "60103", "60106", "60108", "60139", "60157", "60172", "60184", "60188", "60191"],
    aliases: ["Carol Stream", "Bloomingdale", "Roselle", "Bartlett", "Addison", "Bensenville", "Wood Dale", "Glendale Heights", "Medinah", "Wayne", "Bloomingdale Township", "Addison Township"],
    region: "Collar Counties (North DuPage & NW Cook)",
    county: "DuPage",
    population: "168,000",
    mayor: "Mayors Frank Saverino (Carol Stream), Franco Coladipietro (Bloomingdale) & Dan Gunsteen (Bartlett)",
    usHouse: ["IL-08", "IL-03"],
    stateSenate: ["SD-24"],
    stateHouse: ["HD-47"],
    localRaces: ["dupage-county-2026", "cook-president", "il-ballot-referendums-2026"],
    localContext: "Core battleground for both the open IL-08 Congressional race (Melissa Bean vs. Jennifer Davis) and the SD-24 State Senate toss-up (Bartlett incumbent Sen. Seth Lewis [R] vs. Ben McAdams [D])."
  },
  {
    id: "bolingbrook-romeoville",
    name: "Bolingbrook & Romeoville",
    zips: ["60439", "60440", "60446", "60490"],
    aliases: ["Bolingbrook", "Romeoville", "Lemont", "DuPage Township"],
    region: "Collar Counties (North Will County)",
    county: "Will",
    population: "115,000",
    mayor: "Mayors Mary Alexander-Basta (Bolingbrook) & John Noak (Romeoville)",
    usHouse: ["IL-11", "IL-14"],
    stateSenate: ["SD-43"],
    stateHouse: ["HD-97"],
    localRaces: ["will-county-2026", "il-ballot-referendums-2026"],
    localContext: "Diverse, fast-growing I-55 corridor communities in Sen. Rachel Ventura's SD-43, the HD-97 House toss-up (Jessica Dixon Heitman vs. Gabby Shanahan), and the Will County Sheriff/Clerk battlegrounds. Key issues include Valley View D365U school funding, warehouse truck traffic, and Metra Heritage Corridor expansion."
  },
  {
    id: "plainfield-oswego-shorewood",
    name: "Plainfield, Shorewood, Oswego & Yorkville (Will & Kendall Corridor)",
    zips: ["60543", "60544", "60545", "60548", "60560", "60585", "60586"],
    aliases: ["Plainfield", "Shorewood", "Oswego", "Yorkville", "Plano", "Sandwich", "Kendall County", "Bristol", "Newark"],
    region: "Collar Counties (Will & Kendall)",
    county: "Will",
    population: "125,000",
    mayor: "Village Presidents John Argoudelis (Plainfield), Ryan Kauffman (Oswego) & Clarence DeBold (Shorewood)",
    usHouse: ["IL-14"],
    stateSenate: ["SD-43"],
    stateHouse: ["HD-97", "HD-84"],
    localRaces: ["will-county-2026", "il-ballot-referendums-2026"],
    localContext: "Epicenter of two marquee 2026 races: Rep. Lauren Underwood vs. Oswego Republican Jim Marter in IL-14, and the HD-97 State House toss-up between newly appointed Plainfield Democrat Jessica Dixon Heitman and Republican Gabby Shanahan."
  },
  {
    id: "new-lenox-frankfort-mokena",
    name: "New Lenox, Frankfort, Mokena, Homer Glen & Lockport (Lincoln-Way Corridor)",
    zips: ["60423", "60441", "60442", "60448", "60451", "60491"],
    aliases: ["New Lenox", "Frankfort", "Mokena", "Homer Glen", "Lockport", "Manhattan", "Lincoln-Way"],
    region: "Collar Counties (Will County)",
    county: "Will",
    population: "112,000",
    mayor: "Mayors Tim Baldermann (New Lenox), Keith Ogle (Frankfort), George Metanias (Mokena) & Steven Streit (Lockport)",
    usHouse: ["IL-01", "IL-02"],
    stateSenate: ["SD-19", "SD-41"],
    stateHouse: ["HD-37"],
    localRaces: ["will-county-2026", "il-ballot-referendums-2026"],
    localContext: "Hometown corridor of Sen. Michael Hastings (D, Frankfort) vs. Hillary Kurzawa (R) in SD-19 and Lockport police officer Rep. Patrick Sheehan (R) vs. David Maher (D) in HD-37, plus the toss-up Will County Sheriff and Clerk races."
  },
  {
    id: "st-charles-geneva-batavia",
    name: "St. Charles, Geneva & Batavia (Tri-Cities Fox Valley)",
    zips: ["60119", "60134", "60144", "60151", "60174", "60175", "60510"],
    aliases: ["St. Charles", "Saint Charles", "Geneva", "Batavia", "Elburn", "Campton Hills", "Maple Park", "Kaneville"],
    region: "Collar Counties (Kane County)",
    county: "Kane",
    population: "82,000",
    mayor: "Mayors Lora Vitek (St. Charles), Kevin Burns (Geneva) & Jeffery Schielke (Batavia)",
    usHouse: ["IL-11", "IL-08"],
    stateSenate: ["SD-33"],
    stateHouse: ["HD-84"],
    localRaces: ["kane-county-2026", "il-ballot-referendums-2026"],
    localContext: "Heart of the open SD-33 State Senate toss-up between Democrat Michele Clark and St. Charles Republican Danielle Penman (daughter of former Sen. Karen McConnaughay), as well as the Kane County Sheriff, Clerk, and Treasurer races. All three cities operate municipal electric utilities (NIMPA) focused on grid capacity rates."
  },
  {
    id: "carpentersville-dundee-algonquin",
    name: "Carpentersville, West Dundee, East Dundee, Algonquin & Huntley",
    zips: ["60102", "60110", "60118", "60142", "60156"],
    aliases: ["Carpentersville", "West Dundee", "East Dundee", "Dundee", "Algonquin", "Huntley", "Lake in the Hills", "Sleepy Hollow"],
    region: "Collar Counties (North Kane & SE McHenry)",
    county: "Kane",
    population: "108,000",
    mayor: "Village Presidents John Skillman (Carpentersville), Chris Nelson (West Dundee) & Debby Sosine (Algonquin)",
    usHouse: ["IL-08", "IL-11"],
    stateSenate: ["SD-33", "SD-26"],
    stateHouse: ["HD-52"],
    localRaces: ["kane-county-2026", "mchenry-county-2026", "il-ballot-referendums-2026"],
    localContext: "Battleground corridor spanning the open IL-08 Congressional race, open SD-33 Senate race (Michele Clark vs. Danielle Penman), SD-26 Senate toss-up (Darby Hills vs. Nabeela Syed), and HD-52 House rematch (Martin McLaughlin vs. Maria Peterson). Voters celebrated the removal of tolls on the new Longmeadow Parkway Fox River Bridge."
  },
  {
    id: "crystal-lake-cary-mchenry",
    name: "Crystal Lake, Cary, McHenry, Woodstock & Fox River Grove",
    zips: ["60012", "60013", "60014", "60021", "60033", "60050", "60051", "60071", "60072", "60081", "60097", "60098", "60152"],
    aliases: ["Crystal Lake", "Cary", "McHenry", "Woodstock", "Fox River Grove", "Marengo", "Harvard", "Johnsburg", "Wonder Lake", "Richmond", "Spring Grove", "Hebron", "Union", "Oakwood Hills", "Bull Valley"],
    region: "Collar Counties (McHenry County)",
    county: "McHenry",
    population: "118,000",
    mayor: "Mayors Haig Haleblian (Crystal Lake), Wayne Jett (McHenry), Mike Turner (Woodstock) & Mark Kownick (Cary)",
    usHouse: ["IL-11", "IL-10", "IL-16"],
    stateSenate: ["SD-26", "SD-33"],
    stateHouse: ["HD-52"],
    localRaces: ["mchenry-county-2026", "il-ballot-referendums-2026"],
    localContext: "Decisive McHenry County turf for two of the closest legislative races in Illinois: the HD-52 rematch (decided by 47 votes in 2024 between Rep. Martin McLaughlin [R] and Maria Peterson [D]) and the SD-26 Senate race (appointed Sen. Darby Hills [R] vs. Rep. Nabeela Syed [D]), plus McHenry County Clerk and Treasurer contests."
  },
  {
    id: "barrington-lake-zurich-wauconda",
    name: "Barrington, Barrington Hills, Lake Zurich, Wauconda & Hawthorn Woods",
    zips: ["60010", "60011", "60042", "60047", "60084"],
    aliases: ["Barrington", "Barrington Hills", "North Barrington", "South Barrington", "Lake Barrington", "Tower Lakes", "Lake Zurich", "Wauconda", "Hawthorn Woods", "Kildeer", "Deer Park", "Island Lake"],
    region: "Collar Counties (SW Lake, NW Cook & SE McHenry)",
    county: "Lake",
    population: "68,000",
    mayor: "Village Presidents Karen Darch (Barrington), Tom Poynton (Lake Zurich) & Jeff Sode (Wauconda)",
    usHouse: ["IL-08", "IL-09", "IL-10"],
    stateSenate: ["SD-26"],
    stateHouse: ["HD-52"],
    localRaces: ["lake-county-2026", "cook-president", "mchenry-county-2026", "il-ballot-referendums-2026"],
    localContext: "Hometown area of both SD-26 GOP Sen. Darby Hills and HD-52 GOP Rep. Martin McLaughlin (who faces North Barrington Democrat Maria Peterson in a rematch of their 47-vote 2024 race)."
  },
  {
    id: "highland-park-deerfield-lake-forest",
    name: "Highland Park, Deerfield, Lake Forest, Libertyville & Lincolnshire",
    zips: ["60015", "60035", "60037", "60040", "60044", "60045", "60048", "60069"],
    aliases: ["Highland Park", "Deerfield", "Lake Forest", "Libertyville", "Lincolnshire", "Lake Bluff", "Highwood", "Riverwoods", "Bannockburn", "Green Oaks", "Mettawa", "Fort Sheridan"],
    region: "Collar Counties (SE Lake County)",
    county: "Lake",
    population: "98,000",
    mayor: "Mayors Nancy Rotering (Highland Park), Dan Shapiro (Deerfield) & Stanford Tack (Lake Forest)",
    usHouse: ["IL-10"],
    stateSenate: ["SD-30", "SD-9"],
    stateHouse: ["HD-18", "HD-52"],
    localRaces: ["lake-county-2026", "il-ballot-referendums-2026"],
    localContext: "Hometown of U.S. Rep. Brad Schneider (D, IL-10) and Lake County Treasurer nominee Sandy Hart. Voters strongly prioritize federal/state gun violence prevention (following the 2022 Highland Park parade shooting), lifting the $10,000 SALT deduction cap, and reproductive freedom."
  },
  {
    id: "buffalo-grove-mundelein-gurnee",
    name: "Buffalo Grove, Vernon Hills, Mundelein, Gurnee, Grayslake & Round Lake",
    zips: ["60002", "60020", "60030", "60031", "60041", "60046", "60060", "60061", "60073", "60089"],
    aliases: ["Buffalo Grove", "Vernon Hills", "Mundelein", "Gurnee", "Grayslake", "Round Lake", "Round Lake Beach", "Round Lake Park", "Round Lake Heights", "Hainesville", "Long Grove", "Antioch", "Fox Lake", "Lake Villa", "Lindenhurst", "Ingleside", "Volo", "Lakemoor"],
    region: "Collar Counties (Central & North Lake County)",
    county: "Lake",
    population: "165,000",
    mayor: "Mayors Eric Smith (Buffalo Grove), Robin Meier (Mundelein) & Tom Hood (Gurnee)",
    usHouse: ["IL-10", "IL-09"],
    stateSenate: ["SD-30", "SD-26"],
    stateHouse: ["HD-52"],
    localRaces: ["lake-county-2026", "cook-president", "il-ballot-referendums-2026"],
    localContext: "Represented by Rep. Brad Schneider (IL-10) and Sen. Adrienne Johnson (SD-30), with Mundelein split into the competitive SD-26 and HD-52 legislative battlegrounds. Lake County property taxes and Sheriff John Idleburg vs. Roman Buchberger are top local issues."
  },

  // ================= NORTHERN & NORTHWEST ILLINOIS =================
  {
    id: "rockford-loves-park",
    name: "Rockford, Loves Park, Machesney Park & Roscoe (Winnebago County)",
    zips: ["61010", "61016", "61061", "61063", "61072", "61073", "61080", "61088", "61101", "61102", "61103", "61104", "61107", "61108", "61109", "61111", "61114", "61115"],
    aliases: ["Rockford", "Loves Park", "Machesney Park", "Roscoe", "Rockton", "Cherry Valley", "Pecatonica", "Winnebago", "South Beloit", "Byron", "Oregon", "Durand", "Shirland", "New Milford"],
    region: "Northern Illinois",
    county: "Winnebago",
    population: "212,000",
    mayor: "Mayors Tom McNamara (Rockford) & Greg Jury (Loves Park)",
    usHouse: ["IL-17", "IL-16"],
    stateSenate: ["SD-34"],
    stateHouse: ["HD-68", "HD-89"],
    localRaces: ["winnebago-peoria-2026", "il-ballot-referendums-2026"],
    localContext: "Northern Illinois's largest metro area and crucial battleground in Rep. Eric Sorensen vs. Dillan Vancil (IL-17), Rep. Dave Vella vs. Kathy Easton (HD-68), Sen. Steve Stadelman (SD-34), and Winnebago Sheriff Gary Caruana vs. Dominick Barcellona. Key issues include the $5B Belvidere Stellantis auto plant reopening, Rockford-to-Chicago passenger rail, and Winnebago property taxes."
  },
  {
    id: "belvidere-boone",
    name: "Belvidere (Boone County)",
    zips: ["61008", "61011", "61012", "61065"],
    aliases: ["Belvidere", "Poplar Grove", "Caledonia", "Capron", "Boone County", "Candlewick Lake"],
    region: "Northern Illinois",
    county: "Boone",
    population: "25,300",
    mayor: "Mayor Clint Morris",
    usHouse: ["IL-16", "IL-11"],
    stateSenate: ["SD-34"],
    stateHouse: ["HD-68"],
    localRaces: ["winnebago-peoria-2026", "il-ballot-referendums-2026"],
    localContext: "Home to the Belvidere Assembly Plant (UAW Local 1268), where state REV Illinois and federal IRA incentives are funding a massive Stellantis reopening and battery hub."
  },
  {
    id: "dekalb-sycamore",
    name: "DeKalb & Sycamore (DeKalb County - NIU)",
    zips: ["60111", "60112", "60115", "60135", "60145", "60146", "60178", "60520", "60550", "60556", "61068"],
    aliases: ["DeKalb", "Sycamore", "Rochelle", "Genoa", "Cortland", "Hinckley", "Shabbona", "Waterman", "Kingston", "Kirkland", "Malta", "NIU"],
    region: "Northern Illinois",
    county: "DeKalb",
    population: "59,000",
    mayor: "Mayors Cohen Barnes (DeKalb) & Steve Braser (Sycamore)",
    usHouse: ["IL-14", "IL-16", "IL-11"],
    stateSenate: ["SD-33"],
    stateHouse: ["HD-76", "HD-89"],
    localRaces: ["il-ballot-referendums-2026"],
    localContext: "Home to Northern Illinois University (NIU) and Meta's $1B+ DeKalb Data Center campus. DeKalb's NIU student precincts are decisive in both Rep. Lauren Underwood's IL-14 race and the razor-thin HD-76 State House rematch between Rep. Amy 'Murri' Briel (D) and Liz Bishop (R)."
  },
  {
    id: "ottawa-lasalle-peru",
    name: "Ottawa, LaSalle, Peru, Streator & Mendota (Illinois Valley - Starved Rock)",
    zips: ["60444", "60450", "60479", "61301", "61341", "61342", "61348", "61350", "61354", "61356", "61362", "61364", "61373"],
    aliases: ["Ottawa", "LaSalle", "La Salle", "Peru", "Streator", "Mendota", "Morris", "Princeton", "Spring Valley", "Oglesby", "Utica", "Marseilles", "Seneca", "Ladd", "Hennepin", "Starved Rock"],
    region: "Northern Illinois & Illinois Valley",
    county: "LaSalle",
    population: "62,000",
    mayor: "Mayors Robb Hasty (Ottawa), Jeff Grove (LaSalle) & Ken Kolowski (Peru)",
    usHouse: ["IL-14", "IL-16"],
    stateSenate: ["SD-36"],
    stateHouse: ["HD-76"],
    localRaces: ["il-ballot-referendums-2026"],
    localContext: "Heart of the #1 downstate House battleground in Northern Illinois: HD-76 incumbent Rep. Amy 'Murri' Briel (D, Ottawa) vs. Peru Republican Liz Bishop (R), alongside Rep. Lauren Underwood vs. Jim Marter (IL-14). Key issues include the LaSalle County Nuclear Station, Illinois Valley hospital reopening, and Starved Rock infrastructure."
  },
  {
    id: "freeport-galena-savanna",
    name: "Freeport, Galena, Savanna, Dixon & Sterling-Rock Falls (NW Illinois)",
    zips: ["61021", "61025", "61030", "61032", "61036", "61048", "61053", "61071", "61074", "61081", "61252", "61270"],
    aliases: ["Freeport", "Galena", "Savanna", "Dixon", "Sterling", "Rock Falls", "Sterling-Rock Falls", "Mount Carroll", "Mt. Carroll", "East Dubuque", "Forreston", "Lena", "Stockton", "Warren", "Fulton", "Morrison", "Amboy", "Polo", "Prophetstown"],
    region: "Northern & Northwest Illinois",
    county: "Stephenson",
    population: "85,000",
    mayor: "Mayors Jodi Miller (Freeport), Mark Moran (Galena) & Diana Merdian (Sterling)",
    usHouse: ["IL-16", "IL-17"],
    stateSenate: ["SD-36", "SD-34"],
    stateHouse: ["HD-89"],
    localRaces: ["il-ballot-referendums-2026"],
    localContext: "Home base of Illinois House Minority Leader Tony McCombie (R, HD-89, former Mayor of Savanna) and split between Rep. Darin LaHood (IL-16) and Rep. Eric Sorensen (IL-17). Key issues include the Byron Nuclear Station, rural hospital survival, and agricultural trade."
  },

  // ================= CENTRAL & WESTERN ILLINOIS =================
  {
    id: "springfield",
    name: "Springfield, Chatham & Rochester (Sangamon County - State Capital)",
    zips: ["62056", "62510", "62520", "62557", "62558", "62563", "62568", "62615", "62626", "62629", "62640", "62656", "62670", "62675", "62684", "62701", "62702", "62703", "62704", "62707", "62711", "62712"],
    aliases: ["Springfield", "Chatham", "Rochester", "Sherman", "Riverton", "Jerome", "Leland Grove", "Southern View", "Grandview", "Williamsville", "Auburn", "Pawnee", "New Berlin", "Pleasant Plains", "Petersburg", "Lincoln", "Taylorville", "Pana", "Litchfield", "Hillsboro", "Carlinville", "Girard", "Virden"],
    region: "Central Illinois",
    county: "Sangamon",
    population: "136,000",
    mayor: "Mayor Misty Buscher (R)",
    usHouse: ["IL-13", "IL-15"],
    stateSenate: ["SD-48"],
    stateHouse: ["HD-92"],
    localRaces: ["sangamon-county-2026", "il-ballot-referendums-2026"],
    localContext: "Illinois's State Capital is the #1 downstate battleground in 2026 across all three levels: U.S. Rep. Nikki Budzinski (D) vs. Joshua Loyd (R) in IL-13; the #1 State Senate race in Illinois between Sen. Doris Turner (D) and Sangamon Recorder Frank Lesko (R) in SD-48 ($4M+ race); and the post-Sonya Massey Sangamon County Sheriff race between appointed GOP Sheriff Paula Crouch and retired ISP Master Sgt. Marc Bell (D)."
  },
  {
    id: "champaign-urbana",
    name: "Champaign, Urbana, Savoy, Rantoul & Mahomet (Champaign County - UIUC)",
    zips: ["60936", "60957", "61801", "61802", "61803", "61820", "61821", "61822", "61824", "61847", "61853", "61856", "61866", "61873", "61874", "61880", "61953"],
    aliases: ["Champaign", "Urbana", "Champaign-Urbana", "Savoy", "Rantoul", "Mahomet", "Gifford", "St. Joseph", "Tolono", "Philo", "Sidney", "Homer", "Fisher", "Monticello", "Tuscola", "Arcola", "Villa Grove", "Paxton", "Gibson City", "UIUC"],
    region: "Central Illinois",
    county: "Champaign",
    population: "158,000",
    mayor: "Mayors Deborah Feinen (Champaign) & DeShawn Williams (Urbana - Elected 2025)",
    usHouse: ["IL-13", "IL-15", "IL-02"],
    stateSenate: ["SD-52"],
    stateHouse: ["HD-104"],
    localRaces: ["champaign-mclean-2026", "il-ballot-referendums-2026"],
    localContext: "Home to the flagship University of Illinois Urbana-Champaign (UIUC) campus. Anchors Rep. Nikki Budzinski's IL-13 margin, Sen. Paul Faraci's SD-52, and the toss-up HD-104 State House race (Rep. Brandun Schweizer [R] vs. Mary Catherine Roberson [D]), plus Champaign Sheriff Dustin Heuerman (D) vs. Gregory Worrell (R). Protecting the Mahomet Aquifer and fixing Tier 2 SURS pensions are top priorities."
  },
  {
    id: "danville",
    name: "Danville (Vermilion County)",
    zips: ["60942", "61817", "61832", "61834", "61846", "61858", "61883", "61944"],
    aliases: ["Danville", "Tilton", "Westville", "Georgetown", "Hoopeston", "Catlin", "Oakwood", "Paris", "Marshall"],
    region: "Central Illinois",
    county: "Vermilion",
    population: "28,500",
    mayor: "Mayor Rickey Williams Jr.",
    usHouse: ["IL-02", "IL-15"],
    stateSenate: ["SD-52"],
    stateHouse: ["HD-104"],
    localRaces: ["champaign-mclean-2026", "il-ballot-referendums-2026"],
    localContext: "Hometown of HD-104 GOP Rep. Brandun Schweizer (facing Democrat Mary Catherine Roberson in a top House battleground) and southern anchor of the open IL-02 Congressional district (Donna Miller vs. Mike Noack)."
  },
  {
    id: "bloomington-normal",
    name: "Bloomington & Normal (McLean County - ISU & Rivian)",
    zips: ["61701", "61702", "61704", "61705", "61727", "61736", "61738", "61745", "61752", "61761", "61764", "61776"],
    aliases: ["Bloomington", "Normal", "Bloomington-Normal", "Pontiac", "Clinton", "Le Roy", "Heyworth", "Downs", "Towanda", "Hudson", "El Paso", "Fairbury", "Dwight", "ISU"],
    region: "Central Illinois",
    county: "McLean",
    population: "132,000",
    mayor: "Mayors Dan Brady (Bloomington - Elected 2025) & Chris Koos (Normal)",
    usHouse: ["IL-17", "IL-16"],
    stateSenate: ["SD-52", "SD-36"],
    stateHouse: ["HD-91"],
    localRaces: ["champaign-mclean-2026", "il-ballot-referendums-2026"],
    localContext: "Home to State Farm headquarters, Illinois State University (ISU), and Rivian's EV manufacturing plant. Key battleground in Rep. Eric Sorensen vs. Dillan Vancil (IL-17), Rep. Sharon Chung (HD-91), and the McLean County Clerk race (incumbent Kathy Michael [R] vs. Joshua Crockett [D]) alongside a 10D-10R tied McLean County Board."
  },
  {
    id: "peoria-east-peoria",
    name: "Peoria, East Peoria, Pekin, Morton & Washington (Tri-County Area)",
    zips: ["61520", "61523", "61525", "61530", "61548", "61550", "61554", "61571", "61601", "61602", "61603", "61604", "61605", "61606", "61607", "61611", "61614", "61615", "61616"],
    aliases: ["Peoria", "East Peoria", "Pekin", "Morton", "Washington", "West Peoria", "Peoria Heights", "Bartonville", "Creve Coeur", "Chillicothe", "Dunlap", "Eureka", "Metamora", "Germantown Hills", "Canton", "Lewistown", "Havana", "Hopedale", "Tremont", "Mackinaw"],
    region: "Central Illinois",
    county: "Peoria",
    population: "185,000",
    mayor: "Mayors Rita Ali (Peoria), John Kahl (East Peoria) & Mary Burress (Pekin)",
    usHouse: ["IL-17", "IL-16"],
    stateSenate: ["SD-36"],
    stateHouse: ["HD-92", "HD-91"],
    localRaces: ["winnebago-peoria-2026", "il-ballot-referendums-2026"],
    localContext: "Central anchor of the toss-up IL-17 Congressional race (Rep. Eric Sorensen vs. Dillan Vancil), Chief House Budget Negotiator Rep. Jehan Gordon-Booth (HD-92), Rep. Sharon Chung (HD-91), and the Peoria County Clerk race (Rachael Parker [D] vs. Kari Gabbert [R])."
  },
  {
    id: "decatur",
    name: "Decatur, Forsyth & Mt. Zion (Macon County)",
    zips: ["61920", "61938", "62521", "62522", "62523", "62526", "62535", "62549", "62565"],
    aliases: ["Decatur", "Forsyth", "Mt. Zion", "Mount Zion", "Maroa", "Harristown", "Long Creek", "Mattoon", "Charleston", "Shelbyville", "Sullivan"],
    region: "Central Illinois",
    county: "Macon",
    population: "79,000",
    mayor: "Mayor Julie Moore Wolfe",
    usHouse: ["IL-13", "IL-15"],
    stateSenate: ["SD-48"],
    stateHouse: ["HD-104"],
    localRaces: ["sangamon-county-2026", "il-ballot-referendums-2026"],
    localContext: "North America's agribusiness processing hub (ADM, Primient) and crucial battleground in both Rep. Nikki Budzinski vs. Joshua Loyd (IL-13) and the #1 State Senate race in Illinois: Sen. Doris Turner (D) vs. Frank Lesko (R) in SD-48."
  },
  {
    id: "quad-cities-rock-island-moline",
    name: "Rock Island, Moline, East Moline & Silvis (Quad Cities - Rock Island County)",
    zips: ["61201", "61239", "61240", "61241", "61244", "61254", "61256", "61264", "61265", "61275", "61282", "61443"],
    aliases: ["Rock Island", "Moline", "East Moline", "Silvis", "Quad Cities", "Milan", "Coal Valley", "Hampton", "Carbon Cliff", "Port Byron", "Rapids City", "Colona", "Geneseo", "Kewanee", "Orion", "Andalusia"],
    region: "Western Illinois & Quad Cities",
    county: "Rock Island",
    population: "142,000",
    mayor: "Mayors Mike Thoms (Rock Island), Sangeetha Rayapati (Moline) & Reggie Freeman (East Moline)",
    usHouse: ["IL-17"],
    stateSenate: ["SD-36"],
    stateHouse: ["HD-76"],
    localRaces: ["metro-east-quad-south-2026", "il-ballot-referendums-2026"],
    localContext: "Home base of U.S. Rep. Eric Sorensen (D, Moline) in his top-tier IL-17 battleground against Republican Dillan Vancil (R, Monmouth), State Sen. Mike Halpin (D, SD-36), and the open Rock Island County Sheriff race (Marcus Herbert [D] vs. Jamie Shoemaker [R]). Key issues include Rock Island Arsenal jobs, John Deere UAW manufacturing, and Quad Cities-to-Chicago passenger rail."
  },
  {
    id: "galesburg-monmouth-macomb",
    name: "Galesburg, Monmouth & Macomb (Western Illinois - WIU)",
    zips: ["61231", "61401", "61410", "61422", "61448", "61455", "61462", "62321"],
    aliases: ["Galesburg", "Monmouth", "Macomb", "Knoxville", "Abingdon", "Bushnell", "Aledo", "Carthage", "Hamilton", "Warsaw", "WIU"],
    region: "Western Illinois",
    county: "Knox",
    population: "56,000",
    mayor: "Mayors Peter Schwartzman (Galesburg), Rod Davies (Monmouth) & Mike Inman (Macomb)",
    usHouse: ["IL-17", "IL-15"],
    stateSenate: ["SD-36"],
    stateHouse: ["HD-76"],
    localRaces: ["metro-east-quad-south-2026", "il-ballot-referendums-2026"],
    localContext: "Monmouth is the hometown of IL-17 GOP Congressional nominee Dillan Vancil (challenging Rep. Eric Sorensen), while Macomb and Galesburg voters in Sen. Mike Halpin's SD-36 are focused on reversing faculty layoffs at Western Illinois University (WIU), BNSF rail jobs, and rural hospital stability."
  },
  {
    id: "quincy-jacksonville",
    name: "Quincy & Jacksonville (Adams & Morgan Counties - West-Central IL)",
    zips: ["62052", "62301", "62305", "62353", "62363", "62618", "62650", "62681"],
    aliases: ["Quincy", "Jacksonville", "South Jacksonville", "Beardstown", "Jerseyville", "Pittsfield", "Rushville", "Mt. Sterling", "Mount Sterling", "Carrollton", "White Hall"],
    region: "Central & Western Illinois",
    county: "Adams",
    population: "59,000",
    mayor: "Mayors Mike Troup (Quincy) & Andy Ezard (Jacksonville)",
    usHouse: ["IL-15"],
    stateSenate: ["SD-48"],
    stateHouse: ["HD-92"],
    localRaces: ["il-ballot-referendums-2026"],
    localContext: "Largest cities in Rep. Mary Miller's R+22 IL-15 district, where farmers and business leaders backed Ryan Tebrugge's 41% primary challenge over Miller's vote against the Farm Bill and lack of district infrastructure earmarks."
  },
  {
    id: "kankakee-bourbonnais-bradley",
    name: "Kankakee, Bourbonnais, Bradley & Manteno (Kankakee County)",
    zips: ["60901", "60914", "60915", "60941", "60950", "60954", "60964", "60970"],
    aliases: ["Kankakee", "Bourbonnais", "Bradley", "Manteno", "Momence", "Watseka", "St. Anne", "Herscher", "Aroma Park", "Grant Park Village"],
    region: "Suburban/Downstate Transition (Kankakee County)",
    county: "Kankakee",
    population: "74,000",
    mayor: "Mayors Chris Curtis (Kankakee), Paul Schore / Jeff Keast (Bourbonnais) & Mike Watson (Bradley)",
    usHouse: ["IL-02", "IL-01"],
    stateSenate: ["SD-43", "SD-19"],
    stateHouse: ["HD-37"],
    localRaces: ["will-county-2026", "il-ballot-referendums-2026"],
    localContext: "Anchor of the open IL-02 Congressional race (Donna Miller vs. Mike Noack) and home to the controversial $2B Gotion EV battery plant in Manteno, which is a central flashpoint in the 2026 Governor's race (Pritzker defending 2,600 EV jobs vs. Bailey attacking Chinese-linked corporate subsidies)."
  },

  // ================= METRO EAST & SOUTHERN ILLINOIS =================
  {
    id: "edwardsville-alton-granite-city",
    name: "Edwardsville, Alton, Granite City, Collinsville & Godfrey (Madison County - Metro East)",
    zips: ["62002", "62010", "62018", "62024", "62025", "62034", "62035", "62040", "62048", "62060", "62062", "62084", "62090", "62095", "62234", "62246", "62249", "62294", "62471"],
    aliases: ["Edwardsville", "Alton", "Granite City", "Collinsville", "Godfrey", "Glen Carbon", "Wood River", "Bethalto", "East Alton", "Roxana", "Hartford", "South Roxana", "Maryville", "Troy", "Highland", "Madison", "Venice", "Pontoon Beach", "Greenville", "Vandalia", "Staunton", "Gillespie"],
    region: "Metro East & Southern Illinois",
    county: "Madison",
    population: "145,000",
    mayor: "Mayors Art Risavy (Edwardsville), David Goins (Alton), Mike Parkinson (Granite City) & Jeff Stehman (Collinsville)",
    usHouse: ["IL-13", "IL-15"],
    stateSenate: ["SD-56"],
    stateHouse: ["HD-112"],
    localRaces: ["metro-east-quad-south-2026", "il-ballot-referendums-2026"],
    localContext: "Triple battleground in the St. Louis Metro East: Rep. Nikki Budzinski (D) vs. Joshua Loyd (R, Collinsville) in IL-13; the SD-56 State Senate toss-up between incumbent Sen. Erica Harriss (R) and civil engineer Marsia Geldert-Murphey (D); the HD-112 House race between Rep. Katie Stuart (D) and Jimmy Ford (R); and the Madison County Clerk race (Linda Andreas [R] vs. Rachelle Bauerle [D]). Key issues include SIU Edwardsville (SIUE), U.S. Steel Granite City Works, and Ameren electric rates."
  },
  {
    id: "belleville-ofallon-east-st-louis",
    name: "Belleville, O'Fallon, East St. Louis, Cahokia Heights, Fairview Heights & Mascoutah (St. Clair County)",
    zips: ["62201", "62203", "62204", "62205", "62206", "62207", "62208", "62220", "62221", "62222", "62223", "62225", "62226", "62232", "62233", "62236", "62239", "62243", "62254", "62257", "62258", "62260", "62264", "62269", "62278", "62286", "62293", "62298"],
    aliases: ["Belleville", "O'Fallon", "OFallon", "East St. Louis", "East Saint Louis", "Cahokia Heights", "Cahokia", "Fairview Heights", "Mascoutah", "Swansea", "Shiloh", "Lebanon", "Caseyville", "Dupo", "Millstadt", "Freeburg", "New Athens", "Marissa", "Columbia", "Waterloo", "Red Bud", "Chester", "Sparta", "Breese", "Carlyle", "Trenton", "Scott AFB", "Metro East"],
    region: "Metro East & Southern Illinois",
    county: "St. Clair",
    population: "162,000",
    mayor: "Mayors Jenny Gain Meyer (Belleville - Elected 2025), Herb Roach (O'Fallon), Charles Powell III (East St. Louis) & Curtis McCall Sr. (Cahokia Heights)",
    usHouse: ["IL-13", "IL-12"],
    stateSenate: ["SD-56"],
    stateHouse: ["HD-114", "HD-112"],
    localRaces: ["metro-east-quad-south-2026", "il-ballot-referendums-2026"],
    localContext: "Home to Scott Air Force Base (Illinois's largest Downstate employer) and two marquee State House battlegrounds: HD-114 (incumbent Rep. Kevin Schmidt [R] vs. George McClellan Jr. [D]) and HD-112 (Rep. Katie Stuart [D] vs. O'Fallon Councilman Jimmy Ford [R]), plus St. Clair County Clerk and Treasurer races. Key issues include Cahokia Heights / East St. Louis sanitary sewer and flood reconstruction, MetroLink expansion to MidAmerica Airport, and property taxes."
  },
  {
    id: "carbondale-marion-herrin",
    name: "Carbondale, Murphysboro, Marion & Herrin (Jackson & Williamson Counties - SIU)",
    zips: ["62812", "62832", "62896", "62901", "62902", "62903", "62906", "62918", "62924", "62933", "62948", "62951", "62952", "62959", "62966", "62974"],
    aliases: ["Carbondale", "Murphysboro", "Marion", "Herrin", "Carterville", "West Frankfort", "Benton", "Du Quoin", "Pinckneyville", "Johnston City", "Energy", "Crainville", "De Soto", "Anna", "Jonesboro", "Cobden", "SIU", "SIUC"],
    region: "Southern Illinois",
    county: "Jackson",
    population: "78,000",
    mayor: "Mayors Carolin Harvey (Carbondale), Will Stephens (Murphysboro) & Mike Absher (Marion)",
    usHouse: ["IL-12"],
    stateSenate: ["SD-59"],
    stateHouse: ["HD-114"],
    localRaces: ["metro-east-quad-south-2026", "il-ballot-referendums-2026"],
    localContext: "Home to Southern Illinois University Carbondale (SIUC), represented in Congress by Rep. Mike Bost (R) vs. Carbondale nurse Julie Fortier (D) in IL-12, and in the open SD-59 State Senate race by State Rep. Paul Jacobs (R) vs. Carbondale educator Tamiko Mueller (D), plus Jackson County Sheriff Robert Burns (D) vs. Jay Wittenborn (R)."
  },
  {
    id: "mt-vernon-effingham-centralia-cairo",
    name: "Mt. Vernon, Effingham, Centralia, Olney, Harrisburg & Cairo (Deep Southern & SE Illinois)",
    zips: ["62401", "62439", "62450", "62454", "62801", "62821", "62837", "62839", "62859", "62864", "62881", "62914", "62930", "62946", "62960", "62964", "62984", "62995"],
    aliases: ["Mt. Vernon", "Mount Vernon", "Effingham", "Centralia", "Olney", "Harrisburg", "Cairo", "Salem", "Metropolis", "Vienna", "Robinson", "Lawrenceville", "Flora", "Fairfield", "Carmi", "McLeansboro", "Eldorado", "Shawneetown", "Mound City", "Xenia", "Newton", "Albion", "Golconda"],
    region: "Southern Illinois",
    county: "Jefferson",
    population: "82,000",
    mayor: "Mayors John Lewis (Mt. Vernon), Mike Schutzbach (Effingham), Bryan Kuder (Centralia) & Thomas Simpson (Cairo)",
    usHouse: ["IL-12"],
    stateSenate: ["SD-59"],
    stateHouse: ["HD-114"],
    localRaces: ["il-ballot-referendums-2026"],
    localContext: "Home base of GOP Governor nominee Darren Bailey (Xenia / Clay County) and Comptroller nominee Bryan Drew (Benton), represented by Rep. Mike Bost (IL-12) and Paul Jacobs (SD-59). Voters focus on coal/oil/gas energy jobs, Farm Bill crop insurance, the Cairo Mississippi-Ohio River port terminal, and SAFE-T Act repeal."
  }
];

// 3. Comprehensive Directory of 25 Major PACs, Super PACs, Labor Unions & Megadonor Networks in Illinois (2026 Cycle)
window.IL_PACS_DIRECTORY = [
  {
    id: "pac-pritzker-future",
    name: "JB for Governor & Illinois Future PAC (JB Pritzker Network)",
    category: "Megadonor / Executive Apparatus",
    alignment: "Democratic",
    cycle2026Spending: "$100,000,000+ (2026 Cycle Commitment; $365M+ Lifetime)",
    leaderOrSource: "Gov. JB Pritzker (Self-Funded Billionaire Heir & Democratic Megadonor)",
    description: "The financial bedrock of the Illinois Democratic Party. Gov. Pritzker self-funds his own re-election campaign ($40M+ deposited in Q1 2026 alone) while transferring millions to the Democratic Party of Illinois (DPI), ISDF, legislative battlegrounds, and his national Think Big America abortion-rights PAC.",
    keyBackedCandidates: ["JB Pritzker & Christian Mitchell (Gov)", "Juliana Stratton (U.S. Senate - $5M+ to Illinois Future PAC)", "Margaret Croke (Comptroller)", "Democrats for the Illinois House & ISDF"],
    keyOpposedCandidates: ["Darren Bailey (R - Gov)", "Don Tracy (R - U.S. Senate)", "Raja Krishnamoorthi & Robin Kelly (Opposed in Senate Primary)"],
    issueFocus: "Graduated income tax, reproductive rights & shield laws, CEJA clean energy, Smart Start pre-K, NITA transit reform, and gun safety."
  },
  {
    id: "pac-fairshake-crypto",
    name: "Fairshake / Protect Progress (Cryptocurrency Industry Super PAC Network)",
    category: "Corporate / Tech Super PAC",
    alignment: "Bipartisan Pro-Crypto (Heavily Active in 2026 IL Dem Primaries)",
    cycle2026Spending: "$11,500,000+ in March 2026 Illinois Congressional Primaries",
    leaderOrSource: "Backed by Coinbase, Ripple, Andreessen Horowitz (a16z) & Jump Crypto (Chicago)",
    description: "The single largest outside Super PAC spender in the March 2026 Illinois Congressional primaries. Via its Democratic affiliate Protect Progress, Fairshake spent over $11M+ in independent expenditures to elect pro-digital-asset Democrats in four open Chicago-area House primaries.",
    keyBackedCandidates: ["Melissa Bean (IL-08 - $4.5M+ IE)", "Donna Miller (IL-02 - $2.8M+ IE)", "Patty Garcia (IL-04 - $2.1M+ IE)", "La Shawn Ford (IL-07 - $1.2M+ IE)"],
    keyOpposedCandidates: ["Robert Peters (IL-02)", "Junaid Ahmed & Kevin Morrison (IL-08)", "Richard Boykin (IL-07)"],
    issueFocus: "Federal market-structure legislation for digital assets (FIT21), CFTC/SEC regulatory clarity, and Chicago fintech/derivatives jobs."
  },
  {
    id: "pac-aipac-udp",
    name: "AIPAC, United Democracy Project (UDP), Elect Chicago Women & Affordable Chicago Now",
    category: "Foreign Policy & Ideological Super PAC Network",
    alignment: "Bipartisan Pro-Israel (Major Force in IL-09, IL-02, IL-07 & IL-08 Primaries)",
    cycle2026Spending: "$14,000,000+ Across 2026 Illinois Federal Races",
    leaderOrSource: "American Israel Public Affairs Committee (AIPAC) & Affiliated Super PACs",
    description: "One of the most influential financial forces in Illinois congressional politics. Direct AIPAC PAC bundles supports incumbents like Brad Schneider (IL-10), Mike Quigley (IL-05), Nikki Budzinski (IL-13), Eric Sorensen (IL-17), and Darin LaHood (IL-16), while satellite Super PACs (UDP, Elect Chicago Women, Affordable Chicago Now) spent millions in the open IL-09, IL-02, IL-07, and IL-08 primaries.",
    keyBackedCandidates: ["Brad Schneider (IL-10 - $415k+)", "Nikki Budzinski (IL-13)", "Eric Sorensen (IL-17)", "Donna Miller (IL-02 - $3.2M+ IE)", "Melissa Bean (IL-08)", "Darin LaHood (IL-16)", "Laura Fine (IL-09 Primary)"],
    keyOpposedCandidates: ["Daniel Biss & Kat Abughazaleh (Opposed in IL-09 Primary - $4.8M+ IE)", "Robert Peters (IL-02 Primary)", "Delia Ramirez (IL-03)"],
    issueFocus: "Unconditional U.S.-Israel defense funding (Iron Dome), countering Iran, and defeating candidates who back conditioning military aid to Israel."
  },
  {
    id: "pac-jstreet-justice-dems",
    name: "J Street PAC, Justice Democrats, Working Families Party & Progressive Caucus PAC",
    category: "Ideological / Progressive PACs",
    alignment: "Progressive Democratic",
    cycle2026Spending: "$3,800,000+ Across Illinois Federal & Local Races",
    leaderOrSource: "J Street, Congressional Progressive Caucus PAC & United Working Families",
    description: "Provides critical fundraising bundling and field mobilization for Illinois progressives who reject corporate PACs or AIPAC funding, particularly in Chicago and the North Shore.",
    keyBackedCandidates: ["Daniel Biss (IL-09 - $380k+ J Street Bundling)", "Delia Ramirez (IL-03)", "Sean Casten (IL-06 - J Street)", "Lauren Underwood (IL-14 - J Street)", "Drake Warren & Miranda Hernandez (Cook County Board)"],
    keyOpposedCandidates: ["AIPAC/UDP-backed primary challengers"],
    issueFocus: "Conditioning offensive military aid on human rights, Medicare for All / public option, Green New Deal, housing affordability, and rejecting corporate PAC money."
  },
  {
    id: "pac-iuoe-local-150",
    name: "IUOE Local 150 PAC (International Union of Operating Engineers)",
    category: "Labor Union Megapower (Bipartisan Infrastructure)",
    alignment: "Bipartisan Pro-Labor (Supports Both Democrats & Pro-Prevailing-Wage Republicans)",
    cycle2026Spending: "$12,500,000+ (Over $15M+ Cash on Hand in Countryside HQ PACs)",
    leaderOrSource: "President-Business Manager James M. Sweeney (Countryside, IL)",
    description: "Widely considered the single most feared and effective independent labor PAC in Illinois.Representing 23,000+ heavy-equipment operators, Local 150 backs the 2022 Workers' Rights Amendment and Rebuild Illinois capital spending, heavily funding both Democrats (Pritzker, Welch, Harmon, Giannoulias, Preckwinkle, Pat Hynes) and pro-labor Republicans (Curran, McCombie, Seth Lewis, Darby Hills, Brandun Schweizer, Patrick Sheehan).",
    keyBackedCandidates: ["JB Pritzker (Gov)", "Alexi Giannoulias (SOS)", "Pat Hynes (Cook Assessor)", "Don Harmon & Chris Welch", "John Curran & Tony McCombie (GOP Leaders)", "Darby Hills (SD-26)", "Brandun Schweizer (HD-104)", "Dave Vella (HD-68)"],
    keyOpposedCandidates: ["Anti-prevailing-wage / Right-to-Work candidates", "Fritz Kaegi (Opposed in Cook Assessor Primary)"],
    issueFocus: "Prevailing wage laws, Project Labor Agreements (PLAs), Rebuild Illinois road/bridge/transit construction, nuclear/baseload power plants, and opposing Right-to-Work."
  },
  {
    id: "pac-teachers-iea-ift-ctu",
    name: "IEA/IPACE, Illinois Federation of Teachers (IFT) & Chicago Teachers Union (CTU) PACs",
    category: "Public Education Labor Unions",
    alignment: "Democratic",
    cycle2026Spending: "$14,000,000+ Combined Across State, Local & Federal Races",
    leaderOrSource: "Illinois Education Association (IPACE), IFT (Dan Montgomery) & CTU (Stacy Davis Gates)",
    description: "The backbone of Democratic ground campaigns and legislative fundraising in Illinois. IEA (suburban/downstate educators) and IFT/CTU (Chicago and metro teachers) pour millions into DPI, ISDF, statewide offices, and suburban legislative battlegrounds while successfully lobbying to end the Invest in Kids private voucher program and fix Tier 2 teacher pensions.",
    keyBackedCandidates: ["Juliana Stratton (U.S. Senate)", "JB Pritzker, Kwame Raoul, Alexi Giannoulias, Margaret Croke, Mike Frerichs", "Doris Turner (SD-48)", "Nabeela Syed (SD-26)", "Maria Peterson (HD-52)", "Erica Bray-Parker (HD-47)", "Katie Stuart (HD-112)", "Miranda Hernandez (Cook Board 16)"],
    keyOpposedCandidates: ["Darren Bailey (Gov)", "Pro-voucher Republican legislative candidates"],
    issueFocus: "Evidence-Based Funding ($350M+/yr increases), fixing Tier 2 TRS/SURS pensions, opposing private school vouchers (Invest in Kids), and fully funding Chicago and downstate public schools."
  },
  {
    id: "pac-seiu-aflcio-cfl",
    name: "SEIU Healthcare IL, SEIU Local 73, Illinois AFL-CIO & Chicago Federation of Labor (CFL)",
    category: "Labor Union Coalition",
    alignment: "Democratic",
    cycle2026Spending: "$11,000,000+ Combined",
    leaderOrSource: "SEIU State Council, Illinois AFL-CIO (Tim Drea) & CFL (Bob Reiter)",
    description: "Unites over 800,000 union workers across healthcare, service, public sector (AFSCME Council 31), and building trades (LIUNA, IBEW, Plumbers Local 130). Provides massive financial and door-knocking muscle for statewide Democrats, Cook County Board President Toni Preckwinkle, and downstate battlegrounds.",
    keyBackedCandidates: ["Juliana Stratton (U.S. Senate)", "JB Pritzker & Statewide Democratic Slate", "Toni Preckwinkle (Cook President)", "Nikki Budzinski (IL-13)", "Eric Sorensen (IL-17)", "Doris Turner (SD-48)", "Marsia Geldert-Murphey (SD-56)"],
    keyOpposedCandidates: ["Darren Bailey (Gov)", "Don Tracy (Senate)", "Frank Lesko (SD-48)"],
    issueFocus: "Medicaid home-care & hospital reimbursement rates, Workers' Rights Amendment protections, Tier 2 SERS/IMRF pension reform, and paid family leave."
  },
  {
    id: "pac-isdf-dpi",
    name: "Democrats for the Illinois House, DPI & Illinois Senate Democratic Fund (ISDF)",
    category: "Legislative & State Party Committees",
    alignment: "Democratic",
    cycle2026Spending: "$35,000,000+ Combined War Chests",
    leaderOrSource: "Speaker Emanuel 'Chris' Welch (House) & Senate President Don Harmon (Senate)",
    description: "In Illinois's high-limit campaign finance system (where party committees can make unlimited transfers in the general election), Speaker Welch's House committees and President Harmon's ISDF act as the central clearinghouses funneling labor, trial lawyer, and Pritzker funds into the 12 most competitive suburban and downstate legislative districts.",
    keyBackedCandidates: ["Doris Turner (SD-48 - $1.4M+)", "Marsia Geldert-Murphey (SD-56 - $1.2M+)", "Nabeela Syed (SD-26 - $1.1M+)", "Michele Clark (SD-33)", "Ben McAdams (SD-24)", "Maria Peterson (HD-52)", "Erica Bray-Parker (HD-47)", "Amy 'Murri' Briel (HD-76)", "Jessica Dixon Heitman (HD-97)", "Katie Stuart (HD-112)"],
    keyOpposedCandidates: ["Frank Lesko (SD-48)", "Erica Harriss (SD-56)", "Darby Hills (SD-26)", "Seth Lewis (SD-24)", "Martin McLaughlin (HD-52)", "Brandun Schweizer (HD-104)"],
    issueFocus: "Protecting and expanding the 40-19 Senate and 78-40 House Democratic supermajorities."
  },
  {
    id: "pac-srcc-hro",
    name: "Senate Republican Campaign Committee (SRCC/SRVF) & House Republican Organization (HRO)",
    category: "Legislative Party Committees",
    alignment: "Republican",
    cycle2026Spending: "$16,500,000+ Combined War Chests",
    leaderOrSource: "Senate Minority Leader John Curran (SD-41) & House Minority Leader Tony McCombie (HD-89)",
    description: "The primary campaign arms for Illinois Senate and House Republicans, funded by business trade associations (IMA, Illinois Chamber, Realtors RPAC), conservative donors (Uihlein/Griffin networks), and bipartisan trades (IUOE Local 150) to break the Democratic supermajorities.",
    keyBackedCandidates: ["Frank Lesko (SD-48 - $1.2M+)", "Erica Harriss (SD-56 - $1.3M+)", "Darby Hills (SD-26 - $1.05M+)", "Seth Lewis (SD-24)", "Danielle Penman (SD-33)", "Martin McLaughlin (HD-52)", "Gabby Shanahan (HD-97)", "Liz Bishop (HD-76)", "Brandun Schweizer (HD-104)", "Jimmy Ford (HD-112)", "Kevin Schmidt (HD-114)"],
    keyOpposedCandidates: ["Doris Turner (SD-48)", "Nabeela Syed (SD-26)", "Amy 'Murri' Briel (HD-76)", "Katie Stuart (HD-112)"],
    issueFocus: "Property tax caps, repealing cashless bail under the SAFE-T Act, stopping progressive tax hikes, and defending nuclear/coal/gas grid reliability."
  },
  {
    id: "pac-itla-trial-lawyers",
    name: "Illinois Trial Lawyers Association PAC (ITLA PAC)",
    category: "Legal / Trade PAC",
    alignment: "Democratic (95%+ to Democrats)",
    cycle2026Spending: "$4,500,000+",
    leaderOrSource: "Illinois Plaintiff & Personal Injury Bar (Springfield / Chicago)",
    description: "One of the top four institutional funders of the Illinois Democratic Party alongside Pritzker, teachers' unions, and building trades. Heavily funds Senate President Don Harmon, Speaker Chris Welch, Attorney General Kwame Raoul, and appellate/supreme court candidates.",
    keyBackedCandidates: ["Don Harmon (SD-39)", "Emanuel 'Chris' Welch (HD-7)", "Kwame Raoul (Attorney General)", "Dave Vella (HD-68)", "Michael Hastings (SD-19)", "Kam Buckner (HD-26)"],
    keyOpposedCandidates: ["Pro-tort-reform Republican candidates", "Bob Fioretti (R - AG)"],
    issueFocus: "Protecting civil jury trial rights, opposing medical malpractice/punitive damage caps, and workers' compensation protections."
  },
  {
    id: "pac-realtors-rpac",
    name: "Illinois Realtors PAC (RPAC) & Neighborhood Building Owners Alliance (NBOA)",
    category: "Real Estate & Property Trade PAC",
    alignment: "Bipartisan (Supports Pro-Property-Rights Democrats & Republicans)",
    cycle2026Spending: "$6,200,000+",
    leaderOrSource: "Illinois Realtors (Springfield) & NBOA (Chicago)",
    description: "One of the largest trade PACs in Illinois. Strongly backs House GOP Leader Tony McCombie (a broker/appraiser) alongside bipartisan legislators of both parties who oppose rent control and real estate transfer tax hikes. Played a decisive role in helping Pat Hynes unseat Cook County Assessor Fritz Kaegi in March 2026.",
    keyBackedCandidates: ["Pat Hynes (Cook County Assessor)", "Liz Nicholson (Cook Board of Review)", "Tony McCombie (HD-89)", "John Curran (SD-41)", "Doris Turner (SD-48)", "Erica Harriss (SD-56)", "Darby Hills (SD-26)", "Martin McLaughlin (HD-52)", "Brandun Schweizer (HD-104)"],
    keyOpposedCandidates: ["Fritz Kaegi & Samantha Steele (Opposed in Cook County Primaries)", "Pro-rent-control candidates"],
    issueFocus: "Opposing rent control and real estate transfer taxes, reforming Cook County property tax assessments, and expanding first-time homebuyer assistance."
  },
  {
    id: "pac-personal-pac-gpac",
    name: "Personal PAC, EMILYs List & Gun Violence Prevention PAC (G-PAC / Giffords)",
    category: "Ideological PACs (Reproductive Rights & Gun Safety)",
    alignment: "Democratic",
    cycle2026Spending: "$5,400,000+ Combined",
    leaderOrSource: "Personal PAC (Sarah Garza Resnick) & G-PAC (Kathleen Sances)",
    description: "Premier ideological kingmakers in suburban collar-county and downstate battlegrounds. Personal PAC (100% pro-choice) and G-PAC (architects of the Protect Illinois Communities Act assault weapons ban) pour hundreds of thousands into suburban swing districts in DuPage, Lake, Kane, Will, and Metro East.",
    keyBackedCandidates: ["Juliana Stratton (U.S. Senate)", "JB Pritzker (Gov)", "Margaret Croke (Comptroller)", "Lauren Underwood (IL-14)", "Sean Casten (IL-06)", "Nabeela Syed (SD-26)", "Maria Peterson (HD-52)", "Erica Bray-Parker (HD-47)", "Ben McAdams (SD-24)", "Deb Conroy & Sandy Hart (DuPage/Lake)"],
    keyOpposedCandidates: ["Darren Bailey (Gov)", "Don Tracy (Senate)", "Seth Lewis (SD-24)", "Martin McLaughlin (HD-52)"],
    issueFocus: "Protecting Illinois's Reproductive Health Act, IVF access, interstate abortion shield laws, and defending Illinois's assault weapons and ghost gun bans."
  },
  {
    id: "pac-ima-chamber-farm",
    name: "Illinois Manufacturers' Association (IMA), Illinois Chamber, NFIB & Farm Bureau ACTIVATOR",
    category: "Business & Agriculture Trade PACs",
    alignment: "Center-Right / Bipartisan Pro-Business",
    cycle2026Spending: "$5,800,000+ Combined",
    leaderOrSource: "IMA (Mark Denzler), IL Chamber (Lou Sandoval), NFIB & Illinois Farm Bureau (Bloomington)",
    description: "Represent Illinois's industrial, small-business, and agricultural employers. While IMA, Chamber, and NFIB predominantly back Republicans (Don Tracy, Bryan Drew, John Curran, Tony McCombie, Frank Lesko, Erica Harriss), Farm Bureau ACTIVATOR also crosses party lines to back Agriculture Chairs like Rep. Nikki Budzinski (IL-13) and Sen. Doris Turner (SD-48).",
    keyBackedCandidates: ["Don Tracy (U.S. Senate)", "Bryan Drew (Comptroller)", "John Curran & Tony McCombie", "Frank Lesko (SD-48)", "Erica Harriss (SD-56)", "Darin LaHood (IL-16)", "Mike Bost (IL-12)", "Nikki Budzinski & Doris Turner (Farm Bureau Endorsed)"],
    keyOpposedCandidates: ["Progressive tax and corporate tax-hike advocates"],
    issueFocus: "Preventing nuclear/gas power plant closures that spike industrial electric bills, R&D tax credits, workers' comp reform, E15 year-round ethanol, and protecting family farms from estate taxes."
  },
  {
    id: "pac-fop-isra-right-to-life",
    name: "Fraternal Order of Police (FOP), Illinois State Rifle Assoc. (ISRA) & Illinois Right to Life",
    category: "Law Enforcement & Conservative Ideological PACs",
    alignment: "Republican & Pro-Police Bipartisan",
    cycle2026Spending: "$3,900,000+ Combined",
    leaderOrSource: "FOP Chicago Lodge 7 / IL State Lodge, ISRA PVF & Illinois Right to Life Action",
    description: "Drive voter turnout and endorsements on public safety, gun rights, and social issues. FOP backs Republicans statewide and in suburban Sheriff/legislative races (plus pro-police Democrats like Rep. Dave Vella in Rockford), while ISRA and Right to Life anchor conservative grassroots campaigns downstate.",
    keyBackedCandidates: ["Darren Bailey & Aaron Del Mar (Gov)", "Don Tracy (U.S. Senate)", "Bob Fioretti (AG)", "Patrick Sheehan (HD-37)", "Dillan Vancil (IL-17)", "Joshua Loyd (IL-13)", "Jim Reilly (Will Sheriff)", "Liz Doody Gorman (Cook Dist. 17)", "Dave Vella (HD-68 - Police PBPA)"],
    keyOpposedCandidates: ["JB Pritzker & Kwame Raoul", "SAFE-T Act and assault-weapons-ban sponsors"],
    issueFocus: "Repealing cashless bail under the SAFE-T Act, protecting police qualified immunity, fixing Tier 2 police pensions, overturning the Protect Illinois Communities Act gun ban, and pro-life protections."
  }
];

// ============================================================================
// 2026 ILLINOIS CANDIDATE TRUMP ALIGNMENT INDEX (0% TO 100%)
// ============================================================================
window.IL_TRUMP_ALIGNMENT_DIRECTORY = {
  "juliana-stratton": {
    "score": 4,
    "tier": "Strong Trump Opponent",
    "rationale": "Co-leads Illinois's executive resistance to Trump administration federal funding freezes, tariffs, and mass-deportation operations; campaigns on repealing the 2017 Trump corporate tax cuts and codifying Roe."
  },
  "don-tracy": {
    "score": 82,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Former IL GOP Chair who supports making Trump's 2017 Tax Cuts and Jobs Act permanent, finishing the border wall, and energy deregulation, while pitching an institutional business-conservative tone statewide."
  },
  "whitfield-harrington": {
    "score": 42,
    "tier": "Independent / Mixed",
    "rationale": "American Center Party nominee who backs fiscal restraint and border security while opposing partisan executive overreach and blanket trade tariffs."
  },
  "jonathan-jackson": {
    "score": 4,
    "tier": "Strong Trump Opponent",
    "rationale": "Votes against nearly all Trump legislative priorities in the U.S. House, opposing DOGE agency cuts, SNAP/Medicaid work requirements, and mass deportation while backing select bipartisan farm supply bills."
  },
  "christian-maxwell": {
    "score": 88,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "America First Republican campaigning on school choice, Trump border enforcement, and federal deregulation across the South Side and south suburbs."
  },
  "donna-miller": {
    "score": 7,
    "tier": "Strong Trump Opponent",
    "rationale": "Mainstream Democratic nominee who opposes Trump Medicaid cuts, agricultural tariff retaliation, and federal abortion restrictions while emphasizing pragmatic suburban infrastructure investment."
  },
  "mike-noack": {
    "score": 93,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Populist commercial truck driver running on an explicitly pro-Trump working-class platform of trade protection, diesel and energy deregulation, and southern border closure."
  },
  "delia-ramirez": {
    "score": 1,
    "tier": "Strong Trump Opponent",
    "rationale": "Congressional Progressive Caucus Vice Chair with one of the lowest Trump-alignment records in Congress; leads DHS oversight opposition to ICE deportation raids and Trump budget cuts."
  },
  "angel-oakley": {
    "score": 85,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Runs on the Trump economic and border-security platform, supporting ICE cooperation, repealing Illinois sanctuary laws, and extending the 2017 tax cuts."
  },
  "patty-garcia": {
    "score": 2,
    "tier": "Strong Trump Opponent",
    "rationale": "Progressive Democratic nominee campaigning to defend working-class immigrant neighborhoods from Trump deportation operations and protect federal healthcare and transit funding."
  },
  "lupe-castillo": {
    "score": 87,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Working-class conservative aligned with Trump's populist appeal to Hispanic voters on border enforcement, inflation relief, and traditional social values."
  },
  "christopher-getty": {
    "score": 38,
    "tier": "Independent / Mixed",
    "rationale": "Suburban Lyons Mayor running as an independent focused on local policing and property tax relief, splitting between Trump border enforcement and Democratic federal infrastructure grants."
  },
  "mike-quigley": {
    "score": 6,
    "tier": "Strong Trump Opponent",
    "rationale": "Senior House Appropriator and Intelligence Committee member who strongly opposes Trump on Ukraine/NATO policy, DOJ independence, and environmental rollbacks."
  },
  "tommy-hanson": {
    "score": 86,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Chicago Republican nominee campaigning on extending the 2017 Trump tax cuts, rolling back sanctuary city ordinances, and backing federal law enforcement surges."
  },
  "sean-casten": {
    "score": 5,
    "tier": "Strong Trump Opponent",
    "rationale": "Leading congressional clean-energy advocate who vocally opposes Trump's fossil-fuel executive orders, IRA clean-energy rollbacks, tariffs, and executive branch actions."
  },
  "niki-conforti": {
    "score": 86,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Energy consultant campaigning on Trump's energy deregulation agenda, border wall completion, and making the 2017 TCJA tax cuts permanent."
  },
  "la-shawn-ford": {
    "score": 6,
    "tier": "Strong Trump Opponent",
    "rationale": "West Side Democratic legislator who opposes Trump cuts to Medicaid, SNAP, and public housing while supporting bipartisan criminal-justice reentry reforms similar to the First Step Act."
  },
  "chad-koppie": {
    "score": 92,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Grassroots social and fiscal conservative aligned with the pro-Trump wing of the Illinois GOP on border enforcement, gun rights, and federal agency reductions."
  },
  "melissa-bean": {
    "score": 18,
    "tier": "Bipartisan / Swing Dem",
    "rationale": "Pro-business Blue Dog and New Democrat alumna who opposes Trump tariffs, reproductive restrictions, and Medicaid cuts, while sharing centrist pro-business views on regulatory certainty."
  },
  "jennifer-davis": {
    "score": 83,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Suburban tech entrepreneur aligned with Trump's 2017 tax cuts, deregulation, and border security agenda while emphasizing suburban manufacturing and business growth."
  },
  "daniel-biss": {
    "score": 3,
    "tier": "Strong Trump Opponent",
    "rationale": "Progressive Evanston Mayor who has led municipal resistance to Trump administration immigration enforcement and champions Medicare for All and green climate policy."
  },
  "john-elleson": {
    "score": 90,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Evangelical pastor aligned with Trump's social conservative, pro-Israel, and southern border enforcement platform."
  },
  "brad-schneider": {
    "score": 16,
    "tier": "Bipartisan / Swing Dem",
    "rationale": "Chair of the New Democrat Coalition; strongly opposes Trump on tariffs, ACA/Medicaid cuts, and democratic norms, with occasional bipartisan overlap on U.S.-Israel defense and border fentanyl interdiction."
  },
  "carl-lambrecht": {
    "score": 76,
    "tier": "Mainstream GOP Aligned",
    "rationale": "North Shore CPA focused on fiscal restraint, extending the 2017 Trump tax cuts (with suburban SALT relief), and federal border enforcement."
  },
  "bill-foster": {
    "score": 15,
    "tier": "Bipartisan / Swing Dem",
    "rationale": "Fermilab physicist who opposes Trump cuts to federal science labs (DOE/NSF), clean energy, and tariffs, while voting for select bipartisan border-security and financial regulatory bills."
  },
  "jeff-walter": {
    "score": 81,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Elburn Mayor and retired Navy Master Chief who backs Trump's border security, defense rebuilding, and 2017 tax cut extensions alongside pragmatic suburban infrastructure priorities."
  },
  "mike-bost": {
    "score": 94,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Trump-endorsed House Veterans' Affairs Chair who consistently votes with President Trump (over 93% roll-call alignment) on border wall funding, fossil-fuel production, tariffs, and DOGE spending cuts."
  },
  "julie-fortier": {
    "score": 12,
    "tier": "Strong Trump Opponent",
    "rationale": "Air Force veteran and cancer researcher who opposes Trump administration cuts to NIH/VA research, Medicaid, and rural hospitals while supporting strong military readiness."
  },
  "nikki-budzinski": {
    "score": 22,
    "tier": "Bipartisan / Swing Dem",
    "rationale": "Swing-district Democrat who opposes Trump on Medicaid/SNAP cuts, Social Security, and labor rollbacks, but has voted across the aisle on bipartisan border enforcement, year-round E15 ethanol, and farm bills."
  },
  "jeff-wilson": {
    "score": 89,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Navy veteran and nuclear engineer running with national GOP backing on the Trump economic, border security, and baseload energy-abundance agenda."
  },
  "lauren-underwood": {
    "score": 7,
    "tier": "Strong Trump Opponent",
    "rationale": "House Democratic leadership co-chair who leads legislative opposition to Trump ACA/Medicaid changes and federal reproductive health restrictions."
  },
  "james-marter": {
    "score": 96,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Kendall County GOP Chair and vocal America First activist who campaigns on near-total fidelity to Donald Trump's border, tariff, DOGE, and cultural platform."
  },
  "mary-miller": {
    "score": 98,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Trump-endorsed House Freedom Caucus member and Illinois's closest congressional Trump ally; votes in near-100% lockstep with Trump's America First legislative and cultural agenda."
  },
  "jennifer-todd": {
    "score": 9,
    "tier": "Strong Trump Opponent",
    "rationale": "Rural nurse campaigning against Trump administration rural hospital and Medicaid cuts and agricultural tariff retaliation, while respecting rural Second Amendment traditions."
  },
  "darin-lahood": {
    "score": 89,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Trump-endorsed Ways and Means senior member who champions making Trump's 2017 TCJA tax cuts permanent and backs Trump border enforcement, while balancing agricultural export trade concerns."
  },
  "paul-nolley": {
    "score": 11,
    "tier": "Strong Trump Opponent",
    "rationale": "Pro-labor Democrat who opposes Trump administration rollbacks of Davis-Bacon prevailing wages, clean-energy union jobs, and Medicaid funding."
  },
  "eric-sorensen": {
    "score": 20,
    "tier": "Bipartisan / Swing Dem",
    "rationale": "Frontline swing-district Democrat who opposes Trump tariffs hurting Midwest ag equipment manufacturing and defends Medicare/ACA, while voting for select bipartisan border and defense bills."
  },
  "dillan-vancil": {
    "score": 90,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "NRCC Young Guns small-business owner campaigning directly to northwestern and central Illinois Trump voters on deregulation, border enforcement, and extending the 2017 Trump tax cuts."
  },
  "jb-pritzker-christian-mitchell": {
    "score": 2,
    "tier": "Strong Trump Opponent",
    "rationale": "Governor Pritzker is one of Donald Trump's leading national Democratic critics, signing state laws to block federal immigration and abortion enforcement cooperation and challenging Trump tariffs and funding freezes."
  },
  "darren-bailey-aaron-del-mar": {
    "score": 96,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Endorsed by Donald Trump in 2022 and closely aligned with the MAGA movement; pledges to repeal the Illinois TRUST Act, partner state police with ICE deportation operations, and run a state-level DOGE audit."
  },
  "collin-corbett-carolyn-schofield": {
    "score": 45,
    "tier": "Independent / Mixed",
    "rationale": "Centrist independent ticket that shares conservative critiques of Illinois property taxes and spending while rejecting both Trump's tariff/culture-war politics and Pritzker's progressive mandates."
  },
  "kwame-raoul": {
    "score": 2,
    "tier": "Strong Trump Opponent",
    "rationale": "Has filed or joined dozens of multistate lawsuits challenging Trump administration executive actions on birthright citizenship, federal grant freezes, EPA rollbacks, and reproductive rights."
  },
  "bob-fioretti": {
    "score": 79,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Former Democratic alderman turned Republican nominee who backs repealing the SAFE-T Act and cooperating with Trump federal prosecutors and ICE on violent crime, while maintaining pragmatic urban roots."
  },
  "alexi-giannoulias": {
    "score": 4,
    "tier": "Strong Trump Opponent",
    "rationale": "Opposes Trump-backed federal proof-of-citizenship voting mandates (SAVE Act) and library book restrictions, expanding automatic voter registration in Illinois."
  },
  "diane-harris": {
    "score": 86,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Campaigns on Trump-aligned election integrity priorities including strict photo voter ID, non-citizen voter roll audits, and ending automatic voter registration."
  },
  "margaret-croke": {
    "score": 4,
    "tier": "Strong Trump Opponent",
    "rationale": "Pritzker-aligned Democrat who supports prioritizing state payments to shield healthcare clinics and social services from Trump administration federal funding freezes."
  },
  "bryan-drew": {
    "score": 85,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Downstate conservative attorney campaigning for a DOGE-style forensic audit of Illinois state spending and ending state funding for migrant programs."
  },
  "mike-frerichs": {
    "score": 5,
    "tier": "Strong Trump Opponent",
    "rationale": "Champions ESG sustainable investment criteria and opposes Trump-aligned anti-ESG boycott laws and federal rollbacks of consumer financial protections."
  },
  "max-solomon": {
    "score": 91,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Social and fiscal conservative who pledges to eliminate ESG sustainability mandates from Illinois's state portfolio in alignment with Trump's energy and financial agenda."
  },
  "don-harmon": {
    "score": 3,
    "tier": "Strong Trump Opponent",
    "rationale": "Illinois Senate President who leads the Democratic supermajority in passing reproductive shield laws, clean energy mandates (CEJA), and the Illinois TRUST Act blocking local ICE detainers."
  },
  "john-curran": {
    "score": 74,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Suburban Senate Minority Leader who aligns with GOP priorities on tax relief, repealing sanctuary state rules, and public safety, while focusing on pragmatic suburban issues rather than national culture wars."
  },
  "emanuel-chris-welch": {
    "score": 3,
    "tier": "Strong Trump Opponent",
    "rationale": "Illinois House Speaker who spearheads legislative efforts to counter Trump federal policies on voting access, labor unions, reproductive rights, and Medicaid funding."
  },
  "tony-mccombie": {
    "score": 78,
    "tier": "Mainstream GOP Aligned",
    "rationale": "House Minority Leader from northwestern Illinois who backs Trump-aligned border security, repeal of Illinois sanctuary funding, and deregulation while recruiting moderate suburban Republicans."
  },
  "doris-turner": {
    "score": 14,
    "tier": "Strong Trump Opponent",
    "rationale": "Central Illinois Democrat who opposes Trump Medicaid and SNAP cuts and protects state worker pensions, while working across the aisle on agricultural biofuels and farm-to-market infrastructure."
  },
  "frank-lesko": {
    "score": 82,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Sangamon County Republican campaigning on repealing the SAFE-T Act, ending state migrant spending, and aligning central Illinois energy policy with fossil-fuel baseload reliability."
  },
  "erica-harriss": {
    "score": 80,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Metro East Republican Senator who supports ending state sanctuary policies, keeping coal and gas plants online, and capping property taxes."
  },
  "marsia-geldert-murphey": {
    "score": 10,
    "tier": "Strong Trump Opponent",
    "rationale": "Civil engineer and Democratic nominee who supports federal infrastructure investment, public school funding, and reproductive rights against Trump administration rollbacks."
  },
  "darby-hills": {
    "score": 72,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Suburban Barrington Hills Republican and former prosecutor who focuses on property tax caps and public safety while moderating her tone for swing suburban voters."
  },
  "nabeela-syed": {
    "score": 5,
    "tier": "Strong Trump Opponent",
    "rationale": "Suburban Democratic legislator who champions prescription drug caps, reproductive freedom, and immigrant civil rights in opposition to the Trump platform."
  },
  "michele-clark": {
    "score": 8,
    "tier": "Strong Trump Opponent",
    "rationale": "Fox Valley Democratic nominee aligned with Governor Pritzker's public education, healthcare protection, and reproductive rights platform."
  },
  "danielle-penman": {
    "score": 74,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Fox Valley Republican campaigning on suburban property tax relief, repealing the SAFE-T Act pre-trial provisions, and fiscal restraint."
  },
  "seth-lewis": {
    "score": 75,
    "tier": "Mainstream GOP Aligned",
    "rationale": "DuPage County Republican Senator who supports ending Illinois sanctuary spending, cutting business taxes, and reforming the SAFE-T Act."
  },
  "ben-mcadams": {
    "score": 9,
    "tier": "Strong Trump Opponent",
    "rationale": "DuPage Democratic nominee who opposes Trump-aligned school voucher proposals, federal healthcare cuts, and rollbacks of Illinois gun safety laws."
  },
  "carina-santa-maria": {
    "score": 7,
    "tier": "Strong Trump Opponent",
    "rationale": "Northwest suburban social worker and Democratic nominee who defends Medicaid social services, public schools, and reproductive healthcare access."
  },
  "david-mathis": {
    "score": 76,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Northwest suburban Republican aligned with GOP priorities on property tax freezes, business deregulation, and ending state migrant shelter subsidies."
  },
  "martin-mclaughlin": {
    "score": 84,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Fiscal hawk state representative who strongly backs DOGE-style state spending cuts, property tax caps, and repealing the Illinois TRUST Act."
  },
  "maria-peterson": {
    "score": 6,
    "tier": "Strong Trump Opponent",
    "rationale": "Healthcare attorney and Democratic nominee campaigning to protect ACA/Medicaid coverage, gun safety laws, and reproductive freedom from Trump-era rollbacks."
  },
  "erica-bray-parker": {
    "score": 6,
    "tier": "Strong Trump Opponent",
    "rationale": "Wheaton Councilwoman and civics teacher aligned with Democratic stances on public education funding, gun violence prevention, and civil rights."
  },
  "robert-vrankovich": {
    "score": 75,
    "tier": "Mainstream GOP Aligned",
    "rationale": "DuPage County Republican campaigning on property tax relief, repealing sanctuary state policies, and pro-business tax reform."
  },
  "amy-murri-briel": {
    "score": 10,
    "tier": "Strong Trump Opponent",
    "rationale": "Illinois Valley Democratic representative who defends union prevailing wages, public school funding, and Medicaid access against federal budget cuts."
  },
  "liz-bishop": {
    "score": 86,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Illinois Valley conservative activist aligned with the Trump platform on border security, ending Illinois sanctuary laws, and protecting coal/gas power generation."
  },
  "jessica-dixon-heitman": {
    "score": 12,
    "tier": "Strong Trump Opponent",
    "rationale": "Moderate suburban Will/Kendall Democrat who opposes Trump healthcare and education cuts while emphasizing bipartisan fiscal responsibility and property tax relief."
  },
  "gabby-shanahan": {
    "score": 82,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Will and Kendall County Republican campaigning on capping property taxes, repealing the SAFE-T Act, and ending state-funded migrant healthcare."
  },
  "brandun-schweizer": {
    "score": 85,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "East-central Illinois Republican and retired Marine who aligns closely with Trump voters on border enforcement, Second Amendment rights, and fossil-fuel energy jobs."
  },
  "mary-catherine-roberson": {
    "score": 14,
    "tier": "Strong Trump Opponent",
    "rationale": "Former aide to Rep. Nikki Budzinski who campaigns on protecting Medicaid, union jobs, and Downstate hospitals from Trump administration budget cuts."
  },
  "katie-stuart": {
    "score": 11,
    "tier": "Strong Trump Opponent",
    "rationale": "Metro East Democratic House leader who defends public universities, union labor, and reproductive rights against federal conservative rollbacks."
  },
  "jimmy-ford": {
    "score": 81,
    "tier": "Mainstream GOP Aligned",
    "rationale": "O'Fallon Councilman running on the GOP platform of property tax relief, repealing the SAFE-T Act, and ending Illinois sanctuary policies."
  },
  "kevin-schmidt": {
    "score": 84,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Metro East Republican representative who backs repealing the Illinois TRUST Act, cutting state taxes, and rolling back CEJA energy mandates."
  },
  "george-mcclellan-jr": {
    "score": 8,
    "tier": "Strong Trump Opponent",
    "rationale": "St. Clair County labor and community Democrat who opposes Trump cuts to Medicaid, SNAP, and urban transit infrastructure."
  },
  "dave-vella": {
    "score": 13,
    "tier": "Strong Trump Opponent",
    "rationale": "Rockford labor attorney and Democratic representative who defends union collective bargaining and healthcare funding while taking pragmatic stances on local policing."
  },
  "kathy-easton": {
    "score": 84,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Winnebago County conservative aligned with the GOP platform on border enforcement, property tax caps, and repealing the SAFE-T Act."
  },
  "ram-villivalam": {
    "score": 3,
    "tier": "Strong Trump Opponent",
    "rationale": "Progressive Chicago State Senator and former SEIU organizer who strongly opposes Trump labor, immigration, and transit funding policies."
  },
  "vince-romano": {
    "score": 80,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Northwest Side and Niles Republican campaigning on law-and-order policing, property tax relief, and ending sanctuary city policies."
  },
  "kam-buckner": {
    "score": 3,
    "tier": "Strong Trump Opponent",
    "rationale": "Chicago Democratic House leader who vocally opposes Trump urban policing rhetoric, federal transit cuts, and civil rights rollbacks."
  },
  "jehan-gordon-booth": {
    "score": 5,
    "tier": "Strong Trump Opponent",
    "rationale": "Peoria Democratic House chief budget negotiator who leads efforts to backstop Illinois healthcare and human services against Trump federal budget cuts."
  },
  "sharon-chung": {
    "score": 8,
    "tier": "Strong Trump Opponent",
    "rationale": "Bloomington-Normal Democratic representative who defends public schools, union labor, and Medicaid coverage against federal conservative cuts."
  },
  "paul-jacobs": {
    "score": 92,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Southern Illinois Republican legislator who campaigns in lockstep with Donald Trump on coal and oil production, Second Amendment rights, and border security."
  },
  "tamiko-mueller": {
    "score": 7,
    "tier": "Strong Trump Opponent",
    "rationale": "Carbondale educator and Democrat campaigning to protect SIU funding, rural Medicaid hospitals, and reproductive freedom in Southern Illinois."
  },
  "michael-hastings": {
    "score": 12,
    "tier": "Strong Trump Opponent",
    "rationale": "South suburban Democratic Senator and Army veteran who opposes Trump cuts to veterans' healthcare and labor rights while supporting strong law enforcement funding."
  },
  "hillary-kurzawa": {
    "score": 83,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Southwest suburban conservative campaigning on parental rights, property tax caps, and ending state migrant funding."
  },
  "patrick-sheehan": {
    "score": 82,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Lockport police officer and Republican representative who backs law enforcement qualified immunity, repealing the SAFE-T Act, and ending sanctuary laws."
  },
  "david-maher": {
    "score": 11,
    "tier": "Strong Trump Opponent",
    "rationale": "Southwest suburban pro-labor Democrat who opposes Trump administration rollbacks of union prevailing wages and federal healthcare funding."
  },
  "laura-fine": {
    "score": 4,
    "tier": "Strong Trump Opponent",
    "rationale": "North Shore Democratic Senator who champions ACA mental health parity, environmental protection, and gun safety in opposition to Trump policies."
  },
  "robyn-gabel": {
    "score": 3,
    "tier": "Strong Trump Opponent",
    "rationale": "Illinois House Majority Leader and architect of Illinois's clean energy (CEJA) and Medicaid maternal health expansions; strongly opposes the Trump agenda."
  },
  "stephanie-kifowit": {
    "score": 14,
    "tier": "Strong Trump Opponent",
    "rationale": "Marine Corps veteran and Aurora Democratic representative who opposes Trump VA/healthcare cuts while working across the aisle on veterans' bills and fiscal oversight."
  },
  "rachel-ventura": {
    "score": 2,
    "tier": "Strong Trump Opponent",
    "rationale": "Progressive Joliet-area State Senator who opposes Trump environmental rollbacks, corporate tax cuts, and ICE deportation policies."
  },
  "mike-halpin": {
    "score": 10,
    "tier": "Strong Trump Opponent",
    "rationale": "Quad Cities labor Democrat who opposes Trump federal workforce cuts (including Rock Island Arsenal civilian jobs) and defends union collective bargaining."
  },
  "paul-faraci": {
    "score": 7,
    "tier": "Strong Trump Opponent",
    "rationale": "Champaign-Urbana Democratic Senator who defends federal research grants at UIUC and Medicaid funding against Trump administration cuts."
  },
  "adrienne-johnson": {
    "score": 5,
    "tier": "Strong Trump Opponent",
    "rationale": "Lake County Democratic Senator aligned with the Illinois Legislative Black Caucus against Trump civil rights, healthcare, and education policies."
  },
  "steve-stadelman": {
    "score": 10,
    "tier": "Strong Trump Opponent",
    "rationale": "Rockford Democratic Senator who defends federal manufacturing, rail, and healthcare investments against Trump administration budget freezes."
  },
  "toni-preckwinkle": {
    "score": 2,
    "tier": "Strong Trump Opponent",
    "rationale": "Cook County Board President and Chair of the Cook County Democratic Party; strongly defends Cook County's Welcoming Ordinance against Trump ICE deportation threats and federal grant conditions."
  },
  "michael-murphy-cook": {
    "score": 44,
    "tier": "Independent / Mixed",
    "rationale": "Cook County Libertarian nominee who agrees with cutting county taxes and government spending but opposes Trump tariffs, national debt expansion, and federal policing surges."
  },
  "pat-hynes": {
    "score": 8,
    "tier": "Strong Trump Opponent",
    "rationale": "Cook County Democratic Assessor nominee backed by labor and county Democrats; focuses on local assessment accuracy while opposing GOP tax-cut models."
  },
  "nico-tsatsoulis": {
    "score": 42,
    "tier": "Independent / Mixed",
    "rationale": "Libertarian real estate broker campaigning to slash Cook County property tax assessments and government spending outside either major party's national platform."
  },
  "tom-dart": {
    "score": 6,
    "tier": "Strong Trump Opponent",
    "rationale": "Cook County Sheriff who enforces the Illinois TRUST Act barring civil ICE detainers in Cook County Jail and supports federal gun trace enforcement."
  },
  "monica-gordon": {
    "score": 4,
    "tier": "Strong Trump Opponent",
    "rationale": "Cook County Clerk who expands vote-by-mail and early voting access, opposing Trump-aligned federal restrictions on mail ballots."
  },
  "maria-pappas": {
    "score": 15,
    "tier": "Bipartisan / Swing Dem",
    "rationale": "Longtime Cook County Treasurer focused on nonpartisan tax-bill technology and debt transparency; runs as a Democrat with broad civic support."
  },
  "liz-nicholson": {
    "score": 6,
    "tier": "Strong Trump Opponent",
    "rationale": "Democratic nominee for Cook County Board of Review aligned with progressive property tax assessment reforms."
  },
  "elyse-hoffenberg": {
    "score": 8,
    "tier": "Strong Trump Opponent",
    "rationale": "Suburban Cook County Democratic Commissioner nominee focused on local public finance, transit, and preserving county healthcare services."
  },
  "liz-doody-gorman": {
    "score": 77,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Orland Township Republican leader campaigning against Cook County sanctuary spending and property tax hikes, aligning with suburban GOP voters."
  },
  "drake-warren-miranda-hernandez": {
    "score": 2,
    "tier": "Strong Trump Opponent",
    "rationale": "Progressive Cook County Commissioner nominees backed by Grassroots Collaborative and CTU who strongly oppose ICE cooperation and Trump urban policies."
  },
  "deb-conroy-dupage-dems": {
    "score": 7,
    "tier": "Strong Trump Opponent",
    "rationale": "DuPage County Democratic slate that defends the Illinois TRUST Act, county mental health investments, and vote-by-mail expansion against Trump-era rollbacks."
  },
  "gary-grasso-dupage-gop": {
    "score": 76,
    "tier": "Mainstream GOP Aligned",
    "rationale": "DuPage County Republican slate campaigning on fiscal restraint, repealing SAFE-T Act mandates, and cooperating with federal immigration authorities on felony offenders."
  },
  "lake-county-dems": {
    "score": 6,
    "tier": "Strong Trump Opponent",
    "rationale": "Lake County Democratic slate that upholds the Illinois TRUST Act, expands vote-by-mail, and partners with state Democrats to backstop federal social service grants."
  },
  "lake-county-gop": {
    "score": 79,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Lake County Republican slate running on stricter law enforcement, property tax caps, and cooperation with federal immigration authorities."
  },
  "will-county-dems": {
    "score": 9,
    "tier": "Strong Trump Opponent",
    "rationale": "Will County Democratic slate focused on union prevailing-wage infrastructure, vote-by-mail access, and adherence to the Illinois TRUST Act."
  },
  "will-county-gop": {
    "score": 81,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Will County Republican slate campaigning on tough-on-crime policing, voter roll audits, and opposing state/county migrant sanctuary spending."
  },
  "kane-county-dems": {
    "score": 8,
    "tier": "Strong Trump Opponent",
    "rationale": "Kane County Democratic slate that supports state public safety and election access laws while opposing federal immigration detainer partnerships."
  },
  "kane-county-gop": {
    "score": 83,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Kane County Republican slate (including conservative former State Sen. Chris Lauzen) aligned with Trump fiscal, election-audit, and border-enforcement priorities."
  },
  "mchenry-county-gop": {
    "score": 84,
    "tier": "Mainstream GOP Aligned",
    "rationale": "McHenry County Republican slate that supports federal border enforcement cooperation, strict property tax caps, and conservative county budgeting."
  },
  "mchenry-county-dems": {
    "score": 8,
    "tier": "Strong Trump Opponent",
    "rationale": "McHenry County Democratic nominees campaigning on expanding early voting access and protecting local social services from federal grant cuts."
  },
  "paula-crouch": {
    "score": 76,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Appointed Republican Sangamon County Sheriff focused on professional policing standards, transparency reforms, and traditional Republican public safety priorities."
  },
  "marc-bell": {
    "score": 10,
    "tier": "Strong Trump Opponent",
    "rationale": "Democratic Sangamon County Sheriff nominee and retired State Police Master Sergeant backed by labor and civil rights advocates seeking systemic sheriff's office reform."
  },
  "caruana-parker-incumbents": {
    "score": 50,
    "tier": "Independent / Mixed",
    "rationale": "Bipartisan incumbent grouping combining Republican Winnebago County Sheriff Gary Caruana (aligned with GOP law enforcement priorities, ~78%) and Democratic Peoria County Clerk Rachael Parker (aligned with Democratic voting access priorities, ~10%)."
  },
  "barcellona-gabbert-challengers": {
    "score": 68,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Challenger grouping combining Independent Winnebago Sheriff candidate Dominick Barcellona (~52%) and Peoria GOP Clerk nominee Kari Gabbert (~84%, aligned with GOP election audit priorities)."
  },
  "champaign-mclean-dems": {
    "score": 7,
    "tier": "Strong Trump Opponent",
    "rationale": "Champaign and McLean County Democratic slate supporting the Illinois TRUST Act, university student voting access, and community mental health diversion."
  },
  "champaign-mclean-gop": {
    "score": 80,
    "tier": "Mainstream GOP Aligned",
    "rationale": "Champaign and McLean County Republican slate campaigning on voter roll maintenance, property tax caps, and repealing SAFE-T Act pre-trial provisions."
  },
  "downstate-hub-dems": {
    "score": 10,
    "tier": "Strong Trump Opponent",
    "rationale": "Metro East, Quad Cities, and Southern Illinois Democratic county nominees supporting union labor standards, vote-by-mail access, and state public safety reform."
  },
  "downstate-hub-gop": {
    "score": 86,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Downstate Republican county nominees aligned with Trump-supporting voters on county non-sanctuary resolutions, strict voter ID, and Second Amendment sanctuary policies."
  },
  "yes-mental-health-school-referendums": {
    "score": 12,
    "tier": "Strong Trump Opponent",
    "rationale": "Civic, labor, and healthcare coalitions campaigning for local property tax levies to expand community mental health (708) boards and backstop federal Medicaid/education cuts."
  },
  "no-tax-cap-advisory-referendums": {
    "score": 85,
    "tier": "Core Trump / MAGA Ally",
    "rationale": "Conservative taxpayer coalitions and Downstate county boards campaigning for hard property tax caps (PTELL) and non-sanctuary advisory referendums aligned with the Trump platform."
  }
};
