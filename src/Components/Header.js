import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Header=()=>{
  const [food_recipes, setfood_recipes] = useState([]);
  const [search_recipe, setSearch_recipe] = useState('');
    const [search_query, setSearch_Query] = useState('chicken');

    const APP_ID="9ad57b2c";
    const APP_KEY="cc445304315b66facc53b5db0b97c321";
    

    useEffect(()=>{
      getRecipesFunction()
    },[search_query]);

    const getRecipesFunction = async () => {
      const response = await fetch(
                `https://api.edamam.com/search?q=${search_query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setfood_recipes(data.hits);
  };

  const updateSearchFunction = (e) => {
      setSearch_recipe(e.target.value);
  };

  const getSearchFunction = (e) => {
      e.preventDefault();
      setSearch_Query(search_recipe);
      setSearch_recipe('');
  };
    return(
       <div className="grid grid-flow-col shadow-md items-center bg-[#fcf9f]  ">

        <div className="p-2 m-2 col-span-1 items-center">
            <img 
            className="w-[35px] ml-[150px]" 
            src="baker_logo.ico" 
            alt="logo"/>
            
            <h2 className="w-[40px] ml-[144px] italic font-medium text-[#cc8e42]">Cooksy</h2>
        </div>

        {/* <div className="col-span-11 text-center">
          <form onSubmit={getSearchFunction}>
          <input className="w-1/2 border border-[#e4b782] rounded-l-full p-2" type="text"
                      name="search"
                      value={search_recipe}
                      onChange={updateSearchFunction}
                      placeholder="Search for recipes..."/>
          <button   type="submit" className="border border-[#cc8e42] px-2 bg-[#cc8e42] rounded-r-full p-2 w-[64px]"><FontAwesomeIcon className="text-[#0e0a05]"  icon={faMagnifyingGlass} /></button>
          </form>
        </div> */}

         <div className="col-span-1">
         <ul className="flex">
          {/* <li className="m-10  text-[#cc8e42] font-medium">About</li> */}
           {/* <li className="my-10   text-[#cc8e42] font-medium">Login</li>
          <li className="my-10 ml-12 text-[#cc8e42] font-medium">Sign up</li>  */}
         </ul>
         </div> 
       
         
      
      {/* <div className="container mx-auto mt-8 p-4 
                      sm:px-6 lg:px-8">
          <form
              onSubmit={getSearchFunction}
              className="bg-white p-4 sm:p-6 
                         lg:p-8 rounded-lg shadow-md 
                         flex flex-col sm:flex-row items-center 
                         justify-center space-y-4 sm:space-y-0 
                         sm:space-x-4"
          >
              <div className="relative justify-center flex-grow
                              w-full sm:w-1/2">
                  <input
                      type="text"
                      name="search"
                      value={search_recipe}
                      onChange={updateSearchFunction}
                      placeholder="Search for recipes..."
                      className="w-full py-3 px-4 bg-gray-100 
                                 border border-blue-300 focus:ring-blue-500 
                                 focus:border-blue-500 rounded-full 
                                 text-gray-700 outline-none transition-colors 
                                 duration-200 ease-in-out focus:ring-2 
                                 focus:ring-blue-900 focus:bg-transparent 
                                 focus:shadow-md"
                  />
              </div>
              <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 focus:ring-2 
                  focus:ring-blue-900 text-white font-semibold py-3 px-6 
                  rounded-full transform hover:scale-105 transition-transform 
                  focus:outline-none focus:ring-offset-2 
                  focus:ring-offset-blue-700"
              >
                  Search Recipe
              </button>
          </form> */}
      </div>

        
        
        
      //  </div>
       
    )
}

export default Header;