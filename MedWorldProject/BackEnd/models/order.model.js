const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        auto:true,
        required:true
    },
    userId:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default:1
    },
    totalPrice:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
});
const orderModel = mongoose.model("order", orderSchema);
module.exports = {orderModel,orderSchema};