import userModel from "../../../DB/models/user.model.js";

export const getUsers=async(req,res)=>{
    try{
        const loggedInUserId=req.user._id;
        const allUsers=await userModel.find({_id:{$ne:loggedInUserId}}).select("-password")
     return res.status(200).json(allUsers)
    }catch(error){
  console.error("Error in getUsers:",error.message)
  res.status(500).json({error:"Internal server error"})
    }
}