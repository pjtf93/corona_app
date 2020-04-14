import React, { useState, useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';

import '../assets/styles/Content.css';

const Content = () => {
  const [list, setList] = useState({
    locations: [
      {
        id: [],
        country: [],
        latest: {
          confirmed: [],
          deaths: [],
          recovered: [],
        },
      },
    ],
  });

  useEffect(() => {
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  const dataApp = list.locations.map(({ id, country, latest }) => {
    return { id, country, latest };
  });

  const columns = [
    {
      name: 'ID',
      selector: 'id',
    },
    {
      name: 'Pais',
      selector: 'country',
    },
    {
      name: 'Total Contagiados',
      selector: 'latest.confirmed',
      sortable: true,
    },
    {
      name: 'Total Fallecidos',
      selector: 'latest.deaths',
      sortable: true,
    },
    {
      name: 'Total Recuperados',
      selector: 'latest.recovered',
      sortable: true,
    },
  ];

  createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
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
    <div className='content mr-5'>
      <DataTable
        title='Confirmed Cases and Deaths by Country'
        theme='solarized'
        columns={columns}
        data={dataApp}
        defaultSortField='latest.confirmed'
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
