const http = require("http");
const fileSystem = require("fs"); // File System Object 


function requestListener(req,res){
    console.log("Running the server at port 3000");
    let url = req.url;
    let method = req.method;
    res.setHeader('Content-Type','text/html');
    if(url==='/'){
        res.write(`
        <form action="/message" method="POST", name="message">
            <input type="text">
            <button type="submit">Send</button>
        </form>
        `);
    }
    if(url ==='/message' && method ==='POST')
    {    
        fileSystem.writeFileSync("message.text","Dummy TEXT");
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }

    res.end();
}



const server = http.createServer(requestListener);

server.listen(3000);