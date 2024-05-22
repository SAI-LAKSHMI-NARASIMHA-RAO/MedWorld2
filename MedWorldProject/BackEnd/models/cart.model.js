const mongoose = require("mongoose");
const userModel=require("./user.model")

const cartSchema = mongoose.Schema({
    cartItemID:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:String,
        required:true
    },
});
const cartModel = mongoose.model("cart", cartSchema);
module.exports = cartModel;