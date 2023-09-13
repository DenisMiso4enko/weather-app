import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherState } from "../../types/weather";
import { fetchWeather } from "../Actions/weatherAction";

const initialState: WeatherState = {
  weather: null,
  forcast: null,
  isLoading: false,
  error: null,
  searchQuery: "Minsk",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
    setForcast: (state, action) => {
      state.forcast = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeather.fulfilled, (state) => {
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.isLoading = false;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.error = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setSearchQuery, setWeather, setForcast } = weatherSlice.actions;

export default weatherSlice.reducer;
