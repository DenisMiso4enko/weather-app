export const fetchGetWeather = (query: string) =>
  fetch(
    `${import.meta.env.VITE_WEATHER_URL}/weather?q=${query}&appid=${
      import.meta.env.VITE_WEATHER_KEY
    }&units=metric`
  );

export const fetchGetForcast = (query: string) =>
  fetch(
    `${import.meta.env.VITE_WEATHER_URL}/forecast?q=${query}&appid=${
      import.meta.env.VITE_WEATHER_KEY
    }&cnt=7&units=metric`
  );
