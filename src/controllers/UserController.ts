export class UserController{
    static login(req,res)
    {
        res.send(req.query);
        // res.send(req.body);
    }
}