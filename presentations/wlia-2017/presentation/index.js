// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Code,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Slide,
  Text,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  burwellLarge: require("../assets/jpgs/burwell_large.jpg"),
  burwellMedium: require("../assets/jpgs/burwell_medium.jpg"),
  burwellSmall: require("../assets/jpgs/burwell_small.jpg"),
  burwellTiny: require("../assets/jpgs/burwell_tiny.jpg"),
  cartographer: require("../assets/jpgs/cartographer.jpg"),
  chulaVista: require("../assets/jpgs/chula_vista.jpg"),
  columbiaCountryGeoMap: require("../assets/jpgs/columbia_county_geologic_map.jpg"),
  columbiaCounty: require("../assets/jpgs/columbia_county.jpg"),
  estonian: require("../assets/jpgs/estonian.jpg"),
  foc: require("../assets/jpgs/foc.jpg"),
  geobucky: require("../assets/jpgs/geobucky.jpg"),
  laIssue: require("../assets/jpgs/la_issue.jpg"),
  nearbyLithologies: require("../assets/jpgs/nearby_lithologies.jpg"),
  nearbyTaxa: require("../assets/jpgs/nearby_taxa.jpg"),
  nearbyUnits: require("../assets/jpgs/nearby_units.jpg"),
  ngmdbDells: require("../assets/jpgs/ngmdb_dells.jpg"),
  ngmdb: require("../assets/jpgs/ngmdb.jpg"),
  ngmdbHome: require("../assets/jpgs/ngmdb_home.jpg"),
  nsf: require("../assets/jpgs/nsf.jpg"),
  oceanaComposite: require("../assets/jpgs/oceana_composite.jpg"),
  oldGMUS: require("../assets/jpgs/old_gmus.jpg"),
  onegeologyEurope: require("../assets/jpgs/onegeology_europe.jpg"),
  onegeology: require("../assets/jpgs/onegeology.jpg"),
  pdfDescriptions: require("../assets/jpgs/pdf_descriptions.jpg"),
  pointQuery: require("../assets/jpgs/point_query.jpg"),
  processingProject: require("../assets/jpgs/processing_project.jpg"),
  rockdDashboard: require("../assets/jpgs/rockd_dashboard.jpg"),
  rockdFeed: require("../assets/jpgs/rockd_feed.jpg"),
  rockdMap: require("../assets/jpgs/rockd_map.jpg"),
  rockdSplash: require("../assets/jpgs/rockd_splash.jpg"),
  rocks: require("../assets/jpgs/rocks.jpg"),
  sauk: require("../assets/jpgs/sauk.jpg"),
  stateFault: require("../assets/jpgs/state_fault.jpg"),
  utCO: require("../assets/jpgs/ut_co.jpg"),
  wisconsinBedrockGeology: require("../assets/jpgs/wisconsin_bedrock_geology.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress={"bar"}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={3} caps lineHeight={1} textColor="tertiary">
            Integrating maps of all scales into user-friendly applications
          </Heading>
          <Heading size={5} textColor="secondary" bold>
            John J Czaplewski
          </Heading>
          <Link href="https://twitter.com/johnjcz">
            <Heading size={6}>@johnjcz</Heading>
          </Link>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={3}>
            Outline
          </Heading>
          <List>
            <ListItem textColor="tertiary">Geologic maps</ListItem>
            <ListItem>Other efforts</ListItem>
            <ListItem>The database</ListItem>
            <ListItem>Importing data</ListItem>
            <ListItem>Applications enabled</ListItem>
            <ListItem>Future steps</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={3} textColor="tertiary">
            Geologic Maps
          </Heading>
          <List>
            <ListItem>Ages and types of rocks</ListItem>
            <ListItem>Research and industry</ListItem>
            <ListItem>Colored by age or rock type</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.burwellTiny}>
          <Heading size={4} textColor="primary">tiny ~ 1:10,000,000</Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.burwellSmall}>
          <Heading size={4} textColor="primary">small ~ 1:5,000,000</Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.burwellMedium}>
          <Heading size={4} textColor="primary">medium ~ 1:1,000,000</Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.burwellLarge}>
          <Heading size={4} textColor="primary">large ~ 1:100,000</Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.rocks} bgDarken={0.4}>
          <Heading size={4} textColor="primary">What kind of rock are we standing on?</Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.ngmdb}/>

        <Slide transition={["slide"]} bgImage={images.ngmdbDells}/>

        <Slide transition={["slide"]} bgImage={images.columbiaCounty}/>

        <Slide transition={["slide"]}>
          <Image src={images.columbiaCountryGeoMap} height="100%"/>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.wisconsinBedrockGeology} height="100%"/>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={4} textColor="tertiary">This is too complicated</Heading>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.oldGMUS}/>

        <Slide transition={["slide"]}>
          <Text size={4} textColor="secondary">Geologic maps are not typically made at small scales</Text>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.stateFault}/>

        <Slide transition={["slide"]} bgImage={images.cartographer}/>

        <Slide transition={["slide"]}>
          <Heading size={3}>
            Outline
          </Heading>
          <List>
            <ListItem>Geologic maps</ListItem>
            <ListItem textColor="tertiary">Other efforts</ListItem>
            <ListItem>The database</ListItem>
            <ListItem>Importing data</ListItem>
            <ListItem>Applications enabled</ListItem>
            <ListItem>Future steps</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.onegeology}/>

        <Slide transition={["slide"]} bgImage={images.onegeologyEurope}/>

        <Slide transition={["slide"]} bgImage={images.ngmdbHome}/>

        <Slide transition={["slide"]}>
          <Heading size={3}>
            Outline
          </Heading>
          <List>
            <ListItem>Geologic maps</ListItem>
            <ListItem>Other efforts</ListItem>
            <ListItem textColor="tertiary">The database</ListItem>
            <ListItem>Importing data</ListItem>
            <ListItem>Applications enabled</ListItem>
            <ListItem>Future steps</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="tertiary" caps>sources</Heading>
          <List textSize="12px">
            <ListItem textSize="20px"><Code textSize="30px">source_id</Code> - 6</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">name</Code> - Dane county</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">primary_table</Code> - dane_co</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">url</Code> - https://wgnhs.uwex.edu/pubs/wofr201301di/</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">ref_title</Code> - Preliminary Bedrock Geology of Dane County, Wisconsin</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">authors</Code> - Brown, B.A., Peters, R.M., Massie-Ferch, K.</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">ref_year</Code> - 2013</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">ref_source</Code> - Open-File Report</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">isbn_doi</Code> - NULL</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">scale</Code> - large</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">primary_line_table</Code> - dane_faults</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">license</Code> - Public domain</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">features</Code> - 700</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">area</Code> - 3207 (km2)</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">priority</Code> - false</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">display_scales</Code> - [large]</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">rgeom</Code> - 0103000020E6100000010000002A0300001DA8174918415...</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
          <Heading size={5} textColor="tertiary" caps>tiny/small/medium/large</Heading>
          <List textSize="12px">
            <ListItem textSize="20px"><Code textSize="30px">map_id</Code> - 935309</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">orig_id</Code> - 328</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">source_id</Code> - 6</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">name</Code> - Tunnel City Group (Ctc)</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">strat_name</Code> - Tunnel City Group</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">age</Code> - Cambrian</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">lith</Code> - NULL</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">descrip</Code> - Medium to very fine-grained quartz sandstone, locally very glauconitic. Up to 150 feet (46 m) thick.  Lone Rock Formation: very fine shaly and glauconitic, feldspathic sandstone. Mazomanie Formation: fine to medium grained, and not glauconitic.</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">comments</Code> - NULL</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">t_interval</Code> - 122</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">b_interval</Code> - 122</ListItem>
            <ListItem textSize="20px"><Code textSize="30px">geom</Code> - 0106000020E610000001...</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={3}>
            Outline
          </Heading>
          <List>
            <ListItem>Geologic maps</ListItem>
            <ListItem>Other efforts</ListItem>
            <ListItem>The database</ListItem>
            <ListItem textColor="tertiary">Importing data</ListItem>
            <ListItem>Applications enabled</ListItem>
            <ListItem>Future steps</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={5} textColor="tertiary">Required attributes</Heading>
          <List>
            <ListItem>Age</ListItem>
            <ListItem>Rock type</ListItem>
            <ListItem>(Stratigraphic names)</ListItem>
            <ListItem>(Fossils)</ListItem>
            <ListItem>(Oil/gas)</ListItem>
            <ListItem>(interpretations)</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={4} textColor="tertiary">Finding quality data is a challenge</Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.pdfDescriptions} width="100%"/>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={5} textColor="tertiary">Common issues</Heading>
          <List>
            <ListItem>International coverage / open access</ListItem>
            <ListItem>Translations</ListItem>
            <ListItem>Staying organized</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.estonian} width="100%"/>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.processingProject} width="100%"/>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={4} textColor="tertiary">Making a map</Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.foc} height="600px"/>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.sauk} width="100%"/>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.pointQuery}>
          <Text textSize="30px">https://macrostrat.org/api/v2/ geologic_units/burwell ?lat=43.4045&lng=-89.9512</Text>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.chulaVista} width="100%"/>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={2} textColor="tertiary">Tech</Heading>
          <Heading size={4}>Tilestrata (nodejs)</Heading>
          <Heading size={4}>Redis</Heading>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={3}>
            Outline
          </Heading>
          <List>
            <ListItem>Geologic maps</ListItem>
            <ListItem>Other efforts</ListItem>
            <ListItem>The database</ListItem>
            <ListItem>Importing data</ListItem>
            <ListItem textColor="tertiary">Applications enabled</ListItem>
            <ListItem>Future steps</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.rockdSplash} width="100%"/>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.rockdDashboard} height="600px"/>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.rockdMap} height="600px"/>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.rockdFeed} height="600px"/>
        </Slide>

        <Slide transition={["slide"]}>
          <Image src={images.nearbyLithologies} width="300px"/>
          <Image src={images.nearbyTaxa} width="300px"/>
          <Image src={images.nearbyUnits} width="300px"/>
        </Slide>

        <Slide transition={["slide"]}>
          <Heading size={5} textColor="tertiary">Next steps</Heading>
          <List>
            <ListItem>More maps</ListItem>
            <ListItem>Offline maps in Rockd</ListItem>
            <ListItem>Vector tiles</ListItem>
            <ListItem>GeoDeepDive</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={4}>Thank you!</Heading>
          <Text textSize="25px"><Text textColor="tertiary">Slides:</Text>http://johnjcz.com/presentations/wlia-2017</Text>
          <Text textSize="25px"><Text textColor="tertiary">Map:</Text>https://macrostrat.org/burwell</Text>
          <Image src={images.nsf} height="150px"/>
          <Image src={images.geobucky} height="150px"/>
        </Slide>
      </Deck>
    );
  }
}
