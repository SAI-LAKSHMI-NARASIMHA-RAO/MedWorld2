const mongoose = require("mongoose");
const cartModel=require("./cart.model")
const orderModel=require("./order.model")
const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
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
    active:{
        type:Boolean,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    cart:{
        type:cartModel, 
        required:true
    },
    ordersList:{
        type:[orderModel]
    }
});
const userModel = mongoose.model("user", userSchema);
module.exports = userModel;