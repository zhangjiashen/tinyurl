var express = require("express");
var restRouter = require("./routes/rest");
var redirectRouter = require("./routes/redirect");
var indexRouter = require("./routes/index");
var mongoose = require("mongoose");
var app = express();

mongoose.connect('mongodb://zjs:zjs@ds153652.mlab.com:53652/tinyurl');
console.log(__dirname);
app.use("/public", express.static(__dirname + "/public"));

app.use("/api/v1", restRouter);
app.use("/", indexRouter);
app.use("/:shortUrl", redirectRouter);
app.listen(3000);