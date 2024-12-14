import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async()=>{
    try {
        let connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("MongoDb Connected Successfully");
    } catch (error) {
        console.error("MongoDb Connection Error : ");
    }
}

export default connectDB;