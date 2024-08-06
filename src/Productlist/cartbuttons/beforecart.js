import React from 'react';
import './cart.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart';

const BeforeCart = ({product}) => {
  
  const dispatch = useDispatch();

  return (
    <div className="before-cart">
      <button className="addcart" onClick={()=>dispatch(addToCart(product))}>
        Add to cart
      </button>
    </div>
  );
};

export default BeforeCart;
