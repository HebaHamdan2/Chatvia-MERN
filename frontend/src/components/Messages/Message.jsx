import React, { useContext } from 'react'
import "./Message.css"
import { AuthContext } from '../../contexts/Auth.context.jsx'
import useConversation from '../../zustand/useConversation.js'
import { extractTime } from '../../utils/extractTime.js'
export default function Message({message}) {
  const {authUser}=useContext(AuthContext)
  const {selectedConversation}=useConversation();
  const fromMe=message.senderId===authUser.user._id;
  const formatedTime=extractTime(message.createdAt);
  const chatClassName=fromMe ?'msg_cotainer_send': 'msg_cotainer';
  const profilePic=fromMe ? authUser.user.profilePic : selectedConversation.profilePic;
  const MsgtimeClass=fromMe? 'msg_time_send':'msg_time';
  const sideClass=fromMe?'justify-content-end':'justify-content-start';
  const shackClass=message.shouldShake? "shake":""
  return (
 <div>
          <div className={`d-flex ${sideClass} mb-4`}>
            {!fromMe?
             <>
               <div>
              <img src={profilePic}  alt="profile"className="rounded-circle user_img_msg" />
            </div>
            <div className={`${chatClassName} ${shackClass} pb-2`}>
            {message.message}
              <span className={MsgtimeClass}>{formatedTime}</span>
            </div>
             </>
           : 
           <>
            <div className={`${chatClassName} ${shackClass} pb-2`}>
            {message.message}
              <span className={MsgtimeClass}>{formatedTime}</span>
            </div>
            <div>
              <img src={profilePic}  alt="profile"className="rounded-circle user_img_msg" />
            </div>
           </>
          }
          
          </div>
         
     
</div>

  )
}
