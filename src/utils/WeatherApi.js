import { checkServerResponse } from "./Api";

export const getForecastWeather = () => {
  const latitude = 40.6782;
  const longitude = -73.9442;
  const APIkey = "34b0a79076037b2784efc9404871b282";
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    return checkServerResponse(res);
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const temperature = data.main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  return weather;
};

export const parseLocationData = (data) => {
  const locationName = data.name;
  return locationName;
};
