import "./style.css";
import validateCity from "./sanitizer";
import getWeatherObj from "./messenger";

const input = document.querySelector("input[type='search']");
const btn = document.querySelector(".search-btn");

btn.addEventListener("click", (e) => {
  validateCity(input.value, e).then((result) => {
    if (!result) console.log(`${input.value} not found`);
    else {
      console.log(`${input.value} found`);
      console.log(`${input.value} weather: `, getWeatherObj());
    }
  });
});
