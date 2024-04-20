import { useEffect, useState } from "react";

export const useFetchSchedule = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setData({
        bus: Math.floor(Math.random() * 10),
        plane: Math.floor(Math.random() * 10000),
        train: Math.floor(Math.random() * 5000),
      });
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return [isLoading, error, data];
};
