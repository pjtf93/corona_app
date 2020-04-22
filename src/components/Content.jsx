import React, { useMemo, useState, useEffect } from 'react';
import Table from './Table';
import { Link } from 'react-router-dom';

import '../assets/styles/Content.css';

// function formatColumn(row, parent, child) {
//   return new Intl.NumberFormat().format(row[parent][child]);
// }

const Content = () => {
  const [list, setList] = useState({
    response: [
      {
        country: [],
        cases: {
          new: [0],
          active: [0],
          critical: [0],
          recovered: [0],
          total: [0],
        },
        deaths: {
          new: [0],
          total: [0],
        },
        tests: {
          total: [0],
        },
      },
    ],
  });

  useEffect(() => {
    fetch('https://covid-193.p.rapidapi.com/statistics', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': '56b38ea26cmsh355ccb8b1201dbap1067c9jsn3670d0772e70',
      },
    })
      .then((response) => response.json())
      .then((data) => setList(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const dataApp = list.response.map(({ country, cases, deaths, tests }) => {
    Object.keys(cases).forEach((type) => {
      const value = cases[type] ? parseFloat(cases[type]) : 0;
      cases[type] = value;
    });
    Object.keys(deaths).forEach((type) => {
      const value = deaths[type] ? parseFloat(deaths[type]) : 0;
      deaths[type] = value;
    });
    return { country, cases, deaths, tests };
  });

  console.log(Object.keys(list['response'][0]));

  const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: 'COVID19',
        // First group columns
        columns: [
          {
            Header: 'Pais',
            accessor: 'country',
            Cell: ({ row }) => (
              <Link to={{ pathname: `/countries/${row.original.country}` }}>
                {row.original.country}
              </Link>
            ),
          },
          {
            Header: 'Total Contagiados',
            accessor: 'cases.total',
          },
          {
            Header: 'Casos Nuevos',
            accessor: 'cases.new',
          },
          {
            Header: 'Total Fallecidos',
            accessor: 'deaths.total',
          },
          {
            Header: 'Nuevos Fallecidos',
            accessor: 'deaths.new',
          },
          {
            Header: 'Casos Criticos',
            accessor: 'cases.critical',
          },
          {
            Header: 'Total Recuperados',
            accessor: 'cases.recovered',
          },
          {
            Header: 'Pruebas Realizadas',
            accessor: 'tests.total',
          },
        ],
      },
    ],
    []
  );
  return (
    <div className='content flex bg-white flex flex-col w-8/12 justify-center    '>
      <Table columns={columns} data={dataApp} />
    </div>
  );
};

export default Content;
