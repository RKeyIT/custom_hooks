export function fetchSchedule() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const schedule = {
        bus: Math.floor(Math.random() * 10),
        plane: Math.floor(Math.random() * 10000),
        train: Math.floor(Math.random() * 5000),
      };

      resolve(schedule);
    }, 1000);
  });
}
