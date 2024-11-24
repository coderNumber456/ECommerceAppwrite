import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, createBrowserRouter, createRoutesFromElements , RouterProvider} from "react-router-dom"
import Home from './Components/Outlets/Home.jsx'
import Login from './Components/Forms/Login.jsx'
import SellerForm from './Components/Forms/SellerForm.jsx'
import dataStore from './Store/dataStore.js'
import { Provider } from 'react-redux'
import CreateAcocunt from './Components/Forms/CreateAccount.jsx'
import SellerLogin from './Components/Forms/SellerLogin.jsx'
import Viewproducts from './Components/Outlets/ViewProducts.jsx'
import Logout from './Components/Forms/Logout.jsx'
import Post from './Components/Outlets/Post.jsx'
import Cart from './Components/Outlets/Cart.jsx'
import CompleteOrder from './Components/Forms/CompleteOrder.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<App />}>
        <Route path='' element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='sellerlogin' element={<SellerLogin/>} />
        <Route path='createaccount' element={<CreateAcocunt/>} />
        <Route path='sellerform' element={<SellerForm/>} />
        <Route path='/viewproducts/:slug' element={<Viewproducts/>} />
        <Route path='logout' element={<Logout/>} />
        <Route path='/post/:id' element={<Post/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/completeorder' element={<CompleteOrder/>} />
        </Route>
        
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={dataStore}>
     <RouterProvider router={router} />   
    </Provider>
  </StrictMode>
)
