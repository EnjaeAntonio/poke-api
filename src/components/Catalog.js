import axios from 'axios';
import { useState, useEffect } from 'react';
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
            console.log(details.map((p) => p.data))
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
    <div>
        <h1>Catalog</h1>
        {pokemon.map((p, index) => 
        <div key={index}>
            <p>{p.name}</p>
            <p>Height: {p.height}ft</p>
            <p>Number of Moves: {p.moves.length}</p>
            <img src={p.sprites.front_default} title={p.name}></img>
            </div>
        )}
    </div>
  )
}

export default Catalog;