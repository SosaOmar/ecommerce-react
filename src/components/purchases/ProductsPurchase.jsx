import React from 'react'

const ProductsPurchase = ({product}) => {

  return (
    <section className='products-purchase'>
        <h5>{product.title}</h5>
        <p>{product.productsInCart.quantity}</p>
        <p>$ {product.price}</p>
    </section>
  )
}

export default ProductsPurchase