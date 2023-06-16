function Header() {
  const pokeImg = "https://raw.githubusercontent.com/EnjaeAntonio/img/main/Other/pokeapi.png"
  return (
    <header>
        <div className="container flexbox">
            <div className="title">
            <img src={pokeImg}/>  
            </div>
              <nav>
                  <ul>
                      <li><a href="">Pokemons</a></li>
                      <li><a href="">History</a></li>
                      <li><a href="">API</a></li>
                      <li><a href="">Newsletter</a></li>
                  </ul>
              </nav>
            </div>
        </header>   
  )
}

export default Header;