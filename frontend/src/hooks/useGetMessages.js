import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation.js";
import toast from "react-hot-toast";
import axios from "axios";

export default function useGetMessages() {
    const [loading,setLoading]=useState(false);
    const {messages,setMessages,selectedConversation}=useConversation();

    useEffect(()=>{
    const getMessages=async()=>{
        setLoading(true);
        try{
          const {data}=await axios.get(`/messages/${selectedConversation._id}`);
          if(data.error){
            throw new Error(data.error)
          }  
          setMessages(data)
        }catch(error){
            toast.error(error.message)
        }finally{
            setLoading(false);
        }
    }
    if(selectedConversation?._id)getMessages()
    },[selectedConversation?._id,setMessages])
  return {messages,loading}
}
