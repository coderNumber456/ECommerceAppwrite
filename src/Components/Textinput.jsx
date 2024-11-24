import React, { useId } from "react";
import { Form } from "react-router-dom";


const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    onNumberChange,
    ...props
}, ref) {
    const id = useId()
    return (
        
        <div className="w-full ">
            {label && <label className="inline-block mb-1 pl-1"
                htmlFor="{id}">
                {label}
            </label>}
            <input type={type}
             className={`px-3 py-2 rounded-lg bg-white text-black outline-none
                focus:bg-gray-50 duration-200 border-gray-200 w-full remove-arrow text-center
                ${className}`}
                ref={ref}
                {...props}
                id={id}
                onChange={(e)=>(onNumberChange && onNumberChange(e.target.value))}
            />
        </div>
      )
    }
  )

export default Input