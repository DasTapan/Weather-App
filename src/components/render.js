import clearNightIcon from "../assets/clear-night.png";
import clearDayIcon from "../assets/clear-day.png";
import fewCloudsIcon from "../assets/few-clouds.png";
import scatteredCloudsIcon from "../assets/scattered-clouds.png";
import brokenCloudsIcon from "../assets/broken-clouds.png";
import mistIcon from "../assets/mist.png";
import rainyDayIcon from "../assets/rainy-day.png";
import rainyNightIcon from "../assets/rainy-night.png";
import showerRainIcon from "../assets/shower-rain.png";
import snowIcon from "../assets/snow.png";
import thunderstormIcon from "../assets/thunderstorm.png";

const city = document.querySelector(".city");
const verboseSpan = document.querySelector(".verbose");
const currentTemp = document.querySelector(".temp");
const icon = document.querySelector(".icon > div");
const feltTemp = document.querySelector(".felt-temp");
const mainWeather = document.querySelector(".icon>span");
const weatherDescription = document.querySelector("#main-weather");
const windSpeed = document.querySelector("#wind-speed");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");

function setWeatherIcon(iconCode) {
  let currentUrl;
  switch (iconCode) {
    case "01d":
      currentUrl = clearDayIcon;
      break;
    case "01n":
      currentUrl = clearNightIcon;
      break;
    case "02d":
    case "02n":
      currentUrl = fewCloudsIcon;
      break;
    case "03d":
    case "03n":
      currentUrl = scatteredCloudsIcon;
      break;
    case "04d":
    case "04n":
      currentUrl = brokenCloudsIcon;
      break;
    case "09d":
    case "09n":
      currentUrl = showerRainIcon;
      break;
    case "10d":
      currentUrl = rainyDayIcon;
      break;
    case "10n":
      currentUrl = rainyNightIcon;
      break;
    case "11d":
    case "11n":
      currentUrl = thunderstormIcon;
      break;
    case "13d":
    case "13n":
      currentUrl = snowIcon;
      break;
    case "50d":
    case "50n":
      currentUrl = mistIcon;
      break;

    default:
      break;
  }
  icon.style.backgroundImage = `url(${currentUrl})`;
}

function clean() {
  city.textContent = "";
  icon.style.backgroundImage = "";
  verboseSpan.textContent = "";
  currentTemp.textContent = "";
  feltTemp.textContent = "";
  mainWeather.textContent = "";
  weatherDescription.textContent = "";
  windSpeed.textContent = "";
  humidity.textContent = "";
  sunrise.textContent = "";
  sunset.textContent = "";
}

function render(weatherObj) {
  clean();
  currentTemp.textContent = `${weatherObj.cTemp}\xB0`;
  city.textContent = weatherObj.cityName;
  setWeatherIcon(weatherObj.icon);
  verboseSpan.textContent = "Feels Like";
  feltTemp.textContent = `${weatherObj.fTemp}\xB0`;
  mainWeather.textContent = weatherObj.weather;
  weatherDescription.textContent = weatherObj.weatherDescription;
  windSpeed.textContent = `${weatherObj.windSpeedKmHr} km/hr`;
  humidity.textContent = `${weatherObj.humidity}%`;
  sunrise.textContent = weatherObj.sunrise;
  sunset.textContent = weatherObj.sunset;
}

export default render;
