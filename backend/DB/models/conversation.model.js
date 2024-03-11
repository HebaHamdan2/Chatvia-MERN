import mongoose, { Schema, model } from "mongoose";
const conversationShema = new Schema(
  {
participants:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
],
messages:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Message",
    default:[]
  }]
  },
  {
    timestamps: true,
  }
);

const conversationModel = mongoose.models.Conversation || model("Conversation", conversationShema);
export default conversationModel;
