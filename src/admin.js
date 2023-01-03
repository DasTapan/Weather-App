import getInfo from "./connector";

function checkExistence(cityReceived) {
  const city = cityReceived.toLowerCase();
  // console.log(`city to be searched for -: ${city}`);
  return getInfo(city);
}

export default checkExistence;
