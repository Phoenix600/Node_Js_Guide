const { log } = require("console");
const http = require("http");

function requestListener(request,response){
    console.log("Running the server");
}

// http.createServer is used to craete the server, it requires the request listener as 
// argument 
http.createServer(requestListener).listen(1000);