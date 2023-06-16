function Loading() {
  const pokeImg ="https://raw.githubusercontent.com/EnjaeAntonio/img/main/Other/pokeball.png"
  return (
    <div className="details">
        <img src={pokeImg} className="loader"></img>
    </div>
  )
}

export default Loading;