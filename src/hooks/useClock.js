import { useEffect, useState } from "react";

const formatDate = (date) => {
  const hours = `0${date.getHours()}`.slice(-2);
  const minute = `0${date.getMinutes()}`.slice(-2);
  const second = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minute}:${second}`;
};

function useClock() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 1000);
    return () => {
      // cleanup
      clearInterval(clockInterval);
    };
  }, []);

  return { timeString };
}

export default useClock;
