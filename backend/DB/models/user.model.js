import mongoose, { Schema, model } from "mongoose";
const userShema = new Schema(
  {
    fullName: {
      type: String,
      required: true
    },
   username:{
    type:String,
    required:true,
    unique:true
   },
    password: {
      type: String,
      required: true,
      minlength:6
    },
    gender: {
      type: String,
      required:true,
      enum: ["male", "female"],
    },
  profilePic:{
    type:String,
    default:""
  }
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.models.User || model("User", userShema);
export default userModel;
