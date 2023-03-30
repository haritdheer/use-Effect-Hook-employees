import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  return (
    <div>
    <h1>404 not found</h1>
   <button onClick={()=>navigate('app')}>Go Back to Home</button> 
    </div>
  )
}

export default Error

// https://dev.to/adidoshi/react-router-dom-v6-51j2 