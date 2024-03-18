import React, { useState } from 'react'
import toast from 'react-hot-toast';
import useConversation from '../../zustand/useConversation.js';
import useGetConversations from '../../hooks/useGetConversation.js';

export default function SearchInput() {
  const[search,setSearch]=useState("");
  const {setSelectedConversation}=useConversation()
  const {conversations}=useGetConversations();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(search.length<3){
      return toast.error('Search term must be at least 3 characters long')
    }
    const conversation=conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch("")
    }else{toast.error("No such user found")}
  }
  return (
<form className="search-box chat-search-box gap-2 d-flex" onSubmit={handleSubmit}>
  <div className="  input-group mb-3 rounded-3">
    <button type='submit' className=" input-group-text text-muted bg-transparent " id="basic-addon1">
     <i class="fa-solid fa-magnifying-glass"></i>
    </button>
    <input type="text" className="form-control bg-transparent" id="search" placeholder="Search..." aria-label="Search messages or users" aria-describedby="basic-addon1"
   value={search}
   onChange={(e)=> setSearch(e.target.value)}  />
  </div>
</form>

  )
}
