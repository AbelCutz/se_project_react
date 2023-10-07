export const getForecastWeather = () => {
  const latitude = 40.6782;
  const longitude = -73.9442;
  const APIkey = "34b0a79076037b2784efc9404871b282";
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error:${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && Math.ceil(main.temp);
  const waether = {
    temperature: {
      f: `${Math.round(temperature)}`,
    },
  };
  return waether;
};

export const parseLocationData = (data) => {
  const locationName = data.name;
  return locationName;
};
