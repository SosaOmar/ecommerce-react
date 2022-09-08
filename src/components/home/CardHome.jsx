import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllProductCart } from '../../store/slices/cart.slice'
import getConfig from '../../utils/getConfig'


const CardHome = ({ product }) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handClick = () => {
        navigate(`/product/${product.id}`)
    }

    const addProductToCart = e => {
        e.stopPropagation()
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`
        const objProduct = {
            id: product.id,
            quantity: 1
        }

        axios.post(URL, objProduct, getConfig())
            .then(res => {
                console.log(res.data)
                dispatch(getAllProductCart())
            })
            .catch(err => console.log(err))

    }

    return (
        <article className='card-home' onClick={handClick}>
            <header className='card-home__header'>
                <img className='card-home__img1' src={product.productImgs[0]} alt="" />
            </header>
            <div className="card-home__body">
                <h3 className='card-home__name'>{product.title}</h3>
                <section className='card-home__amount'>
                    <h4 className='card-home__price-label'> Price</h4>
                    <span className='card-home__price-value'>${product.price}</span>
                </section>
                <button className='card-home__btn' onClick={addProductToCart} ><i className="fi fi-rs-shopping-cart-add"></i></button>
            </div>
        </article>
    )
}

export default CardHome