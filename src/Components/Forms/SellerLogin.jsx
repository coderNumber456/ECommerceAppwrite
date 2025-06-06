import React, { useState } from "react";
import Input from "../Comp/Textinput";
import { useForm } from "react-hook-form";
import { useDispatch ,useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import authService from "../../appwrite/Auth";
import { login as authSliceLogin , sellFlag } from "../../Store/authSlice";
import authSlice  from "../../Store/authSlice";




function SellerLogin() {

  const [type, setType] = useState("password")
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  

  const login = async(data) => {
   try {
      const session = await authService.login(data)
      if (session == undefined) {
          const userData = await authService.getCurrentUser()
          // console.log(userData)
          if (userData) {
            dispatch(authSliceLogin(userData))
            dispatch(sellFlag(true));// takes the user data into the state and sets the auth status true
          navigate("/")}
      }
     }
      catch (error) {
        console.log(error)
     }
  }



  const show = (e) => {
    e.preventDefault()
    setType((prev) => prev === "password" ? "text" : "password")

  }
  return (
    <form onSubmit={handleSubmit(login)} className="flex justify-center">

      <div className=" flex  border-slate-400 border-2 p-4 w-96 bg-slate-200 rounded-2xl shadow-transparent mt-12">
        <div className="flex flex-col items-center text-center ml-14">


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

          <button type="submit" className="bg-slate-700 text-slate-400 p-2 rounded-lg mt-4 hover:text-white">Login</button>

          <NavLink to={"/createaccount"}>
            <button className="bg-slate-600 text-white font-Balsamiq p-3 rounded-lg mt-2
              hover:opacity-75">
              Sign-Up</button>
          </NavLink>

        </div>
        <button className="mt-0 ml-2" onClick={show}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg></button>
      </div>

    </form>
  )
}

export default SellerLogin