const getDataWeather = async (kota) => {
  const key = '6ad1a7ef1069b263caf02b7e9e3183ad'
  try {
    const respons = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=${key}`
    )
    const data = await respons.json()
    data.weather.forEach((element) => {
      const { main, description } = element
      console.log(description)
      console.log(`cuaca dikota ${kota}: ${main}, description: ${description}`)
    })
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = getDataWeather
