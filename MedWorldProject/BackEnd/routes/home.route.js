const express=require('express')
const homeroutes=express.Router()
const controller=require('../controllers/product.controller')

homeroutes.get('/',controller.getHomeProduct)

homeroutes.post('/:id',controller.productSave)
module.exports=homeroutes;