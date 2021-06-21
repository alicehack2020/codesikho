import * as express from 'express'; 
 
import * as mongoose from 'mongoose';
import UserRouter from '../routers/UserRouter';
 
export class Server
{
   public app:express.Application=express();
   constructor(){
       this.setConfiguration();
       this.setRoutes();
    
   }

   setConfiguration()
   {
     this.setMongodb();
   }




   setMongodb()
   {
    mongoose.connect('mongodb+srv://User:User@1234@mangodb.zle8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log("mongoose connected");
    })
    
   }




   setRoutes()
   {
    this.app.use('/api/user', UserRouter);
   }
}