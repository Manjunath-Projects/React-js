import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>This is Home Page</h1>
        <Link to={"/about"}>About</Link>
        <Link to={"/login"}>Login</Link>
    </div>
  )
}

export default Home