require('dotenv').config()
const jwt=require('jsonwebtoken')

exports.authenticateAdmin=async (req,res,next)=>{
    const token=req.header('authorization').split(' ')[1];
    if(!token){
        res.status(401).json({access:false,mesage:"Unauthorized admin"})
    }
    jwt.verify(token,process.env.secretKey,(err,data)=>{
        const admin=userModel.findOne({userId:{$eq:data.userId}})
        if(admin.role==="admin")
            next()
    })
}