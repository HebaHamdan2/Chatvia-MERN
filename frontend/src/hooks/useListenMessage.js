import { useContext, useEffect } from "react";
import { SocketContext } from "../contexts/SocketContext.jsx";
import useConversation from "../zustand/useConversation.js";
import notificationSound from "../sounds/notification.mp3"
export default function useListenMessage() {
const {socket}=useContext(SocketContext);
const {messages,setMessages}=useConversation();
useEffect(()=>{
    socket?.on("newMessage",(newMessge)=>{
        newMessge.shouldShake=true;
        const sound=new Audio(notificationSound);
        sound.play()
        setMessages([...messages,newMessge])
    })
    return ()=> socket?.off("newMessage")
},[socket,setMessages,messages])

}
