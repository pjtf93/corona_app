import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

// import '../assets/styles/Content.css';

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

  return (
    <DataTable
      title='Confirmed Cases and Deaths by Country'
      columns={columns}
      data={dataApp}
      defaultSortField='latest.confirmed'
      defaultSortAsc={false}
      striped
      highlightOnHover
      pagination={true}
    />
  );
};

export default Content;
