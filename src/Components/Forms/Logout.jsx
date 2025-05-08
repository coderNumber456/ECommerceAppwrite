import React, { useEffect } from "react";
import { logout } from "../../Store/authSlice";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/Auth";
import { useNavigate } from "react-router-dom";

function Logout(){
 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
   setTimeout(async () => {
       const data =  await authService.logout()
       console.log("logout Data",data)
       if(data === undefined){
         dispatch(logout())
         console.log("logged out ")
         navigate("/")
       } 
   }, 1000)
    },[])
    
    return(
        <div className=" cursor-wait w-full h-96 text-center mt-40">
        <h1 className="text-5xl font-Balsamiq" >
            Loading.....
        </h1>
        </div>
    )
}

export default Logout