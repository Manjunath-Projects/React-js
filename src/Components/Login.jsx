import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <h1>This is the login page</h1>
        <Link to={"/home"}>Home</Link>
    </div>
  )
}

export default Login