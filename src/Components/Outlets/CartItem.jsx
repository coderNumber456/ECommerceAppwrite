import React, { useEffect } from "react";
import { useState } from "react";
import service from "../../appwrite/config";
import { useDispatch } from "react-redux";
import { qtyFlag } from "../../Store/quantitySlice";

function Cartitem({$id,title,Color,size,price,quantity,featuredImage}){

  const [qty,setQty] =useState(quantity)
  const[total,setTotal]=useState()
  const [load,setLoad] =useState(true)
  const dispatch = useDispatch()
  
  useEffect(()=>{
      setTotal(parseInt(price)*qty)  
      service.updateCartPost($id,{quantity:qty}) 
       dispatch(qtyFlag())
    },[qty,load])

    

    return(
   
        <div className="mt-4 flex justify-between text-slate-700 border-b-2 border-slate-300 pb-8">
        <div className="flex flex-wrap">
        <img src={service.getFilePreview(featuredImage)} alt="" 
        className="h-40 w-32"/>
        <div className="pl-4 my-auto w-64  max-sm:w-44 overflow-clip text-[0.9rem]">
            <h1>
             {title}
            </h1>

            <h2>
                {Color}/{size}
            </h2>
            <p>{price}</p>
        </div>
        </div>
       
       
        <div className=" ml-56 max-sm:ml-0 flex flex-col items-center ">
        
        <div className="max-sm:w-14">
        <button className="h-10 w-10 bg-slate-200" 
        onClick={()=>setQty((prev)=>prev>1 ? prev-1:1)} >-</button>
        <input type="Number" className="remove-arrow h-10 w-10 text-center p-1" placeholder="1" 
        value={qty} onChange={(e)=>setQty(e.target.value)} />
        <button className="h-10 w-10 bg-slate-200"onClick={()=>setQty((prev)=>prev+1)}
              >+</button>
        </div>
        <button className="hover:scale-105 hover:underline"
         onClick={(e)=>service.deleteCartPost($id) && setLoad((prev)=>!prev) } >remove</button>
     </div>

     <div className="w-10 ">   
        <span className="w-10">{total}</span>
     </div>
       
    </div>
    )
}

export default Cartitem



// $collectionId
// : 
// "67092b8800227158f18d"
// $createdAt
// : 
// "2024-10-11T15:26:53.687+00:00"
// $databaseId
// : 
// "66ef99e60009548a5a89"
// $id
// : 
// "670943bd001f2eca780e"
// $permissions
// : 
// (3) ['read("user:7975737790")', 'update("user:7975737790")', 'delete("user:7975737790")']
// $updatedAt
// : 
// "2024-10-11T15:26:53.687+00:00"
// Color
// : 
// "black"
// docId
// : 
// "66ef99e60009548a5a89"
// featuredImage
// : 
// "6707bd73001a67d95773"
// price
// : 
// "725"
// quantity
// : 
// 1
// size
// : 
// "S"
// title
// : 
// "Cotton Round Neck Full Sleeve T-shirt"
// userId
// : 
// "7975737790"