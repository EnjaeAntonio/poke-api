import { Helmet } from "react-helmet";

function NotFound() {
  const pokeImg ="https://raw.githubusercontent.com/EnjaeAntonio/img/main/Other/Missingno.png"
  return (
    <div className="center">
      <Helmet>
        <title>Error Not Found</title>
      </Helmet>
      <div className="not-found">
        <h1 className="error-title">Error 404</h1>
        <p className="error-message">Uh-oh! It seems like this Pokemon has gone missing...</p>
        <img src={pokeImg}></img>
      </div>

    </div>
  )
}

export default NotFound;