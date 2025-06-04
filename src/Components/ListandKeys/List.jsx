import React from 'react'

const List = () => {
    const arr=[1,2,3,4,5]
  return (
    <div>
         <ul>
    {
        arr.map((e,i)=>(
        
            <li key={i}>{e}</li>
            
        ))
    }
        </ul>
    </div>
  )
}

export default List