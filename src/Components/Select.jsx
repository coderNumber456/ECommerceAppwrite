import React, { useState, useContext } from "react";
import InputNumber from "./InputNumber";
import {useDispatch} from 'react-redux'
import { getQuantity } from "../Store/dataSlice";


function Select() {

  const [small, setSmall] = useState()
  const [medium, setMedium] = useState()
  const [large, setLarge] = useState()
  const [xl, setXl] = useState()
  // const [myData,setMydata] = useState({})


 
const dispatch = useDispatch()

  const setQuantity  = (e) => {
    e.preventDefault()
    console.log(medium)
    dispatch(getQuantity({s:small,m:medium,l:large,xxl:xl}))
    }
      
  return (
 
       <div className="max-sm:grid max-sm:grid-cols-2 max-sm:items-center max-sm:gap-2 max-sm:grid-rows-7
       ">


      <h3 className="font-Balsamiq 
      max-sm:col-span-2 max-sm:row-start-2 max-sm:row-end-3 text-2xl">Size and Quantity</h3>
      <br />

      <label htmlFor="" className=" mr-2 font-Balsamiq max-sm:col-start-1 max-sm:col-end-2">Small</label>
      <input type="text" value={small} onChange={(e)=>setSmall(e.target.value)} 
      className="bg-slate-100 rounded-sm  w-16 outline-none p-2 ml-2 border-b-2 border-slate-700  text-center remove-arrow "/>

      <label htmlFor="" className=" ml-2 font-Balsamiq">Medium</label>
      <input type="text" value={medium} onChange={(e)=>setMedium(e.target.value)} 
      className="bg-slate-100 rounded-sm  w-16 outline-none p-2 ml-2 border-b-2 border-slate-700 text-center remove-arrow " />

      <label htmlFor="" className=" ml-2 font-Balsamiq">Large</label>
      <input type="text" value={large} onChange={(e)=>setLarge(e.target.value)} 
      className="bg-slate-100 rounded-sm  w-16 outline-none p-2 ml-2 border-b-2 border-slate-700 text-center remove-arrow" />

      <label htmlFor="" className=" ml-2 font-Balsamiq">XL</label>
      <input type="text" value={xl} onChange={(e)=>setXl(e.target.value)}  
      className="bg-slate-100 rounded-sm  w-16 outline-none p-2 ml-2 border-b-2 border-slate-700 text-center remove-arrow" />

      <button onClick={setQuantity} 
      className="p-2 bg-gray-500 ml-2 rounded-xl hover:opacity-70 text-white 
        max-sm:col-span-2">
        Submit</button> 
 
        </div> 
    
  )
}

export default Select