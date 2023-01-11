const city = document.querySelector(".city");
const verboseSpan = document.querySelector(".verbose");
const currentTemp = document.querySelector(".temp");
const feltTemp = document.querySelector(".felt-temp");
const mainWeather = document.querySelector("#main-weather");
const windSpeed = document.querySelector("#wind-speed");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");

function clean() {
  city.textContent = "";
  verboseSpan.textContent = "";
  currentTemp.textContent = "";
  feltTemp.textContent = "";
  mainWeather.textContent = "";
  windSpeed.textContent = "";
  humidity.textContent = "";
  sunrise.textContent = "";
  sunset.textContent = "";
}

function render(weatherObj) {
  clean();
  currentTemp.textContent = `${weatherObj.cTemp}\xB0`;
  city.textContent = weatherObj.cityName;
  verboseSpan.textContent = "Feels Like";
  feltTemp.textContent = `${weatherObj.fTemp}\xB0`;
  mainWeather.textContent = weatherObj.weatherDescription;
  windSpeed.textContent = `${weatherObj.windSpeedKmHr} km/hr`;
  humidity.textContent = `${weatherObj.humidity}%`;
  sunrise.textContent = weatherObj.sunrise;
  sunset.textContent = weatherObj.sunset;
}

export default render;
