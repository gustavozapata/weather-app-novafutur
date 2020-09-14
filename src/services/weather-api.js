import axios from "axios";

const apikey = "4110e7b32aa470c359bc9ec3efab7abb";

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
