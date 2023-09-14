import styles from "./style.module.css";
import { IForcast } from "../../types/weather";
import {List} from "../../types/weather";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
]; 

interface ForcastCardProps {
  data: IForcast;
}

const Forcast = ({ data }: ForcastCardProps) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = DAYS.slice(dayInAWeek, DAYS.length).concat(
    DAYS.slice(0, dayInAWeek)
  );

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>7-days forcast</h2>
      <div>
        {data?.list.map((item: List, index: number) => (
          <div key={index} className={styles.item}>
            <img
              src={`http://openweathermap.org/img/wn/${item?.weather[0]?.icon}.png`}
              alt="weater-icon"
            />
            <div className={styles.temp}>{Math.floor(item?.main?.temp)}°C</div>
            <div className={styles.desc}>{item?.weather[0]?.description}</div>
            <div className={styles.day}>{forecastDays[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forcast;
