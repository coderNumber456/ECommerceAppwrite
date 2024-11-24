import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    quantity:{s:"",m:"",l:"",xl:""},
    slug:"",
    titleSlug:"",
    navSlug:""
}

const dataSlice = createSlice({
    name:"data", 
    initialState,
     reducers:{
        getQuantity:(state,action)=>{
            state.quantity=action.payload
        },
   
         getSlug:(state,action)=>{
            state.slug=action.payload
         },

         getTitle:(state,action)=>{
            state.titleSlug=action.payload.titleSlug
         },

         getNav:(state,action)=>{
            state.navSlug=action.payload.navSlug
         }         
     }
    }
)

export const {getQuantity,getSlug,getTitle,getNav} = dataSlice.actions
export default dataSlice.reducer