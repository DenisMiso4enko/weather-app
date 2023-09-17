import { createAsyncThunk } from "@reduxjs/toolkit";
import { setForcast, setWeather } from "../Slices/weatherSlice";
import { toast } from "react-toastify";
import { fetchGetForcast, fetchGetWeather } from "../../api";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (query: string, { dispatch, rejectWithValue }) => {
    const currentWeatherFetch = fetchGetWeather(query);
    const forecastFetch = fetchGetForcast(query);

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
