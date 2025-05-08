import React, { useCallback, useEffect, useMemo, useState } from "react";
import service from "../../appwrite/config";
import SearchBox from "./SearchBox";

function Search(){

//   console.log("search rendered")
  
  const [data ,setData] = useState([])
  const [items , setItems] = useState([])
  const [term ,setTerm] = useState("")
  
  const handleInput = function(e){
     const inputWord = e.target.value
     setTerm(inputWord.trim())

     setTimeout(() => {
    if(inputWord ==""){
        setItems([])
    }else{
         searchItem(inputWord)
        }
    }, 3000);
        
  }

// displaying the search bar
  const [Display, setDisplay] = useState(true)
  const showInput = () => {
      setDisplay((prev) => !prev)
      setItems([])
  }

   useEffect(()=>{
    const getPosts = async()=>{
        const posts = await service.getPosts()
        if(posts.documents.length!==0){
            setData(posts.documents)

        }
    };getPosts()
   },[])

   const searchItem = useCallback((word)=>{
    const inputWord = (word.toLowerCase()).trim();

       const searchedItem =  data.filter((item)=>{
            const matchedTitle = ((item.title).toLowerCase()).includes(inputWord);
            const matchedSlug= ((item.slug).toLowerCase()).includes(inputWord);
            const matchedBrandName= ((item.BrandName).toLowerCase()).includes(inputWord);
    
            return matchedBrandName || matchedSlug || matchedTitle
        })
        console.log(searchedItem)

        if(searchedItem.length==0){
            setItems(["Item not found"])
            return
        }

        setItems(searchedItem)
 },[term])


 


    if (Display) {
        return (<div className="h-8 w-8 px-1 flex flex-col">

            <img className=" hover:cursor-pointer  transition ease-in-out  scale-100 hover:scale-125 hidden md:block"
                src="https://cdn-icons-png.freepik.com/256/561/561117.png?ga=GA1.1.78569173.1725691682" alt="User" onClick={showInput} />


            {/* only rendered in small screens */}
          
            <div className="flex  items-center justify-center md:hidden gap-2 ">
                <input type="text"
                value={term}
                 onChange={handleInput}
                    placeholder="Search here"
                    className="h-8  w-80  bg-white outline-none p-2 border-slate-500 border-2
                    rounded-xl"/>
                <img className=" hover:cursor-pointer  transition ease-in-out  scale-100 hover:scale-125 "
                    src="https://cdn-icons-png.freepik.com/256/561/561117.png?ga=GA1.1.78569173.1725691682" alt="User" />
            </div>
              <SearchBox list={items}/>
          
            
        </div>)

    }
    return (
        <div className="flex flex-col ">

        <div className="flex  items-center justify-center ">
            <input type="text"
            value={term}
            onChange={handleInput}
            placeholder="Type here example: shirt "
            className="h-8  md:w-56 z-20 bg-white outline-none p-2 border-slate-500 border-2
            rounded-xl text-slate-600" 
            />
            <img src="https://cdn-icons-png.freepik.com/256/4338/4338828.png?ga=GA1.1.78569173.1725691682&semt=ais_hybrid" alt="" className=" h-6 w-6 "
                onClick={showInput}
                />
        </div>
        <SearchBox list={items}/>
        </div>
        
    )

}

export default Search

