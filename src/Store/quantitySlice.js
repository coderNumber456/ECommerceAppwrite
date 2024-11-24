import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    flag:false
}

const quantitySlice = createSlice({
      name:"quantity",
      initialState,
      reducers:{
           
            qtyFlag:(state)=>{
               state.flag=(state.flag==false?true:false)
            }    
      }
})

export const {qtyFlag} = quantitySlice.actions
export default quantitySlice.reducer