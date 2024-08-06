import React from 'react'
import './cart.css'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/cart'

const AfterCart = ({cartCount,productID}) => {

  const dispatch = useDispatch()

  // const {cartCount} = useSelector((state)=>state.cart)

 

  return (
    <div className='after-cart'>
      <button className='counter-btn' onClick={()=>dispatch(decrement(productID))}>-</button>
      <div className='count'>{cartCount}</div>
      <button className='counter-btn' onClick={()=>dispatch(increment(productID))}>+</button>
    </div>
  )
}

export default AfterCart
