/**
 * Created by zjs on 2017/6/14.
 */
var express = require("express");
var router = express.Router();
var urlService = require("../services/urlService");

router.get("*", function (req, res) {
    var shortUrl = req.originalUrl.slice(1);
    var longUrl = urlService.getLongUrl(shortUrl);
    res.redirect(longUrl);
});

module.exports = router;