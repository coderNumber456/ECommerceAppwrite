import React, { useState } from "react";
import Input from "../Comp/Textinput";
import {useForm} from"react-hook-form"
import { login, sellFlag } from "../../Store/authSlice";
import {useDispatch} from "react-redux"
import authService from "../../appwrite/Auth";
import { useNavigate } from "react-router-dom";



function CreateAcocunt() {

  const [type, setType] = useState("password")
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signUp = async (data)=>{
      setError("")
         try {
          //  console.log(data.name,data.email,data.password)
         const  userData = await authService.createAccount(data)
         console.log(userData);
          if(userData==undefined){
             const userData = await authService.getCurrentUser()
             if(userData){
              dispatch(login(userData))
              dispatch(sellFlag())
              navigate("/")
             }
          }
         } catch (error){
          console.log(error)
         }      
        }
  
    const show = (e) => {
    e.preventDefault()
    setType((prev) => prev === "password" ? "text" : "password")

  }


  return (       
    
    <form  onSubmit={handleSubmit(signUp)} className="flex justify-center">

      <div className=" flex  border-slate-400 border-2 p-4 w-96 bg-slate-200 rounded-2xl shadow-transparent mt-12"> 
        <div className="flex flex-col items-center text-center ml-14"> 
        <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register("name", {
                  required: true,
              })}
                        />
      
          <div className="flex ">
          <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                  required: true,
                  validate: {
                      matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                          "Email address must be a valid address",
                  }
              })}
                        />
        
          </div>
          <Input
            label="Password: "
            type={type}
            placeholder="Enter your password"
            {...register("password", {
                required: true,
            })}
                        />
          <Input
            label="GST Number: "
            type="text"
            placeholder="Enter your GST Number"
            {...register("GSTnumber", {
                required: true,
            })}
                        />
      <button type="submit"  className="bg-slate-700 text-slate-400 p-2 rounded-lg mt-4 hover:text-white">Create Account</button>
         </div> 
        <button className="mt-11 ml-2" onClick={show}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg></button> 
      </div> 
    

    </form>

  )

}

export default CreateAcocunt