import React, { createContext, useContext, useEffect } from 'react'
import { useState } from 'react';
import { AuthContext } from './Auth.context.jsx';
import io from "socket.io-client"
export const SocketContext=createContext("");
export default function SocketContextProvider({children}) {
  const [socket,setSocket]=useState(null)
  const [onlineUsers,setOnlineUsers]=useState([])
  const {authUser}=useContext(AuthContext);
  useEffect(()=>{
    if(authUser){
        const socket=io("https://chatvia-mern.onrender.com",{
            query:{
                userId: authUser.user._id 
            }
        });
        setSocket(socket);
        socket.on("getOnlineUsers",(users)=>{
            setOnlineUsers(users)
        })
        return ()=> socket.close();
    }else{
    if(socket){
        socket.close();
        setSocket(null);
    }
    }
  },[authUser])
    return (
  <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>
  )
}
