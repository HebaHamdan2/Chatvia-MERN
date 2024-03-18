import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx';
import Notfound from './components/Nofound/Notfound.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';
import Layout from './components/Layout/Layout.jsx';
import { Toaster } from 'react-hot-toast';
import { AuthContextProvider } from './contexts/Auth.context.jsx';
import Protected from './components/protected/Protected.jsx';
import SocketContextProvider from './contexts/SocketContext.jsx';
import {  useEffect } from 'react';
function App() {
  let check=localStorage.getItem('chat-user');
  let routers=createBrowserRouter([
    {path:'',element:<Layout  />, children:[
      { index: true, element:check? <Home /> :<Login/>},
      {path:'/chats',element:<Protected><Home/></Protected>},
      {path:"/login",element: <Login/>},
      {path:"/signup",element: <Signup/>},
      {path:'*',element:<Notfound/>}
    ]}
  ])
  useEffect(()=>{
  },[localStorage])
 
  return (
 <>
 <AuthContextProvider>
  <SocketContextProvider>
  <RouterProvider router={routers}>
    </RouterProvider>
  </SocketContextProvider>

 </AuthContextProvider>
   
    <Toaster/>
 </>

  );
}

export default App;
