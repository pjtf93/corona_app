import React, { useState, useEffect } from 'react';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import Graph from '../components/Graph';

const Countries = ({ match }) => {
  const {
    params: { country },
  } = match;

  const [list, setList] = useState({
    country: [],
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
    tests: {
      total: [],
    },
  });

  useEffect(() => {
    fetch(`https://covid-193.p.rapidapi.com/history?country=${country}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': '56b38ea26cmsh355ccb8b1201dbap1067c9jsn3670d0772e70',
      },
    })
      .then((response) => response.json())
      .then((data) => setList(data.response[0]))
      .catch((err) => {
        console.log(err);
      });
  }, [country]);

  console.log(list);

  const deathRate = [
    {
      name: 'Group A',
      value: list.cases['total'],
      fill: '#e2e8f0',
    },
    {
      name: 'Group B',
      value: list.deaths['total'],
      fill: 'red',
    },
  ];

  const recoveryRate = [
    {
      name: 'Group A',
      value: list.cases['total'],
      fill: '#e2e8f0',
    },
    {
      name: 'Group B',
      value: list.cases['recovered'],
      fill: 'blue',
    },
  ];

  const recoveryRatio = (list.cases['recovered'] / list.cases['total']) * 100;
  const deathsRatio = (list.deaths['total'] / list.cases['total']) * 100;
  return (
    <div className='flex  bg-white flex-row flex-wrap items-center justify-center 	'>
      <div className='flex  flex-wrap text-center border border-gray-300 w-2/5 h-48 p-4 m-4'>
        <div className='w-full text-2xl	'>{list.country} Overview</div>
        <div className='w-4/12 text-xl	'>
          Total Casos
          <h1 className='text-blue-700'>{list.cases['total']}</h1>
        </div>
        <div className='w-4/12 text-xl	'>
          Total Muertos
          <h1 className='text-red-700'>{list.deaths['total']}</h1>
        </div>
        <div className='w-4/12 text-xl 	'>
          Total Recuperados
          <h1 className='text-green-700'>{list.cases['recovered']}</h1>
        </div>
      </div>
      <div className=' flex  justify-center flex-wrap border  text-center border-gray-300 w-1/4 text-2xl h-auto p-4 m-4'>
        Tasa de Mortalidad
        <div className=''>
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={deathRate}
                dataKey='value'
                nameKey='name'
                cx='50%'
                cy='50%'
                innerRadius={70}
                startAngle={360}
                endAngle={0}
                fill=''
              />
            </PieChart>
          </ResponsiveContainer>
          <h1> {deathsRatio.toFixed(2)}% de todos los casos</h1>
        </div>
      </div>
      <div className='flex justify-center flex-wrap border text-center border-gray-300 w-1/4  text-2xl h-auto p-4 m-4		'>
        Tasa de Recuperacion
        <div className=''>
          <PieChart width={200} height={200}>
            <Pie
              data={recoveryRate}
              dataKey='value'
              nameKey='name'
              cx='50%'
              cy='50%'
              innerRadius={70}
              startAngle={360}
              endAngle={0}
              fill=''
            />
          </PieChart>
          <h1> {recoveryRatio.toFixed(2)}% de todos los casos</h1>
        </div>
      </div>

      <div className='border border-gray-300 w-2/6 h-auto p-4 m-4	'>
        Grafico 1
        <Graph />
      </div>
      <div className='border border-gray-300 w-2/6 h-auto p-4 m-4	'>
        Grafico 2
        <Graph />
      </div>
    </div>
  );
};

export default Countries;
