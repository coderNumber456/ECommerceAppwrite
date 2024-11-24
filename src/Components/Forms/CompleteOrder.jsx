import React, { useEffect, useState } from "react";
import Input from "../Textinput";
import authService from "../../appwrite/Auth";
import service from "../../appwrite/config";

function CompleteOrder() {

    const [data, setData] = useState([])

    useEffect(()=>{

        const getItems= async()=>{
          const userInfo = await authService.getCurrentUser()
          const orderItems= await service.listCart(userInfo.$id)
            if(orderItems){
                setData(orderItems.documents)
            }
        };getItems()         
    },[])

    let myVal = Number
    if (data.length !== 0) {
        const arr = []
        for (let i = 0; i < data.length; i++) {
            arr.push((parseInt(data[i].price) * parseInt(data[i].quantity)))
        }
        myVal = arr.reduce((acc, val) => (acc += val))
    }

    const States = ["State", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]

    return (
        <>
            <div className="font-Mono xl:w-[80%]  m-8 mx-auto bg-[#ebb5b9] p-3 text-[#5b161a] rounded-2xl
        flex  gap-5 shadow-xl shadow-red-400  
        max-sm:flex-col   max-sm:mx-auto  max-sm:w-80 max-sm:items-center ">

                {/* <h1 className=" text-3xl pb-5">Delivery</h1> */}
                <div className="w-96 mt-2 max-sm:w-72 flex flex-col gap-3">
                    <Input type={"text"} label={"Name"} className={"border-slate-400 border-2 text-start"} />
                    <Input type={"number"} label={"Phone Number"} className={"border-slate-400 border-2 text-start"} />
                    <div>
                        <label htmlFor="" className="mt-4">Address</label>
                        <textarea placeholder="Enter Address" cols={47} rows={5} className="outline-none p-2
               border-slate-400 border-2 rounded-lg max-sm:w-72" />
                    </div>
                </div>
                <div>
                    <div className=" flex max-sm:flex-col gap-3 mt-10 ">

                        <Input type={"text"} placeholder={"City"} />
                        <select className="outline-none rounded-md p-2 text-black text-center">
                            {States.map((val) => (
                                <option key={val} value={val}>{val}</option>
                            ))}
                        </select>
                        <Input type={"text"} placeholder={"Pincode"} />


                    </div>
                    <div className="mt-4 ml-2">
                        {data.map((item) => (
                            <div className="flex max-sm:flex-wrap gap-2 border-b-2 border-[#5b161a] p-2 ">
                                <div className="h-20 w-14">
                                    <img src={service.getFilePreview(item.featuredImage)} alt="Img" /></div>
                                <div className="relative mt-4">
                                    <p className="text-[1rem]">{item.title}</p>
                                    <p>{item.Color} / {item.size} /qty:{item.quantity}</p>
                                    <p className="ml-96  max-sm:ml-44">₹ {item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="m-2">
                        <p className="ml-[412px] max-sm:ml-56">Total : ₹ {myVal}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center ">
                <button className="h-8 w-40 mx-auto bg-[#5b161a] text-center items-center rounded-xl text-[#ebb5b9] shadow-sm shadow-slate-300">Complete Order</button>
            </div>

        </>
    )
}
export default CompleteOrder

// authService.getCurrentUser().then((post) => {
//     service.listCart(post.$id).then((post) => {
//         setData(post.documents)
//      }
//     )
//  }
// )

