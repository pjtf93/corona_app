import React, { useState, useEffect } from 'react';
/* import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
} from 'react-table'; */

import '../assets/styles/Content.css';

const Content = () => {
  const [list, setList] = useState({
    locations: [
      {
        id: 0,
        country: 'Afghanistan',
        latest: {
          confirmed: 423,
          deaths: 14,
          recovered: 0,
        },
      },
    ],
  });

  useEffect(() => {
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations')
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);

  // console.log(list.locations[0].country);

  const renderTable = () => {
    return list.locations.map(({ id, country, latest }) => {
      return (
        <tr>
          <td>{id}</td>
          <td>{country}</td>
          <td>{latest['confirmed']}</td>
          <td>{latest['deaths']}</td>
          <td>{latest['recovered']}</td>
        </tr>
      );
    });
  };

  return (
    <div className='content'>
      <div className='content__table'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Paises</th>
              <th>Total Contagiados</th>
              <th>Total Fallecidos</th>
              <th>Total Recuperados</th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;
