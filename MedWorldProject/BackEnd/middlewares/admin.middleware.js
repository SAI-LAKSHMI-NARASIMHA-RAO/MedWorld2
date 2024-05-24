require('dotenv').config()
const jwt=require('jsonwebtoken')
const {userModel}=require('../models/user.model');
const { loginModel } = require('../models/login.model');
exports.authenticateAdmin=async (req,res,next)=>{
    const token=req.header('authorization').split(' ')[1];
    if(!token){
        res.status(401).json({access:false,mesage:"Unauthorized admin"})
    }
    jwt.verify(token,process.env.secretKey,async (err,data)=>{
        const admin=await userModel.findOne({_id:{$eq:data._id}})
        if(admin.role==="admin")
            next()
    })
}