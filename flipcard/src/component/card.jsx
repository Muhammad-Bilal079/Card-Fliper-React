import React from 'react'
import { useState } from 'react'
import ReactCardFlip from 'react-card-flip';

function Card({qes , ans}) {
    const[isFlipped , setisFlipped] =useState(false)

  function flipcard(){
    setisFlipped(!isFlipped)
  }
    return (
        <div style={{display:'flex'}}>
        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
        <div className='card' onClick={flipcard} >
        <h1>{qes}</h1>
        </div>
       
       <div className='cardback card' onClick={flipcard}>
        <h1>{ans}</h1>
       </div>
    
    
        </ReactCardFlip>
        </div>
      )
}

export default Card
