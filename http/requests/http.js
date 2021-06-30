const http=require("http")
const users=require("./users.json")

const server = http.createServer((req,res)=>{
    const headers = {}
    if(req.url=="/")
    {
        res.writeHead(200,{
            ...headers,
            "Content-Type" : "application.json"
        })
        res.write(JSON.stringify(users))
        res.end()
    }
})
server.listen(8001,()=>{
    console.log("server is listening on 8001") 
})