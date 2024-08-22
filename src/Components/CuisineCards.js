import React from 'react'
import { CUISINE_IMAGES } from "../utils/constants";

const CuisineCards = (props) => {
  const {resData}=props;
  const {servings,title}=resData;
  return (
    <div className='m-[20px] ml-[70px] p-4 w-[275px] bg-[#e4b782] rounded-sm hover:bg-[#e2a356]'>
        {/* <img src={MeeGorengIndianStyle} alt="food1" className=''/>  */}
        {
        CUISINE_IMAGES.map((images,index)=>{
              return <img src={images.src} key={index} alt="Make sure to include a alt tag, because react might throw an error at build"/>
            })
          }
        <h3 className='mt-4 font-semibold'>{title}</h3>
        <h4 className='font-light'>{servings}</h4>
    </div>
  )
}

export default CuisineCards