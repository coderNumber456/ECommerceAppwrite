import React, { useState } from "react";
import Input from "../Textinput";
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
        <button className="mt-11 ml-2" onClick={show}>👁</button> 
      </div> 
    

    </form>

  )

}

export default CreateAcocunt