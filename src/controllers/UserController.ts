import User from '../models/user';
export class UserController{
    static login(req,res,next)
    {
       // res.send(req.query);
        // res.send(req.body);

       const email=req.query.email;
       const password=req.query.password;

       const user=new User({email:email,password:password});
    
       user.save().then((user)=>
       {
        res.send(user);

       }).catch(err=>
        {
           next(err);
       })

    }
}