import axios from 'axios';
import  { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { AuthContext } from '../contexts/Auth.context.jsx';
import { useNavigate } from 'react-router-dom';

export default function useLogin() {
  const [loading,setLoading]=useState(false);
  let{setAuthUser}=useContext(AuthContext)
  let navigate= useNavigate();
  const login=async({username,password})=>{
    const success=handleInputErrors({username,password});
if(!success)return;
    setLoading(true)
    try{
        let objData={
            username,
            password
          }
          const {data}=await axios.post("/auth/login",objData).catch((err)=>{
            throw new Error(err.response.data.error)
             })
          if(data.message==="success"){
        localStorage.setItem("chat-user",JSON.stringify(data))
         setAuthUser(data)
         navigate("../chats")
      } 
    }catch(error){
        toast.error(error.message);
    }finally{
        setLoading(false)
    }
  }
  return {loading,login}
}
function handleInputErrors({username,password}){
    if( !username || !password ){
        toast.error("Please fill in all fields")
        return false;
    }
  return true;
}
