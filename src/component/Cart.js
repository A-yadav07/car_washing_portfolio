import React from 'react'
import img from "../asete/car-wash1.jpg";

const Cart = ({image , cartext}) => {
  return (
    <div className='cart'>
          <div className='cartimg'><img src={image} /></div>
          <div className='textimg'> {cartext} </div>
    </div>

  
  )
}


export default Cart 