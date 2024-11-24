import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    status:false,
    flag:false,
    userData:null
}

const authSlice = createSlice({
      name:"auth",
      initialState,
      reducers:{
           
            login:(state,action)=>{
               state.status=true
               state.userData=action.payload.userData;
            },

            sellFlag:(state)=>{
               state.flag=true;
               },

            logout:(state)=>{
               state.status=false;
               state.userData=null;
               state.sellFlag=false;
            }
      }
})

export const {login ,logout,sellFlag} = authSlice.actions
export default authSlice.reducer