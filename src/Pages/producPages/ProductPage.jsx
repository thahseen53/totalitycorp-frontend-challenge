import { useState } from "react";
import Card from "../../Components/Card"

import Banner from "./components/Banner";
import { BiFilterAlt } from 'react-icons/bi';
import Filter from "./components/Filter";
import { useFilter } from "../../context/FilterContext";




const ProductPage = () => {
  const[showFilters, setShowFilters] =useState(false);
   const {products} = useFilter()
  return (
    <div className="">
      
    <Banner/>
    <h2 className="md:text-2xl font-bold text-center p-5">Explore Endless Possibilities with Our Products</h2>
    <div className="flex gap-2 items-center p-5 shadow-lg w-fit border" onClick={()=>setShowFilters(!showFilters)}><span className="text-3xl"><BiFilterAlt/></span><span>Filters</span></div>
    {showFilters && <Filter/>}
    <div className="p-5 pt-10 md:flex md:flex-wrap md:content-start md:gap-4 bg-[#6CA3BB]">
      
      {products.map((prod,i)=>(
        <Card key={i} product={prod}/>
      ))}
    </div>
    </div>
  )
}

export default ProductPage
