# Sharing Data: A Guide

### Who I am

  + I'm John, a mapper and developer in the Geoscience Dept. here on campus, and the lead engineer on two NSF-sponsored grants.
*Change*
  + A large part of my job involves working with external data, such as that from USGS, as well as crafting services, such as APIs and map tiles, to distribute our data, thus I've spent a lot of time and effort considering what works and what does not when it comes to sharing data
*Change*
  + Because our lab is part of a large public university and funded by federal dollars, we are obligated to abide by NSF's data sharing policy (http://www.nsf.gov/bfa/dias/policy/dmp.jsp), and in my opinion, the spirit of the White House's Open Data Policy (https://www.whitehouse.gov/sites/default/files/omb/memoranda/2013/m-13-13.pdf)
  + Which promotes openness, interoperability, efficiency, reduced costs, and better public access to government information -
  + Additionally, as a taxpayer and public employee, I feel a strong duty to make everything I do freely available to those who pay my salary (i.e. everyone in the US), and also believe that if tax dollars pay your salary, you also have an obligation to share everything you do.
  + If you're not a public employee and not obligated to share your data, chances are you'll need to share your data with someone at somepoint, whether it be a colleague, a client, or yourself 9 months from now. Either way, the same ideas for data sharing apply to you.
*Change*
 
### Why give this talk?
  + As geospatial professionals, we receive instruction on topics such as cartography, geodesy, and remote sensing, but often times general data management, and especially data sharing, are not discussed or glossed over in a classroom setting. 
  + This is surprising because no matter what you do as a geospatial professional, you will be manipulating, handling, and more likely than not, sharing data.
  + As a field, our general lack of attention to detail in this realm costs us an inestimable number of hours in dealing with poorly designed data, holding us back from doing interesting things with the data.
  + Because of this, it's important to consider what constitutes "good" data, and how you can make sure that your data does not cause you, your collegaues, or clients headaches


### What's data?
  + Although it seems like an easy question, it's not and is highly subjective
*Change*
  + For the sake of this presentation, I'm going to define it as machine-readable structured information (not a good definition, but we'll go with it for now)
*Change*
  + More specifically, I'm going to focus on geographic data
*Change*
  + To be more clear, I'm not talking about the products of data, such as maps, visualizations, charts, etc.
*Change*, *Change*


### Sharing
  + So how does one go about sharing data? First let's briefly talk about the different scenarios in which you'd share data. It's worth noting that no matter which categories you fall in to, the principles are the same.
*Change*
  + You might share data with the public - true if you work for the gov't in any way. 
  + Privately could include exchanging data with a client, or the buying or selling of data between private parties.
  + Interval includes things like sharing data among colleagues and team members, but more often includes sharing data with future you. 
  + This is especially important because we often spend a lot of time figuring out what we did 6 months ago
*Change*
  + 3rd normal form for distributing...always
  + One column for each variable, one value, no repitition
  + Rows are observations or data points
  + Very flexible...allows many ways to look at the data
  + I'm not going to get into this in too much detail, as it probably deserves an entire semester of lectures, but if you are not familiar with it, it is worth reading up on.
  + It's something that was completely glossed over in my education, and I definitely went through some growing pains not being aware of it.
*Change*
  + Values should be consistent (data type, text values should be similar, encoding, null values) !!! This is really important
*Change*
  + Badger example - This happens all. the. time. As we waste so much time cleaning it up. As you can see, the third column contains integers and text, and uses three different ways to describe no value
*Change*
  + While inconsistent data types are generally an issue, inconsistent null values are probably the most pervasive type. It's really common to see all of the above used in the same dataset as indicators of no value.
*Change*
  + Most of the time, it doesn't matter what you use - just pick one and be consistent!
*Change*
  + Make sure it makes sense to you - if it doesn't it won't make sense to anyone else. If you can't explain why all the fields are named the way they are, you have a problem. 
  + It's really common to do things that make sense in the moment, like naming files v1_revision23_final.shp, but when you come back to that folder in a month, you have no idea what the final product is, or if you actually need any of the files
*Change*
  + Solution: Show a colleague who has never seen it.
*Change*  

### Geo considerations for sharing
  + Assume that no one else is going to do the same thing with your data as you...if you operate on this premise, you'll quickly realize that sharing data with projections is a bad idea
*Change*
  + Projections are an opinion or suggestion for how the data should be stored and visualized. These go along with maps/visualizations, are inappropriate for distribution and sharing
*Change*
  + Calvin Metcalf gave a great talk at FOSS4G last year title "Projections on the web are terrible and you should be ashamed of yourself". While slightly inflamatory, one of my favorite quotes from it was that Projections "..are great if a printer is how you share data" - Calvin Metcalf
  + In the past geographic transformations were really complex and required a lot of time and effort - for example, change that paper map of the world on your wall to a Waterman Butterfly...it'll take a while
  + However, nowadays we can reproject on the fly. You can store and visualize your data in any projection you want, 
*Change*  
  + but for sharing data, I'd recommend homogenizing around WGS84 if at all possible. It's not the best, but it works with all GIS software out of the box, and is easily transformed into any projection you wish. You'll save your users a lot of time and effort, as they are probably using your data in tandem with other data that is NOT in that projection
*Change*
  + File formats - even if you are using proprietary software and sharing data with someone using the same proprietary software, you're better off using an open file format to avoid ETL and encoding issues 
  + Also saves you time when a format doesn't work for some reason
  + Open formats are less susceptible to subtle differences in software versions and more versatile
*Change*
  + How to fix: Try and use formats everyone can read (when you share a document with a lot of people, you usually use PDF because everything can read it). Shapefiles generally fine, but can be problematic. Don't share MXDs (rather, don't only share MXDs). Use a file geodatabase instead of a personal geodatabase. GeoJSON is good, but bulky. Consider using CSVs with point data - tiny and can be opened by anything...anything.
  + 
*Change*
  + Coordinate precision - this can be really important if you're working with data on the web, but it should be a consideration more often. Unless  you're a surveyor, you're probably lying about your data
  + How to fix: Use something like geojson-precision

*Change*
### Other considerations
*Change*
  + LICENSE! This is something rarely discussed broadly in the GIS community, but it really needs to be. Otherwise people can't use it. Don't try and write your own, use something that already exists.
*Change*
  + How to fix: https://creativecommons.org/choose/ Considerations: can people share their adaptation of your work? Can it be used commercially? If you're a gov't employee, use CC0, aka public domain dedication
*Change*
  + Let people know your data is available, i.e. make it discoverable. 
  + Save yourself a lot of time and effort by making it easy to find instead of responding to individual emails
*Change*
  + How to fix: If you have a web application that uses data, provide download links. Add prominate links on your website. It's a product - sell it! It'll save you time in the long run.
*Change*
  + Try to avoid sending unique datasets to people. If someone requests data, point them to a URL where they can download it. Not only is it unsustainable, it can create issues where two different people request effectively the same data and get different products. 
  + It also makes it really hard to cite the source
*Change*
  + How to fix: make datasets detailed, and allow users to filter out what they don't need. Maintain consistent links to the data. Removing detail is easy, adding it is hard.
*Change*
  + Metadata - Sure FGDC and ISO 19115 are great, but unless you are bound by law to use them, you're probably not going to. However, in principle the idea of creating authoritative and comprehensive documentation isn't a bad one. 
  + It's just that we've set up a system that discourages people from creating even the most basic documentation
*Change*
  + How to fix: a simple README is a great alternative
  + If you're not familiar with them, they are very common in software and are just simple plain text files that describe whatever they come with
  + There is no reason they can't be used for data, spatial or otherwise.
  + Simply including things like the sources, author, date, license information, and descriptions of fields will save you and everyone else a lot of time.
  + Be as detailed or as general as you want, but something is always better than nothing

*Change*
  + That's all I have for today. I hope what you take away is that you should take pride in your data the same way you'd take pride in the pretty map you created. 
  + Dirty, hard to work with data reflects on you the same way an illegible, ugly map does. Both hinder users from doing what they want and achieving their goals.

*Change*
  + Thanks for listening! Again, you can find my slides at the URL below
  + If we have some time, does anyone have any questions?