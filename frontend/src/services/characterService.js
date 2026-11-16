import axios from 'axios'

const API_URL = 'http://localhost:5173/characters.json'

const getCharacters = async () => {

        const response = await axios.get(API_URL)
        return response.data
}

export default getCharacters