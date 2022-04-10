import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';
const Recipe = () => {
	let params = useParams();
	const [foodRecipe, setFoodRecipe] = useState({});
	const [activeBtn, setActiveBtn] = useState('instructions');

	const RecipeData = useCallback(async () => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`,
		);
		const foodData = await data.json();
		setFoodRecipe(foodData);
	}, [params.name]);

	useEffect(() => {
		RecipeData();
	}, [RecipeData]);
	return (
		<RecipeWrapper>
			<div>
				<h1>{foodRecipe.title}</h1>
				<img src={foodRecipe.image} alt={foodRecipe.title} />
			</div>
			<FoodInfo>
				<div className="button-list">
					<Button
						className={activeBtn === 'instructions' ? 'active' : ''}
						onClick={() => setActiveBtn('instructions')}
					>
						Instructions
					</Button>
					<Button
						className={activeBtn === 'ingredients' ? 'active' : ''}
						onClick={() => setActiveBtn('ingredients')}
					>
						Ingredients
					</Button>
				</div>
				{activeBtn === 'instructions' && (
					<div>
						<h3 dangerouslySetInnerHTML={{ __html: foodRecipe.summary }} />
						<h3 dangerouslySetInnerHTML={{ __html: foodRecipe.instructions }} />
					</div>
				)}
				{activeBtn === 'ingredients' && (
					<ul>
						{foodRecipe.extendedIngredients &&
							foodRecipe.extendedIngredients.map(ingredient => (
								<li key={ingredient.id}>{ingredient.original}</li>
							))}
					</ul>
				)}
			</FoodInfo>
		</RecipeWrapper>
	);
};

export default Recipe;

const RecipeWrapper = styled.article`
	margin: 5rem;
	display: flex;
	justify-content: center;

	.active {
		background-color: #000;
		color: #fff;
	}
	h1 {
		font-size: 2rem;
		font-weight: 500;
		width: 600px;
		padding: 1rem 0;
	}
	li {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}
	ul {
		margin-top: 2rem;
	}
	@media screen and (max-width: 1300px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
const Button = styled.button`
	padding: 1rem 1rem;
	color: #000;
	background-color: #fff;
	border: 2px solid black;
	margin-right: 1rem;
`;
const FoodInfo = styled.div`
	margin-left: 10rem;
	h3 {
		line-height: 1.9rem;
		font-weight: 400;
	}
	.button-list {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}
	@media screen and (max-width: 1300px) {
		margin-left: 0;
	}
`;
