import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const FormLogin = () => {

    const navigate = useNavigate()

    const { register, reset, handleSubmit } = useForm()

    const submit = data => {
        const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/users/login`
        axios.post(URL, data)
            .then(res => {
                navigate("/")
                localStorage.setItem("token", res.data.data.token)
            }
            )
            .catch(err => console.log(err))
        reset({
            email: "",
            password: ""
        })
    }

    return (
        <form action="" className='form-container' onSubmit={handleSubmit(submit)}>
            <h2 className='form__h2'>Welcome! Enter your email and password to continue</h2>
            <div className="form__email">
                <label htmlFor="email">Email</label>
                <input {...register("email")} type="text" id="email" className='form__input' />
            </div>
            <div className="form__password">
                <label htmlFor="password">Password</label>
                <input {...register("password")} type="password" id="password" className='form__input' />
            </div>
            <button className='form__login' >Login</button>
        </form>
    )
}

export default FormLogin