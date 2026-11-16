import { useState } from 'react'
import getCharacters from '../services/characterService.js'
import { useQuery } from '@tanstack/react-query'

const CharList = () => {

    // const [characters, setCharacters] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)

    // useEffect(() => {
    //     const fetchCharacters = async () => {
    //       try {
    //         const data = await getCharacters()
    //         setCharacters(data)
    //       } 
    //       catch (error) {
    //         setError('Não foi possível carregar os personagens.')
    //       }
    //       finally {
    //         setLoading(false)
    //       }
    //     }

    //   fetchCharacters()
    // }, [])

    const [selectedCharacter, setSelectedCharacter] = useState(null)

    const query = useQuery({
        queryKey: ['characters'],
        queryFn: getCharacters,
    })

  const characters = query.data ?? []
  const loading = query.isLoading
  const error = query.isError ? 'Não foi possível carregar os personagens.' : null

    const handleCharacterClick = (character) => {
        setSelectedCharacter(character)
    }

  return (
    <div>
        {error && !loading && <p>{error}</p>}
        {characters.length === 0 && !error && !loading && <p>Nenhum personagem encontrado.</p>}
        {loading && !error && <p>Carregando personagens...</p>}

        {!loading && !error && characters.length > 0 && (
          <>
            <h1>Personagens</h1>
            <ul>{characters.map((character) => (
                <li key={ character.name}>
                  <button className={character.name === selectedCharacter?.name ? 'selected' : ''}  
                          onClick={() => handleCharacterClick(character)}>{character.name}</button>
                  </li>
              ))}
            </ul>
            <h2>Detalhes do Personagem</h2>
            <p>Persona: {selectedCharacter?.persona}</p>
            <p>Arcano: {selectedCharacter?.arcano}</p>
          </>
        )}
        
    </div>
  )
}

export default CharList