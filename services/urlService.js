/**
 * Created by zjs on 2017/6/14.
 */
var UrlModel = require("../models/urlModel");
var longToShortHash = {}
var shortToLongHash = {};
var encode = [];

var genCharArray = function (arrA, arrZ) {
    var arr = [];
    var i = arrA.charCodeAt(0);
    var j = arrZ.charCodeAt(0);

    for (; i < j; i++) {
        arr.push(String.fromCharCode(i));
    }
    return arr;
};

encode = encode.concat(genCharArray('A', 'Z'));
encode = encode.concat(genCharArray('a', 'z'));
encode = encode.concat(genCharArray('0', '9'));

var getShortUrl = function (longUrl, callback) {
    if (longUrl.indexOf("http") === -1) {
        longUrl = "http://" + longUrl;
    }
    UrlModel.findOne({longUrl:longUrl}, function (err, data) {
        if (data) {
            callback(data);
        } else {
            generateShortUrl(function (shortUrl) {
                var url = new UrlModel({
                    shortUrl:shortUrl,
                    longUrl:longUrl
                });
                url.save();
                callback(url);
            });

        }
    });
    /**
    if (longToShortHash[longUrl] == null) {
        var shortUrl = generateShortUrl();
        longToShortHash[longUrl] = shortUrl;
        shortToLongHash[shortUrl] = longUrl;
        return shortUrl;
    } else {
        return longToShortHash[longUrl];
    }
     **/

};

var getLongUrl = function (shortUrl, callback) {
    UrlModel.findOne({shortUrl: shortUrl}, function (err, data) {
        callback(data);
    });
    return shortToLongHash[shortUrl];
};

var generateShortUrl = function (callback) {
    UrlModel.count({}, function (err, data) {
        callback(convertTo64(data));
    });
    /*return convertTo64(Object.keys(longToShortHash).length); */
}

var convertTo64 =  function (num) {
      var result = "";
      do {
          result = encode[num % 64] + result;
          num = Math.floor(num / 64);
      } while (num);
      return result;
};
module.exports = {
    getShortUrl : getShortUrl,
    getLongUrl : getLongUrl
};
