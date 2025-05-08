import React from "react";
import { useState } from "react";

function NavDropDown({Title="NA", Lists=[]}) {

  const [Display, SetDisplay] = useState("hidden")
  const Viewlist = () => {
    SetDisplay((prev) => !prev)
  }
  const Clear = () => {
    SetDisplay("hidden")
  }
  return (
    <>
      <div className=' flex-col row-span-1  p-4' >

        <div className=' py-4 px-0  hover:border-solid hover:border-b-2 
                hover:cursor-pointer' onMouseOver={Viewlist} onMouseOut={Clear}  >
          {Title} 
        </div>
         
        <div className={` bg-pink-50  z-10  absolute  text-sm p-2 w-[71px] 
                  Transform 2s ease-in ${Display} border-solid border-t-2 
              border-slate-500 rounded-b-md text-center hover:cursor-pointer w-auto ` }
          onMouseOver={Viewlist} onMouseOut={Clear}>

         {
          Lists.map((val)=> <p className=" hover:text-red-800 py-2 " key={val}>{val}</p>)
         }
           
             </div>
        

      </div>

    </>
  )
}

export default NavDropDown