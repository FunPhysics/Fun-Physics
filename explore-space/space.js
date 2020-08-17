const express = require("express");
const axios = require("axios");

const router = express();

const { doQuery } = global;

router.get("/keywords", (req, res) => {
  let SQL = 'SELECT * FROM keywords';
    doQuery(SQL).then(output =>{
        res.status(200).send({ success: true, data: output.rows.map((e) => e.name)});
    });
  });

router.get('/', (req, res, next) => {
    var SearchName = req.query.SearchName;
    var page = req.query.page || 1;

    const url = `https://images-api.nasa.gov/search?q=${SearchName}&page=${page}`;
    axios.get(url).then(space =>{
        let spaceInfo = [];
        space.data.collection.items.map(element =>{
            let newSpace = new Space(element);
            spaceInfo.push(newSpace);
        })
        res.send(spaceInfo);
    }).catch((e) => {
      next(e);
    })
});

function Space(space){
this.date=space.data[0].date_created;
this.url= space.links ? space.links[0].href : 'https://adnan.com';
this.title=space.data[0].title ;
this.description=space.data[0].description.substring(0,300);
};

exports.default = router;
