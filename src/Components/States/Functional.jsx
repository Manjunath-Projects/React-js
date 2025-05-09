import React, { useState } from 'react'

const Functional = () => {

    const[count,setCount]=useState(0)

    function handleClick() {
            setCount(count+1)      
    }

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Functional