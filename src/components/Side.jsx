import React, { useState, useEffect } from 'react';

import '../assets/styles/Side.css';

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
    <div div className='side'>
      <div className='side__container'>
        <h3>Contagiados: </h3>
        <span>{`${covid.confirmed}`}</span>
        <h3>Fallecidos: </h3>
        <span> {`${covid.deaths}`}</span>
        <h3>Recuperados: </h3>
        <span>{`${covid.recovered}`}</span>
      </div>
    </div>
  );
};

export default Side;
