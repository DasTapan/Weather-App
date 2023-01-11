import { copyStoredCity } from "./storage";

const dataBuffer = {
  bufferObj: {},

  makeCopy() {
    Object.keys(this.bufferObj).forEach((key) => delete this.bufferObj[key]);
    Object.assign(this.bufferObj, copyStoredCity());
  },
};

function getWeatherObj() {
  dataBuffer.makeCopy();
  return dataBuffer.bufferObj;
}

export default getWeatherObj;
