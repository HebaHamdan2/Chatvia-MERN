import React from 'react'
import Conversation from '../Conversation/Conversation.jsx'
import useGetConversations from '../../hooks/useGetConversation.js';
import "./Conversations.css"
export default function Conversations() {
 const {conversations}=  useGetConversations();
  return (
    <div className='py-2 conver'>
      {conversations.map((conversation,idx)=>(
 <Conversation key={conversation._id}
 conversation={conversation}
 />   ))}

    </div>
  )
}
