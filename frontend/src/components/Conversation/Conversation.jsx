import React, { useContext } from 'react'
import "./Coversation.css"
import useConversation from '../../zustand/useConversation.js'
import { SocketContext } from '../../contexts/SocketContext.jsx';
export default function Conversation({conversation,lastIdx}) {
 let {selectedConversation,setSelectedConversation}=useConversation();
 const isSelected=selectedConversation?._id===conversation._id; 
 const {onlineUsers}=useContext(SocketContext)
 const isOnline=onlineUsers.includes(conversation._id)
 return (
  <>
 <div className= {`py-2 p-2 d-flex conversation  align-items-center ${isSelected? 'conv' :""}`}
 onClick={()=>setSelectedConversation(conversation)} >
  <div className= {`${isOnline ? 'avatar online' :""}`}>
  <div className="rounded  col-md-2 ">
<img src={conversation.profilePic} alt="user avatar" />
  </div>
  </div>
 
<div className="col-md-10 mx-3">
    <p className='m-0'>{conversation.fullName}</p>
</div>
</div>
  </>
  )
}
