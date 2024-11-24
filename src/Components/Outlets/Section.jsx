import {React,useState,useEffect} from "react";
import { NavLink ,useNavigate,Link} from "react-router-dom";
import {useDispatch} from "react-redux"
import { getNav } from "../../Store/dataSlice";


function Section({Subtitle,list=[],Title}){

     const [data ,setData] = useState()
     const [slugVal,setSlugVal] = useState()
     const navigate = useNavigate()
     const dispatch = useDispatch()

     useEffect(()=>{
     
            if(data!==undefined){
                setSlugVal(data)
            }    
     
     },[data])

     if(slugVal!==undefined){
     dispatch(getNav(slugVal))
    
    //  navigate("/viewproducts")
     }


    

    return (

        <div className="flex flex-col items-center">
            <h2 className=" font-Balsamiq text-[#373738] text-xl">{Subtitle}</h2>
           
            <ul className="font-Balsamiq text-[#373738] flex flex-col items-center mt-3">
                {list.map((val)=>(
                     <Link to={`/viewproducts/${Title.replace(/\s/g, '')}-${Subtitle.replace(/\s/g, '')}-${val.replace(/\s/g, '')}`} key={val}>
                    <li className="hover:text-red-700" key={val}>{val}</li> 
                    </Link>
                ))}
            </ul>
             
        </div>
        )
       }

export default Section

// onClick={()=>setData(`${Subtitle}/${val}