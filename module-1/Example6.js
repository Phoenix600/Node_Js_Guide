const http = require("http");

/**
 *  This program is all bout the sending the response using the node js 
 */
function requestListener(req,res){
	console.log("Getting started with the node js server");
	console.log(`Header : ${req.headers}`);
	// sending the response in vanilla nodejs 
	res.setHeader("Content-type", "text/html");
	res.write("<H1>Hello From Node Js Server</H1>");
	res.end();
}

const server = http.createServer(requestListener);

server.listen(3000);

