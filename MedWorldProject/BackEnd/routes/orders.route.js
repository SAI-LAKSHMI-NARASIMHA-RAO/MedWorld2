const express=require('express')
const orderroutes=express.Router()
const controller=require('../controllers/order.controller')

orderroutes.post('/saveOrder',controller.saveProduct)
orderroutes.post('/',controller.getUserProducts)
orderroutes.post('/placeOrder',controller.placeOrder)

module.exports=orderroutes