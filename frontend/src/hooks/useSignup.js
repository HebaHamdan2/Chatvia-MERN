import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../contexts/Auth.context.jsx";
import { useNavigate } from "react-router-dom";

export default function useSignup() {
const [loading,setLoading]=useState(false);
const {setAuthUser}=useContext(AuthContext);
let navigate= useNavigate();
const signup=async({fullName,username,password,confirmPassword,gender})=>{
const success=handleInputErrors({fullName,username,password,confirmPassword,gender});
if(!success)return;
setLoading(true)

  try{
    let objData={
      fullName,
      username,
      password,
      confirmPassword,
      gender
    }
    const {data}=await axios.post("/auth/signup",objData).catch((err)=>{
      throw new Error(err.response.data.error)
       })
    if(data.message==="success"){
  localStorage.setItem("chat-user",JSON.stringify(data))
   setAuthUser(data)
   navigate("../chats")
}

  } catch(error){
    toast.error(error.message);
  }finally{
    setLoading(false)
  }

}
return {loading,signup};
};
function handleInputErrors({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword ||!gender){
        toast.error("Please fill in all fields")
        return false;
    }
    if(password!==confirmPassword){
        toast.error('Passwords do not match');
        return false;
    }
  if(password.length<6){
    toast.error('Password must be at least 6 characters');
    return false;
  }
  return true;
}
