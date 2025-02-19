const baseURL = 'https://pokeapi.co/api/v2/pokemon'
const param = '?limit=10'

const getDataPokemon = async () =>{
        try {
            const result = []
            const respons = await fetch(`${baseURL}${param}`)
            if(!respons.ok) throw new Error(respons.statusText)
            const dataPokemon = await respons.json()
            const data = await Promise.all(dataPokemon?.results?.map(getPokemonDetails))
            console.log(data)
        } catch (error) {
            if(error instanceof Error) return console.log(error.message)
        }
}

const getPokemonDetails = async ({name, url}) =>{
    try {
        const res = await fetch(url)
        const data = await res.json(url)
        let temp ={name: data.name, ability: data.abilities}
        return temp

    } catch (error) {
        if(error instanceof Error) return console.log(error.message)
    }
}


module.exports = getDataPokemon