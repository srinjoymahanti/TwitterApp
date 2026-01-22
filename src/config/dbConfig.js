import mongoose from "mongoose";
import { MONGODB_URL } from "./serverConfig.js";

export default async function connectDB(){
    try{
        await mongoose.connect(MONGODB_URL);
        console.log("Connected to DB successfully");
    }catch(err){
        console.log("Error connecting to DB");
        console.log(err);
    }
}