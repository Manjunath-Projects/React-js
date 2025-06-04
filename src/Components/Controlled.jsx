import React, { useState } from 'react'

const Controlled = () => {
   
    const [Name,setName]=useState("");
   
    function handleChange(e) {
    
    return setName(e.taget.value);
    
   }

   function handleSubmit(e) {

     e.preventDefault();

     console.log(Name);
    
   }




  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">First Name</label> <br />
            <input type="text" placeholder='enter your name ' onChange={handleChange} /> <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Controlled