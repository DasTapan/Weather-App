import fromUnixTime from "date-fns/fromUnixTime";
import format from "date-fns/format";
import add from "date-fns/add";
import sub from "date-fns/sub";

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
  icon,
  sunriseUtc,
  sunsetUtc,
  countryCode,
  tzOffset
) => {
  const convertSpeed = (speedInMs) => {
    const speedInKmHr = (speedInMs * 18) / 5;
    return Math.round(speedInKmHr * 10) / 10;
  };

  const toResultCountryTime = (utcTimestamp) => {
    const userTimeZone = new Date();
    let resultCountryDate;
    // multiplied by -1 as the method returns -120 for UTC+2:00
    const userOffsetSeconds = userTimeZone.getTimezoneOffset() * 60 * -1;

    if (userOffsetSeconds === tzOffset)
      resultCountryDate = fromUnixTime(utcTimestamp);
    if (userOffsetSeconds > tzOffset) {
      const diff = userOffsetSeconds - tzOffset;
      const userDate = fromUnixTime(utcTimestamp);
      resultCountryDate = sub(userDate, { seconds: diff });
    }
    if (tzOffset > userOffsetSeconds) {
      const diff = tzOffset - userOffsetSeconds;
      const userDate = fromUnixTime(utcTimestamp);
      resultCountryDate = add(userDate, { seconds: diff });
    }
    return resultCountryDate;
  };

  const windSpeedKmHr = convertSpeed(windSpeed);
  const country = regionNamesInEnglish.of(countryCode);

  // do slice from end to get Time
  const sunrise = format(
    toResultCountryTime(sunriseUtc),
    "do/MMM/yyyy hh:mmaa"
  ).slice(-7);
  const sunset = format(
    toResultCountryTime(sunsetUtc),
    "do/MMM/yyyy hh:mmaa"
  ).slice(-7);

  const cTemp = Math.round(currentTemp * 10) / 10;
  const fTemp = Math.round(feelsLike * 10) / 10;

  return {
    fTemp,
    cTemp,
    windSpeedKmHr,
    humidity,
    cityName,
    weather,
    weatherDescription,
    icon,
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
    obj.weather[0].icon,
    obj.sys.sunrise,
    obj.sys.sunset,
    obj.sys.country,
    obj.timezone
  );
}

function copyStoredCity() {
  return { ...storedWeather.cityWeather };
}

export { store, copyStoredCity };
