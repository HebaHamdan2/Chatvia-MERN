import conversationModel from "../../../DB/models/conversation.model.js";
import messageModel from "../../../DB/models/message.model.js";

export const sendMessage=async(req,res)=>{
try{
 const {message}=req.body;
 const {id:receiverId}=req.params;
 const senderId=req.user._id;
 let conversation=await conversationModel.findOne({
    participants:{$all:[senderId,receiverId]}
 })
 if(!conversation){
    conversation=await conversationModel.create({
        participants:[senderId,receiverId],
    })
 }
 const newMessage=new messageModel({
    senderId,
    receiverId,
    message
 })
 if(newMessage){
 conversation.messages.push(newMessage._id);   
 }
 //SOCKET
 await Promise.all([conversation.save(),newMessage.save()])//to work in parallel
 return res.status(201).json(newMessage)

}catch(error){
    console.log("Error in sendMessage controller",error.message);
    res.status(500).json({error:"Internal server error"})
}
}
export const getMessages=async(req,res)=>{
    try{
    const {id:userToChatId}=req.params;
    const senderId=req.user._id;
    const conversation=await conversationModel.findOne({
        participants:{$all :[senderId,userToChatId]}
    }).populate("messages")
    if(!conversation){
        return res.status(200).json([])
    }
    const messages=conversation.messages;
    return res.status(200).json(messages)
    }catch(error){
        console.log("Error in sendMessage controller",error.message);
        res.status(500).json({error:"Internal server error"})
    
    }
}