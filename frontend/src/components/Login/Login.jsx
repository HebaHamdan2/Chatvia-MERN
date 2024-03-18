import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useLogin from '../../hooks/useLogin.js';
import "../Signup/Siginup.css"
import { Helmet } from 'react-helmet';
export default function Login() {
  const [inputs,setInputs]=useState({
    username:'',
    password:''
   })
  const{loading,login}=useLogin()
  let navigate= useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault(); 
    await login(inputs);
    navigate("../chats")
  }
  return (
   <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Login Page</title>
               <meta name='login' content='this is login page' />
            </Helmet>
<div className='login'>
  <div className="  pt-sm-5">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <div className="text-center mb-2">
            <Link to="/login" className="auth-logo mb-3 d-block">
              <img src="./assets/logo-dark.png" alt="logo" height={30} className="logo logo-dark" />
                  </Link>
            <h4>Sign in</h4>
            <p className="text-muted mb-2">Sign in to continue to Chatvia.</p>
          </div>
          <div className="cardLog">
            <div className="cardLog-body p-4">
              <div className="p-3">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="username" id="uname" className="form-control form-control-lg border-light bg-soft-light" placeholder="enter username" aria-label="Enter Username" aria-describedby="basic-addon3" 
                        value={inputs.username}
                        onChange={(e)=> setInputs({...inputs,username:e.target.value})}
                      
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="password" id="password" className="form-control form-control-lg border-light bg-soft-light" placeholder="enter password" aria-label="enter password" aria-describedby="basic-addon4"
                          value={inputs.password}
                          onChange={(e)=> setInputs({...inputs,password:e.target.value})}
                               />
                    </div>
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary waves-effect waves-light" type="submit" disabled={loading}>Sign in</button>
                  </div>
                </form>
              
              </div>
            </div>
          </div>
          <div className="mt-1 text-center">
            <p>Don't have an account ? <Link to="/signup" className="fw-medium "> Signup now </Link> </p>
            <p>© 2024 Chatvia. Created with <i class="fa-solid fa-heart text-danger"></i> by Heba
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
   </>
  )
}
