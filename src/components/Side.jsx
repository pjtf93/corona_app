import React, { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import CardColumns from 'react-bootstrap/CardColumns';
// import '../assets/styles/Side.css';

const Side = () => {
  const [covid, setCovid] = useState({
    confirmed: [],
    deaths: [],
    recovered: [],
  });

  useEffect(() => {
    fetch('https://coronavirus-tracker-api.herokuapp.com/all')
      .then((response) => response.json())
      .then((data) => {
        const { latest } = data;
        setCovid(latest);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col className='mt-5 mb-3 '>
          <Card bg={'primary'} style={{ width: '14rem', height: '7rem' }}>
            <Card.Header>Total Contagiados:</Card.Header>
            <Card.Body>
              <Card.Title>{`${covid.confirmed}`}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className='mt-5 mb-3'>
          <Card bg={'danger'} style={{ width: '14rem', height: '7rem' }}>
            <Card.Header>Total Fallecidos:</Card.Header>
            <Card.Body>
              <Card.Title>{`${covid.deaths}`}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className='mt-5 mb-3'>
          <Card bg={'success'} style={{ width: '14rem', height: '7rem' }}>
            <Card.Header>Total Recuperados:</Card.Header>
            <Card.Body>
              <Card.Title>{`${covid.recovered}`}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Side;

/*         <h3>Contagiados: </h3>
        <span>{`${covid.confirmed}`}</span>
        <h3>Fallecidos: </h3>
        <span> {`${covid.deaths}`}</span>
        <h3>Recuperados: </h3>
        <span>{`${covid.recovered}`}</span> */
