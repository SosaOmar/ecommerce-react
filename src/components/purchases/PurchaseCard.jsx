import React from 'react'
import ProductsPurchase from './ProductsPurchase'

const PurchaseCard = ({purchase}) => {
  return (
    <article className='purchase-card'>
        <h3>{purchase.updatedAt.slice(0,10)}</h3>
        {
            purchase.cart.products.map(product =>(
                <ProductsPurchase
                    key={product.id}
                    product = {product}
                />
            ))
        }
    </article>
  )
}

export default PurchaseCard