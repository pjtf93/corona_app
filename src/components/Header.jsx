import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Header.css';

const Header = () => {
  return (
    <div className='header flex  items-center shadow-inner bg-white p-2  text-left align-middle text-xl border border-gray-200 '>
      <Link to='/' className='text-gray-800 pl-16'>
        Covid19 Tracker
      </Link>
    </div>
  );
};

export default Header;
