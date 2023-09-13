import "./App.css";
import Header from "./components/Header/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/store";
import { fetchWeather } from "./store/Actions/weatherAction";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import Forcast from "./components/Forcaste/Forcast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { searchQuery, weather, forcast } = useSelector(
    (state: RootState) => state.weather
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (searchQuery.length === 0) return;
    dispatch(fetchWeather(searchQuery));
  }, [searchQuery, dispatch]);

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="content container">
        {weather && <WeatherCard data={weather} />}
        {forcast && <Forcast data={forcast} />}
      </div>
    </>
  );
}

export default App;
