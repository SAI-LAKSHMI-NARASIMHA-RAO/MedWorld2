const loginModel=require('../models/login.model')

exports.checkUser =async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password)
         res.json({message:"Email or Password cannot be empty"})
    else{
        try{
                const user=await loginModel.findOne({$and:[{email:{$eq:email}},{password:{$eq:password}}]})
                if(!user) res.json({message:"Login Unsuccessful"})
                else res.status(200).json({message:"Login Successfull"})
        }
        catch(err){res.json({message:"ERROR!!!"})}
    }
}