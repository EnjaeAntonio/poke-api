import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
function Catalog() {

    const [pokemon, setPokemon] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {      
        const fetchData = async () => {
          try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20`);
            
            const details = await Promise.all(
                response.data.results.map((p) => axios.get(p.url))
            );
            setPokemon(details.map((p) => p.data));
            console.log(details.map((p) => ({...p.data, types: p.data.types})));

          } catch (error) {
              if (error.response && error.response.status === 404){
                setErrorMessage('User Not Found');
              }else {
                setErrorMessage(error.message);
              }
            };
          }
        fetchData();
      }, []);
    
  return (
    <div className="container">
        <h1>Pokedex</h1>
        <div className="catalog">
            {pokemon.map((p, index) => 
            <Link to={`/detail/${p.id}`} key={p.id}>
            <div className="pokemon" key={index}>
                <img src={p.sprites.front_default} title={p.name}></img>
                <h2>{p.name}</h2>
                <div className="flexbox">
                    {p.types.map((type) => (
                    <p>{type.type.name}</p>
                    ))}
                </div>

            </div>
            </Link>
            )}

        </div>

    </div>
  )
}

export default Catalog;