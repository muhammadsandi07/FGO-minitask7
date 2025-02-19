const readline = require('node:readline')
const getCity = require('./src/weatherApp/getCity')

const { stdin: input, stdout: output } = require('node:process')
const getDataPokemon = require('./src/pokemon/getDataPokemon')

const rl = readline.createInterface({ input, output })

rl.question(
  ` pilih menu
1. aplikasi cuaca
2. aplikasi data pokemon
`,
  (answer) => {
    // TODO: Log the answer in a database
    if (answer === '1') {
      getCity(answer)
      rl.close()
    } else {
      getDataPokemon()
      rl.close()
    }
  }
)
