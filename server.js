var express = require("express")
var restRouter = require("./routes/rest")
var redirectRouter = require("./routes/redirect")
var indexRouter = require("./routes/index")

var app = express();

app.use("/public", express.static(__dirname + "/public"));

app.use("/api/v1", restRouter);
app.use("/", indexRouter);
app.use("/:shortUrl", redirectRouter);
app.listen(3000);