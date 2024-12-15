import connectDB from "./db/index.js";
import dotenv from "dotenv"
import app from "./app.js"

dotenv.config({
    path : "./env"
})

const port = process.env.PORT || 8000;

connectDB()
.then(()=>{
    app.listen(port || 8000, ()=>{
        console.log(`servre started running at port ${port}`);
    });
})
.catch((error)=>{
    console.log("MongoDb Connection Failed " + error);
})

