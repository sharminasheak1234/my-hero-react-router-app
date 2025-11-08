import React from 'react';
import { useLoaderData } from 'react-router';
import HomeCard from '../Component/HomeCard';

const Application = () => {
    const products= useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4 pb-10">
                 {products.map(product=>
                <HomeCard key={product.id} product={product} />
            )}
           </div>
        </div>
    );
};

export default Application;