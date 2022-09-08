import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardHome from '../home/CardHome'
import Search from '../home/Search'

const Home = () => {


  const products = useSelector(state => state.products)



  return (
    <div className='home'>
      <Search />
      <div className="filtro">
      </div>
      <div className="home__container-card">
        {
          products?.map(product => (
            <CardHome
              key={product.id}
              product={product}
            />
          ))
        }
      </div>

    </div>
  )
}

export default Home