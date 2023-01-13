import checkExistence from "./admin";

function validateCity(city, event) {
  // for default city on page load
  if (event) {
    event.preventDefault();
  }
  return checkExistence(city);
}

export default validateCity;
