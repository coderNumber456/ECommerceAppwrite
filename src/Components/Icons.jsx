import React from "react";

function Icon ({link , props}){


    return (
        <div className={`h-8 w-8 px-1   ${props}`}>
            <img className=" hover:cursor-pointer transition ease-in-out  scale-100 hover:scale-125"
             src={link} alt="User" />
        </div>
    )
    
}

export default Icon