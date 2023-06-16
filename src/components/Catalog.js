import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Catalog() {

    const [pokemon, setPokemon] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(Boolean);
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");

    useEffect(() => {      
        const fetchData = async () => {
          try {
            setIsLoading(true);
            const response = await axios.get(currentPage);
            const details = await Promise.all(
                response.data.results.map((p) => axios.get(p.url))
            );
            setPokemon(details.map((p) => ({...p.data, types: p.data.types})));
            setIsLoading(false);
          } catch (error) {
              setIsLoading(false);
              if (error.response && error.response.status === 404){
                setErrorMessage('User Not Found');
              }else {
                setErrorMessage(error.message);
              }
            };
          }
        fetchData();
      }, [currentPage]);

      if (isLoading) {
        return (
          <div className="details">
            <div className="loader"></div>
          </div>
        );
      }
    
  return (
    <div className="container">
        <div className="button-wrapper">
          <h1>Pokedex</h1>
          <div className="buttons">
            
          </div>
        </div>
        <div className="catalog">
            {pokemon.map((p, index) => 
            <div className="pokemon" key={index}>
            <Link to={`/pokemon/${p.id}`} key={p.id}>
              <img src={p.sprites.other["official-artwork"].front_default} alt={p.name} />        
                <h2>{p.name}</h2>
                <div className="flexbox">
                    {p.types.map((type) => (
                    <p>{type.type.name}</p>
                    ))}
                </div>

            </Link>
            </div>
            )}

        </div>

    </div>
  )
}

export default Catalog;