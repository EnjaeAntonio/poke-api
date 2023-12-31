import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import Loading from "../components/Loading";
import FilterContainer from "../components/FilterContainer";
function Catalog() {
	const [pokemon, setPokemon] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [currentPage, setCurrentPage] = useState(`https://pokeapi.co/api/v2/pokemon?limit=21`);
	const [nextPageURL, setNextPageURL] = useState();
	const [prevPageURL, setPrevPageURL] = useState();
	// MAYBE ADD SEARCH BAR?
	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const response = await axios.get(currentPage);

				setNextPageURL(response.data.next);
				setPrevPageURL(response.data.previous);

				const details = await Promise.all(response.data.results.map((p) => axios.get(p.url)));
				setPokemon(details.map((p, i) => ({ data: p.data, types: p.data.types, default: i })));
				setTimeout(() => {
					setIsLoading(false);
				}, 1000);
			} catch (error) {
				setErrorMessage(error.message);
				setTimeout(() => {
					setIsLoading(false);
				}, 1000);
			}
		};
		fetchData();
	}, [currentPage]);

	useEffect(() => {
		setPokemon(pokemon);
	}, [pokemon]);

	return (
		<>
			{isLoading ? (
				<Loading />
			) : (
				<div>
					<Helmet>
						<title>Pokedex</title>
					</Helmet>
					<FilterContainer
						setPokemon={setPokemon}
						pokemon={pokemon}
						prevPageURL={prevPageURL}
						nextPageURL={nextPageURL}
						setCurrentPage={setCurrentPage}
					/>
					<div className="catalog container">
						{pokemon ? (
							pokemon.map((p, index) => (
								<div className="pokemon" key={index}>
									<Link to={`/pokemon/${p.data.id}`} key={p.data.id}>
										<img
											src={p.data.sprites.other["official-artwork"].front_default}
											alt={p.data.name}
										/>
										<h2>{p.data.name}</h2>
										<div className="flexbox">
											{p.data.types.map((type, index) => (
												<p key={index}>{type.type.name}</p>
											))}
										</div>
									</Link>
								</div>
							))
						) : (
							<div className="catalog">{errorMessage}</div>
						)}
					</div>
				</div>
			)}
		</>
	);
}

export default Catalog;
