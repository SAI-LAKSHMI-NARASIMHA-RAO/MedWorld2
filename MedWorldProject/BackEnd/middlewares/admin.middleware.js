require('dotenv').config()
const jwt=require('jsonwebtoken')
const {userModel}=require('../models/user.model');
const { loginModel } = require('../models/login.model');
exports.authenticateAdmin=async (req,res,next)=>{
    const token=req.header('authorization').split(' ')[1];
    console.log("Token from admin ",token.id)
    if(!token){
        res.status(401).json({access:false,mesage:"Unauthorized admin"})
    }
    jwt.verify(token,process.env.secretKey,async (err,data)=>{
        const admin=await userModel.findById({_id:{$eq:data._id}})
        console.log(admin);
        if(admin.role==="admin")
            next()
    })
}