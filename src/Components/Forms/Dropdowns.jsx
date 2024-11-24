import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { getSlug } from "../../Store/dataSlice";



function Dropdown() {

    const [select, setSelect] = useState("Mens")
    const [Type, setType] = useState("")
    const [subType, setSubype] = useState("")

    const dispatch = useDispatch()

    const setSlug = (e) => {
        e.preventDefault()
        const val  = select.replace(/\s/g, '')
        const val1 = Type.replace(/\s/g, '')
        const val2 = subType.replace(/\s/g, '')
        const data = (`${val}-${val1}-${val2}`)

        dispatch(getSlug(data))
    }



    const Title = ["Mens", "Women", "Kids"]

    const Subtitle1 = {
        " ": [],
        "Top-Wear": ["", "Casual Shirts", "Formal Shirts", "Sweatshirts", "Sweaters", "Jackets", "Blazers & Coats"],
        "Bottom-Wear": ["", "Jeans", "Casual Trousers", "Formal Trousers", "Shorts", "Track Pants & Joggers"],
        "Foot Wear": ["", "Casual Shoes", "Sports Shoes", "Formal Shoes", "Sneakers", "Sandals & Floaters"]
    }

    const Subtitle2 = {
        " ": [],
        "Indian & Fusion Wear": ["", "Kurtas & Suits", " Kurtis, Tunics & Tops", "Sarees", "Ethnic Wear", "Salwars & Churidars", "Dupattas & Shawls", "Dress Materials"],
        "Western-Wear": ["", "Dreses", "Tops", "T-Shirts", "Jeans", "Cords", "Shrugs", "Jackets"],
        "Foot Wear": ["", "Flat", "Casual Shoes", "Heels", "Boats", "Sandals & Floaters"]
    }

    const Subtitle3 = {
        "": [],
        "Boy": ["", "T-Shirts", "Shirts", "Shorts", "Sweaters", "Jeans", "Trousers", "Clothing Sets", "Ethnic Wear"],
        "Girl": ["", "Dresses", "Tops", "Formal Trousers", "Tshirts", "Clothing Sets"],
        "Foot Wear": ["", "Casual Shoes", "Sports Shoes", "Sneakers", "Sandals & Floaters", "School Shoes", "Flat"]
    }

    return (

        <div className="w-80 flex items-center 
        max-sm:flex-col max-sm:gap-2 max-sm:w-64 max-sm:items-center max-sm:justify-center ">
        
            <h2 className="font-Balsamiqt p-2 mb-2 bg-slate-600 rounded-lg text-white mr-3">Select the Categories</h2>
            <select name="" id="" value={select} onChange={(e) => setSelect(e.target.value)} className="bg-slate-200 p-2 rounded-md">
                {Title.map((val) => <option key={val}>{val}</option>)}
            </select>

            <select name="" id="" value={Type} onChange={(e) => setType(e.target.value)}
                className="bg-slate-200 p-2 rounded-md ml-4"  >
                {select == "Mens" && Object.entries(Subtitle1).map(([key, value]) =>(
                    <option className="w-80" value={key}>{key}</option>
                ))

                }
                {select == "Women" && Object.entries(Subtitle2).map(([key, value]) => (
                    <option className="w-80" value={key}>{key}</option>))
                }
                {select == "Kids" && Object.entries(Subtitle3).map(([key, value]) => (
                    <option className="w-80" value={key}>{key}</option>))
                }
            </select >

            <select value={subType} onChange={(e) => setSubype(e.target.value)}
                className="bg-slate-200 p-2 rounded-md m-4 text-center">
                {Type == "Top-Wear" && Subtitle1["Top-Wear"].map((val) => (<option>{val}</option>))}
                {Type == "Bottom-Wear" && Subtitle1["Bottom-Wear"].map((val) => (<option>{val}</option>))}
                {Type == "Foot Wear" && Subtitle1["Foot Wear"].map((val) => (<option>{val}</option>))}
                {Type == "Indian & Fusion Wear" && Subtitle2["Indian & Fusion Wear"].map((val) => (<option>{val}</option>))}
                {Type == "Western-Wear" && Subtitle2["Western-Wear"].map((val) => (<option>{val}</option>))}
                {Type == "Foot Wear" && Subtitle2["Foot Wear"].map((val) => (<option>{val}</option>))}
                {Type == "Boy" && Subtitle3["Boy"].map((val) => (<option>{val}</option>))}
                {Type == "Girl" && Subtitle3["Girl"].map((val) => (<option>{val}</option>))}
                {Type == "Foot Wear" && Subtitle3["Foot Wear"].map((val) => (<option>{val}</option>))}

            </select>


            <button className="bg-gray-500 p-2 rounded-2xl hover:bg-red-300"
                onClick={setSlug}>Submit</button>

            {/* <span>{select}/{Type}/{subType}</span> */}



        </div>
    )
}

export default Dropdown