
import React, { useState } from 'react';
import './Navbar.css';

import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const showNav = () => {
    setActive(true);
  };

  const hideNav = () => {
    setActive(false);
  };

  return (
    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <h1> <MdOutlineTravelExplore className="icon" /> Travel</h1>
          </a>
        </div>
        
        <div className={active ? "navBar activeNavBar" : "navBar"}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="/" className="navL">Home</a>
            </li>
            <li className="navItem">
              <a href="/" className="navL">Packages</a>
            </li>
            <li className="navItem">
              <a href="/" className="navL">Shop</a>
            </li>
            <li className="navItem">
              <a href="/" className="navL">About</a>
            </li>
            <li className="navItem">
              <a href="/" className="navL">Contact</a>
            </li>
            <button className='btn'> 
              <a href="/">Book Now</a>
            </button>
          </ul>
          <div onClick={hideNav} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
