import React, { useEffect, useMemo } from "react"
import { useState } from "react"
import service from "../../appwrite/config"
import authService from "../../appwrite/Auth"
import Cartitem from "./CartItem"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"


function Cart() {

    const [data, setData] = useState([])
    const [total,setTotal]=useState(Number)
    const navigate = useNavigate()
    const slug = useParams()
    const qtyData = useSelector((state)=>state.quantity.flag)
    
    //  console.log(qtyData)
useEffect(()=>{
    const getCart = async () => {
        const post = await authService.getCurrentUser()
        if (post == null) {
            navigate("/login")
        }
        const cartData = await service.listCart(post.$id)
        
        if (cartData) {
            setData(cartData.documents)
        }
      };getCart()
},[slug,qtyData])
    
    const totalValue = useMemo(()=>{
        if (data.length !== 0) {
            const arr = []
            for (let i = 0; i < data.length; i++) {
                arr.push((parseInt(data[i].price) * parseInt(data[i].quantity)))
            }
          const sum = arr.reduce((acc, val) => (acc += val))
          
            return sum   
        }
    },[qtyData,data])

        useEffect(()=>{
         const totalAmount = totalValue
         setTotal(totalAmount)
        },[qtyData,data])


return (

    <div className=" mx-44 my-14  max-sm:mx-0 max-sm:my-0 max-sm:scale-75">
        <h1 className=" text-center text-xl font-mono">CART</h1>
        <div> 
            <div className="flex justify-between mt-10 max-sm:mt-0 font-mono border-b-2 border-slate-500
            p-4 text-slate-500">
                <p className="w-96">Product</p>
                <p className="w-56 ml-96 max-sm:ml-40">Quantity</p>
                <p className="max-sm:ml-4">Total</p>

            </div>
            {/* Cart Items */}
            {data.map((post) => (
                <Cartitem {...post} key={post.$id} />
            ))
            }
        </div>

        <div className="bg-slate-100 w-64 ml-[800px] max-sm:ml-7  mt-[50px] px-7 py-6 h-28 flex flex-col gap-3 ">
            <h1 className="text-center text-xl"> Total : {total}</h1>
            <Link to={"/completeorder"}>
                <button className="bg-red-700 p-2">Check-Out</button>
            </Link> 
        </div>

    </div>
)
}

export default Cart

