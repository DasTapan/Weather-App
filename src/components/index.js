import "./style.css";
import validateCity from "./sanitizer";
import getWeatherObj from "./messenger";
import render from "./render";

const input = document.querySelector("input[type='search']");
const btn = document.querySelector(".search-btn");

// validateCity("Puri").then(render({ ...getWeatherObj() }));

// validateCity("Puri").then((result) => {
//   render({ ...getWeatherObj() });
// });

async function defaultCityLoad() {
  await validateCity("Puri");
  render({ ...getWeatherObj() });
}

defaultCityLoad();

btn.addEventListener("click", (e) => {
  validateCity(input.value, e).then((result) => {
    if (!result) console.log(`${input.value} not found`);
    else {
      // console.log(`${input.value} found`);
      // console.log(`${input.value} weather: `, getWeatherObj());
      render({ ...getWeatherObj() });
    }
  });
});
