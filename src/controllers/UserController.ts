import User from '../models/user';
export class UserController{
    static login(req,res,next)
    {
       // res.send(req.query);
        // res.send(req.body);
        console.log(req.body);

        console.log(req.body.email);

        console.log(req.body.password);

        

       const email=req.body.email;
       const password=req.body.password;


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