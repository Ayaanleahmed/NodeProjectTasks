const {IncomingForm} = require('formidable');
const { readTaskfromfile } = require("../utils/filehandler")

exports.getTasks = (req,res) => {
  const tasks = readTaskfromfile();
  res.writehead(200,{ 'content-type':'application/json'})
  res.end(JSON.stringify(tasks))
}

exports.createTasks =(req,res)=>{
  const form = new IncomingForm();
  form.parse(req,(err,fields,files)=>{
    if(err){
      res.writehead(404,{ 'content-type':'application/json'});
      res.end(JSON.stringify({
          message:'erroe parsing form'

      })
      )
      return;

      
    }
    const tasks = readTaskfromfile()
    const newTasks = {
      id: Data.now(),
      title: fields.title,
      description: fields?.description ||'',
      status: fields?.status || 'pending',


    }

  })


}