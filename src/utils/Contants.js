import daySunny from "../images/Day/daySunny.svg";
import dayCloudy from "../images/Day/dayCloudy.svg";
import dayRain from "../images/Day/dayRain.svg";
import dayStorm from "../images/Day/dayStorm.svg";
import daySnow from "../images/Day/daySnow.svg";
import dayFog from "../images/Day/dayFog.svg";
import nightSunny from "../images/Night/nightSunny.svg";
import nightCloudy from "../images/Night/nightCloudy.svg";
import nightRain from "../images/Night/nightRain.svg";
import nightStorm from "../images/Night/nightStorm.svg";
import nightSnow from "../images/Night/nightSnow.svg";
import nightFog from "../images/Night/nightFog.svg";

const location = {
  latitude: "",
  longitude: "",
};
export { location };

export const weatherCondition = [
  { url: daySunny, day: true, type: "sunny" },
  { url: dayCloudy, day: true, type: "cloudy" },
  { url: dayRain, day: true, type: "rain" },
  { url: dayStorm, day: true, type: "storm" },
  { url: daySnow, day: true, type: "snow" },
  { url: dayFog, day: true, type: "fog" },
  { url: nightSunny, day: false, type: "sunny" },
  { url: nightCloudy, day: false, type: "cloudy" },
  { url: nightRain, day: false, type: "rain" },
  { url: nightStorm, day: false, type: "storm" },
  { url: nightSnow, day: false, type: "snow" },
  { url: nightFog, day: false, type: "fog" },
];

// no need to use it now

// export const clothingItems = [
//   {
//     _id: 0,
//     name: "Cap",
//     weather: "hot",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
//   },
//   {
//     _id: 1,
//     name: "Hoodie",
//     weather: "warm",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
//   },
//   {
//     _id: 2,
//     name: "Jacket",
//     weather: "cold",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
//   },
//   {
//     _id: 3,
//     name: "Sneakers",
//     weather: "cold",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
//   },
//   {
//     _id: 4,
//     name: "T-Shirt",
//     weather: "hot",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
//   },
//   {
//     _id: 5,
//     name: "Winter coat",
//     weather: "cold",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
//   },
// ];
