import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AMERICAN_CUISINE,ITALIAN_CUISINE,ASIAN_CUISINE,FRENCH_CUISINE,INDIAN_CUISINE,CHINESE_CUISINE,GERMAN_CUISINE,KOREAN_CUISINE,SWEDISH_CUISINE,HUNGARIAN_CUISINE,BRAZILIAN_CUISINE } from "../utils/constants";
import {MEDITERRANEAN_CUISINE,GREEK_CUISINE,ENGLISH_CUISINE,SPANISH_CUISINE,THAI_CUISINE,MOROCCAN_CUISINE,IRISH_CUISINE,JAPANESE_CUISINE,HAWAIIAN_CUISINE,PORTUGESE_CUISINE} from "../utils/constants";


const CuisineCarousel=()=>{
    // function SampleNextArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //       <div
    //         className={className}
    //         style={{ ...style, display: "block", background: "#e2a356" }}
    //         onClick={onClick}
    //       />
    //     );
    //   }
      
    //   function SamplePrevArrow(props) {
    //     const { className, style, onClick } = props;
    //     return (
    //       <div
    //         className={className}
    //         style={{ ...style, display: "block", background: "#e2a356" }}
    //         onClick={onClick}
    //       />
    //     );
    //   }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 3,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
      };
    return(
        <div className="ml-1 ">
        <h1 className="text-center pt-14 font-semibold text-[#e2a356] text-3xl">
        What are your favorite cuisines?
        </h1>
           <div className=" relative mx-10 ">    {/* no-scrollbar overflow-x-scroll :-webkit-scrollbar display: none */}
           <Slider {...settings} > 
           <img src={AMERICAN_CUISINE} alt="american" className="w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14 "/>
           <img src={ITALIAN_CUISINE} alt="italian" className="w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14 "/>
           <img src={ASIAN_CUISINE} alt="asian" className=" w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={FRENCH_CUISINE} alt="french" className=" w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={INDIAN_CUISINE} alt="indian" className=" w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={CHINESE_CUISINE} alt="chinese" className=" w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={MEDITERRANEAN_CUISINE} alt="mediterranean" className=" w-40 h-40 rounded-full p-2 object-cover mx-5 mt-14"/>
           <img src={GREEK_CUISINE} alt="greek" className=" w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={ENGLISH_CUISINE} alt="english" className=" w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={SPANISH_CUISINE} alt="spanish" className=" w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={THAI_CUISINE} alt="thai" className="w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={GERMAN_CUISINE} alt="german" className=" w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={MOROCCAN_CUISINE} alt="moroccan" className=" w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={IRISH_CUISINE} alt="irish" className=" w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={KOREAN_CUISINE} alt="korean" className=" w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={JAPANESE_CUISINE} alt="japanese" className=" w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={HAWAIIAN_CUISINE} alt="hawaii" className="w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={SWEDISH_CUISINE} alt="swedish" className="w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={HUNGARIAN_CUISINE} alt="hungray" className="w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={PORTUGESE_CUISINE} alt="portugal" className="w-40 h-40 rounded-full object-cover p-2 mx-5 mt-14"/>
           <img src={BRAZILIAN_CUISINE} alt="brazil" className="w-40 h-40 rounded-full object-cover p-2 mr-5  ml-5 mt-14"/>
          
           </Slider> 
        </div>
       
     
     </div>
    )
}

export default CuisineCarousel;