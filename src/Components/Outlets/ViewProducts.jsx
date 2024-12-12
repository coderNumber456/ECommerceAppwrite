import react, { useEffect, useState } from "react"
import {useSelector} from "react-redux"
import Postcard   from "./Postcard"
import service from "../../appwrite/config"
import {  Link,useParams } from "react-router-dom";

function Viewproducts(){

    // const slugTitle = useSelector((state)=>state.data.titleSlug)
    // const slugItem = useSelector((state)=>state.data.navSlug)

    const {slug} = useParams()
    

     const [posts,setPosts] = useState([])
     const [document,SetDocument]=useState([])
    
      useEffect(()=>{
        const getInfo = async ()=>{
      if(posts){
       const posts = await service.getPosts([])
       if(posts){
               SetDocument(posts.documents)
             }
           }
      };getInfo()
      },[slug])          
                
      useEffect(()=>{
        const Mydoc = document.filter((doc)=>doc.slug==slug)
        if(Mydoc){  
          setPosts(Mydoc)  
        }
      },[document])           
            
    return(
        
      posts.length ? 
      <Link to={slug}>
      <div className="m-4 flex flex-wrap gap-12 max-sm:gap-4">
     {posts.map((post)=>(
         <div key={post.$id}>
          <Postcard {...post}/>
         </div>
     ))}
        
      </div>
      </Link> : <>
            <h1 className="text-6xl text-center my-44"> Oops...!! No Products yet..</h1>
      </>
    )
}

export default Viewproducts