/**
 * Created by zjs on 2017/6/14.
 */
var express = require("express");
var router = express.Router();
var urlService = require("../services/urlService");
var path = require("path");
router.get("*", function (req, res) {
    var shortUrl = req.originalUrl.slice(1);
    /* var longUrl = urlService.getLongUrl(shortUrl); */
    urlService.getLongUrl(shortUrl, function (url) {
        if (url) {
            res.redirect(url.longUrl);
        } else {
            res.sendFile("404.html", {root: path.join(__dirname, "../public/views/")});

        }
    });
    if (longUrl) {
        res.redirect(longUrl);
    } else {
        res.send("oooops!");
    }
});

module.exports = router;