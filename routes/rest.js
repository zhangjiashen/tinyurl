/**
 * Created by zjs on 2017/6/14.
 */

var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlService = require("../services/urlService");

router.post("/urls", jsonParser, function (req, res) {
    var longUrl = req.body.longUrl;
    urlService.getShortUrl(longUrl, function (url) {
        res.json(url);
    });
    res.json({
        longUrl : longUrl,
        shortUrl : shortUrl
    });
});

router.get("/urls/:shortUrl", jsonParser, function (req, res) {
    var shortUrl = req.params.shortUrl;
    urlService.getLongUrl(shortUrl, function (url) {
        if (url) {
            res.json(url);
        } else {
            res.status(404).send("Not Exist!");
        }
    });
    res.json({
        longUrl : longUrl,
        shortUrl : shortUrl
    });
});

module.exports = router;
