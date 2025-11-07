import React from 'react';
import { Link, NavLink } from 'react-router';
import { Github } from 'lucide-react';
import logo from '../assets/logo.png';


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to='/Home'>Home</NavLink></li>
        <li>
          <NavLink to='/Application'>Application</NavLink>
        </li>
        <li className="text-purple-800"><NavLink to='/Installation'>Installation</NavLink></li>
      </ul>
    </div>
    <Link to='/Home' className="btn btn-ghost">
  <img src={logo} alt="Hero Logo" className="h-8 w-auto" />
  <h2 className="text-purple-800">HERO.IO</h2>
</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/Home'>Home</NavLink></li>
      <li>
        <NavLink to='/Application'>Application</NavLink>
      </li>
      <li className="text-purple-800"><NavLink to='/Installation'>Installation</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  <a 
    href="https://github.com/sharminasheak1234/my-hero-react-router-app" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none hover:opacity-90"
  >
    <Github className="w-5 h-5 mr-2" />
    Contribute
  </a>
</div>
</div>
        </div>
    );
};

export default Navbar;