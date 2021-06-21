//import bodyParser from 'body-parser';
import * as express from 'express';
import * as mongoose from 'mongoose';
import UserRouter from '../routers/UserRouter';

 
export class Server
{
   public app:express.Application=express();
   constructor(){
       this.setConfiguration();
       this.setRoutes();
      this.error402Handller();
       this.handleErrors();
    
   }

   setConfiguration()
   {
     this.setMongodb();
    // this.configureBodyParser();
   }




   setMongodb()
   {
    mongoose.connect('mongodb+srv://User:User@1234@mangodb.zle8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("mongoose connected");
    })
    
   }

  //  configureBodyParser()
  //  {
  //  // var bodyParser = require('body-parser')
  //     this.app.use(bodyParser.urlencoded({extended:true}));
  //   }

   setRoutes()
   {
    this.app.use('/api/user', UserRouter);
   }

   error402Handller(){
     this.app.use((req,res)=>{
       res.status(404).json({
         message:"not found",
         status_code:404
       })
     }) 
   }

   handleErrors()
   {
     this.app.use((error,req,res,next)=>
     {
        const errorStatus=req.errorStatus || 500;
        res.status(errorStatus).json(
        {
          message:error.message||'something went wrong.Please try again',
          status_code:errorStatus
        })



     });
   }
}