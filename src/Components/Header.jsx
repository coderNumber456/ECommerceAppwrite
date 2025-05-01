import React, { useEffect, useState } from "react";
import NavDropDown from "./NavDropdown";
import Icon from "./Icons";
import Logo from "./Logo";
import Search from "./Search";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { login } from "../Store/authSlice";


function Header() {

    const authData = useSelector((state) => state.auth.userData)
    const authFlagStatus = useSelector((state) => state.auth.flag)
    const [status, setStatus] = useState(false)
    const [logStatus, setLogStatus] = useState(false)
    const [login, setLogin] = useState(true)
    const [display,setDisplay] = useState(false)



    useEffect(() => {
        if (authFlagStatus == true && authData !== null) {
            setStatus(true)
            setLogin(false)
            setLogStatus(true)

        } else if (authData == null) {
            setStatus(false)
            setLogin(true)
            setLogStatus(false)

        } else if (authData !== null) {
            setLogin(false)
            setLogStatus(true)
        }
        else {
            setStatus(true)
        }
    }, [authFlagStatus, authData])



    const Icons = [
        {
            name: "login",
            status: login,
            slug: "/login",
            link: "https://cdn-icons-png.freepik.com/256/456/456283.png",
        },
        {
            name: "Logout",
            status: true,
            slug: "/logout",
            link: "https://cdn-icons-png.freepik.com/256/10025/10025886.png?ga=GA1.1.78569173.1725691682&semt=ais_hybrid"
        },

        //  {    
        //     name:"favroite",
        //     status:!status,
        //     slug:"/favroite",
        //     link:"https://cdn-icons-png.freepik.com/256/15356/15356639.png",
        //  },

        {
            name: "cart",
            status: !status,
            slug: "/cart",
            link: "https://cdn-icons-png.freepik.com/256/985/985704.png"
        },

        {
            name: "sell",
            status: status,
            slug: "/sellerform",
            link: "https://cdn.iconscout.com/icon/premium/png-512-thumb/add-2840048-2359491.png?f=webp&w=256"
        },
    ]

    const showNav = function(){
        setDisplay((prev)=>!prev)
    }
    return (
        <div>

        <div className=" bg-[#B62026] shadow-lg
        text-[white]  font-Balsamiq  flex justify-around md:h-12 items-center md:py-2  " >

            <div className=" 
      hidden md:flex md:flex-row md:gap-8 ">

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
                    <Logo />
                </span>
            </div>

            <div className=" hidden md:flex md:space-x-2 
             md:justify-end  md:w-96 ">
                <Search />
                {
                    Icons.map((item) => (
                        item.status ? (
                            <NavLink to={item.slug} key={item.name}>
                                <Icon link={item.link} props={""} />
                            </NavLink>
                        ) : null
                    ))
                }
            </div>
            <div className="md:hidden">
               
                  <section className="flex gap-2">
                  
                  {
                      Icons.map((item) => (
                          item.status ? (
                              <NavLink to={item.slug} key={item.name}>
                                  <Icon link={item.link} props={""} />
                              </NavLink>
                          ) : null
                      ))
                  }

              </section>
               
            </div>

        </div>
        <div className="flex  md:hidden justify-between items-center bg-slate-200 ">

        
           <div className="ml-2" onClick={showNav}>
           <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#140102"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" /></svg>
           </div>
         
            <div className="mr-28">
            <Search />
            </div>
                
        </div>     
 

  {/* only for small screens */}
       { display ===true ?  <div className=" absolute flex flex-col md:hidden bg-slate-200 rounded-b-md 
       w-24 gap-3 ">
        <Link to={"/"}>
                    <span className="p-2  rounded-xl hover:opacity-80 hover:text-red-600 cursor-pointer">Home</span>
                </Link>
                <Link to={"/about"}>
                    <span className="p-2 rounded-xl hover:opacity-80 hover:text-red-600 cursor-pointer">About</span>
                </Link>
                <Link to={"/user"}>
                    <span className="p-2 pb-4 rounded-xl hover:opacity-80 hover:text-red-600 cursor-pointer" >User</span>
                </Link>

        </div>  : null}
    </div>
    )
}

export default Header