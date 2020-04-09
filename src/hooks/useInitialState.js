/* import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [covid, setCovid] = useState({
    confirmed: [],
    deaths: [],
  });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setCovid(data));
  }, []);
  return covid;
};
export default useInitialState;
 */
