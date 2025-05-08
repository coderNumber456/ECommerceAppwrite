import React, { useState } from "react"
import { Link } from "react-router-dom";


function SearchBox({list=[]})  {



      console.log("box rendered")

    if(list[0]==="Item not found"){
       return <div className="mt-2 ml-[-100px] md:ml-0 md:mt-10 z-10  justify-center md:absolute  text-slate-500  p-4 w-60 flex ">
       <p>Not Found</p>
   </div>
    }

return(
    list.length!==0 &&  
    <div className=" mt-10 ml-[-100px] md:ml-0  md:mt-10 z-10 absolute text-yellow-950 bg-white p-5 border-slate-500 border-2 rounded-xl">
            <ul>
            {list.map((item)=>(
                <Link to={`/post/${item.$id}`}>
               <li key={item.$id} className="p-2 border-2 rounded-xl border-orange-800 m-1"> {`${item.BrandName} ,  ${item.title}`}</li>
                </Link>
            ))}
            </ul>
        </div>
    
)

}
export default React.memo(SearchBox);



