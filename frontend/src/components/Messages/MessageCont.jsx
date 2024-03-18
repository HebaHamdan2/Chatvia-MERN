import React, { useContext, useEffect } from 'react'
import Messages from './Messages.jsx'
import useConversation from '../../zustand/useConversation.js';
import { AuthContext } from '../../contexts/Auth.context.jsx';

export default function MessageCont() {
  const{selectedConversation,setSelectedConversation}=useConversation()
  useEffect(()=>{
    return ()=>setSelectedConversation(null)
  },[])
  return (
  <div className='messages col-lg-8 col-md-6 col-sm-12 '>
  {!selectedConversation?<NoChatSelected/>: 
  <>
   <div className="px-4 pt-4 mb-0">
      <span className='header'>To: <span className='headername'>{selectedConversation.fullName}</span></span>
    </div>

    <Messages/>
  </>
  }

  </div>
  )
}
const NoChatSelected=()=>{
  const {authUser}=useContext(AuthContext)
  const uname=  authUser?.user.fullName 
  
  return (
    <div className='d-flex items-center justify-content-center align-items-center text-align-center'>
      <div className="px-4 pt-5 text-center">
        <p>Welcome {uname} !</p>
        <p>Select a chat to start messaging</p>

      </div>
    </div>
  )
}
