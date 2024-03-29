const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
const port=process.env.PORT 
app.use(cors());
//body parser middleware
app.use(express.json())
const connectToDb=require("./config/connectToDb");
connectToDb();
app.get("/",(req,res)=>{
    res.json({hello:"helloworld"})
})

app.listen(port,()=>{
    console.log("listening on port 3000");
})

