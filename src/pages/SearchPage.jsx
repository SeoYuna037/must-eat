import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const SearchPage = () => {
	const [searchFood, setSearchFood] = useState([]);
	let params = useParams();
	const getSearch = async mealtype => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${mealtype}`,
		);
		const recipes = await data.json();
		setSearchFood(recipes.results);
	};
	useEffect(() => {
		getSearch(params.search);
	}, [params.search]);
	return (
		<Grid>
			{searchFood &&
				searchFood.map(item => {
					return (
						<div key={item.id}>
							<Link to={'/recipe/' + item.id}>
								<FoodCard key={item.id}>
									<img src={item.image} alt={item.title} />
									<h3>{item.title}</h3>
								</FoodCard>
							</Link>
						</div>
					);
				})}
		</Grid>
	);
};

export default SearchPage;
const Grid = styled.section`
	padding: 10rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	width: 100%;
	height: auto;
	gap: 10px;
`;

const FoodCard = styled.div`
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	padding: 2rem;
	img {
		border-radius: 30px;
		object-fit: cover;
		width: 100%;
	}
	h3 {
		text-align: center;
	}
`;
