var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=a82f980a1e7b69715f87ff7bd829d6a8&units=imperial';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);

  return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${encodedLocation}&appid=a82f980a1e7b69715f87ff7bd829d6a8&units=imperial`).then((res) => {
      if(res.data.cod && res.data.message) {
        throw new Error('Unable to fetch weather for that location');
      } else {
        return res.data.main.temp;
      }
    }, (res) => {
      throw new Error('Unable to fetch weather for that location.');
    });
  }
}
