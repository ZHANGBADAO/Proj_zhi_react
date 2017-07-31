var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getkind', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");


    var adImgs = {
        "imgs":[
            {"title":"1",imgUrl:"http://localhost:3000/img/small/04.png"},
            {"title":"2",imgUrl:"http://localhost:3000/img/small/05.png"},
            {"title":"3",imgUrl:"http://localhost:3000/img/small/06.png"},
            {"title":"4",imgUrl:"http://localhost:3000/img/small/07.png"},
            {"title":"5",imgUrl:"http://localhost:3000/img/small/08.png"},
            {"title":"6",imgUrl:"http://localhost:3000/img/small/09.png"},
            {"title":"7",imgUrl:"http://localhost:3000/img/small/10.png"},
            {"title":"8",imgUrl:"http://localhost:3000/img/small/11.png"},
            {"title":"9",imgUrl:"http://localhost:3000/img/small/12.png"},
            {"title":"10",imgUrl:"http://localhost:3000/img/small/13.png"}
        ]
    } ;

    res.jsonp(adImgs)

});

module.exports = router;
