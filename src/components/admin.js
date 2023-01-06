import getInfo from "./connector";

function checkExistence(cityReceived) {
  const city = cityReceived.toLowerCase();
  return getInfo(city);
}

export default checkExistence;
