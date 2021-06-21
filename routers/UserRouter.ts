import { Router} from "express";
  
class UserRouter
{
    public router:Router;
constructor()
{
    this.router=Router();
    this.getRouter();
    this.postRouter();
    this.patchRouter();
    this.deleteRouter();
}

getRouter()
{
  this.router.get('/login',(req,res)=>
  {
    res.send([
      
      {
      message:"welcome",
      value:2021
    }
  ,
  [ {
    message:"welcome",
    value:2021
  },
  {
    message:"welcome",
    value:2021
  }, {
    message:"welcome",
    value:2021
  }, {
    message:"welcome",
    value:2021
  }

]


  ])
  
   });
}

postRouter()
{


}
patchRouter()
{

}

deleteRouter()
{

}




}

export default new UserRouter().router;
 