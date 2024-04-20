import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    setError(null);
    setData(null);

    const dataFetching = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok)
          throw new Error(`Response status code: ${response.status}`);

        const result = await response.json();

        setData(result);
      } catch (error) {
        setError(error);
      }

      setIsFetching(false);
    };

    dataFetching();
  }, [url]);

  return [isFetching, error, data];
};
