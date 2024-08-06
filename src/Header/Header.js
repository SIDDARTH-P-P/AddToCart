import React from 'react'
import './header.css'
import { useSelector } from 'react-redux'

const Header = () => {

  const {cartList} = useSelector((state)=>state.cart)
  console.log(cartList.length);
  return (
    <header>
        <div className='container'>
        <h1>sample store</h1>
        <div>
        <div className='cart_count'>{cartList.length}</div>
        <svg viewBox="0 0 24 24" width="64" height="64" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 4v2h10.59l-.66 6H9.41l-.31-2H5.2L4 8H2V6h2l3.2 12h11.5l2-9H7zm1 16a1.5 1.5 0 1 1-1.5-1.5A1.5 1.5 0 0 1 8 20zm10 0a1.5 1.5 0 1 1-1.5-1.5A1.5 1.5 0 0 1 18 20z" fill="white"/>
</svg>
</div>

    </div>
    </header>
  )
}

export default Header
