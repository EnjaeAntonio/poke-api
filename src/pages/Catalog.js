import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Loading from "../components/Loading";
import FilterContainer from "../components/FilterContainer";
function Catalog() {

    const [pokemon, setPokemon] = useState([]);
    const [sortedPokemon, setSortedPokemon] = useState([]);
    const [sortOption, setSortOption] = useState('Sort By');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon?limit=136");
    useEffect(() => {      
        const fetchData = async () => {
          try {
            setIsLoading(true)
            const response = await axios.get(currentPage);
            const details = await Promise.all(
                response.data.results.map((p) => axios.get(p.url))
            );
            setPokemon(details.map((p) => ({data: p.data, types: p.data.types})));
            setTimeout(() =>{
              setIsLoading(false);
            },1000)
          } catch (error) {
              setTimeout(() =>{
                setIsLoading(false);
              },1000)
              setErrorMessage(error.message);
            };
          }
        fetchData();
      }, [currentPage]);
    useEffect(()=>{
      const sortedPokemon = [...pokemon];
        if (sortOption === 'name') {
          setCurrentPage(sortedPokemon.sort((a, b) => a.name.localeCompare(b.name)));
        } else if (sortOption === 'type') {
          setCurrentPage(sortedPokemon.sort((a, b) => a.types[0].type.name.localeCompare(b.types[0].type.name)));
        } else {
          setCurrentPage(sortedPokemon)
        }
        setSortedPokemon(sortedPokemon);        
      }, [pokemon, sortOption])
      
  return (
    <>
      {isLoading ? <Loading/>
      : <div>
      <Helmet>
        <title>Pokedex</title>
      </Helmet>
      <FilterContainer sortOption={sortOption} setSortOption={setSortOption}/>
        <div className="catalog container">
            {sortedPokemon ?
             sortedPokemon.map((p, index) => 
              <div className="pokemon" key={index}>
                <Link to={`/pokemon/${p.data.id}`} key={p.id}>
                  <img src={p.data.sprites.other["official-artwork"].front_default} alt={p.data.name} />        
                    <h2>{p.data.name}</h2>
                    <div className="flexbox">
                        {p.data.types.map((type, index) => (
                        <p key={index}>{type.type.name}</p>
                        ))}
                    </div>  
                </Link>
              </div>
            ) : 
            <div className="catalog">{errorMessage}</div>
            }
        </div>
      </div> 
      }
    </>
  )
}

export default Catalog;