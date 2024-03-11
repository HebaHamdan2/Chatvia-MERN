import jwt, { decode } from 'jsonwebtoken';
import userModel from '../../DB/models/user.model.js';
const protectRoute=async(req,res,next)=>{
    try{
        const token=req.cookies.jwt;
     if(!token){
        return res.status(401).json({error:"Unothorized - No token Provided"})
     }
     const decoded=jwt.verify(token,process.env.SECRET)
     if(! decoded){
        return res.status(401).json({error:"Unathorized - Invalid Token"})
     }
     const user=await userModel.findById(decoded.userId).select("-password");
     if(!user){
        return res.status(404).json({error:"User not found"})
     }
     req.user=user;
     next()
    }catch(error){
console.log("Error in protectRoute middleware",error.message)
res.status(500).json({error:"Internal server error"})
    }
}
export default protectRoute;