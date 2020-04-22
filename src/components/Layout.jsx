import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Side from '../components/Side';

import '../assets/styles/App.css';

const Layout = ({ children }) => (
  <div className='App bg-white font-sans'>
    <Header />
    <Side />
    {children}
    <Footer />
  </div>
);

export default Layout;
