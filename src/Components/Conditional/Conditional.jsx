import React, { useState } from 'react'

const Conditional = () => {
    
    //  const[isLoggedin , setIsLoggedIn]=useState(false)
     const[count,setCount]=useState(0)
    
        function handleClick() {
            if(count===0){
                setCount(count+1)    
            }
            else{
                setCount(count-1)
            }
        }
  return (
    <div>
        {count?"Logged in":"Logged out"}<br></br>
        <button onClick={handleClick}>Click-me</button>
    </div>
  )
}

export default Conditional