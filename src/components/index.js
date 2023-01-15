import "./style.css";
import favicon from "../assets/favicon.png";
import validateCity from "./sanitizer";
import getWeatherObj from "./messenger";
import render from "./render";

const head = document.querySelector("head");
const link = document.createElement("link");
const input = document.querySelector("input[type='search']");
const btn = document.querySelector(".search-btn");
const validationSpan = document.querySelector(".validation");

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

input.addEventListener("input", () => {
  if (input.validity.patternMismatch) {
    validationSpan.textContent = "Not a real city";
    validationSpan.classList.add("not-valid");
  }
  if (!input.validity.patternMismatch) {
    validationSpan.textContent = "";
    validationSpan.classList.remove("not-valid");
  }
});

btn.addEventListener("click", (e) => {
  if (input.validity.valueMissing) {
    input.setCustomValidity("we demand data");
  } else {
    validateCity(input.value, e).then((result) => {
      if (!result) {
        console.log(`${input.value} not found`);
      } else {
        render({ ...getWeatherObj() });
      }
    });
  }
});
