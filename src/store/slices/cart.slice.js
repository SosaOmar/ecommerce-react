import {createSlice} from "@reduxjs/toolkit"
import axios from "axios";

export const cartSlice = createSlice({
    name:"cart",
    initialState: null,
    reducers: {
        setCartGlobal: (state, action) => action.payload
    }
})

export const {setCartGlobal} = cartSlice.actions;

export const getAllProductCart = () => (dispath) => {
    const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }

    return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/cart`,config)
    .then(res => dispath(setCartGlobal(res.data.data.cart.products)))
    .catch(err => console.log(err))

}


export default cartSlice.reducer