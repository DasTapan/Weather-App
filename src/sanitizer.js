import checkExistence from "./admin";

function validateCity(city) {
  // console.log(`Entered city is -: ${city}`);
  return checkExistence(city);
}

export default validateCity;
