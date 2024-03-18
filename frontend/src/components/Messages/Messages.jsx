import React, { useEffect, useRef } from 'react'
import Message from './Message.jsx'
import useGetMessages from '../../hooks/useGetMessages.js'
import MessageInput from './MessageInput.jsx';
import useListenMessage from '../../hooks/useListenMessage.js';

export default function Messages() {
  const {messages,loading}=useGetMessages();
  console.log(messages)
  useListenMessage()
const lastMessageRef=useRef();
useEffect(()=>{
  setTimeout(()=>{
    lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
    
  },100)
 },[messages])
  return (
    <>
     <div className=" row justify-content-center ">
      <div className="card">
      <div className="card-body msg_card_body">
      {!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}

 </div>

<MessageInput/>
</div>

</div>
     </>


  )
}
