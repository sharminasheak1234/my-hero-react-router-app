import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
        <Navbar/>
        <h1>content</h1>
        <Outlet/>
        <Footer/>
        
        </div>
    );
};

export default MainLayout;