import getCharacters from '../services/characterService.js'
import { useQuery } from '@tanstack/react-query'
import { useParams, Link } from '@tanstack/react-router'

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

    const { slug } = useParams({ strict: false})

    const query = useQuery({
        queryKey: ['characters'],
        queryFn: getCharacters,
    })

    const characters = query.data ?? []
    const loading = query.isLoading
    const error = query.isError ? 'Não foi possível carregar os personagens.' : null

    const selectedCharacter = characters.find((character) => character.slug === slug)

  return (
    <div>
        {error && !loading && <p>{error}</p>}
        {characters.length === 0 && !error && !loading && <p>Nenhum personagem encontrado.</p>}
        {loading && !error && <p>Carregando personagens...</p>}

        {!loading && !error && characters.length > 0 && (
          <>
            <Link to="/"><h1>Personagens</h1></Link>
            <ul>{characters.map((character) => (
                <li key={ character.name}>
                  <Link className={character.name === selectedCharacter?.name ? 'selected' : ''}
                        to={`/personagens/${character.slug}`}>{character.name}
                  </Link>
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