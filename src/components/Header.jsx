import React from 'react';

import '../assets/styles/Header.css';

const Header = () => {
  return (
    <div className='header flex  items-center shadow-inner bg-gray-200 p-2  text-left align-middle text-lg '>
      <h1 className='text-gray-800 pl-16'>Covid19 Tracker</h1>
    </div>
  );
};

export default Header;
