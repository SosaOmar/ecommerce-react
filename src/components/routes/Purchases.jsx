import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PurchaseCard from '../purchases/PurchaseCard'

const Purchases = () => {

  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }

    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/purchases`
    axios.get(URL, config)
      .then(res => setPurchases(res.data.data.purchases))
      .catch(err => console.log(err))
  }, [])




  return (
    <div className='purchases-container'>
      <h2>My Purchases</h2>
      <div className="purchases__card-container">
        {
          purchases?.map(purchase => (
            <PurchaseCard
              key={purchase.id}
              purchase={purchase} />
          ))
        }
      </div>
    </div>
  )
}

export default Purchases