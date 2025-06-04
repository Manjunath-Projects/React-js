import React,{useEffect,useState} from 'react'

const Useeffect = () => {
    const [count,setCount] = useState(0)
    const [total,setTotal] = useState(0)
    useEffect(()=>{
        alert("hello")
    },[count,total])
    function handleclick(){
        setCount(count+1)
    }
    function handleclick1(){
        setTotal(total+1)
    }
  return (
    <div>
<h1>Count:{count}</h1>
<button onClick={handleclick}>click-me</button>
<h1>Total:{total}</h1>
<button onClick={handleclick1}>click-me</button>
</div>
  )
}

export default Useeffect