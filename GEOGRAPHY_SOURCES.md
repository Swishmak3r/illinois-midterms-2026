# Postal geography and research-area coverage

`data-zips.js` contains a bundled geographic directory from [GeoNames' United States postal-code extract](https://download.geonames.org/export/zip/US.zip), downloaded October 26, 2026 (America/Chicago). The server's UTC modification timestamp is October 27, 2026 at 02:57:35 GMT. The source archive's SHA-256 is `4973fdf8003ae16e572d68410995dcea150c5a71284ec84adbcfef7c5abb49a7`.

- **1,575 distinct Illinois ZIP codes**, with postal place names and the county labels supplied by GeoNames.
- **39,913 other United States ZIP codes**, stored as sorted contiguous membership ranges so the resolver can distinguish a known out-of-state ZIP from an unrecognized code. Ranges are only a compact encoding of listed codes, not numeric-prefix inference.
- [GeoNames](https://www.geonames.org/) licenses this dataset under [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/). Credit GeoNames in the site's sources/footer. Adaptations: filtered Illinois records, deduplicated names, converted other-US membership to intervals, and omitted unused coordinates.

The data is supplied without a guarantee of accuracy, timeliness, or completeness. This is not the USPS address validation service. Recently added, retired, unique-organization, or PO-box ZIPs may be absent. An absent ZIP receives an explicit “not in the bundled postal directory” result and access to the official lookup; it is never silently assigned to a nearby town.

`location.js` only connects a postal ZIP to community research entries when the existing `IL_TOWNS_DIRECTORY` explicitly lists that ZIP. It does not derive legislative, congressional, precinct, ward, or county election boundaries from ZIP prefixes, coordinates, or proximity. The existing directory is curated research context, not an authoritative boundary crosswalk. Overlapping substantive research areas are merged as a union; the broad Chicago overview is omitted when a specific neighborhood entry is present. Merged district arrays are possibilities in the research entries, never a verified personal ballot.

Valid Illinois ZIPs without an explicit research-area mapping receive a statewide-only view, a coverage explanation, and official address-based resources. Exact city/alias matching is supported; incomplete names offer choices instead of automatically selecting the first partial match. Street addresses are not collected or sent to any API.

The [Illinois State Board of Elections district locator](https://www.elections.il.gov/ElectionOperations/DistrictLocator/DistrictOfficialSearchByAddress.aspx) and the voter's [local election authority](https://www.elections.il.gov/ElectionOperations/ElectionAuthorities.aspx) are the appropriate sources for exact district placement, sample ballots, registration, and polling places.
