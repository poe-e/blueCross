import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);


  useEffect(() => {
    // const controller = new AbortController();
    // console.log('fetched')
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
    // return () => controller.abort();
  }, [url]);
  return { data, error };
}

export default useFetch;