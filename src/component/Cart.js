import React from 'react'

const Cart = ({image , cartext}) => {
  return (
    <div className='cart'>
          <div className='cartimg'><img src={image} /></div>
          <div className='textimg'> {cartext} </div>
    </div>

  
  )
}


export default Cart 