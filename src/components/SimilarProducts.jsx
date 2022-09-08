import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardHome from './home/CardHome'

const SimilarProducts = ({ productInfo }) => {

    const [filterSimilar, setFilterSimilar] = useState()

    const productsAll = useSelector(state => state.products)


    useEffect(() => {

        if (productsAll) {
            const filter = productsAll?.filter(product => product.category.name === productInfo?.category)
            setFilterSimilar(filter)
        }

    }, [productInfo])



    return (
        <article className='similar-products' >
            <h3 className='similar-products__title' >Discover similar items</h3>
            <div className="home__container-card">
                {
                    filterSimilar?.map(product => {
                        if (product.title !== productInfo.title) {
                            return <CardHome
                                key={product.id}
                                product={product}
                            />
                        }
                    })
                }
            </div>
        </article>
    )
}

export default SimilarProducts