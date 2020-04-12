import React from 'react';

import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <Container fluid id='footer' className='Container'>
      <Row className='row text-center'>
        <Col>
          <p>By Pablo Tovar</p>
        </Col>
        <Col>
          <a href='https://twitter.com/PabloTovar_'>Twitter</a>
        </Col>
        <Col>
          <a href='https://github.com/pjtf93'>Github</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
