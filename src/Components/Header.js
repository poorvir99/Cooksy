import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header=()=>{
    return(
       <div className="grid grid-flow-col shadow-md items-center bg-[#fcf9f6] ">

        <div className="p-2 m-2 col-span-1 items-center">
            <img 
            className="w-[35px] ml-11" 
            src="baker_logo.ico" 
            alt="logo"/>
            
            <h2 className="w-[40px] ml-[38px] italic font-medium text-[#cc8e42]">Cooksy</h2>
        </div>

        <div className="col-span-11 text-center">
          <input className="w-1/2 border border-[#e4b782] rounded-l-full p-2" type="text" placeholder="search a recipe..."/>
          <button className="border border-[#cc8e42] px-2 bg-[#cc8e42] rounded-r-full p-2 w-[64px]"><FontAwesomeIcon className="text-[#0e0a05]"  icon={faMagnifyingGlass} /></button>
        </div>

        <div className="col-span-1">
         <ul className="flex">
          <li className="m-10  text-[#cc8e42] font-medium">About</li>
          <li className="my-10   text-[#cc8e42] font-medium">Login</li>
          <li className="my-10 ml-12 text-[#cc8e42] font-medium">Sign up</li>
         </ul>
         </div>
        
        
        
       </div>
       
    )
}

export default Header;