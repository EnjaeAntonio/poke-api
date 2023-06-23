import { Link } from 'react-router-dom';
function FilterContainer({setPokemon, setCurrentPage, nextPageURL, prevPageURL}) {

  const nextPage = () => {
    setCurrentPage(nextPageURL);
  }
  const prevPage = () => {
    setCurrentPage(prevPageURL);
  }
  const handleSortChange = (e) =>{
    const sortOption = e.target.value
    setPokemon((prevPokemon) => {
      const sortedPokemon = [...prevPokemon];

      switch (sortOption){
        case 'nameAsc':
          return sortedPokemon.sort((a, b) => a.data.name.localeCompare(b.data.name));
          case 'nameDesc':
          return sortedPokemon.sort((a, b) => b.data.name.localeCompare(a.data.name));
        case 'typeAsc':
          return sortedPokemon.sort((a, b) => a.data.types[0].type.name.localeCompare(b.types[0].type.name));
          case 'typeDesc':
            return sortedPokemon.sort((a, b) => b.data.types[0].type.name.localeCompare(a.types[0].type.name));
        case 'default': 
          return sortedPokemon.sort((a, b) => a.default - b.default)
        default:
          return sortedPokemon
      }
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
              <option value="nameAsc">Name: Ascending</option>
              <option value="nameDesc">Name: Descending</option>
              <option value="typeAsc">Type: Ascending</option>
              <option value="typeDesc">Type: Descending</option>
            </select>
            <Link to="/create-pokemon">
              <button className="create-btn">Create Pokemon!</button>
            </Link>
            <div className="pagination-wrapper">
              <button className="btn prev-btn" onClick={prevPage}>Previous</button>
              <button className="btn next-btn" onClick={nextPage}>Next</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FilterContainer