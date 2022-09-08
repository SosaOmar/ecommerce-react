import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllProductCart } from '../../store/slices/cart.slice'
import CardHome from '../home/CardHome'
import SimilarProducts from '../SimilarProducts'
import Slicer from './Slicer'

const ProductDescription = ({ productInfo }) => {

   const dispatch = useDispatch()

    const addToCartPost = () => {
        const config = {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }

        const addProductObj = {
            id: productInfo.id,
            quantity: counter
        }
      
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/cart`
        axios.post(URL, addProductObj,config)
        .then(res => {
            console.log(res.data)
            dispatch(getAllProductCart())
        })
        .catch(err => console.log(err))

    }


    const [counter, setCounter] = useState(1)
    const handlePlus = () => {
        setCounter(counter + 1)
    }
    const handleMinus = () => {
        if (counter >= 1) {
            setCounter(counter - 1)
        }
    }




    return (
        <>
            <section className='product-desc'>
                <Slicer productInfo={productInfo} />
                <h2 className='product-desc__name'>{productInfo?.title}</h2>
                <div className="product-des__body">
                    <article className='product-des__prices'>
                        <h3 className='product-des__price-label'>Price</h3>
                        <span className='product-des__prece-value'>{productInfo?.price}</span>
                    </article>
                    <article className="product-des__quantity">
                        <h3 className='product-des__quantity-label' ></h3>
                        <div className="product-des__quantity-">
                            <button className='product-desc__quantity-btn' onClick={handleMinus}>-</button>
                            <div>{counter}</div>
                            <button className='product-desc__quantity-btn' onClick={handlePlus}>+</button>
                        </div>
                    </article>
                    <button className='product-desc__add-to-card' onClick={addToCartPost}>Add to <i className="fi fi-rr-shopping-cart-add"></i></button>
                    <p className='product-des__description'>{productInfo?.description}</p>
                </div>
            </section>
            <SimilarProducts productInfo={productInfo} />
        </>
    )
}

export default ProductDescription