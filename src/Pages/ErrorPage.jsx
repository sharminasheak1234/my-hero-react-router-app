import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import App from '../assets/App-Error.png';

const ErrorPage = () => {
    return (<>
    <div className= 'flex flex-col min-h-screen'>
         <Navbar/> 
         <div className='bg-gray-300 max-w-screen-4xl mx-auto w-full py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 flex-1'>
           <div className=' flex justify-center items-center flex-col text-center'>
                   <img src={App} alt="Error image" width="500" />
                   </div>
           
            <h1 className=' font-bold text-7xl text-gray-900 text-center'>OPPS!! APP NOT FOUND</h1>
        <p className='text-center'>The App you are requesting is not found on our system.  please try another apps</p>
        <button></button>
         </div>
       
        <Footer/>
    
        </div>
        </>
    );
};

export default ErrorPage;