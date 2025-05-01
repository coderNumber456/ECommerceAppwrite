import React from "react";
import service from "../../appwrite/config";
import { json, Link } from "react-router-dom";



function Postcard({$id,BrandName,title,price,featuredImage}){

          const images = JSON.parse(featuredImage)
          const img = images.file1;
       

        return(
          <div className=" bg-gray-300   flex flex-col justify-center gap-4 rounded-lg
          font-Balsamiq h-52 w-28 md:h-80 md:w-56">
               <Link to={`/post/${$id}`}>
                <div className="h-28 w-20  md:h-48  md:w-40 mt-1 mx-auto">
                    <img src={img} alt="shirt" className=" h-28 w-20  md:h-48 md:w-40"/>
                </div>
               <div className="text-[0.8rem] md:text-[0.95rem]" >
                <p className="text-center">{BrandName}</p>
                <p className="ml-2 ">{title}</p>
                <p className="ml-2 ">Price:₹{price}</p>
               </div>
             </Link>
             </div>
             
        )


}

export default Postcard

