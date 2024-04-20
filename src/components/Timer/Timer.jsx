import { useEffect } from "react";
import { useTimer } from "../../hooks/useTimer";
import { formatClock } from "../../utils/formatClock";

// eslint-disable-next-line react/prop-types
export const Timer = ({ initialValue }) => {
  const [timer, setTimer] = useTimer(initialValue);

  useEffect(() => {
    setTimer(initialValue);
  }, [initialValue, setTimer]);

  return <span>{formatClock(timer)}</span>;
};
