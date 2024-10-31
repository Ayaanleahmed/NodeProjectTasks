const taskRoutes = require('./routes/taskRoutes');
const { json } = require('formidable');
const http = require('http');
const HOSTNAME = 'localhost'
const PORT = 5000 
const server = http.createServer((req,res)=>{
    if(req.url.startsWith('/tasks')){
        taskRoutes(req,res)
    }else{
        res.writeHead(404,'not found',{ 'content-type':'application/json'})
        res.end(JSON.stringify({
            message: 'sorry ,you are lossed'
        }))
    }

});


server.listen(PORT,HOSTNAME,()=>{
    console.log(`server on running on port${PORT}`)

    
})