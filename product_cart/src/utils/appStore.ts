import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"


const appStore = configureStore({

    reducer:{
        cart : cartReducer,
    }
})

appStore.subscribe(()=>{
    const state = appStore.getState();
    localStorage.setItem("cart",JSON.stringify(state.cart.items))
})

export default appStore;
