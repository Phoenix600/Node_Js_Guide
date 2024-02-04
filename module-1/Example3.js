const http = require("http");


const server = http.createServer(
    // Once the client sends the request to server running on port 3000
    // this following code gets exectuted
    (req,res)=>{
    console.log("Running Server on port 3000");
    process.exit();
});

server.listen(3000);