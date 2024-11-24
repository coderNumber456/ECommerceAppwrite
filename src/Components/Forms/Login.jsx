import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../Textinput"
import { Form, useForm } from "react-hook-form";
import InputNumber from "../InputNumber";
import authService from "../../appwrite/Auth";
import { useDispatch } from "react-redux";
import { login } from "../../Store/authSlice";


function Login() {

  const [Display, setDisplay] = useState("hidden")
  const [Number, setNumber] = useState([])
  const [Text, setText] = useState("")
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()



  useEffect(() => {
    if (Number.length == 10) {
      setText("")
      setDisplay("block")
    }
    if (Number.length > 10 || Number.length < 10) {
      setDisplay("hidden")
      setText("Enter 10 digit Number")
    }
  }, [Number])

  const SendOtp = async (e) => {
    e.preventDefault()
    const phone = "+91" + Number
    const data = await authService.CustomerLogin({ userId: Number, phone: phone })
    // if (data == undefined) {
    //   await authService.getCurrentUser()
    // }
  }

  const VerifyOtp = async (data) => {
    const userData = await authService.OtpVerification(Number, data.secret)
    if (userData == undefined) {
      const userData = await authService.getCurrentUser()
      console.log(userData);
      if (userData) {
        dispatch(login(userData))
        navigate("/")
      }
    }
  }

    return (

    <div className="bg-gray-50  h-96 w-full flex justify-center items-center mt-4 ">
      <div className="flex flex-col items-center gap-3 bg-slate-200 w-96 p-4 rounded-md ">


        <InputNumber Type={"Number"} Placeholder={"Enter Your Mobile Number"}
          Length={10} Number={Number} onNumberChange={(num) => setNumber(num)}
        />

        <button onClick={SendOtp} className={`bg-red-500 font-Balsamiq text-white 
            p-2 rounded-lg hover:bg-red-300 hover:text-slate-700 ${Display}`}>Send Otp</button>

        <form onSubmit={handleSubmit(VerifyOtp)}>

          <Input Type={"Number"} Placeholder={"Enter OTP"}

            {...register("secret", {
              required: true,
            })} />
          <button type="submit" className={`bg-red-500 font-Balsamiq text-white 
            p-2 rounded-lg hover:bg-red-300 hover:text-slate-700 mx-auto mt-4
             ${Display}`}>Submit Otp</button>
        </form>


        <p>{Text}</p>

        <span className="font-Balsamiq text-2xl ">or</span>
        <NavLink to={"/sellerlogin"}>
          <button className="bg-slate-600 text-white font-Balsamiq p-3 rounded-lg
              hover:opacity-75">
            Login/Sign-Up as Seller</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Login

