import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import "./login.css"
import axios from "axios";


function Login() {
  const [data,setData] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("data",data);
      await axios.post("http://localhost:2345/teacher",data)
      .then((res)=> console.log(res.data))
      .catch(e => console.log(e));
  }

  const handleChange = (e) => {
      const {name,value} = e.target;
      setData({...data,[name]:value})
  }

  return (
    <div className='login'>
      <Navbar />
    <div className='forms'>
    <form onSubmit={handleSubmit}>
      <input className='inp1' placeholder='Enter the Email Id' onChange={handleChange} name="email"/>
      <br />
      <input className='inp1' placeholder='Enter the password' onChange={handleChange} name="password"/>
      <br />
      <input className='inps' type="submit"/>
    </form>
    </div>
    </div>
  )
}

export default Login