import React from 'react';
import { Download } from 'lucide-react';
import { Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

const HomeCard = ({product}) => {
  const {title, image, downloads, ratingAvg, id} = product
const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  };
    return (
        <div  onClick={handleClick}>
          
           
          
             <div  className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out">
    <figure className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className=" w-full  object-cover  "
        />
      </figure>
  <div className="card-body">
    <h2 className="card-title">
     {title}
    </h2>
    <div className="card-actions ">
      <div className="bg-gray-100 badge  "> <Download  className='text-green-500'/><span className='text-green-500 font-bold'>{downloads} </span><span className='text-green-500 font-bold'>M</span>
      </div>
      <div className="bg-orange-200 badge ml-40"><Star className='text-orange-500'/><span className='text-orange-500 font-bold'>{ratingAvg}</span></div>
    </div>
  </div>
</div>

        </div>
       
    );
};

export default HomeCard;