import styles from "./style.module.css";
import { IWeather } from "../../types/weather";

interface WeatherCardProps {
  data: IWeather;
}

const WeatherCard = ({ data }: WeatherCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.city}>
            {data?.name}, {data?.sys?.country}
          </h1>
          <p className={styles.temperature}>{Math.floor(data?.main?.temp)}°C</p>
          <p className={styles.descriptions}>{data?.weather[0]?.description}</p>
        </div>
        <img
          className={styles.icon}
          src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`}
          alt="weather-icon"
        />
      </div>
      <div className={styles.bottom}>
        <div className={styles.details}>
          <div className={styles.list}>
            <div className={styles.item}>
              <p className={styles.itemTitle}>Feels like:</p>
              <p className={styles.value}>{data?.main?.feels_like} °C</p>
            </div>

            <div className={styles.item}>
              <p className={styles.itemTitle}>Humidity:</p>
              <p className={styles.value}>{data?.main?.humidity} %</p>
            </div>

            <div className={styles.item}>
              <p className={styles.itemTitle}>Pressure:</p>
              <p className={styles.value}>{data?.main?.pressure} hPa</p>
            </div>

            <div className={styles.item}>
              <p className={styles.itemTitle}>Wind</p>
              <p className={styles.value}>{data?.wind.speed} m/s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
