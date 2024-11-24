import {configureStore} from "@reduxjs/toolkit"
import dataSlice from "./dataSlice"
import authSlice from "./authSlice"
import quantitySlice from "./quantitySlice"

const dataStore = configureStore({
    reducer : {
          data:dataSlice,
          auth:authSlice,
          quantity:quantitySlice
    }
})

export default dataStore





