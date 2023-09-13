import { createSlice } from "@reduxjs/toolkit";
import { WeatherState } from "../../types/weather";

const initialState: WeatherState = {
  weather: null,
  isLoading: false,
  error: null,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
