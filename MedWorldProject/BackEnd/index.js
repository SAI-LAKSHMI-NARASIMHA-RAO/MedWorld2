require("dotenv").config()
const express=require('express')
const app=express();
const port=process.env.PORT;
app.use(express.json())

const mongoose=require('mongoose')

// mongoose.connect('mongodb://localhost:27017/medworld');


app.listen(port,()=>{
    console.log(`Server listening at port ${port}..`)
})