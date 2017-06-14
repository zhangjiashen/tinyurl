
console.log("hello world")

var http = require("http");
http.createServer(function (req, res) {
    if (req.url == "/"){
        res.writeHead(200, {"Content-type": "application/json"});
        var obj = {
            name : "jiashen",
            school : "cmu"
        }
        res.end(JSON.stringify(obj));
    }
} ).listen(3000);