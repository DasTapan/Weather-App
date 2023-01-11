const iconUrl = "http://openweathermap.org/img/wn/";
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
  icon.style.backgroundImage = `url('${iconUrl}${weatherObj.icon}@2x.png')`;
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
