import React from 'react'
import { Link } from 'react-router-dom'

import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
          
       <div><Link to="/">Home</Link></div>
       <div><Link to="/detailspage">Student Details</Link></div>
       <div><Link to="/login">Login</Link></div>
       <div><Link to="/register">Register</Link></div>
    </div>
  )
}

export default Navbar