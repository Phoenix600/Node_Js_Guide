const http = require("http");

// Event-driven request listener
function requestListener(req,res){
    console.log("Running the node js server");
    console.log(req);
    console.log(req.url + "...." + req.method + "...." + req.headers);
}

const server = http.createServer(requestListener);

// http://localhost:8080
server.listen(8080);