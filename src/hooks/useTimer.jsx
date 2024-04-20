import { useEffect, useState } from "react";

export const useTimer = (initialSeconds) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds === 0) return;

    const timer = setTimeout(() => setSeconds((prev) => prev - 1), 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  return [seconds, setSeconds];
};
