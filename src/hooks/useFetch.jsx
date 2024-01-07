import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [error, setError] = useState(null)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData =  async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`An error occured, Status: ${response.status}`)
      }
      const data = await response.json();
      setData(data);
    }
    catch (error) {
      setError(error)
    }
    finally {
      setLoading(prev => !prev)
    }
  }

  useEffect(() => {
    fetchData(url);

    return () => {
      setData([]);
      setError(null);
      setLoading(true);
    };
  },

  [url]);

  return {data, loading, error}
}

export default useFetch;
