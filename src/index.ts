import * as express from 'express';
import * as mongoose from 'mongoose';
let app:express.Application=express();
app.listen(5000,()=>
{
    console.log("Server is running at port 5000");
});


mongoose.connect('mongodb+srv://User:User@1234@mangodb.zle8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("mongoose connected");
})





app.use(function(req,res,next){
console.log("middleware");
next
 
});

app.get('/login',(req,res)=>{
res.json(
    [{
        name:"mangesh",
        age:35
    },
    {
        name:"mangesh",
        age:35
    },
    {
        name:"mangesh",
        age:35
    }]
)
});
