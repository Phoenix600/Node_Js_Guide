const http = require("http");


let requestListener = (req,res)=>{
    let url = req.url;
    let method = req.method;

    if(url==='/' && method === 'GET'){
        res.wite(
            `
            <form action="/message" method="POST">
            
            <input type="text">


            </form>
            `
        );
    
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        return res.end();
    }

}

const server = http.createServer(requestListener);
server.listen(3000);