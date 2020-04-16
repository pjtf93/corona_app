import React, { useState, useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

import '../assets/styles/Content.css';

const Content = () => {
  const [list, setList] = useState({
    response: [
      {
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

  const dataApp = list.response.map(({ country, cases, deaths }) => {
    return { country, cases, deaths };
  });

  console.log(Object.keys(list['response'][0]));

  const columns = [
    {
      name: 'Pais',
      selector: 'country',
      sortable: true,
    },
    {
      name: 'Total Contagiados',
      selector: 'cases.total',
      sortable: true,
    },
    {
      name: 'Casos Nuevos',
      selector: 'cases.new',
      sortable: true,
    },
    {
      name: 'Total Fallecidos',
      selector: 'deaths.total',
      sortable: true,
    },
    {
      name: 'Nuevos Fallecidos',
      selector: 'deaths.new',
      sortable: true,
    },
    {
      name: 'Casos Criticos',
      selector: 'cases.critical',
      sortable: true,
    },
    {
      name: 'Total Recuperados',
      selector: 'cases.recovered',
      sortable: true,
    },
  ];

  createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '##edf2f7',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  });

  return (
    <div className='content mr-5 flex items-center justify-center '>
      <DataTable
        title='Confirmed Cases and Deaths by Country'
        theme='solarized'
        columns={columns}
        data={dataApp}
        defaultSortField='cases.total'
        defaultSortAsc={false}
        striped
        highlightOnHover
        pagination={true}
        paginationRowsPerPageOptions={[10]}
      />
    </div>
  );
};

export default Content;
