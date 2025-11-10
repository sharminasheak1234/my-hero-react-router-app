import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen  ">
        <Navbar/>
        
        <div className=" bg-gray-300 max-w-screen-4xl mx-auto w-full py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-12 flex-1">
            <Outlet/>
        </div>
        
        <Footer/>
        
        </div>
    );
};

export default MainLayout;