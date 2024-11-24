import React, { useState } from "react";
import Input from "../Textinput";
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
          if (userData) {
            dispatch(authSliceLogin(userData))
            dispatch(sellFlag());// takes the user data into the state and sets the auth status true
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
        <button className="mt-11 ml-2" onClick={show}>👁</button>
      </div>




    </form>
  )
}

export default SellerLogin