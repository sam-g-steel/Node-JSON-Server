/**
 * Created by sam_g on 12/7/2016.
 */

var http = require('http');

function handel_incoming_request(req, res) {
    console.log("Incoming request: (" + req.method + ")" + req.url);
    res.writeHead(200, {"Content-Type" : "application/json"});
    res.end(JSON.stringify({method: req.method, url: req.url}) + "\n")
}

var s = http.createServer(handel_incoming_request);

s.listen(8080);