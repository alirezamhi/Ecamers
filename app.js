import express from "express";
import dotenv from 'dotenv';

// Config
dotenv.config();

// 
const PORT = process.env.PORT
const app = express();


// Middlewares
app.use(express.json());


// Request's
app.get("/" , (req , res)=>{
    res.send("welcome");
})



app.listen(PORT , ()=>{
    console.log(`server is runnig ${PORT}`);
})