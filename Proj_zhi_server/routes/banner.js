var express = require('express');
var router = express.Router();


router.get('/getbanner', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    var adImgs = {
        "total":"3",
        "status":"ok",
        "imgs":[
            {"title":"1",imgUrl:"http://localhost:3000/img/small/595af3557f78a6889.jpg"},
            {"title":"2",imgUrl:"http://localhost:3000/img/small/595af04368af27702.jpg"},
            {"title":"3",imgUrl:"http://localhost:3000/img/small/595b01e76018a344.jpg"}
        ]
    }
    res.jsonp(adImgs);
});

module.exports = router;