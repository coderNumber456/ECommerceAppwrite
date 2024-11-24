import React, { useId } from "react";

const InputNumber =React.forwardRef(function Input({Label,Type, Placeholder,
    onNumberChange,Number,props
},ref){
    const id=useId()
    return(
        <div className="text-slate-600 mt-2">
            {Label && <label htmlFor="{id}" className="block mb-1 pl-1 font-Balsamiq ">
                {Label}</label>
            }
            <input type={Type}
            placeholder={Placeholder}
            onChange={(e)=>(onNumberChange && onNumberChange(e.target.value))}
            value={Number}
            ref={ref}
            id={id}
            className={`bg-gray-1 00 rounded-sm p-4 outline-none font-Balsamiq  border-b-2 border-black
             w-60 text-center  focus:bg-gray-50 duration-200 remove-arrow `}/>

             
        </div>

        
    )
})

export default InputNumber