    import React, { useEffect, useState } from "react";
    import { Navigate, useNavigate, useParams } from "react-router-dom";
    import service from "../../appwrite/config";
    import {useSelector} from "react-redux"
    import authService from "../../appwrite/Auth";
   

    function Post(){

        const data = useParams()
        const navigate = useNavigate()
        const [post,setPost]=useState(null)
        const [image,setImage] = useState([])
        const [photo,setPhoto] =useState()  
        const [qty,setQty]=useState(1)
        const [size,setSize] =useState("S") 
        const[display,setDisplay] = useState("hidden")
        const [click,setClick] =useState("cursor-allowed")
        
        useEffect(()=>{
            if(data){
                service.getPost(data.id).then((post)=>{
                    if(post) {setPost(post)
                        setImage(post.featuredImage.split(","))
                }else(navigate("/"))
        })
    }else{
        navigate("/")
    }
    },[data,navigate])  

   
    
    const AddtoCart = async(e)=>{
        e.preventDefault()
        
        await authService.getCurrentUser().then((userData)=>{
            if(post!==null && userData!==null){
                  service.createCartdata({docId:post.$databaseId,
                  featuredImage:image[0],Color:post.Color,price:post.price,
                  quantity:qty,size:size,title:post.title,userId:userData.$id}); 
                  setDisplay("block")
                  setClick('cursor-not-allowed')
           }   
        })      
    }

  const viewCart =(e)=>{
    e.preventDefault()
    navigate("/cart")

  }
      
    return post? (
    <div className="flex mx-60 gap-10
      max-sm:flex-col max-sm:mx-0 max-sm:gap-1 max-sm:justify-center max-sm:items-center">

    <div>
    <div className="mt-10"> 
    <img src={service.getFilePreview(photo ? photo : image[0])} 
    className="h-[450px] rounded-lg" alt="p" /></div>
    <div className="h-28 w-[337.5px]  flex flex-row gap-7">
        <button onClick={()=>setPhoto(image[0])}><img src= {service.getFilePreview(image[0])} alt="Image" className="h-20"/></button>
        <button onClick={()=>setPhoto(image[1])}><img src= {service.getFilePreview(image[1])} alt="Image" className="h-20"/> </button>
        <button onClick={()=>setPhoto(image[2])}><img src= {service.getFilePreview(image[2])} alt="Image"  className="h-20"/> </button>
        <button onClick={()=>setPhoto(image[3])}><img src= {service.getFilePreview(image[3])} alt="Image"  className="h-20"/> </button>
    </div>
        </div>

    {/* Texts */}

    <div className="mt-10 w-96  max-sm:mt-4">
        <div className="flex flex-col items-start border-b-2 border-slate-500 p-5">
            <div>
                <h1 className="text-[30px] text-center font-mono">{post.BrandName}</h1>
                <span className="flex items-start">ID:{data.id}</span>
            </div>
            <div className="flex gap-10">
                <span className="text-[30px] font-mono text-[#B62026]">₹{post.price}</span>
                <span className="text-[30px]  text-[#322e2e] line-through  bg-slate-200">₹900</span>
                
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <div>
            <div>
            <p className="text-xl"> color: {post.Color}</p>
            </div>
            <div className={`h-10 w-10 bg-[${post.Color}] border-black border-[1px]`}> </div>
            </div>
            <div className="flex flex-col gap-3">
                <div> <p className="text-xl">Size:</p></div>
                <div  className="flex gap-3">
                <button className={`h-10 w-10 bg-slate-300 ${size=="S"?"border-black border-[1px]":null}`}onClick={()=>setSize("S")}>S</button> {/* // border-black border-[1px] */}
                <button className={`h-10 w-10 bg-slate-300 ${size=="M"?"border-black border-[1px]":null}`}onClick={()=>setSize("M")}>M</button>
                <button className={`h-10 w-10 bg-slate-300 ${size=="L"?"border-black border-[1px]":null}`}onClick={()=>setSize("L")}>L</button>
                <button className={`h-10 w-10 bg-slate-300 ${size=="XL"?"border-black border-[1px]":null}`}onClick={()=>setSize("XL")}>XL</button>
                </div>

                <div className=" ">
                
        <button className="h-10 w-10 bg-slate-200" 
        onClick={()=>setQty((prev)=>prev>1 ? prev-1:1)}>-</button>
        <input type="Number" className="remove-arrow h-10 w-10 text-center p-1" placeholder="1" 
        value={qty} onChange={(e)=>setQty(e.target.value)} />
        <button className="h-10 w-10 bg-slate-200"onClick={()=>setQty((prev)=>prev+1)}
        >+</button>
        </div>

        <div>
        <p>{post.description}</p>
        </div>

        <div>
        <button className={`bg-[#B62026] h-14 text-white w-96 font-mono text-lg ${click}`} 
        onClick={AddtoCart}>Add to Cart</button>
        </div>
        <div>
        <button className={`bg-[#B62026] h-14 text-white w-96 font-mono text-lg ${display}`} 
        onClick={viewCart}>View Cart</button>
        </div>

            </div>
        </div>
    </div>

    </div>
    ) :null
    }

    export default Post

    //
    // {service.getFilePreview(image[1])}
    // {service.getFilePreview(image[2])}
    // {service.getFilePreview(image[3])}

    // $collectionId
    // : 
    // "66ef9a17003941595614"
    // $createdAt
    // : 
    // "2024-10-07T09:08:17.477+00:00"
    // $databaseId
    // : 
    // "66ef99e60009548a5a89"
    // $id
    // : 
    // "6703a5010031c568bd63"
    // $permissions
    // : 
    // (3) ['read("user:66fd15d10035b6ed3e54")', 'update("user:66fd15d10035b6ed3e54")', 'delete("user:66fd15d10035b6ed3e54")']
    // $updatedAt
    // : 
    // "2024-10-10T05:55:39.027+00:00"
    // BrandName
    // : 
    // "Pan-BattiLayout"
    // Color
    // : 
    // "Gray"
    // description
    // : 
    // "Dusty Dusty shirt "
    // featuredImage
    // : 
    // "6703a4f100230c35b4a6,6703a4f70030212dd54a,6703a4fa00067e5a3b76,6703a4fd0017256dcde7"
    // price
    // : 
    // "200000"
    // quantity
    // : 
    // "{\"s\":\"12\",\"m\":\"23\",\"l\":\"23\",\"xxl\":\"23\"}"
    // slug
    // : 
    // "Mens-Top-Wear-CasualShirts"
    // title
    // : 
    // "Mast Giray clr ka shirt"
    // userId
    // : 
    // "66fd15d10035b6ed3e54"

     //docId,featuredImage,color,price,quantity,size,title
