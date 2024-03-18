import  { useState } from 'react'
import useConversation from '../zustand/useConversation.js';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function useSendMessage() {
    const[loading,setLoading]=useState(false);
    const {messages,setMessages,selectedConversation}=useConversation()
    const sendMessage=async(message)=>{
        setLoading(true);
        try{
            let objData={
               message
              }
 const {data}=await axios.post(`/messages/send/${selectedConversation._id}`,objData)
 console.log(data)
 if(data.error){
    throw new Error(data.error);
 }
    setMessages([...messages,data])
    console.log(messages)
        
}catch(error){
            toast.error(error.message)
        }finally{
            setLoading(false);
        }
    }
  return {sendMessage,loading}
}
