require('dotenv').config()
const jwt=require('jsonwebtoken')
const {cartModel} = require('../models/cart.model');
const {productModel} = require('../models/product.model');
const {userModel}=require('../models/user.model')
exports.addToCart = async (req, res) => {
    const productId = req.params.id; 
    // const token=req.header('authorization').split(' ')[1];
    // const user=await userModel.findById(jwt.verify(token,process.env.secretKey).toString())
    const userId=req.body.userId;
    // console.log(user)
    //const userId = user._id.toString(); 
    try {
        const product = await productModel.findOne({ productId:{$eq:productId} });
        if (!product) 
            return res.status(404).json({ message: "Product not found" });
        const pricePerItem = product.price;
        const cartFind=await cartModel.findOne({userId:userId});
        if(cartFind){
            const idx=cartFind.items.findIndex((c)=>c.cartItemID===productId)
            if(idx!==-1){
                cartFind.items[idx].quantity+=req.body.quantity;
            }
            else{
                cartFind.items.push({
                cartItemID: productId,
                productName: product.productName,
                quantity:(req.body.quantity),
                        price: (Number(product.quantity) * Number(pricePerItem)).toString(),
                        prescription: product.prescriptionRequired
                    })
                    
            }
            await cartFind.save()
            return res.status(201).json({message:"Updated cart"})
        }
        else{
            const cartItem = await cartModel.create({
                userId: userId,
            });
            cartItem.items.push({
                cartItemID: productId,
                productName: product.productName,
                quantity:(req.body.quantity),
                price: (Number(product.quantity) * Number(pricePerItem)).toString(),
                prescription: product.prescriptionRequired
            })
            await cartItem.save()
            return res.status(201).json({ message: "Item added to cart successfully", cartItem });
        }
    } 
    catch(error) {
        console.error("Error adding item to cart:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


exports.showCart = async (req, res) => {
    const userId = req.body.userId;
    try {
        const cartItems = await cartModel.findOne({userId:userId});
        // console.log(cartItems.items)
        return res.status(200).json(cartItems.items);
    }
    catch (error) {
        console.error("Error fetching cart items:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

exports.deleteCartItem = async (req, res) => {
    const userId = req.body.userId; 
    const cartItemId = req.params.id; 
    try {
        const cart = await cartModel.findOne({userId:{$eq:userId}});
        if (!cart) {
            return res.status(404).json({ message: "Cart item not found" });
        }
        else{
            const idx=cart.items.findIndex(citem=>citem.cartItemID==cartItemId)
            if(idx==-1) res.status(404).json({message:"Item not fount in cart"})
            else{
                cart.items.splice(idx,1);
                await cart.save()
                res.status(200).json({ message: "Cart item deleted successfully" });
            }          
        }
    } 
    catch (error) {
        console.error("Error deleting cart item:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
