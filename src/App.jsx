import { useEffect, useState } from 'react'
import './App.css'
import { Routes, Route, NavLink } from "react-router-dom"
import Home from './components/routes/Home'
import ProductDetail from './components/routes/ProductDetail'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { getAllProducts } from "./store/slices/products.slice"
import ProtectedRoutes from './components/routes/ProtectedRoutes'
import Cart from './components/shared/Cart'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users`
    const data = {
      firstName:"omarsosaso",
      lastName:"omarsosaso",
      email:"omarsosasos@gmail.com",
      password:"0987654321s",
      phone:"1234567891",
      role:"Naaaaaa"
    }
    axios.post(URL, data)
    .then( res => console.log(res.data))
    .catch(err => console.log(err))
  }, [])



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path='/purchases' element={<Purchases/>} />
          <Route path='/cart' element={<Cart/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
