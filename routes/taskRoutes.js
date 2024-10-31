const {getTasks} =require ("../controllers.taskControllers");
const { json } = require("formidable")

const taskRoutes = (req,res)=>{
if(req.method ==='GET'){
        getTasks(req,res)
    }else if(req.method ==='POST'){
        createTasks(req,res)
    }else if(req.method ==='PATCH'){
        updateTasks(req,res)
}else if(req.method ==='DELETE'){
    deleteTasks(req,res)

}else {
    res.writehead(404,'page not found',{ 'content-type':'application/json' })
    req.end(JSON.stringify({
        message: "unknown method required."
    }))

}


}

module.exports = taskRoutes