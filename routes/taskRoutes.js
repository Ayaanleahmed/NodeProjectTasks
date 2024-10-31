const { json } = require("formidable")

const taskRoutes = (req,res)=>{
    if(req.method ==='GET'){
        getYasks(req,res)
    }else if(req.method ==='POST'){
        createTask(req,res)
    }else if(req.method ==='PATCH'){
        updateTask(req,res)
}else if(req.method ==='DELETE'){
    deleteTask(req,res)

}else {
    res.writehead(404,'page not found',{ 'content_type':'application/json' })
    req.end(json.strigify({
        message: "unknown method required."
    }))

}


}

module.exports = taskRoutes