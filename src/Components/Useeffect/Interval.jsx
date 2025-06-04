import React, {useEffect,useState} from 'react'
// import { preview } from 'vite';

const Interval = () => {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        setInterval(()=>{
            setCount(prevCount=>prevCount+1);
        },1000);
        return () =>clearInterval(interval);
    }, []);
    
    // function handleClick()
    // {
    //  setCount(0)
    // }
  return (
    <div>
        <h1>Timer:{count}</h1>
        <button onClick={handleClick}>reset</button>
    </div>
  )
}

export default Interval