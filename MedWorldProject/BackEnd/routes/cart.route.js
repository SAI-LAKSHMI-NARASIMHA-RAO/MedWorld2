const express=require('express')
const cartroutes=express.Router()
const controller=require('../controllers/cart.controller')

cartroutes.get('/:id',controller.showCart)

cartroutes.post('/delete',controller.deleteCartItem)

module.exports=cartroutes