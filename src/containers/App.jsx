import React from 'react';

import Header from '../components/Header';
import Content from '../components/Content';
import Side from '../components/Side';
import Footer from '../components/Footer';

// import '../assets/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

const App = () => {
  return (
    <div>
      {/* Header */}
      <Container fluid='xs'>
        <Header />
      </Container>
      {/* Content */}
      <Container fluid>
        <Row>
          <Col xs={4}>
            <Side />
          </Col>
          <Col md='auto'>
            <Content />
          </Col>
          <Col xs={3}>
            <Side />
          </Col>
        </Row>
      </Container>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
