const axios = require("axios");
const apiKey = "1f6ced3bfab143cda1e44028240205";
async function fetchWeatherData(q, days) {
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${q}&days=${days}&aqi=no&alerts=no`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    // Handle error
    console.error("Error fetching weather data:", error);
    return null;
  }
}
export default fetchWeatherData;
