import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
function Detail() {
    const { id } = useParams();
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            try{
              const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
              setPokemonDetails(response.data);
              console.log(response.data)
              setTimeout(() => {
                setIsLoading(false);
              }, 2000 )
            }catch (err){
              setErrorMessage(err);
            }
        }
        fetchData();
    }, [id]);

    if (isLoading) {
      return (
        <div className="details">
          <div className="loader"></div>
        </div>
      );}

  return (
    <div className="details container">
      <div className="details-pokemon">
        <div>
        <img src={pokemonDetails.sprites.other["official-artwork"].front_default} alt={pokemonDetails.name} />        
        </div>
        <div className="details-text">
          <h1>{pokemonDetails.name}</h1>
          <p>Height: {pokemonDetails.height} ft</p>
          <p>Weight: {pokemonDetails.weight} lbs</p>
          <p>Number of Moves: {pokemonDetails.moves.length}</p>
          <Link to="/"><a>Back to Pokedex</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Detail;