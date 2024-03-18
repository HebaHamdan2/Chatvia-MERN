import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Siginup.css"
import GenderCheckBox from './GenderCheckBox.jsx'
import useSignup from '../../hooks/useSignup.js'
import { Helmet } from 'react-helmet'
export default function Signup() {
  const [inputs,setInputs]=useState({
   fullName:'',
   username:'',
   password:'',
   confirmPassword:'',
   gender:''
  })
  const{loading,signup}=useSignup();
  const handleCheckboxChange=(gender)=>{
    setInputs({...inputs,gender})
  }
  const handleSubmit=async(e)=>{
e.preventDefault();
   await signup(inputs);
  }
  return (
   <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Signup Page</title>
               <meta name='register' content='this is register page for chatvia' />
            </Helmet>
   <div className=' reg '>
  <div className="account-pages pt-sm-5">
    <div className="container">
      <div className="box row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5 my-3 ">
          <div className="text-center mb-2">
            <a href="/signup" className="auth-logo mb-3 d-block">
              <img src="./assets/logo-dark.png" alt="logo" height={30} className="logo logo-dark" />
                  </a>
            <h4>Sign up</h4>
            <p className="text-muted mb-2">Get your Chatvia account now.</p>
          </div>
          <div className="cardLog">
            <div className="cardLog-body">
              <div >
                <form  onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="name" id="name" className="form-control  border-light bg-soft-light" placeholder="enter your fullname" aria-label="Enter FullName" aria-describedby="basic-addon3" 
                      value={inputs.fullName}
                      onChange={(e)=> setInputs({...inputs,fullName:e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="name" id="uname" className="form-control  border-light bg-soft-light" placeholder="enter username" aria-label="Enter userName" aria-describedby="basic-addon3"
                      value={inputs.username}
                      onChange={(e)=> setInputs({...inputs,username:e.target.value})}
                     
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="password" id="password" className="form-control  border-light bg-soft-light" placeholder="enter password" aria-label="Enter Password" aria-describedby="basic-addon4" 
                      value={inputs.password}
                      onChange={(e)=> setInputs({...inputs,password:e.target.value})}
                     
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <div className="input-group mb-3 bg-soft-light rounded-3">
                      <input type="password" id="cPassword" className="form-control  border-light bg-soft-light" placeholder="confirm password" aria-label="Enter Password" aria-describedby="basic-addon4" 
                      value={inputs.confirmPassword}
                      onChange={(e)=> setInputs({...inputs,confirmPassword:e.target.value})}
                     
                      />
                    </div>
                  </div>
                
              <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
                  <div className="d-grid pt-2">
                    <button className="btn btn-primary waves-effect waves-light" type="submit" disabled={loading}>
                      Sign up</button>
                  </div>
                </form>
              
              </div>
            </div>
          </div>
          <div className="mt-1 text-center">
            <p>Already have an account ? <Link to="/login" className="fw-medium">Signin</Link> </p>
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
