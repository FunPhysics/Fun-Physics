'use strict';

const express = require('express');
const router = express();
const axios = require('axios');

router.get('/', (req, res) => {
    var SearchName = req.query.SearchName;
    var page = req.query.page;

    const url = `https://images-api.nasa.gov/search?q=${SearchName}&page=${page}`;
    axios.get(url).then(space =>{
        let spaceInfo = [];
        space.data.collection.items.map(element =>{

            let newSpace = new Space(element);
            console.log("element",element);
            console.log("new SPace",newSpace);
            spaceInfo.push(newSpace);
        })
        res.send(spaceInfo);
    })  
});

// router.get(req, res){

//     let SQL = 'SELECT * FROM keywords WHERE id=$1;';
//     let {name} = req.body;
//     client.query(SQL, assignValues).then(output =>{

//         res.render('', {: output.rows[0]});
//     });
// };


function Space(space){
this.date=space.data[0].date_created;
this.url= space.links ? space.links[0].href : 'https://adnan.com';
this.title=space.data[0].title ;
this.description=space.data[0].description.substring(0,300);

};

exports.default = router;


// ///main rout



// http://apod.grag.org/category/profondo-cielo/ammassi/

// {
//     "collection": {
//     "href": "https://images-api.nasa.gov/search?q=sun",
//     "items": [
//     {
//     "href": "https://images-assets.nasa.gov/video/XRT20170910_Al_poly_noaxis/collection.json",
//     "links": [
//     {
//     "render": "image",
//     "href": "https://images-assets.nasa.gov/video/XRT20170910_Al_poly_noaxis/XRT20170910_Al_poly_noaxis~thumb.jpg",
//     "rel": "preview"
//     },
//     {
//     "href": "https://images-assets.nasa.gov/video/XRT20170910_Al_poly_noaxis/XRT20170910_Al_poly_noaxis.srt",
//     "rel": "captions"
//     }
//     ],
//     "data": [
//     {
//     "nasa_id": "XRT20170910_Al_poly_noaxis",
//     "photographer": "JAXA/NASA/Smithsonian Astrophysical Observatory/Montana State University",
//     "secondary_creator": "JAXA/NASA/Smithsonian Astrophysical Observatory/Montana State University",
//     "center": "MSFC",
//     "location": "Sun",
//     "media_type": "video",
//     "description_508": "On Sept. 10, 2017, the Hinode satellite observed an enormous X-class flare burst from an active region on the western edge of the Sun.",
//     "title": "Hinode Takes an X-Ray of a Powerful Solar Flare",
//     "description": "On Sept. 10, 2017, the Hinode satellite observed an enormous X-class flare burst from an active region on the western edge of the Sun. The video shows the high-energy flare as seen by Hinode's X-Ray Telescope. The emission was so bright that the initial blast caused the detector to saturate. The giant explosion sent a huge cloud of superhot plasma zooming into interplanetary space -- a phenomenon known as a coronal mass ejection. Studying large flares like this one with a variety of instruments is key to understanding exactly what causes these dramatic eruptions, and one day predicting them before they occur.",
//     "keywords": [
//     "NASA",
//     "Marshall Space Flight Center",
//     "MSFC",
//     "Hinode",
//     "x-ray telescope",
//     "sun",
//     "solar flare"
//     ],
//     "date_created": "2017-09-10T00:00:00Z"
//     }
//     ]
//     },
//     {
//     "href": "https://images-assets.nasa.gov/image/PIA18906/collection.json",
//     "links": [
//     {
//     "render": "image",
//     "href": "https://images-assets.nasa.gov/image/PIA18906/PIA18906~thumb.jpg",
//     "rel": "preview"
//     }
//     ],
//     "data": [
//     {
//     "description": "X-rays stream off the sun in this first picture of the sun, overlaid on a picture taken by NASA Solar Dynamics Observatory SDO, taken by NASA NuSTAR. The field of view covers the west limb of the sun.",
//     "secondary_creator": "NASA/JPL-Caltech/GSFC",
//     "center": "JPL",
//     "media_type": "image",
//     "description_508": "X-rays stream off the sun in this first picture of the sun, overlaid on a picture taken by NASA Solar Dynamics Observatory SDO, taken by NASA NuSTAR. The field of view covers the west limb of the sun.",
//     "title": "Sun Shines in High-Energy X-rays",
//     "nasa_id": "PIA18906",
//     "keywords": [
//     "Sun",
//     "NuSTAR"
//     ],
//     "date_created": "2014-12-22T18:53:13Z"
//     }
//     ]
//     },
//     {
//     "href": "https://images-assets.nasa.gov/video/GSFC_20090318_SED_m10409_Promo_1/collection.json",
//     "links": [
//     {
//     "render": "image",
//     "href": "https://images-assets.nasa.gov/video/GSFC_20090318_SED_m10409_Promo_1/GSFC_20090318_SED_m10409_Promo_1~thumb.jpg",
//     "rel": "preview"
//     },
//     {
//     "href": "https://images-assets.nasa.gov/video/GSFC_20090318_SED_m10409_Promo_1/GSFC_20090318_SED_m10409_Promo_1.srt",
//     "rel": "captions"
//     }
//     ],
//     "data": [
//     {
//     "nasa_id": "GSFC_20090318_SED_m10409_Promo_1",
//     "photographer": "Ryan Fitzgibbons, Chris Smith",
//     "secondary_creator": "Ryan Fitzgibbons, Chris Smith,",
//     "center": "GSFC",
//     "location": "Goddard Space Flight Center",
//     "media_type": "video",
//     "description_508": "Short promo for Sun-Earth Day 2009 featuring scientists and students talking about the most fascinating things they've learned about our sun.",
//     "title": "Sun-Earth Day 2009 Promo 1",
//     "description": "Short promo for Sun-Earth Day 2009 featuring scientists and students talking about the most fascinating things they've learned about our sun.",
//     "keywords": [
//     "Sun",
//     "Sun-Earth Interactions",
//     "Education",
//     "Earth"
//     ],
//     "date_created": "2009-03-18T00:00:00Z"
//     }
//     ]
//     },
//     {