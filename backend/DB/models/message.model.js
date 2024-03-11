import mongoose, { Schema, model } from "mongoose";
const messageShema = new Schema(
  {
senderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
},
receiverId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:"true"
},
message:{
    type:String,
    required:true
}
  },
  {
    timestamps: true,
  }
);

const messageModel = mongoose.models.Message || model("Message", messageShema);
export default messageModel;
