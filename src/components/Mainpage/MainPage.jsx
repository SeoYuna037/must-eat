import React, { useEffect, useState } from 'react';
import { RandomWrap, FoodCard } from './MainPageComponents';
import { Link } from 'react-router-dom';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const MainPage = () => {
	const [koreanFood, setKoreanFood] = useState([]);
	useEffect(() => {
		getRandom();
	}, []);
	const getRandom = async () => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&cusisine=korean`,
		);
		const data = await api.json();
		setKoreanFood(data.recipes);
	};
	return (
		<RandomWrap>
			<h1>Korean Food</h1>
			<Splide
				options={{
					perPage: 4,
					drag: 'free',
					gap: '2rem',
					arrows: false,
					pagination: false,
				}}
			>
				{koreanFood &&
					koreanFood.map(recipe => {
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

export default MainPage;
