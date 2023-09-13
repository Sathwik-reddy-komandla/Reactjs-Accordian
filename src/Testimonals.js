import React, { useState } from 'react'
import './style.css';
const Testimonals = () => {
  const [currentIndex,setCurrentIndex]=useState(0)

  const testimonials=[
    {
    quote:"This is the best product I've ever used!",
    author:"Jane Doe"
  },
  {
    quote:"I Highly recommend this product",
    author:"John Snow"
  },
  {
    quote:"This is the best product I've ever used!",
    author:"Jane Doe"
  }
  ]

  const handleNext=()=>{
    setCurrentIndex(
      (currentIndex+testimonials.length+1)%testimonials.length
      )
  }
  const handlePrev=()=>{
    setCurrentIndex(
      ( (currentIndex+testimonials.length-1)%testimonials.length)
      )
  }
  
  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className='testimonials-author'>
        - {testimonials[currentIndex].author}
      </div>
    <h1>{currentIndex}</h1>
 <testimonials className="testimonials-nav">
  <button onClick={()=>handlePrev()}>Prev</button>
  <button onClick={()=>handleNext()}>Next</button>
 </testimonials>

    </div> 
  )
}

export default Testimonals