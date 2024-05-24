const {cartModel} = require('../models/cart.model');
const {orderModel}=require('../models/order.model')
const {productModel}=require('../models/product.model');
const {userModel} = require('../models/user.model');
exports.getUserProducts=async (req,res)=>{
    const id=req.body.userId;
    try{
        const order=await orderModel.find({userId:{$eq:id}});
        if(!order) res.json({"message":"Order not found"})
        else res.status(200).json(order)
    }catch(err){
        res.json({"message":"Error in loading the order details!!"})
    }
}

exports.saveProduct=async (req,res)=>{
    const userId = req.body.userId;
    try {
        const cartItems =await cartModel.find({userId:{$eq:userId} });
        if(cartItems==[]) res.json({message:"Cart Items Not Found"})
        else{
            cartItems.forEach(element => {
                const {productName,quantity,price}=element;
                const order=new orderModel({
                    userId:userId,
                    productName:productName,
                    quantity:quantity,
                    totalPrice:(Number(quantity)*(Number(price))).toString(),
                    status:"Order Placed",
                    price:price,
                })
                order.save()
                userModel.findOneAndUpdate(
                    { _id: userId },
                    { $push: { ordersList: order } }
                ).exec();              
            });
            
            res.status(200).json({message:"Added to Order.."});      
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.placeOrder=async (req,res)=>{
    try{
        const {userId,productId}=req.body;
        console.log(userId)
        const sprod=await productModel.findOne({productId:{$eq:productId}});
        const {productName,price,quantity}=sprod;
        console.log(sprod.productName)
        const order=await orderModel.create({
            userId:userId,
            productName:productName,
            quantity:quantity,
            price:price,
            totalPrice:(Number(quantity)*Number(price)).toString(),
            status:"Placed Order",
        })
        await order.save()
        // const userToAdd=await userModel.findOne({userId:{$eq:userId}})
        await userModel.findOneAndUpdate(
            { userId: userId },
            { $push: { ordersList: order } }
        );
        res.status(200).json(order);
    }
    catch(err){res.status(404).json({message:"Error in adding order!!!"})}
}
