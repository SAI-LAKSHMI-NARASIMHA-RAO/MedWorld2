const express=require('express')
const adminroutes=express.Router()
const controller=require('../controllers/product.controller')

adminroutes.get('/',controller.getProduct)

adminroutes.post('/addProduct',controller.productSave)

adminroutes.get('/delete/:id',controller.productDelete)

adminroutes.get('/product/:id',controller.getProductData)

adminroutes.post('/productEdit/:id',controller.productEditSave)

module.exports=adminroutes