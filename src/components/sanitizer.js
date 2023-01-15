import checkExistence from "./admin";

function validateCity(city, event) {
  // default city data to load on page at the beginning
  if (event) {
    event.preventDefault();
  }
  return checkExistence(city);
}

export default validateCity;
