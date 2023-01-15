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
const patternError = document.querySelector(".pattern-error");

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
    errorSpan.setAttribute("style", "visibility: hidden");
    patternError.textContent = "Not a real city";
    patternError.classList.add("error-msg");
  }
  if (!input.validity.patternMismatch) {
    errorSpan.removeAttribute("style");
    patternError.textContent = "";
    patternError.classList.remove("error-msg");
  }
});

btn.addEventListener("click", (e) => {
  errorSpan.classList.remove("error-msg");
  errorSpan.textContent = "";
  if (input.validity.valueMissing) {
    input.setCustomValidity("Enter a city name");
  } else {
    validateCity(input.value, e).then((result) => {
      if (!result) {
        errorSpan.textContent = `${input.value} does not exist`;
        errorSpan.classList.add("error-msg");
      } else {
        render({ ...getWeatherObj() });
      }
    });
  }
});
