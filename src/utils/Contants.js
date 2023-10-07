const location = {
  latitude: "",
  longtitude: "",
};
export { location };
export const link = URL;
export const day = true;
export const weatherCondition = [
  {
    url: require("../images/Day/sunny.svg").default,
    day: true,
    type: "sunny",
  },
  {
    url: require("../images/Day/Cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../images/Day/Rain.svg").default, day: true, type: "rain" },
  {
    url: require("../images/Day/Storm.svg").default,
    day: true,
    type: "storm",
  },
  { url: require("../images/Day/Snow.svg").default, day: true, type: "snow" },
  { url: require("../images/Day/Fog.svg").default, day: true, type: "fog" },
  {
    url: require("../images/Night/Clearnight.svg").default,
    day: false,
    type: "clearnight",
  },
  {
    url: require("../images/Night/Cloudynight.svg").default,
    day: false,
    type: "cloudynight",
  },
  {
    url: require("../images/Night/Rainynight.svg").default,
    day: false,
    type: "rainynight",
  },
  {
    url: require("../images/Night/Stormnight.svg").default,
    day: false,
    type: "stormnight",
  },
  {
    url: require("../images/Night/Snownight.svg").default,
    day: false,
    type: "snownight",
  },
  {
    url: require("../images/Night/Fognight.svg").default,
    day: false,
    type: "fognight",
  },
];
