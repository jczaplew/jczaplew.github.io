# Integrating maps of all scales into user-friendly applications
## John Czaplewski, UW-Madison, Macrostrat Lab
30 minutes
The Macrostrat Lab in the Department of Geoscience at the University of Wisconsin - Madison is undertaking an effort to collate, homogenize, visualize, and analyze all bedrock geology maps, regardless of scale, from around the world within a single database. While the creation of this type of synthetic data product is riddled with challenges, it can lead to novel ways of understanding surficial geology, as well allowing for the creation of tools such as Rockd that blend digital education, public outreach, and scientific field research. This talk will discuss the issues associated with finding and aggregating heterogenous data, how a sensible map is created from it, and the types of services it can enable.

# Motivation/why
- GMNA, GMUS, GeoDeepDive, Macrostrat
- "Lit" review - what already exists
- No (simple) way to ask "what kind rock is at this location"
- Multiple scales allow for research at various scales. Use best available that covers target location

# The execution
- Challenges (data availability, translations...)
- Time consuming copy and pasting
- Messy attributes, messy geometry
- Geologic maps largely designed for print - lots of attributes to filter out, lots to copy from PDFs
- Schema (sources, scale tables, lookup tables, carto tables)

# Making a map
- Multi-scale considerations, overlapping identical scales
- Assigning of colors
- Tileserver - cache z0-10, dynamically create and cache z11-13, dynamically create z14+
- Future: how to make this vector tile friendly
- API for point queries (FOC's geometry query as well)

# In action
- Rockd
- Predictions of lithologies, times, fossils, etc

# Going forward
- Continued addition of geologic maps
- Continued development of Rockd
- Better access to the underlying data (vector tiles...?)
