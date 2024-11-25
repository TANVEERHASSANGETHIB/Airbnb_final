import express from "express"
import mongoose, { mongo } from "mongoose";




const URI=process.env.MONGO_URI;
console.log(URI);

const app = express();

mongoose.connect(URI);

mongoose.connection.once("open",()=>{
    console.log("Connected to The Database");
});


mongoose.connection.on("error",(err)=>{
    console.log("Error: ",err);
});


mongoose.connection.on("Disconnected",()=>{
    console.log("Disconnected From Database");
});



app.listen(3000,()=>{
    console.log("Server is runing at 3000 port");
});