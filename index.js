const http = require('http');

const server=http.createServer((req,res)=>
{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello World !!")
});

const PORT=process.env.PORT || 3000;
server.listen(PORT,()=>console.log("server is runningg on port 3000"))
              