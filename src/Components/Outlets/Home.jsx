import React from "react";
import Card from "./Card";
import { list } from "postcss";

function Home(){


    return(
        <div className="flex flex-wrap justify-evenly items-center mt-10 ">
         <Card Title={"Mens"} Subtitle={
            {"Top-Wear":["Casual Shirts","Formal Shirts","Sweatshirts","Sweaters","Jackets","Blazers & Coats"],
            "Bottom-Wear" :["Jeans","Casual Trousers","Formal Trousers","Shorts","Track Pants & Joggers"], 
            "Foot Wear" :["Casual Shoes","Sports Shoes","Formal Shoes","Sneakers","Sandals & Floaters"]     
        }}  
         />
         <Card Title={"Women"} Subtitle={
            {"Indian & Fusion Wear":["Kurtas & Suits"," Kurtis, Tunics & Tops","Sarees","Ethnic Wear","Salwars & Churidars","Dupattas & Shawls","Dress Materials"],
            "Western-Wear" :["Dreses","Tops","T-Shirts","Jeans","Cords","Shrugs","Jackets"], 
            "Foot Wear" :["Flat","Casual Shoes","Heels","Boats","Sandals & Floaters"]     
        }}  
         />
         <Card Title={"Kids"} Subtitle={
            {"Boy":["T-Shirts","Shirts","Shorts","Sweaters","Jeans","Trousers","Clothing Sets","Ethnic Wear"],
            "Girl" :["Dresses","Tops","Formal Trousers","Tshirts","Clothing Sets"], 
            "Foot Wear" :["Casual Shoes","Sports Shoes","Sneakers","Sandals & Floaters","School Shoes", "Flat"]     
        }}  
         />
        </div>
    )
}

export default Home







