import React from "react";
import { NavLink } from "react-router-dom";

// import Button from '@mui/material/Button';

const Header = () => {
  return (
    <div className="Header">
      <NavLink>Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact Us</NavLink>
    </div>
  );
};

export default Header;
