# The project
## Slide 1 - what kind of rocks are we standing on
Does anyone know what kind of rock we are currently standing on? How old is it? If I wanted to learn more about, where would I look?

Until we began assembling Macrostrat's geologic map database, these were questions that were not easy to answer. For example, to answer those questions, you could go to the National Geologic Map Database, <Slide 2> zoom in to the Wisconsin Dells, <Slide 3> and see what maps are available. If you did that, you would be presented with this nice map of the Quaternary geology of southeastern Wisconsin from 1918. <Slide 4> You'd then have to download the 21 megabyte tiff file, open it up, and try and discern the colors to figure out which formation you might be standing on.

<Slide 5>
Alternatively, you could Google something like "columbia county wisconsin geologic map" and come up with nothing, <Slide 6> visit the Wisconsin Geological Survey's website, sort through a few pages of county geologic maps and realize they do not have one for Columbia county, or shift your focus to a bedrock geology map of Wisconsin. Eventually, you might come across this map of Wisconsin, which you could use to get a coarse idea of what you might be standing on. If you're lucky, you might find the homogenized geologic map of the united states compiled by USGS (which is an excellent product!), download the shapefile and CSV attributes for Wisconsin, load them into your GIS, attach the attribute table, figure out where the Wisconsin Dells is, and query the layer.

<Slide>
While the individual steps required to answer these seemingly simple questions is not important, the point is that it is a complicated, time consuming task that is ill-suited for anyone other than those like us who are well-versed in searching for and manipulating maps and GIS data.

<Slide>
When I first starting working with geologists, I was surprised by this. After all, everyone has seen old fashioned geologic maps of the United States from the early 20th century, and surely by now we've mapped all the rocks and can easily access this data. It turns out this is not the case, and even though detailed geologic maps exist for almost every corner of the world, they are radically inaccessible to an ordinary person, and often times even professionals.

<Slide>
There are a couple of reasons why this is the case. In my mind, the most significant is that the mapping of bedrock geology has never been organized process on a large scale. Even national geologic surveys, such as the USGS, are largely compilers of maps and data created by thousands of different geologists who had different priorities and interests at different points in time. Once the data is compiled, it is simply generalized to create maps at small scales. This is most obvious when you look at the geologic map of the US and see what we call "state line faults". <Slide> A prime example is the border of Colorado and Utah - it is not a natural border in any way (it's not a mountain range, river, etc), yet Colorado carefully describes specific members and formations, whereas Utah commonly describes the same rocks as "Triassic and Jurassic sedimentary rocks", a much broader description. I'm not making a value judgement on the geologists who created the state map of Utah, but this discrepancy is presumably just an artifact of the goals and interests of the different geologists who created those maps.

<Slide>
Another reason these maps are relatively inaccessible is that they were not made at a time when quantifying or spatially organizing this type of data was even considered, much less possible. They were made for literal mining, not data mining. Even when you download geodatabases of maps made in the last 10 years, it is very common to see multiple layers dedicated to detailed symbology, many color attributes, etc, but they are almost always conspicuously missing detailed descriptions of the rock units, which are hidden away in PDFs.

This focus on maps for the field is also obvious in the file formats available for most maps. Almost every map is available as a PDF. If it was made in the last 20 years, there is usually GIS data available, but around half the time it is only available as ArcInfo coverage files with almost no attributes attached to each feature. Clearly, there has not been a huge demand for modernized versions of these maps, as the PDFs serve the needs of the majority of users of these maps.

# Previous work
<Slide>
There have been previous efforts to blend multiscale geologic maps together - OneGeology and the National Geologic Map Database.

OneGeology is an international cooperative effort between the geological surveys of 121 countries. While it shares our goal of creating a multiscale geologic map of the world, it differs in some fundamental ways. First, it is not a database. While interacting with their map, the interfaces dynamically draws on web feature services from each participating survey. This allows the original data creators and providers to maintain control over the data, but it results in a very heterogenous map with completely different attribute fields for each source. Remember how I said that the primary use of geologic maps is as a visual in the field? This model of data management is pretty close to ideal if that is your goal - there is no time spent homogenizing data, and you can rely on the expertise and hard work of original data providers.

<Slide>
What OneGeology lacks is bulk access to the underlying data. If you want access to the bedrock GIS data of France you are out of luck. The WMS is the only product available unless you are willing to pay tens of thousands of euros. If you want to build your own version of their geologic map or use the data in a different way, they do not provide an API to access any of the data. It is effectively stuck in their web map interface.

<Slide>
The other primary aggregator of geologic maps is the National Geologic Map Database (ngmdb.usgs.gov) provided by the USGS. It is an incredibly extensive resources, providing 90,000 products from over 600 publishers according to their website. Their web mapping interface allows users to find maps by location, and in many cases they provide previews of scanned maps. Clicking on the map provides links to the original sources of the data, some of which provide GIS data. Again, the key thing missing is access to underlying data. The focus of the NGMDB is to make the discovery of maps easier, not to provide direct access to the underlying data.

# The creation of our map
Before downloading a single map, we designed a database schema that would accommodate these heterogenous datasets and make the management of multiscale maps simple.

<Slide>
First, we designated a table named `sources` to manage metadata about the original map sources. Each source is assigned a unique `source_id`, and contains the fields `name`, `primary_table`, `url`, `ref_title`, `authors`, `ref_year`, `ref_source`, `isbn_doi`, `scale`, `primary_line_table`, `license`, `features`, `area`, `priority`, `rgeom`, and `display_scales`.

Even though our goal is to homogenize the data, the original data of each source is maintained in a schema named `sources`, with the table name corresponding to the field `primary_table` in the table `sources`. This allows us to link back to the original data of every single polygon in our database.

<Slide>
The homogenized data is stored in 4 identical tables that correspond to the scale of the source map - tiny, small, medium, and large. Each table has the following fields: `map_id`, `orig_id`, `source_id`, `name`, `strat_name`, `age`, `lith`, `descrip`, `comments`, `t_interval`, `b_interval`, and `geom`

<Slide>
To handle line features like faults, folds, synclines, anticlines, etc we have an identical schema named `lines` that is also broken up into tiny, small, medium, and large. Each table has the attributes `line_id`, `orig_id`, `source_id`, name, type, direction, descrip, and geom.

<Slide>
# Adding data
Adding data to our geologic map database begins by searching for available data. <Slide> Before a source can be considered for import, it must have at least an age and rock type for each polygon, and if it is a large scale map must contain stratigraphic names. For the most part, most maps meet these criteria, but occasionally they don't. For example, I recently reached out to the Geological survey of Norway for access to their bedrock geology map, and they were kind enough to provide us with a shapefile export of their data. However, when they created the map they were only focused on rock type, not age, and there was no age data available for the units.

<Slide>
Finding quality data is a challenge. In the US, searching the National Geologic Map Database often yields good results, but it is still a tedious process to click around the map, find a source, navigate to the original data provider's website, download the data, and assess the quality of it. We are also running out of high quality maps to download from them.

If there is a specific area of interest, searching the websites of state, or even county surveys can produce quality maps.

<Slide>
For most, spending hours copying and pasting attributes out of PDFs is a necessity. We had two undergraduates last summer who worked on this, and an intern who spends half her time now processing maps. It's a tedious, time consuming process that is almost impossible to automate.

<Slide>
International coverage is extremely challenging. When it comes to open access to data, no other country comes close to the United States. In most places, if you can find evidence that a geologic map exists, it is often only available on a fee basis, often times in the cost-prohibitive model of charging by km2. Again, I believe this is a relic of the fact that geologic maps are commonly used by deep-pocketed energy companies for resource extraction. Even if you were to to pay the exorbitant costs for one of these maps, they are commonly distributed with extremely restrictive licenses that do not allow the user to modify or redistribute the data.

Translation can also be a very time consuming process. It took our intern almost the entire month of January to translate hundreds of unique values across multiple attributes of the geologic map of Germany, and she has been slowly making progress on translating Estonian so that we can ingest that map.

Right now, we have maps at 1:1 million or better for Brazil, Canada, the UK, Spain, Switzerland, Germany, Sweden, South Africa, Afghanistan, Australia, and New Zealand. Needless to say, we are missing a few...

Even with only a few people working on the map processing pipeline, staying organized and on the same page can be difficult. <Slide> We use Github issues to manage the map processing pipeline, where each map is a new "issue". We find that this works well for us because we can predefine an "issue" template, so staging a map simply consists of opening a new issue and adding a URL to a map. It also allows us to keep our communication organized and recorded, as everyone can add and respond to comments on each map. The recently introduced Github projects feature allows us to track at a glance where each map is in the processing pipeline, and who is responsible for it at any given time.

<Slide>
After a map's data is added to the homogenized database, it goes through a series of steps that match it another database, creating key pairs between the geologic map polygons, known stratigraphic names and lithologies. This allows us to increase the precision of the ages of the polygons of the geologic maps. We are pretty comfortable saying that we have produced the highest temporal resolution geologic map of the United States ever created. Additionally, it allows us to easily link to other resources, such as GeoDeepDive, which I will talk about in a little bit.

<Slide>
# Making a map
Once the data has reached the database, we obviously want to display it and share it in a sensible way. <Slide> Very early on in the project, we were approached by Shane Loeffler and Amy Myrbo from the University of Minnesota about an idea they had for a mobile application that allowed users to learn about the landscape they were seeing from the window of an airplane. They knew we had been building a geologic map database, and thought it would be cool if they could someone get extracts of our maps for their application. With these needs in mind, we created an API that allowed them to submit either two points and a buffer radius, or a polygon and in return get an extract of our homogenized geologic map as a GeoJSON or TopoJSON. After they visited and we mocked up a simple demo, they ran with it and produced the app Flyover Country. The beauty of this distribution model is that as our maps improve, so does their app.

While this specific method is great for that type of application, it's not a great way to explore all of our geologic maps. Naturally, the next step was to tile the data. However, this presented some unique challenges.

Obviously, the goal of an interactive multiscale geologic map is to display the "best" map available for the given scale you are looking at. For example, if I'm looking at the continental United States, the geologic map of the United States is more desirable than either the geologic map of the world (too coarse) or county-level maps (too detailed). However, if I'm looking at Africa at the same scale and there is no scale-appropriate map available, I'd rather have the geologic map of the world instead of nothing. These considerations necessitate not only a proper layering of the maps, but also a compositing.

<Slide>
When dealing with raster tiles, this is fairly straightforward. We first determine which zoom levels are associated with one of our four scales, and then determine an ideal stacking order for that scale.

[ 0, 1, 2, 3 ]      ::  "tiny"    :: [ "tiny" ]
   [ 4, 5]          ::  "small"   :: [ "small", "tiny" ]
[ 6, 7, 8, 9 ]      ::  "medium"  :: [ "medium", "small" ]
[ 10, 11, 12, 13 ]  ::  "large"   :: [ "large", "medium" ]

<Slide>
The result of this is a map that seamlessly blends together multiscale maps.

<Slide>
To access the underlying data, we produced an API that allows you to query all of our maps simultaneously. So, circling back around to my original question of "what kind of rock are we currently standing on?", we can now answer that question in tens of milliseconds from anywhere in the world, about anywhere in the world. <Slide> The answer is Cambrian sandstone that is about 500 million years old, contains some dolomite and shale, and consists of the Trempealeau, Tunnel City, and Elk Mound Formations.

<Slide>
Just as a quick technical note for those who might be interested - we use Tilestrata, a Nodejs module for tile creation and serving, as our tileserver. Zoom levels 0 through 10 are precached, levels 11-13 are dynamically created as needed and cached, and zoom level 14 and up are dynamically created. We also use Redis as an in-memory cache to make frequently requested tiles super fast, and also cache to disk. If you have any questions on the nitty gritty tech details don't hesitate to ask me later.

<Slide>
# Maps in action
One thing these geologic maps have enabled us to create is Rockd, a free mobile application for iOS and Android that allows you explore these maps on the go, as well as record your own observations of rocks, leveraging the map database to assist in the entry of data.

<Slide>
When you open the app, you are immediately presented with a summary of our best guess about the name, age, and lithologies of your current location. <Slide> You also have access to the full geologic map when you are online, including the ability to query all of our maps simultaneously, as well as direct links to primary literature relevant to that location. <Slide> You can also view photos, notes, and tags that describe the rocks other viewers have seen, as well as contribute your own.

<Slide>
When you enter data, Rockd queries our geologic map database to figure out what sorts of tags you might want to apply to your observation. For example, it will suggest different map units, stratigraphic names, lithologies, and even taxonomic names of fossils that might be present. While we are a ways away from being able to tell you exactly kind of rock you are looking at, we hope that this sort of informed fieldbook helps drive better field observations and can help to further quantify the rock record, as well as your own field experience.

<Slide>
# The future
The next steps for our geologic map database are fairly simple - continued addition of maps, with the goal of providing better global coverage. When quality data is not available online, we have had fairly good luck personally reaching out to surveys and describing our project, but attitudes towards open data in many places of the world, and even some places in the US, are still a huge barrier.

One feature that is conspicuously missing from Rockd is the ability to cache maps for offline use in the field. However, doing so is complicated by the fact that geologic map data is quite large, even for small areas. Providing the user with map tiles for offline use would be simple enough, but access to the underlying data is much more complicated. To do this, we plan to implement vector tiles for our geologic maps, but it is not as simple as making some tweaks to our tile server.

Remember when I discussed our layering process for each map scale when creating raster tiles? That process does not work for vector tiles because layering geometries in a vector tile literally layers geometries, creating incredibly bulky and inefficient, not to mention impossible to gracefully render, tiles. To fix this, we have begun created a derived data product that produces a "flat" geometry for each map scale. This is an incredibly computationally expensive process, as it requires giant geometry operations on tens of gigabytes of geometry to produce. There are a lot of kinks to work out, but I'm confident that we have the right approach and can properly execute this process.

We'd also like to leverage these maps more on another project we are involved in, GeoDeepDive. By mining the literature for data about known entities (for example, it is very straightforward to ask questions like "what are all the adjectives used to describe Baraboo Quartzite?"), we can refine and enhance the attributes we already have for our maps. In the other direction, data and knowledge contained within geologic maps can provide constraints on other applications. For example, if you are mining the literature for stratigraphic formations that contain sandstone, we can easily provide a list of stratigraphic names that we know to contain sandstone. Additionally, because the maps are spatial data, they can provide geographic constraints on potential facts extracted from the literature. This is a realm we have not explored much yet, but are very excited to push forward on.
