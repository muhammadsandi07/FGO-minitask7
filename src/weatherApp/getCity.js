const kota = 'Jakarta'
const getDataWeather = require('./getData')
const getCity = () => {
  getDataWeather(kota)
}

module.exports = getCity
