import React from 'react'
// import "./Body.css"
import styles from "./Body.module.css"
import image  from "../.././assets/smile.png";


const Body = () => {
    // const bodystyle={
    //     backgroundColor : "red",
    //     height : "100px",
    //     width : "100px"
    // }
  return (
    <div>
        <div className={styles.box}>hello from body </div>
        <img src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/201207/ninja-zx-10r-right-side-view.jpeg?isig=0" alt="" />
        <img src={image} alt="" srcset="" />
        {/* <div className='body1'>hello from body 1</div> */}
    </div>
  )
}

export default Body