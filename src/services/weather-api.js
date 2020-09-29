import axios from "axios";

const apikey = "<YOUR_API_KEY_HERE>"; //go to https://openweathermap.org/api to get one

export const getForecast = async (city) => {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;
  const data = await axios.get(url);
  const days = data.data.list.filter((reading) =>
    reading.dt_txt.includes("12:00:00")
  );
  return days;
};

export const getWeather = async (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  const data = await axios.get(url);
  return data;
};
