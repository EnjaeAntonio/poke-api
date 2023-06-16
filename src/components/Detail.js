import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios'; 
import {Link } from 'react-router-dom';
function Detail() {
    const { id } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            setPokemonDetails(response.data)
        }
        fetchData();
    }, [id]);
  return (
    <div>
      <h1>{pokemonDetails.name}</h1>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <p>Height: {pokemonDetails.height} ft</p>
      <p>Weight: {pokemonDetails.weight} lbs</p>
      <p>Number of Moves: {pokemonDetails.moves.length}</p>
      <Link to="/">Go back to catalog</Link>
    </div>
  )
}

export default Detail;