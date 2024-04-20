import styles from "./TransportSchedulePage.module.css";
import { useFetchSchedule } from "../../hooks/useFetchSchedule";
import { useEffect } from "react";
import { useTimer } from "../../hooks/useTimer";
import { formatClock } from "../../utils/formatClock";

export const TransportSchedulePage = () => {
  const [busTime, setBusTime] = useTimer(0);
  const [planeTime, setPlaneTime] = useTimer(0);
  const [trainTime, setTrainTime] = useTimer(0);

  const [isFetching, error, data] = useFetchSchedule();

  useEffect(() => {
    if (!data) return;

    setBusTime(data.bus);
    setPlaneTime(data.plane);
    setTrainTime(data.train);
  }, [data, setBusTime, setPlaneTime, setTrainTime]);

  return (
    <section className={styles.table}>
      {isFetching && <div className={styles.loading}>Schedule is loading...</div>}
      {error && <div className={styles.error}>ERROR occured! Schedule may be incorrect!</div>}
      <div className={styles.row}>
        <span className={styles.category}>Autobus arrives in: </span>
        <span className={styles.timer}>{formatClock(busTime)}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.category}>Plane arrives in: </span>
        <span className={styles.timer}>{formatClock(planeTime)}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.category}>Train arrives in: </span>
        <span className={styles.timer}>{formatClock(trainTime)}</span>
      </div>
    </section>
  );
};
