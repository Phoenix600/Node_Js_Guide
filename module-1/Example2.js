const http = require("http");

// this createServer method returns the server, so we have to store it somewhere 
const server = http.createServer((req,res)=>{
    console.log(req);
    console.log("Running the server");
});

// takes optional args like port number and host name 
server.listen(3000);