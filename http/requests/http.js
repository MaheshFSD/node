const http=require("http")
const users=require("./users.json")

const server = http.createServer((req,res)=>{
    const headers = {}
    if(req.url=="/" && req.method=="POST")
    {
        let addData
        return req.on("data",(chunk)=>{
            addData=JSON.parse(chunk.toString())
            res.writeHead(200,{
                ...headers,
                "Content-Type" : "application.json"
            })
            const newUsers=[...users,addData]
            res.write(JSON.stringify(newUsers))
            res.end()
        })
    }
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