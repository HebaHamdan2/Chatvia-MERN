import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./src/modules/auth/auth.router.js"
import messageRouter from "./src/modules/message/message.router.js"
import userRouter from "./src/modules/user/user.router.js"
import connectDB from "./DB/connection.js";
const app = express();
app.use(express.json());
app.use(cookieParser())
app.use("/auth",authRouter)
app.use("/messages",messageRouter)
app.use("/users",userRouter)
const PORT = process.env.PORT || 6000;
app.listen(PORT,()=>{
    connectDB() ;
       console.log(`Server Running on  port ${PORT}`)})