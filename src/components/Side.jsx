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
    <div className='side  m-3 flex flex-col items-center justify-center text-center '>
      <h4 className='text-3xl'>Quick Facts</h4>
      <div>
        <h1 className='text-xl pt-6'>Total Contagiados:</h1>
        <h1 className='text-4xl pt-2 text-blue-700'>{`${covid.confirmed}`}</h1>
      </div>
      <div>
        <h1 className='text-xl pt-6'>Total Fallecidos:</h1>
        <h1 className='text-4xl pt-2 text-red-700'>{`${covid.deaths}`}</h1>
      </div>

      <div>
        <h1 className='text-xl pt-6'>Total Recuperados:</h1>
        <h1 className='text-4xl pt-2 text-green-700'>{`${covid.recovered}`}</h1>
      </div>

      <div>
        <h1 className='text-xl pt-6'>Total Activos:</h1>
        <h1 className='text-4xl pt-2 text-yellow-500'>{`${covid.recovered}`}</h1>
      </div>
      <div>
        <h1 className='text-xl pt-6'>Total Criticos:</h1>
        <h1 className='text-4xl pt-2'>{`${covid.recovered}`}</h1>
      </div>
    </div>
  );
};

export default Side;
