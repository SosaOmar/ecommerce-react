import axios from 'axios';
import React from 'react'
import { useDispatch } from 'react-redux';
import { getAllProductCart } from '../../store/slices/cart.slice';
import getConfig from '../../utils/getConfig';

const ProductCartInfo = ({ productInCart }) => {

    const dispatch = useDispatch()

    const deleteProductFromCart = () => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${productInCart.id}`
        axios.delete(URL, getConfig())
            .then(res => {
                dispatch(getAllProductCart())
            })
            .catch(err => console.log(err))
    }

    return (
        <article className='cart-item'>
            <header className='cart-item__header'>
                <h3 className='brand'>{productInCart.brand}</h3>
                <h4 className='cart__subtitle'>{productInCart.title}</h4>
            </header>
            <div className="cart-item__details">
                <p className='cart-item__price'>${productInCart.price}</p>
                <span className="cart-item__quantity">{productInCart.productsInCart.quantity}</span>
                <span>Total: <strong>{productInCart.productsInCart.quantity * productInCart.price}</strong></span>
            </div>
            <div className="delete">
            <button className='cart-item__delete' onClick={deleteProductFromCart} ><i class="fi fi-rr-trash"></i></button>
            </div>
        </article>
    )
}

export default ProductCartInfo