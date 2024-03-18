import React from 'react'
import SearchInput from '../SearchInput/SearchInput.jsx'
import Logout from '../Logout/Logout.jsx'
import Conversations from '../Conversations/Conversations.jsx'
import "./Sidebar.css"
export default function Sidebar() {
  return (
<div className='sidebar col-lg-4 col-md-6 col-sm-12'>
<h2>Chats</h2>
<SearchInput/>
   <Conversations/>
   
   <Logout/>

  
   </div>
  )
}
