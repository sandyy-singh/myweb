import React from 'react';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div className='Header'>
    
    <div className="container">
      <div className="logo">
        <Brand />
      </div>
      <div className="nav-elements">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  
    </div>
  )
}

export default Header 