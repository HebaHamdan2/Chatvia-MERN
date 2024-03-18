import React from 'react'
import "./Logout.css"
import useLogout from '../../hooks/useLogout.js'
export default function Logout() {
  const {loading,logout}=useLogout()
  return (
   <>
   {!loading? <div className="logout mt-auto " onClick={logout}>
   <i class=" fa-solid fa-arrow-right-from-bracket"></i>
 
   </div>:
   <span className='loading loading-spinner'></span>
   }
  
    </>  )
}
