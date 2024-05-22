const cartModel = require('../models/cart.model');
const productModel = require('../models/product.model');

exports.addToCart = async (req, res) => {
    const productId = req.params.id; 
    const userId = req.user._id; 

    try {
        const product = await productModel.findOne({ productId });
        if (!product) 
            return res.status(404).json({ message: "Product not found" });
        const pricePerItem = product.price;
        const cartItem = await cartModel.create({
            cartItemID: productId,
            userId: userId,
            productName: product.name,
            quantity: req.body.quantity,
            price: (Number(req.body.quantity) * Number(pricePerItem)).toString()
        });

        return res.status(201).json({ message: "Item added to cart successfully", cartItem });
    } 
    catch(error) {
        console.error("Error adding item to cart:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}


exports.showCart = async (req, res) => {
    const userId = req.user.id;
    try {
        const cartItems = await cartModel.find({ userId });
        return res.status(200).json(cartItems);
    }
    catch (error) {
        console.error("Error fetching cart items:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

exports.deleteCartItem = async (req, res) => {
    const userId = req.user.id; 
    const cartItemId = req.params.id; 

    try {
        const cartItem = await cartModel.findOneAndDelete({ _id: cartItemId, userId });
        if (!cartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }


        return res.status(200).json({ message: "Cart item deleted successfully" });
    } 
    catch (error) {
        console.error("Error deleting cart item:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}
