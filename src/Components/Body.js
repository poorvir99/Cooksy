import React, { useEffect, useState } from "react";

import CuisineCards from "./CuisineCards";




const Body=()=>{

  

    const [listofCuisines,setListOfCuisines]=useState([]);
    const [search_query, setSearch_Query] = useState('chicken');
    const [search_recipe, setSearch_recipe] = useState('');
    

    const APP_ID="9ad57b2c";
    const APP_KEY="cc445304315b66facc53b5db0b97c321";
    

    useEffect(()=>{
        getData()
      },[search_query]);
 
        const getData = async () => {
          const response = await fetch(
                   `https://api.edamam.com/search?q=${search_query}&app_id=${APP_ID}&app_key=${APP_KEY}`
          );
          const data = await response.json();
          console.log(data);
          setListOfCuisines(data.hits);
      }
      const updateSearchFunction = (e) => {
        setSearch_recipe(e.target.value);
    };
  
    const getSearchFunction = (e) => {
        e.preventDefault();
        setSearch_Query(search_recipe);
        setSearch_recipe('');
    };
      
      

    return(
      <div className="min-h-screen bg-gradient-to-b from-[#fcf9f6] to-[#f6ebe0]">
      <hr></hr>
      <div className="container mx-auto mt-8 p-4 
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
                                       border border-[#e4b782] focus:ring-[#e4b782] 
                                       focus:border-[#e4b782] rounded-full 
                                       text-gray-700 outline-none transition-colors 
                                       duration-200 ease-in-out focus:ring-2 
                                       focus:ring-[#e2a356] focus:bg-transparent 
                                       focus:shadow-md"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#e2a356] hover:bg-[#cc8e42] focus:ring-2 
                        focus:ring-[#cc8e42] text-white font-semibold py-3 px-6 
                        rounded-full transform hover:scale-105 transition-transform 
                        focus:outline-none focus:ring-offset-2 
                        focus:ring-offset-[#cc8e42]"
                    >
                        Search Recipe
                    </button>
                </form>
            </div>
            <div className="container mx-auto mt-8 p-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                lg:grid-cols-4 gap-4">
                    {listofCuisines.map((recipe) => (
                        <CuisineCards key={recipe.recipe.label} recipe={recipe.recipe} />
                    ))}
                </div>

</div>
</div>



)
}

export default Body;