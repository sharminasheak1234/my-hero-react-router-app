import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const ErrorPage = () => {
    return (<>
         <Navbar/>
       <h1>Oops, page not found!</h1>
        <p>The page you are looking for is not available.</p>
        <button></button>
        <Footer/>
    
        
        </>
    );
};

export default ErrorPage;