import React from 'react';
import { Download } from 'lucide-react';
import { Star } from 'lucide-react';

const HomeCard = ({product}) => {
  console.log(product)
    return (
        <div>
       

            <section>
             <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img className='p-4'
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
    </h2>
    <div className="card-actions ">
      <div className="bg-gray-100 badge  "> <Download  className='text-green-500'/><span className='text-green-500 font-bold'>9 </span><span className='text-green-500 font-bold'>M</span>
      </div>
      <div className="bg-orange-200 badge ml-40"><Star className='text-orange-500'/><span className='text-orange-500 font-bold'>5</span></div>
    </div>
  </div>
</div>
 </section>
        </div>
       
    );
};

export default HomeCard;