var express = require("express")
var restRouter = require("./routes/rest")
var redirectRouter = require("./routes/redirect")

var app = express();
app.use("/api/v1", restRouter);
app.use("/:shortUrl", redirectRouter);
app.listen(3000);