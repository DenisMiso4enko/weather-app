import { createAsyncThunk } from "@reduxjs/toolkit";
import { setForcast, setWeather } from "../Slices/weatherSlice";
import { toast } from "react-toastify";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (query: string, { dispatch, rejectWithValue }) => {
    const currentWeatherFetch = fetch(
      `${import.meta.env.VITE_WEATHER_URL}/weather?q=${query}&appid=${
        import.meta.env.VITE_WEATHER_KEY
      }&units=metric`
    );
    const forecastFetch = fetch(
      `${import.meta.env.VITE_WEATHER_URL}/forecast?q=${query}&appid=${
        import.meta.env.VITE_WEATHER_KEY
      }&cnt=7&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        if (weatherResponse.cod === "404" && forcastResponse.cod === "404") {
          toast.error(`Error: ${weatherResponse.message}, try again`);
        } else {
          dispatch(setWeather(weatherResponse));
          dispatch(setForcast(forcastResponse));
        }
      })
      .catch((error) => {
        return rejectWithValue(error.message);
      });
  }
);
