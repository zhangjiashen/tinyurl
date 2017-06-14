/**
 * Created by zjs on 2017/6/14.
 */

var longToShortHash = {}
var shortToLongHash = {};
var getShortUrl = function (longUrl) {
    if (longUrl.indexOf("http") === -1) {
        longUrl = "http://" + longUrl;
    }

    if (longToShortHash[longUrl] == null) {
        var shortUrl = generateShortUrl();
        longToShortHash[longUrl] = shortUrl;
        shortToLongHash[shortUrl] = longUrl;
        return shortUrl;
    } else {
        return longToShortHash[longUrl];
    }

};

var getLongUrl = function (shortUrl) {
    return shortToLongHash[shortUrl];
};

var generateShortUrl = function () {
    return Object.keys(longToShortHash).length;
}
module.exports = {
    getShortUrl : getShortUrl,
    getLongUrl : getLongUrl
};
