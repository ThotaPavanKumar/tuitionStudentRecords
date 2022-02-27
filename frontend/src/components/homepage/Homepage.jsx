import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import Navbar from '../navbar/Navbar'
import "./homepage.css"

function Homepage() {
  // const [data,setData] = useState([]);

const {user} = useContext(AuthContext);
console.log("user",user);

  return (
    <div className='homepage'>
      <Navbar />
      <div className='nav'></div>
    Homepage</div>
  )
}

export default Homepage