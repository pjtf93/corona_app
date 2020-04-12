import React from 'react';

import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
// import '../assets/styles/Header.css';

const Header = () => {
  return (
    <Navbar bg='light' variant='light'>
      <Navbar.Text>Sitio de informacion del Covid19</Navbar.Text>
    </Navbar>
  );
};

export default Header;
