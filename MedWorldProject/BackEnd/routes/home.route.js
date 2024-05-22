const express=require('express')
const homeroutes=express.Router()
const controller=require('../controllers/product.controller')
const cartControl=require('../controllers/cart.controller')
homeroutes.get('/',controller.getHomeProduct)

homeroutes.post('/:id',cartControl.addToCart)
module.exports=homeroutes;