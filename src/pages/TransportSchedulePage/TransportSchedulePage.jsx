import styles from "./TransportSchedulePage.module.css";
import { useFetchSchedule } from "../../hooks/useFetchSchedule";
import { Timer } from "../../components/Timer/Timer";

export const TransportSchedulePage = () => {
  const [isFetching, error, data] = useFetchSchedule();

  return (
    <section className={styles.table}>
      {isFetching && <div className={styles.loading}>Schedule is loading...</div>}
      {error && <div className={styles.error}>ERROR occured! Schedule may be incorrect!</div>}
      <div className={styles.row}>
        <span className={styles.category}>Autobus arrives in: </span>
        <Timer initialValue={data ? data.bus : 0} />
      </div>
      <div className={styles.row}>
        <span className={styles.category}>Plane arrives in: </span>
        <Timer initialValue={data ? data.plane : 0} />
      </div>
      <div className={styles.row}>
        <span className={styles.category}>Train arrives in: </span>
        <Timer initialValue={data ? data.train : 0} />
      </div>
    </section>
  );
};
