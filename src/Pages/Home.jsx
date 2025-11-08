import React from 'react';
import HomeCard from '../Component/HomeCard';
import { Link, NavLink, useLoaderData } from 'react-router';
import hero from '../assets/hero.png';

const Home = () => {
    const products= useLoaderData()
    const feturedProducts =products.slice(0,8)
    return (
         <div className='bg-gray-100'>
                 

    <div className="flex mx-auto max-w-fit flex-col items-center justify-center ">
      <div className="text-center">
        <h1 className="text-3xl md:text-6xl  font-bold text-gray-800 mb-2">
          We Build
        </h1>
        <h1 className="text-3xl md:text-6xl font-bold text-gray-800">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Productive
          </span>{' '}
          Apps
     </h1>
     <p className='pt-10'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
      <br/> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
     


       <div className="flex flex-wrap gap-4 justify-center items-center mt-5">
          <a 
            href="https://play.google.com/store" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5  rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
          >
           
            <span className="text-gray-700 font-medium text-sm">Google Play</span>
          </a>
          
          <a 
            href="https://www.apple.com/app-store/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5  rounded-lg hover:bg-blue-600 transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            <span className="font-medium text-sm">App Store</span>
          </a>
        </div>
        <div className='flex justify-center ml-30 mt-10'>
        <img src={hero} alt="Hero image" width="500" />
        </div>

        <div className="w-1600  bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
        <h1 className='text-white font-bold text-3xl'>Trusted by Millions, Built for You</h1>
       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 pb-10 pt-10">
      <div>
        <p className='text-white'>Total Downloads</p>
        <h1 className='text-white font-bold text-6xl'>29.6M</h1>
        <p className='text-white'>21% more than last month</p>
      </div>
      <div><p className='text-white'>Total Reviews</p>
        <h1 className='text-white font-bold text-6xl'>906K</h1>
        <p className='text-white'>46% more than last month</p></div>
      <div><p className='text-white'>Active Apps</p>
        <h1 className='text-white font-bold text-6xl'>29.6M</h1>
        <p className='text-white'>21% more than last month</p></div>
        </div>
    </div>
 </div>
  </div>
 
              <div className='min-h-screen '>
               <div className='text-center'>
               <h2 className='text-3xl md:text-4xl font-bold  mb-3'>
                        Trending Apps
                </h2>
               <p className=' text-sm md:text-base'>
                        Explore All Trending Apps on the Market developed by us
               </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4 pb-10">
                 {feturedProducts.map(product=>
                <HomeCard key={product.id} product={product} />
            )}
           </div>
           
            
            <Link className='btn btn-outline flex justify-between py-5 items-center' to='/Application'>
          See All Products
        </Link>
            </div>
    </div>
  
       
    );
};

export default Home;