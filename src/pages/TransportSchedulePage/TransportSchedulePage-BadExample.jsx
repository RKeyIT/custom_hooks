import { useEffect, useState } from "react";
import styles from "./TransportSchedulePage.module.css";

export const TransportSchedulePage = () => {
  const [busTime, setBusTime] = useState(0);
  const [planeTime, setPlaneTime] = useState(0);
  const [trainTime, setTrainTime] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(null);

  const fetchSchedule = () => {
    setIsFetching(true);

    return new Promise((resolve) => {
      setTimeout(() => {
        const schedule = {
          bus: Math.floor(Math.random() * 100),
          plane: Math.floor(Math.random() * 10000),
          train: Math.floor(Math.random() * 5000),
        };

        setIsFetching(false);
        resolve(schedule);
      }, 1000);
    });
  };

  useEffect(() => {
    if (!isFetching && !data) {
      fetchSchedule().then((data) => {
        setData(data);
      });
    }

    if (data) {
      setBusTime(data.bus);
      setPlaneTime(data.plane);
      setTrainTime(data.train);
    }
  }, [isFetching, data]);

  useEffect(() => {
    if (busTime)
      setTimeout(() => {
        setBusTime((prev) => prev - 1);
      }, 1000);
  }, [busTime]);
  useEffect(() => {
    if (planeTime)
      setTimeout(() => {
        setPlaneTime((prev) => prev - 1);
      }, 1000);
  }, [planeTime]);
  useEffect(() => {
    if (trainTime)
      setTimeout(() => {
        setTrainTime((prev) => prev - 1);
      }, 1000);
  }, [trainTime]);

  function formatClock(secs = 4000) {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <section className={styles.table}>
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
