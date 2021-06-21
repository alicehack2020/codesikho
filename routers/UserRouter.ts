import { Router} from "express";
import { UserController } from "../src/controllers/UserController";
  
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
  
  this.router.post('/login',UserController.login); 
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
 