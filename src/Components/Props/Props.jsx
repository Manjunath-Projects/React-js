import React from 'react'

function Props(props) {
  const {Name,age,handleClick,car}=props
  return (
    <div>
        <div>hello jii {Name} :{age} </div>
        <button onClick={handleClick}>click me </button>
        <img src={car} alt="" />
    </div>
  )
}

export default Props