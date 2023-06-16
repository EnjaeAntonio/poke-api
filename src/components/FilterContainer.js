import { Link } from 'react-router-dom';
function FilterContainer({setSortedPokemon, pokemon}) {

  const handleSortChange = (e) =>{
    const sortOption = e.target.value
    setSortedPokemon((prevPokemon) => {
      const sortedPokemon = [...prevPokemon];
      if (sortOption === 'name') {
        sortedPokemon.sort((a, b) => a.data.name.localeCompare(b.data.name));
      } else if (sortOption === 'type') {
        sortedPokemon.sort((a, b) => a.data.types[0].type.name.localeCompare(b.types[0].type.name));
      } else {
        return pokemon;
      }
      return sortedPokemon;
    });
  };
  
  return (
    <div className="container">
        <div className="button-wrapper">
          <div className="pokedex-title">
            <h1>Pokedex</h1>
          </div>
          <div className="options">
            <select className="filter" name="filter" onChange={handleSortChange}>
              <option value="" disabled>Sort By</option>
              <option value="default">Default</option>
              <option value="name">Name</option>
              <option value="type">Type (A-Z)</option>
            </select>
            <Link to="/create-pokemon">
              <button className="create-btn">Create Pokemon!</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default FilterContainer