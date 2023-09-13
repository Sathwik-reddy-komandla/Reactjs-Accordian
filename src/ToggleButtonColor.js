import React, { useState } from 'react'
import './style.css';
const ToggleButtonColor = () => {

    const [backgroundColor,setBackgroundColor]=useState("white")
    const [textColor,setTextColor]=useState("#1b1b1b")
    const [buttonStyle,setButtonStyle]=useState("white")
    const handleClick =()=>{
        console.log(backgroundColor,textColor,buttonStyle)
        setBackgroundColor(backgroundColor === "white"?"#1b1b1b":"white");
        setTextColor(textColor === "#1b1b1b"?"#ffa31a":"#1b1b1b");
        setButtonStyle(buttonStyle==="white"?"#1b1b1b":"white");
        console.log("After seeting ")
        console.log(backgroundColor,textColor,buttonStyle)
    
    }
    
  return (
    <>
        <section style={{backgroundColor,color:textColor}}>
        <button 
        onClick={handleClick} 
        style={{
            backgroundColor:buttonStyle,
            color:textColor,
            border:`2px solid ${textColor}`,
        }}>
            {backgroundColor==='white'?"White Theme":"Dark Theme"}
        </button>

        <section className='content'>
            <h1>
            Welcome to<br/>
            Real World
            </h1>
        </section>
        </section>

     
    </>
  )
}

export default ToggleButtonColor