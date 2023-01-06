import fromUnixTime from "date-fns/fromUnixTime";
import format from "date-fns/format";

const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });

const storedWeather = {
  cityWeather: {},

  isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },

  get data() {
    return this.cityWeather;
  },

  set data(newObj) {
    if (this.isEmpty(this.cityWeather)) {
      Object.assign(this.cityWeather, newObj);
    } else {
      Object.keys(this.cityWeather).forEach((key) => {
        delete this.cityWeather[key];
      });
      Object.assign(this.cityWeather, newObj);
    }
  },
};

const weatherFactory = (
  feelsLike,
  currentTemp,
  windSpeed,
  humidity,
  cityName,
  weather,
  weatherDescription,
  sunriseUtc,
  sunsetUtc,
  countryCode
) => {
  const convertSpeed = (speedInMs) => {
    const speedInKmHr = (speedInMs * 18) / 5;
    return Math.round(speedInKmHr * 100) / 100;
  };

  const windSpeedKmHr = convertSpeed(windSpeed);
  const country = regionNamesInEnglish.of(countryCode);
  // do slice from end to get Time
  const sunrise = format(fromUnixTime(sunriseUtc), "do/MMM/yyyy hh:mmaa").slice(
    -7
  );
  const sunset = format(fromUnixTime(sunsetUtc), "do/MMM/yyyy hh:mmaa").slice(
    -7
  );

  return {
    feelsLike,
    currentTemp,
    windSpeedKmHr,
    humidity,
    cityName,
    weather,
    weatherDescription,
    sunrise,
    sunset,
    country,
  };
};

function store(obj) {
  storedWeather.data = weatherFactory(
    obj.main.feels_like,
    obj.main.temp,
    obj.wind.speed,
    obj.main.humidity,
    obj.name,
    obj.weather[0].main,
    obj.weather[0].description,
    obj.sys.sunrise,
    obj.sys.sunset,
    obj.sys.country
  );
}

function copyStoredCity() {
  return { ...storedWeather.cityWeather };
}

export { store, copyStoredCity };
