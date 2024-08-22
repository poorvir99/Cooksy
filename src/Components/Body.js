import React, { useEffect, useState } from "react";
import CuisineCarousel from "./CuisineCarousel";
import CuisineCards from "./CuisineCards";



const Body=()=>{
  
    const [listofCuisines,setListOfCuisines]=useState([]);
    const[listOfImages,setListOfImages]=useState([]);

    useEffect(()=>{
        getData()
      },[]);
 
    async function getData() {
        const url = "https://api.api-ninjas.com/v1/recipe?query=american";

          const response = await fetch(url,{
            headers: {
                "Content-Type": "application/json",
                'X-Api-Key': 'fiFQPKDVPpE5hqrnwkHPVQ==FtLSsV5KP4bCXMQU'
              },
          });
         
      
          const json = await response.json();
        console.log(json);
        setListOfCuisines(json);
      }

    return(
        <div className="min-h-screen bg-gradient-to-b from-[#fcf9f6] to-[#f6ebe0]">
                <hr></hr>
        <CuisineCarousel/>
        <h1 className='text-center mt-16 font-semibold text-[#e2a356] text-2xl'>Just For You</h1>
        <div className='flex flex-wrap mt-6'>
        {
        listofCuisines.map((recipe,index) => {
         return <CuisineCards key={index} resData={recipe}/>
        })}

        </div>
        {/* <div>
          {
            CUISINE_IMAGES.map((images,img)=>{
              return <CuisineCards key={img} cusImg={images}/>

            })
          }
        </div> */}
        </div>
    )
}

export default Body;