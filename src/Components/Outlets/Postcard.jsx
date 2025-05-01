import React from "react";
import service from "../../appwrite/config";
import { json, Link } from "react-router-dom";



function Postcard({$id,BrandName,title,price,featuredImage}){

     
          const images = JSON.parse(featuredImage)
          console.log(images)
          
          console.log(images)
          const img = images.file1
       

        return(
          <div className=" bg-gray-300 h-80 w-56 flex flex-col justify-center gap-4 rounded-lg
          font-Balsamiq max-sm:w-11 max-sm:gap-2  max-sm:scale-50 max-sm:inline">
               <Link to={`/post/${$id}`}>
                <div className="h-48 w-40 max-sm:75 mt-1 mx-auto">
                    <img src={img} alt="shirt" className="h-48 w-40"/>
                </div>
               <div >
                <h1 className="text-center">{BrandName}</h1>
                <h5 className="ml-2 text-sm">{title}</h5>
                <h5 className="ml-2 text-sm">Price:₹{price}</h5>
               </div>
             </Link>
             </div>
             
        )


}

export default Postcard

