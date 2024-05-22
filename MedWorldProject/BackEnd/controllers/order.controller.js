const cartModel = require('../models/cart.model');
const orderModel=require('../models/order.model')
exports.getUserProducts=async (req,res)=>{
    const id=req.params.id;
    try{
        const order=await orderModel.findOne({productId:{$eq:id}});
        if(!order) res.json({"message":"Order not found"})
        else res.status(200).json(order)
    }catch(err){
        res.json({"message":"Error in loading the order details!!"})
    }
}

exports.saveProduct=async (req,res)=>{
    const userId = req.user.id;
    try {
        const cartItems = await cartModel.find({ userId });
        if(!cartItems) res.json({message:"Cart Items Not Found"})
        else return res.status(200).json(cartItems);
    }
    catch (error) {
        // console.error("Error fetching cart items:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

exports.placeOrder=async (req,res)=>{
    try{
        const {orderId,userId,ProductName,quantity,totalPrice,Status,Price}=req.body;
        const order=orderModel.create({
            orderId:orderId,
            userId:userId,
            ProductName:ProductName,
            quantity:quantity,
            totalPrice:totalPrice,
            Status:Status,
            Price:Price
        })
        res.status(200).json(order);
    }
    catch(err){res.status(404).json({message:"Error in adding order!!!"})}
}
