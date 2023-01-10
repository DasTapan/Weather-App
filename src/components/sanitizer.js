import checkExistence from "./admin";

function validateCity(city, event) {
  event.preventDefault();
  return checkExistence(city);
}

export default validateCity;
