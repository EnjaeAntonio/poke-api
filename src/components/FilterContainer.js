import { Link } from 'react-router-dom';
function FilterContainer({sortOption, setSortOption}) {
  return (
    <div className="container">
        <div className="button-wrapper">
          <div className="pokedex-title">
            <h1>Pokedex</h1>
          </div>
          <div className="options">
            <label htmlFor="filter">Sort By: </label>
            <select className="filter" name="filter" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
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