import validateCity from "./sanitizer";

const input = document.querySelector("input[type='search']");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  validateCity(input.value).then((result) => {
    if (!result) console.log(`${input.value} not found`);
    else {
      console.log(`${input.value} found`);
      console.log(result);
    }
  });
});
