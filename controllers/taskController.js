const {IncomingForm} = require('formidable');
const {copyfileSync} = require('copyfileSync');

const { readTaskfromfile, writeTasksTofile } = require("../utils/filehandler")

exports.getTasks = (req,res) => {
  const tasks = readTaskfromfile();
  res.writehead(200,{ 'content-type':'application/json'})
  res.end(JSON.stringify(tasks))
}

exports.updateTasks =(req,res)=>{
  res.end(JSON.stringify({

    message:'not yet implemented'
  }))
}


exports.deleteTasks =(req,res)=>{
  res.end(JSON.stringify({

    message:'not yet implemented'
  }))
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
      Image: files.Image ? `/uploads/${files.image.name}`:null,


    }
    tasks.push(newTasks);
    writeTasksTofile(tasks);
    if(files.image){
      copyfileSync(files.image.path,path.join(__dirname,'../uploads' + files.image.name));
      res.end(JSON.stringify(newTasks))
    }

  })


}