const http = require('http')
const fs = require ('fs')


//server code
const port =3000
const server = http.createServer(function(req,res){
    /*res.writeHead(200,{'Content-type':'text/html'})
    fs.readFile('index.html',function(error,data){
        if(error){
            res.writeHead(404)
            res.write('Erro: file not found')
        }
        else{
            res.write(data)
        }
        res.end()
    })*/
    res.write("yoooo working")
    res.end()
    

})

server.listen(port,function(error){
    if(error){
        console.log("current error is", error)
    }else{
        console.log("All right running on", port)
    }
})