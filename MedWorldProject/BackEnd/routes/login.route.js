const express=require('express')
const loginroutes=express.Router()
const controller=require('../controllers/login.controller')

loginroutes.post('/login',controller.checkUser)

module.exports=loginroutes;