import React from 'react'
import Sidebar from '../Sidebar/Sidebar.jsx'
import MessageCont from '../Messages/MessageCont.jsx'
import { Helmet } from 'react-helmet'
export default function Home() {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Chatvia</title>
               <meta name='chatvia' content='this is chats page' />
            </Helmet>
   <div className='home d-md-flex px-5 justify-content-center'>
  <Sidebar/>
  <MessageCont/>
</div>
    </>
  )}
