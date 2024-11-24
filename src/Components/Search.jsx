import React, { useState } from "react";

function Search() {

    const [Display, setDisplay] = useState(true)

    const showInput = ()=>{
        setDisplay((prev)=> !prev)
    }
       
    if (Display) { 
        return (  <div className={`h-8 w-8 px-1 `}>
        <img className=" hover:cursor-pointer  transition ease-in-out  scale-100 hover:scale-125 "
            src="https://cdn-icons-png.freepik.com/256/561/561117.png?ga=GA1.1.78569173.1725691682" alt="User" onClick={showInput} />
    </div>)
          
    }
            return (
                <div className="flex  items-center justify-center ">
                    <input type="text"
                    // placeholder="enter the search here"
                    className="h-8  w-56 z-20 bg-white outline-none p-2 border-slate-500 border-2
              rounded-xl "
                                />
                    <img src="https://cdn-icons-png.freepik.com/256/4338/4338828.png?ga=GA1.1.78569173.1725691682&semt=ais_hybrid" alt="" className=" h-6 w-6 " 
                    onClick={showInput}
                    />
                </div>
)

}

export default Search