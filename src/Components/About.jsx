import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>This is about page</h1>
        <Link to={"/home"}>Home</Link>
    </div>
  )
}

export default About