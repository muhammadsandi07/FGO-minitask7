const kota = 'Surabaya'
const getDataWeather = require('./getData')
const getCity = () => {
  getDataWeather(kota)
}

module.exports = getCity
