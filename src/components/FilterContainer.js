import { Link } from 'react-router-dom';
function FilterContainer({sortOption, setSortOption}) {
    
  return (
    <div className="container">
        <div className="button-wrapper">
          <h1>Pokedex</h1>
          <div className="options">
            <select className="filter" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
              <option value="" disabled>Filter</option>
              <option value="default">Default</option>
              <option value="name">Name</option>
              <option value="type">Type</option>
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