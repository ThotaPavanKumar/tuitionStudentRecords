import React, { useContext, useRef, useState } from 'react'
import Navbar from '../navbar/Navbar'
import "./login.css"
// import axios from "axios";
import { makeLogin } from '../../loginhandler';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';


function Login() {
  const {dispatch,user} = useContext(AuthContext);
  // const [data,setData] = useState();
  const email = useRef();
  const password = useRef();


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("data",data);
    console.log(email.current.value,password.current.value);
    makeLogin({email:email.current.value,password :password.current.value},
      dispatch)
     
      // .then((res)=> console.log(res.data))
      // .catch(e => console.log(e));
  }

  // const handleChange = (e) => {
  //     const {name,value} = e.target;
  //     setData({...data,[name]:value})
  // }
  console.log("user",user);
  if(user) {
    return <Navigate to="/" />
  }
  return (
    <div className='login'>
      <Navbar />
    <div className='forms'>
    <form onSubmit={handleSubmit}>
      <input className='inp1' ref={email} placeholder='Enter the Email Id'  name="email"/>
      <br />
      <input className='inp1' ref={password}  placeholder='Enter the password'  name="password"/>
      <br />
      <input className='inps' type="submit"/>
    </form>
    </div>
    </div>
  )
}

export default Login