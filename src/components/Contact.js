import React from 'react'
import { Link, Outlet } from "react-router-dom";
const Contact = () => {
  return (
    <div>
    <h1>Contact</h1>
   
      <nav>
        <Link to="featured">Facebook</Link>
        <Link to="new"> Whatsapp</Link>
      </nav>
      <Outlet />
    </div>

    
  )
}

export default Contact