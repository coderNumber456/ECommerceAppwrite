import React from "react";
import { Form, useForm } from "react-hook-form"
import Input from "../Textinput";
import Select from "../Select";
import Dropdown from "./Dropdowns";
import { useSelector } from "react-redux";
import { getQuantity } from "../../Store/dataSlice";
import service from "../../appwrite/config";


function SellerForm({post}) {

  const itemQuantity = useSelector((state)=>state.data.quantity)
  const slugData = useSelector((state)=>state.data.slug)
  const userData  = useSelector((state)=>state.auth.userData)
 
  const quantity = JSON.stringify(itemQuantity)

  const {register,handleSubmit} = useForm({
    defaultValues:{
      BrandName:post?.BrandName||null,
      Title:post?.Title||null,
      Price:post?.Price||null,
      description:post?.description||null
    }
  })

  const CreatePost = async (data) => {
    console.log(data.Color)
      const file1 = await service.uploadFile(data.file1[0])
      const file2 = await service.uploadFile(data.file2[0])
      const file3 = await service.uploadFile(data.file3[0])
      const file4 = await service.uploadFile(data.file4[0])
      // console.log(file1,file2,file3,file4);
      
           
      if(file1,file2,file3,file4){
        // console.log(userData.$id);
        
             const fileid= `${file1.$id},${file2.$id},${file3.$id},${file4.$id}`
             data.featuredImage=fileid

             const dbPost = await service.createPost({...data, userId:userData.$id,slug:slugData,quantity:quantity})     
      }     
  }

  return (
    <form onSubmit={handleSubmit(CreatePost)} className="flex flex-wrap justify-center items-center  gap-2 mt-1 ml-4 text-center ">


      <div className="w-1/2 max-sm:w-auto">
        <Input type={"text"} label={"Brand Name"} Placeholder={"Brand Name"}
          className="mb-4 border-b-2 border-gray-200 mt-1" 
          {...register("BrandName",{
            required: true,
          })}
          />
        <Input type={"text"} label={"Title"} Placeholder={"Title"}
          className="mb-4 border-b-2 border-gray-200" 
          {...register("title", {
            required: true,
          })}/>
        <Input type={"text"} label={"Price"} Placeholder={"$100,000"}
          className="mb-4 border-b-2 border-gray-200" 
          {...register("price", {
            required: true,
          })}
          />
          
        <Input type={"textarea"} placeholder="Enter The Description" className="h-24 w-80 mb-4 mt-6 border-b-4 border-slate-700 p-4 text-slate-600 text-center"
           {...register("description", {
            required: true,
          })}
        />
         
        <Dropdown/>
        {slugData? <p>{slugData}</p>:null}
          

      </div>

      <div className="flex flex-col gap-4">
        <Select />
        {itemQuantity ? <p>S:{itemQuantity.s} M :{itemQuantity.m} L:{itemQuantity.l} XL:{itemQuantity.xxl}</p>:null}
        <div className="w-44 flex" >
        <Input type={"Text"} placeholder={"Color"}
        {...register("Color", {
          required: true,
        })} />
        </div>
        <h2 className="font-Balsamiq mt-2">Upload Images</h2>
        <Input type={"file"}
        {...register("file1", {
          required: true,
        })} />
        <Input type={"file"}  {...register("file2", {
          required: true,
        })}/>
        <Input type={"file"} 
         {...register("file3", {
          required: true,
          
        })}/> 
        <Input type={"file"} 
         {...register("file4", {
          required: true,
        })}/>
      </div>

      <div className=" ">
            <button className="bg-red-300 p-3 test-center hover:bg-red-600 rounded-xl" type="submit">
                Submit Item
            </button>
        </div>

    </form>
  )
}

export default SellerForm