import React, { useState } from 'react'
import { Navigate, NavLink, useNavigate } from "react-router-dom"
import Cart from './Cart'
const Header = () => {

    const navigate = useNavigate()

    const [isCartOpen, setIsCartOpen] = useState(false)

    const isLogged = localStorage.getItem("token")

    const openOrCloseCart = () => { 
        if (isLogged) {
            setIsCartOpen(!isCartOpen) 
        } else{
            setIsCartOpen(false)
            navigate("/login")
        }
    }


    return (
        <>
            <header className='header'>
                <NavLink to="/" ><h1 className='header__logo'>e-commerce</h1></NavLink>

                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item"> <NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : ""}> <i className="fi fi-rr-user header__item__icon"></i></NavLink></li>
                        <li className="header__item"> <NavLink to="/purchases" className={({ isActive }) => isActive ? "active-link" : ""}><i className="fi fi-rr-shopping-bag header__item__icon"></i></NavLink></li>
                        <li className="header__item"> <i onClick={openOrCloseCart} className="fi fi-rr-shopping-cart header__item__icon"></i></li>
                    </ul>
                </nav>
            </header>
            <Cart isCartOpen={isCartOpen} />
        </>
    )
}

export default Header