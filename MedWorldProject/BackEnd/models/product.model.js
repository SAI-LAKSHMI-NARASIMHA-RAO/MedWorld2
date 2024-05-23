const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    productId:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    prescriptionRequired:{
        type:Boolean,
        required:true
    }
});
const productModel = mongoose.model("product", productSchema);
module.exports = productModel;