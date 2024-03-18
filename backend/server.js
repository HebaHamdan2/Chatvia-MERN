import "dotenv/config";
import path from "path"
import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./src/modules/auth/auth.router.js"
import messageRouter from "./src/modules/message/message.router.js"
import userRouter from "./src/modules/user/user.router.js"
import connectDB from "./DB/connection.js";
import { app, server } from "./socket/socket.js";
const __dirname = path.resolve();
app.use(express.json());
app.use(cookieParser())
app.use("/auth",authRouter)
app.use("/messages",messageRouter)
app.use("/users",userRouter)
app.use(express.static(path.join(__dirname,"../frontend/build")))
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "/index.html"));
});
const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>{
    connectDB() ;
       console.log(`Server Running on  port ${PORT}`)})