import { Link } from "react-router-dom";

function Header() {
  const pokeImg = "https://raw.githubusercontent.com/EnjaeAntonio/img/main/Other/pokeapi.png"
  return (
    <header>
        <div className="container flexbox">
              <div className="title">
            <Link to="/">
                  <img src={pokeImg}/>  
            </Link>
              </div>
              <nav>
                  <ul>
                      <li><a href="">Pokedex</a></li>
                      <li><a href="">Store</a></li>
                      <li><a href="">Support</a></li>
                      <li><a href="">News</a></li>
                  </ul>
              </nav>
            </div>
        </header>   
  )
}

export default Header;