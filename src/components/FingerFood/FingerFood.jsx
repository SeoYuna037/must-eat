import React, { useEffect, useState } from 'react';
import { RandomWrap, FoodCard } from './FingerFoodComponents';
import { Link } from 'react-router-dom';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const FingerFood = () => {
	const [fingerFoodList, setfingerFoodList] = useState([]);
	useEffect(() => {
		getRandomFingerFood();
	}, []);
	const getRandomFingerFood = async () => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&mealtype=fingerfood`,
		);
		const data = await api.json();
		setfingerFoodList(data.recipes);
	};
	return (
		<RandomWrap>
			<h1>Finger Food</h1>
			<Splide
				options={{
					perPage: 4,
					drag: 'free',
					gap: '2rem',
					arrows: false,
					pagination: false,
				}}
			>
				{fingerFoodList &&
					fingerFoodList.map(recipe => {
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

export default FingerFood;
