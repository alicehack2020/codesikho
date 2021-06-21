import { nextTick } from "process";

export class UserController{
    static login(req,res,next)
    {
     const error =new Error("user not found");
     next(error);
    }
}