import checkExistence from "./admin";

function validateCity(city, event) {
  if (event) {
    event.preventDefault();
  }
  return checkExistence(city);
}

export default validateCity;
