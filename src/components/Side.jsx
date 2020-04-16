import React, { useState, useEffect } from 'react';

import '../assets/styles/Side.css';

const Side = () => {
  const [covid, setCovid] = useState({
    cases: {
      new: [],
      active: [],
      critical: [],
      recovered: [],
      total: [],
    },
    deaths: {
      new: [],
      total: [],
    },
  });

  useEffect(() => {
    fetch('https://covid-193.p.rapidapi.com/history?country=all', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': '56b38ea26cmsh355ccb8b1201dbap1067c9jsn3670d0772e70',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const { response } = data;
        setCovid(response[0]);
      });
  }, []);

  /*  const decNumb = covid.map(({ cases, deaths }) => {
    return { cases, deaths };
  }); */

  // console.log(new Intl.NumberFormat().format(covid));
  // {new Intl.NumberFormat('en').format(covid.cases['new'])}

  return (
    <div className='side  m-3 flex flex-col items-center justify-center text-center shadow-inner'>
      <h4 className='text-3xl'>Datos Globales</h4>
      <div>
        <h1 className='text-xl pt-6'>Total Contagiados:</h1>
        <h1 className='text-4xl pt-2 text-blue-700'>
          {new Intl.NumberFormat('en').format(covid.cases['total'])}
        </h1>
        <h6>{new Intl.NumberFormat('en').format(covid.cases['new'])} </h6>
      </div>
      <div>
        <h1 className='text-xl pt-6'>Total Fallecidos:</h1>
        <h1 className='text-4xl pt-2 text-red-700'>
          {new Intl.NumberFormat('en').format(covid.deaths['total'])}
        </h1>
        <h6> {new Intl.NumberFormat('en').format(covid.deaths['new'])}</h6>
      </div>

      <div>
        <h1 className='text-xl pt-6'>Total Recuperados:</h1>
        <h1 className='text-4xl pt-2 text-green-700'>
          {new Intl.NumberFormat('en').format(covid.cases['recovered'])}
        </h1>
      </div>

      <div>
        <h1 className='text-xl pt-6'>Total Activos:</h1>
        <h1 className='text-4xl pt-2 text-yellow-500'>
          {new Intl.NumberFormat('en').format(covid.cases['active'])}
        </h1>
      </div>
      <div>
        <h1 className='text-xl pt-6'>Total Criticos:</h1>
        <h1 className='text-4xl pt-2'>
          {' '}
          {new Intl.NumberFormat('en').format(covid.cases['critical'])}
        </h1>
      </div>
    </div>
  );
};

export default Side;
