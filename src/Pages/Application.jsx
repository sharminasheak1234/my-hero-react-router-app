import React from 'react';
import useProduct from '../hooks/useProduct';
import HomeCard from '../Component/HomeCard'


const Application = () => {
    const {products} =useProduct()
    return (
        
        <div>
            <div>
                <h1 className=' font-bold text-3xl text-center'>Our All Applications</h1>
                <p className='text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto ">
                         {products.map(product=>
                        <HomeCard key={product.id} product={product} />
                  
                  )}

                  </div>
                  </div>
                   
    );
};

export default Application;