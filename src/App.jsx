import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import authService from './appwrite/Auth'
import { useDispatch, useSelector } from 'react-redux'
import { login , logout } from './Store/authSlice'

function App() {

  const [loading ,setLoading] = useState(false)
  const dispatch = useDispatch()
  // const myData = useSelector((state)=>state.auth.userData)

  // console.log(myData);
  

    useEffect(()=>{
      authService.getCurrentUser()
      .then((userData)=>{
        if(userData){
           dispatch(login({userData})) 
        }else{
           dispatch(logout())
        }
      }
      ).finally(
         ()=>setLoading(false)
      )
    },[])
   
  return  !loading?(
  <>
     <Header/>
     <Outlet/>
     
  </>
  ):null
}

export default App
