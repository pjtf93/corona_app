import React from 'react';

import Header from '../components/Header';
import Content from '../components/Content';
import Side from '../components/Side';
import Footer from '../components/Footer';

import '../assets/styles/App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Content />
      <Side />
      <Footer />
    </div>
  );
};

export default App;
