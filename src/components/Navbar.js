import React from 'react';
import logo from '../img/logo.svg';


export default function Navbar(){
    return (
      <header>
        <nav className='nav '>
          <img src={logo}  alt="logo" className='nav-logo' />
          <h3 className='logo-text'>LearnReact</h3>
          <ul className='nav-items' >
              <li className='nav-link'>Pricing</li>
              <li className='nav-link'>About</li>
              <li className='nav-link'>Contact</li>
          </ul>
        </nav>
      </header>
    )
  }