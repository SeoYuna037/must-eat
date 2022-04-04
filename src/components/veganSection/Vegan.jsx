import React, { useEffect, useState } from 'react';
import { RandomWrap, FoodCard } from './VeganComponents';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
const Vegan = () => {
	const [veganFood, setVeganFoodFood] = useState([]);
	useEffect(() => {
		getRandom();
	}, []);
	const getRandom = async () => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegan`,
		);
		const data = await api.json();
		setVeganFoodFood(data.recipes);
		console.log(data.recipes);
	};

	return (
		<RandomWrap>
			<h1>VeganFood</h1>
			<Splide
				options={{
					perPage: 4,
					drag: 'free',
					gap: '2rem',
					arrows: false,
					pagination: false,
				}}
			>
				{veganFood.map(recipe => {
					return (
						<SplideSlide key={recipe.id}>
							<FoodCard>
								<img src={recipe.image} alt={recipe.title} />
								<div className="overlay">
									<p>{recipe.title}</p>
									<p className="diets">{recipe.diets}</p>
								</div>
							</FoodCard>
						</SplideSlide>
					);
				})}
			</Splide>
		</RandomWrap>
	);
};

export default Vegan;
