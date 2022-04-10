import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const DetailCategory = () => {
	const [mealType, setMealType] = useState([]);
	let params = useParams();
	const getCategory = async mealtype => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&type=${mealtype}`,
		);
		const recipes = await data.json();
		setMealType(recipes.results);
	};
	useEffect(() => {
		getCategory(params.type);
	}, [params.type]);
	return (
		<Grid>
			{mealType &&
				mealType.map(item => {
					return (
						<div key={item.id}>
							<Link to={'/recipe/' + item.id}>
								<FoodCard>
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

export default DetailCategory;

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
	height: 350px;
	img {
		border-radius: 30px;
		object-fit: cover;
		width: 100%;
	}
	h3 {
		text-align: center;
	}
	@media screen and (max-width: 1200px) {
		height: auto;
	}
`;
