import React, { useEffect, useState } from "react";
import NavDropDown from "./NavDropdown";
import Icon from "./Icons";
import Logo from "./Logo";
import Search from "./Search";
import { NavLink,Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { login } from "../Store/authSlice";


function Header(){

    const authData  = useSelector((state)=>state.auth.userData)
    const authFlagStatus  = useSelector((state)=>state.auth.flag)
    const [status , setStatus] = useState(false)
    const [logStatus , setLogStatus] = useState(false)
    const [login,setLogin] = useState(true)


  
    useEffect(()=>{
        if(authFlagStatus==true && authData!==null){
                setStatus(true)
                setLogin(false)
                setLogStatus(true)  

        }else if (authData==null) {
            setStatus(false) 
            setLogin(true)
            setLogStatus(false)  
            
        }else if(authData!==null){
            setLogin(false)
            setLogStatus(true)
        } 
        else{
            setStatus(true)
        }
    },[authFlagStatus,authData])


      
  const Icons =[
      {
          name:"login",
          status:login,
          slug:"/login",
          link:"https://cdn-icons-png.freepik.com/256/456/456283.png",
        },
        {  
            name:"Logout",
            status:true,
            slug:"/logout",
            link:"https://cdn-icons-png.freepik.com/256/10025/10025886.png?ga=GA1.1.78569173.1725691682&semt=ais_hybrid"
        },

        //  {    
        //     name:"favroite",
        //     status:!status,
        //     slug:"/favroite",
        //     link:"https://cdn-icons-png.freepik.com/256/15356/15356639.png",
        //  },

        {  
            name:"cart",
            status:!status,
            slug:"/cart",
            link:"https://cdn-icons-png.freepik.com/256/985/985704.png"
        },

        {  
            name:"sell",
            status:status,
            slug:"/sellerform",
            link:"https://cdn.iconscout.com/icon/premium/png-512-thumb/add-2840048-2359491.png?f=webp&w=256"
        },
    ]
    return(
        <div className="
        grid 
        xl:grid-flow-col xl:justify-between
        md:grid-flow-col-dense
        sm:grid-flow-row 
        gap-3
        items-center  
         bg-[#B62026] shadow-lg
        text-[white]  font-Balsamiq  xl:px-14 xl:h-16  max-sm:px-2 ">
       
       <div className="
       flex flex-row gap-8 max-sm:justify-evenly ">
        
        <Link to={"/"}>
         <span className="p-2 rounded-xl hover:opacity-80 hover:text-black cursor-pointer">Home</span>
        </Link>
        <Link to={"/about"}>
         <span className="p-2 rounded-xl hover:opacity-80 hover:text-black cursor-pointer">About</span>
        </Link>
        <Link to={"/user"}>
         <span className="p-2 rounded-xl hover:opacity-80 hover:text-black cursor-pointer" >User</span>
        </Link>
   
         
       {/* <NavDropDown  Title={"Contact Us"} Lists={["Dress","Saree","Ethnic","Sports","Kurta"]}/>
       <NavDropDown  Title={"Account"} Lists={["Shirts","Pants","Ethnic","Woolen","Raincoats"]}/>
       <NavDropDown  Title={"About Us"} Lists={["Mens","Womens","Kids","Sports","Ethnic"]}/> */}
       </div>
       
           {/* logo */}
        <div className="flex items-center justify-center">
            <span className="xl:items-center xl:text-center xl:ml-44 ">
            <Logo/>
            </span>
           </div>

        <div className="flex xl:space-x-2 max-sm:justify-evenly max-sm:w-[355px]  
        max-lg:justify-center  max-md:justify-center justify-end  w-96 ">
            <Search/>
         {
         Icons.map((item)=>(
            item.status?(   
                <NavLink to={item.slug} key={item.name}>   
                <Icon link={item.link} props={""} />
                </NavLink>
            ):null
         ))
         } 
        </div>
        
        </div>
    )
}

export default Header