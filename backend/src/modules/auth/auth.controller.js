import userModel from "../../../DB/models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../../utils/generateToken.js";
export const signup=async(req,res)=>{
  try{
    const {fullName,username,password,confirmPassword,gender}=req.body;
   if(password!==confirmPassword){
    return res.status(400).json({error:"Passwords don't match"});
   }
   let user =await userModel.findOne({username});
   if(user){
    return res.status(400).json({error:"Username already exists"});
   }

   const hashedPassword = bcrypt.hashSync(
    password,
    parseInt(process.env.SALT_ROUND)
  );
   const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`;
   const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`;
     user= await userModel.create({
    fullName,
    username,
    password:hashedPassword,
    gender,
    profilePic:gender==="male"? boyProfilePic :girlProfilePic
})
if(user){
 generateToken(user._id,res);
await user.save();
return res.status(201).json({message:"success",user})
}else{
    res.status(400).json({message:"Invalid user data"});
}
}catch(error){
console.log("Error in siginup controller",error.message);
res.status(500).json({error:"Internal server Error"})  
}
}
export const login=async(req,res)=>{
try{
    const {username,password}=req.body;
    const user=await userModel.findOne({username});
    const isPasswordCorrect=await bcrypt.compare(password,user?.password || "");
    if( !user || !isPasswordCorrect){
        return res.status(400).json({error:"Invalid username or password"});
    }
    generateToken(user._id,res);
    res.status(200).json({message:"success",user});
}catch(error){
    console.log("Error in siginup controller",error.message);
    res.status(500).json({error:"Internal server Error"})        
}
}
export const logout=(req,res)=>{
try{
res.cookie("jwt","",{maxAge:0})
return res.status(200).json({message:"logged out successfully"})
}catch(error){
    console.log("Error in siginup controller",error.message);
    res.status(500).json({error:"Internal server Error"})  
    
}
}