import React from 'react'
import './Class.css'


export default function Cards(props) {
  return (
  
    <>
<div className='cards__tarif'>
    <div>{props.tarif}</div>
    <div>{props.cost}</div>
    <div>{props.gigabytes}</div>
    <div>{props.text}</div>
</div>
    </>
      

  )
}



