import React, { useState ,useEffect } from "react";
import Section from "./Section";
import { NavLink } from "react-router-dom";
import {useDispatch} from "react-redux"
import { getTitle } from "../../Store/dataSlice";


function Card({Title,Subtitle}) {

const [display , setDisplay ] = useState("hidden")
const [value ,setValue] = useState()
const [titleValue ,setTitleValue] = useState()
const dispatch = useDispatch()
  
   const getData =(e)=>{
        e.preventDefault()
        setValue(Title)
   }

   useEffect(()=>{
      if(value!==undefined){
        setTitleValue(value)
      }
   },[value])

   if(titleValue!==undefined){
    dispatch(getTitle(titleValue))
}

   const ShowList = ()=>{
    setDisplay((prev)=>!prev)    
   }

   const Clear = ()=>{ 
       setDisplay("hidden")
} 
    return (
        <div className="bg-[#f2f2f2] shadow-l shadow-red-100 cursor-pointer h-auto w-96 p-4 rounded-md mx-14 my-7  "
        onMouseEnter={ShowList} onMouseLeave={Clear} onClick={getData}>
            
            <h1 className="text-center p-3 font-Balsamiq text-[#6c293d] text-2xl
            transition-transform duration-700 ">{Title}</h1>
            <div className={`flex flex-wrap gap-4  justify-evenly truncate ${display} animate-stretch
           `}>
            {Object.entries(Subtitle).map(([key ,val])=>(
                
                <Section Subtitle={key} list={val}  key={key} Title={Title}  /> 

                ))
            }
             
            </div>
        </div>
    )
}

export default Card
