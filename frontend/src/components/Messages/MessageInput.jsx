import React, { useState } from 'react'
import useSendMessage from '../../hooks/useSendMessage.js';
export default function MessageInput() {
    const [message,setMessage]=useState("");
    const{sendMessage}=useSendMessage();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!message)return
        await sendMessage(message);
        setMessage("");
    }
  return (
        <form className="card-footer " onSubmit={handleSubmit}>
        <div className="input-group bg-transparebnt">
          <input
           className="form-control type_msg " placeholder="Type your message..." value={message} 
           onChange={(e)=>setMessage(e.target.value)}/>
          <button className="input-group-append bg-transparent p-0 border-0 m-0" type='submit'>
            <span className="  "><i className=" input-group-text send_btn fas fa-location-arrow" /></span>
          </button>
        </div>
      </form>
  )
}
