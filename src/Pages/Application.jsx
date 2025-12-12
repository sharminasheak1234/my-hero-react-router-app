import React, { useState } from 'react';
import useProduct from '../hooks/useProduct';
import HomeCard from '../Component/HomeCard'


const Application = () => {
    const {products} =useProduct();
   //search
    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase();
    const searchedProducts = term
    ? products.filter(product => product.title.toLocaleLowerCase().includes(term))
    :products;
    //search
    //console.log(products);

    
    return (
        
        <div>
            <div>
                <h1 className=' font-bold text-3xl text-center'>Our All Applications</h1>
                <p className='text-center text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className=' flex justify-between'>
                <h3 className='font-bold text-2xl '><span>({searchedProducts.length})</span> {''}Apps Found</h3>
                <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input value={search}
    onChange={e=>setSearch(e.target.value)}
    type="search"
     required placeholder="Search Apps" />
</label>
                </div>
            </div>
            
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto ">
                         {searchedProducts.map(product=>
                        <HomeCard key={product.id} product={product} />
                  
                  )}

                  </div>
                  </div>
                   
    );
};

export default Application;