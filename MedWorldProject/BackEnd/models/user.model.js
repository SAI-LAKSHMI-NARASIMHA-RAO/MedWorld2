const mongoose = require("mongoose");
const cartModel=require("./cart.model")
const orderModel=require("./order.model")
const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:[true,"Email already exists"]
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:String,
        required:true
    },
    role:{
        type:String,
        // required:true
    },
    /*active:{
        type:Boolean,
        //required:true
    },*/
    
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'cart'
        // required:true
    },
    ordersList:{
        type:[orderModel.Schema]
    }
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;