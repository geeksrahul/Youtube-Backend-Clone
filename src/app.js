import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials : true,
}));

// to limit data comes from json 
app.use(express.json({
    limit: "16kb"
}));

// to limit data comes from url
app.use(express.urlencoded({
    extended: true, limit : "16kb"
}));

// to make public directory 
app.use(express.static("public"));

// for setting and retriveing client's browser cookies from server
app.use(cookieParser());

import userRouter from "./routes/user.routes.js"

app.use("/api/v1/users", userRouter);

export default app;