import React, { useMemo } from 'react'
import BeforeCart from './cartbuttons/beforecart';
import Aftercart from './cartbuttons/aftercart';
import { useSelector } from 'react-redux';

const CartButtons = ({product}) => {
    const {cartList} = useSelector((state)=>state.cart)

    const cartCount = useMemo(()=>{
 
      return cartList?.find((item)=>item?.id === product.id)?.count;
    },[cartList]) 

  return(
    <>   
    {cartCount > 0 ? ( 
      <Aftercart productID={product?.id} cartCount={cartCount} /> 
    ) : ( <BeforeCart product={product}/>)}
    </>
    )
  
}

export default CartButtons;
