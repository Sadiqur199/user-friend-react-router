import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
  return (
    <nav className='header-style'>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to ="/friends">Friend</ActiveLink>
      <ActiveLink to="/about">About</ActiveLink>
      <ActiveLink to="/contact">Contact</ActiveLink>
    </nav>
  );
};

export default Header;