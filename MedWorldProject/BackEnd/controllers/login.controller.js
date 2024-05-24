const {loginModel}=require('../models/login.model')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');
// const { userModel } = require('../models/user.model');
exports.checkUser =async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password)
         res.json({message:"Email or Password cannot be empty"})
    else{
        try{
                const login=await loginModel.findOne({email:{$eq:email}})
                const originalPass=await bcrypt.compare(password,login.password)
                if(!originalPass) res.json({message:"Login Unsuccessful"})
                else {
                    // console.log(login._id.toString())
                    const token=await jwt.sign(login._id.toString(),process.env.secretkey)
                    res.status(200).json({message:"Login Successfull",token:token})
                }
        }
        catch(err){
            console.log(err)
            res.json({message:"ERROR!!!"})
        }
    }
}