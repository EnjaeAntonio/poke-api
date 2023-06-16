import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios'; 
import Loading from "../components/Loading";
function Detail() {
    const { id } = useParams();
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/${id}`
    useEffect(() => {
        const fetchData = () => {
            axios.get(pokeURL)
            .then(res => {
              setPokemonDetails(res.data);
              setTimeout(()=>{
                setIsLoading(false);
              }, 1000)
              
            })
            .catch(err => {
              setErrorMessage(err);
            })
        }
        fetchData();
    }, [id]);

    if (isLoading) {
      return (
        <Loading />
      )
    }

  return (
    <div className="details container">
      <Helmet>
        <title>{pokemonDetails.name} details</title>
      </Helmet>
      {pokemonDetails ?      
      <div className="details-pokemon">
        <div>
          <img src={pokemonDetails.sprites.other["official-artwork"].front_default} alt={pokemonDetails.name} />        
        </div>
        <div className="details-text">
          <h1>{pokemonDetails.name}</h1>
          <p>Height: {pokemonDetails.height} ft</p>
          <p>Weight: {pokemonDetails.weight} lbs</p>
          <p>Number of Moves: {pokemonDetails.moves.length}</p>
          <Link to="/">Back to Pokedex</Link>
        </div>
      </div> :
      <div>{errorMessage}</div>
      }
 
    </div>
  )
}

export default Detail;