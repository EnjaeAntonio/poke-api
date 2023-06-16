import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Catalog() {

    const [pokemon, setPokemon] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [sortOption, setSortOption] = useState('Sort By');
    const [isLoading, setIsLoading] = useState(Boolean);
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon?limit=136");

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
                setErrorMessage('Pokemon Not Found');
              }else {
                setErrorMessage(error.message);
              }
            };
          }
        fetchData();
      }, [currentPage]);

      let displayedPokemon = pokemon;

      if (sortOption === 'name') {
          displayedPokemon = [...pokemon].sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOption === 'type') {
          displayedPokemon = [...pokemon].sort((a, b) => a.types[0].type.name.localeCompare(b.types[0].type.name));
      } 

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
          <div className="options">
            <select className="filter" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="Sort By" disabled>Filter</option>
              <option value="Original">Original</option>
              <option value="name">Name</option>
              <option value="type">Type</option>
            </select>
            <Link to="/create-pokemon">
            <button className="create-btn">Create Pokemon!</button>
            </Link>
          </div>
        </div>
        <div className="catalog">
            {displayedPokemon.map((p, index) => 
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