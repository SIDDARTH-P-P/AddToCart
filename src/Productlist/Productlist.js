import './productlist.css'
// import Products from '../api/api.json'
import CartButtons from '.';
import { useState } from 'react';

const Productlist = () => {
  const [product,setproduct] = useState()
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => {setproduct(data.products)})
  return (
    <section className='container'>
      {product?.map((product, key) => (
        < div div className='product-container' key={key} >
          <img src={product.images[0]} alt="" />
          <br />
          <h3>{product.title}</h3>
          <CartButtons product={product} />
        </div >
      ))}
    </section >
  )
}

export default Productlist
