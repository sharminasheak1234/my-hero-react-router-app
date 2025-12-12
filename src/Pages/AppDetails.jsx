import React from 'react';
import download from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';
import review from '../assets/icon-review.png';
import { useParams } from 'react-router';
import useProduct from '../hooks/useProduct';

const AppDetails = () => {
const { id } = useParams()
const {products,loading} = useProduct()
const product =products.find(p => p.id===Number(id))
console.log(product)

 
  const {title,companyName, description, downloads, ratingAvg, reviews, ratings,image} = product || {}
  const handleAddToInstallation = () =>
  {

    let updatedinstallation = []
    localStorage.setItem('installation',JSON.stringify(product))
  }

return (
    <div>
      <section className='flex flex-1'>
        
        <div>
          <img src={image} alt="App demo" />
        </div>
        <div className='ml-5 '>
          
          <div className='border-b-2 border-gray-500 w-full'>
            <h2 className='font-bold text-2xl text-center'>
            {title}
          </h2>
          <p className='text-[#627382] text-center'>
            Developed by <span className='text-violet-800'>{companyName}</span>
          </p>
        </div>  
         
          <div className='flex justify-around mt-4'>
            <div className='text-center'>
              <img src={download} alt="Downloads icon" />
              <p>Downloads</p>
              <h2>{downloads}</h2>
            </div>

            <div className='text-center'>
              <img src={rating} alt="Ratings icon" />
              <p>Average Ratings</p>
              <h2>{ratingAvg}</h2>
            </div>

            <div className='text-center'>
              <img src={review} alt="Reviews icon" />
              <p>Total Reviews</p>
              <h2>{reviews}</h2>
            </div>
          </div>

          <button onClick={() => updateList(product)}
          className=' btn mt-4 px-4 py-2 bg-violet-700 text-white rounded'>
           Install Now (291 MB)
          </button>
        </div>
      </section>

      <div>
          <h3 className=' font-bold'>Ratings</h3>
      </div>

    </div>

  );
};

export default AppDetails;
