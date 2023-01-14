import "./style.css";
import favicon from "../assets/favicon.png";
import validateCity from "./sanitizer";
import getWeatherObj from "./messenger";
import render from "./render";

const head = document.querySelector("head");
const link = document.createElement("link");
const input = document.querySelector("input[type='search']");
const btn = document.querySelector(".search-btn");
const errorSpan = document.querySelector(".error-box");

// validateCity("Puri").then(render({ ...getWeatherObj() }));

// validateCity("Puri").then((result) => {
//   render({ ...getWeatherObj() });
// });

link.setAttribute("rel", "shortcut icon");
link.setAttribute("type", "image/x-icon");
link.setAttribute("href", favicon);
head.appendChild(link);

async function defaultCityLoad() {
  await validateCity("Puri");
  render({ ...getWeatherObj() });
}

defaultCityLoad();

btn.addEventListener("click", (e) => {
  errorSpan.classList.remove("error-msg");
  errorSpan.textContent = "";
  validateCity(input.value, e).then((result) => {
    if (!result) {
      console.log(`${input.value} not found`);
      errorSpan.classList.add("error-msg");
      errorSpan.textContent = `${input.value} does not exist !`;
    } else {
      render({ ...getWeatherObj() });
    }
  });
});
