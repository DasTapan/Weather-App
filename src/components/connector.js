import { store } from "./storage";

const MY_API_KEY = "07e56951bd7feaa91f50645e923ea3b2";

async function fetchData(cityString) {
  const cityResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityString}&appid=${MY_API_KEY}&units=metric`,
    { mode: "cors" }
  );
  if (!cityResponse.ok) {
    return false;
  }
  const cityObj = await cityResponse.json();
  // console.log(cityObj);
  store(cityObj);
  return cityObj;
}

function getInfo(city) {
  return fetchData(city);
}

export default getInfo;
