import react, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import service from "../../appwrite/config"
import { Link, useParams } from "react-router-dom";

const PostCard = react.lazy(() => import("./Postcard"))

function Viewproducts() {

  // const slugTitle = useSelector((state)=>state.data.titleSlug)
  // const slugItem = useSelector((state)=>state.data.navSlug)

  const { slug } = useParams()


  const [posts, setPosts] = useState([])
  const [document, SetDocument] = useState([])
  const [message, setMessage] = useState("Loading .....")

  useEffect(() => {
    const getInfo = async () => {
      if (posts) {
        const posts = await service.getPosts([])

        if (posts) {
          SetDocument(posts.documents)
        }
      }
    }; getInfo()
  }, [slug])

  useEffect(() => {
    const Mydoc = document.filter((doc) => doc.slug == slug)
    setPosts(Mydoc)
  }, [document])

   setTimeout(()=>{
      setMessage("No Products Available under this section Kindly check Other section ..")
   },5000)

  return (
    
   posts.length===0 ? <div className=" flex justify-center items-center h-[400px] text-xl  md:text-4xl ">
      <h1 className="w-56 md:w-auto">{message}</h1>
    </div> : 
      <div className="m-4 flex flex-wrap justify-around  gap-5 md:gap-12 md:justify-start">
        <react.Suspense fallback={<div>Loading.....</div>}>
          {posts.map((post) => (
        <Link to={slug}>
            <div key={post.$id}>
              <PostCard {...post}  key={post.$id}/>
            </div>
        </Link>
          ))}
        </react.Suspense>
      </div>

  )
}

export default Viewproducts