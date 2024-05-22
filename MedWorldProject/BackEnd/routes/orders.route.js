const express=require('express')
const orderroutes=express.Router()
const controller=require('../controllers/order.controller')

orderroutes.post('/saveOrder/:id',controller.saveProduct)
orderroutes.post('/',controller.getUserProducts)
orderroutes.post('/placaeOrder',controller.placeOrder)

module.exports=orderroutes