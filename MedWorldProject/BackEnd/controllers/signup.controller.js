const userModel = require("../models/user.model");
const loginModel=require("../models/login.model")
exports.saveUser=async (req, res)=>{
    try {
        const { email, password,username, mobileNumber } = req.body;
        const user = await userModel.create({
            email: email,
            password:password,
            username: username,
            mobileNumber: mobileNumber,
            ordersList:[]
            
        });
        const user2=await loginModel.create({
            email:email,
            password:password
        })
        res.status(200).json({"success":"true","message":"SignUp Successful"});
    }
    catch (err) {
        res.status(404).json({"success":"false", message: "Error in inserting document to user collection" });
    }
}
