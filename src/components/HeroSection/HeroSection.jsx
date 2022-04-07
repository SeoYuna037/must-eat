import React, { useEffect, useState } from 'react';
import { RandomWrap, FoodCard } from './HeroComponents';
import { Link } from 'react-router-dom';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
const HeroSection = () => {
	const [randomFood, setRandomFood] = useState([]);
	useEffect(() => {
		getRandom();
	}, []);
	const getRandom = async () => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`,
		);
		const data = await api.json();
		setRandomFood(data.recipes);
	};

	return (
		<RandomWrap>
			<h1>How about this food?</h1>
			<Splide
				options={{
					perPage: 3,
					drag: 'free',
					gap: '1rem',
				}}
			>
				{randomFood &&
					randomFood.map(recipe => {
						return (
							<SplideSlide key={recipe.id}>
								<Link to={'/recipe/' + recipe.id}>
									<FoodCard>
										<img src={recipe.image} alt={recipe.title} />
										<div className="overlay">
											<p>{recipe.title}</p>
										</div>
									</FoodCard>
								</Link>
							</SplideSlide>
						);
					})}
			</Splide>
		</RandomWrap>
	);
};

export default HeroSection;
