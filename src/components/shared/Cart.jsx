import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCartGlobal } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'
import ProductCartInfo from '../Cart/ProductCartInfo'

const Cart = ({ isCartOpen }) => {

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)

  const postPurchase = () => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/purchases`

    const objPurchase = {
      street: "lolaboa",
      colony: "loladrone",
      zipCode: 12345,
      city: "estamosperdidasperdidasperdidas",
      references: "doblandolacurva",
    }

    axios.post(URL, objPurchase, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(setCartGlobal(null))
      })
      .catch(err => console.log(err))
  }

  let totalPricePurchase = 0

  if (cart) {
    const cb = (acc, cv) => {
      return acc + (cv.price * cv.productsInCart.quantity)
    }

    totalPricePurchase = cart.reduce(cb, 0)
  }


  return (
    <div className={isCartOpen ? "open-cart" : "close-cart"} >
      <h3 className='cart-cart'>Carrito de compras</h3>
      <div className="car-items-total">
        {
          cart?.map(productInCart => (
            <ProductCartInfo
              key={productInCart.id}
              productInCart={productInCart}
            />
          ))
        }
      </div>
      {
        cart ?
          <footer>
            <span className='cart__total-price'>Total: <strong>${totalPricePurchase}</strong></span>
          </footer> :
          <h3>El carrito esta vacio</h3>
      }
      <div className="purchase">
        <button className='cart__btn-checkout' onClick={postPurchase}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart