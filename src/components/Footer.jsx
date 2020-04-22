import React from 'react';

import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <div className='footer flex justify-center border border-gray-200 bg-white p-4 align-middle text-sm text-gray-800	'>
      <p className='p-2'>By Pablo Tovar</p>
      <a className='p-2' href='https://twitter.com/PabloTovar_'>
        Twitter
      </a>
      <a className='p-2' href='https://github.com/pjtf93'>
        Github
      </a>
    </div>
  );
};

export default Footer;
