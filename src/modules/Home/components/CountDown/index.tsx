import { useEffect, useState } from 'react';
import styles from './Countdown.module.css';

const COUNT_INITIAL_TIME_IN_SECONDS = 10 * 60;
const CountDown: React.FC = () => {
  const [time, setTime] = useState(COUNT_INITIAL_TIME_IN_SECONDS);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  useEffect(() => {
    if (time === 0) {
      setTime(COUNT_INITIAL_TIME_IN_SECONDS);
    }
    setTimeout(() => {
      setTime(time - 1);
    }, 1000);
  }, [time]);



  return (
    <div className={styles.countdown}>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </div>
  );
};

export default CountDown;
