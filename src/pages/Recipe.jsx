import { Details } from '@material-ui/icons';
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
				{activeBtn === 'instructions' && (
					<div>
						<h3 dangerouslySetInnerHTML={{ __html: foodRecipe.summary }} />
						<h3 dangerouslySetInnerHTML={{ __html: foodRecipe.instructions }} />
					</div>
				)}
				{activeBtn === 'instructions' && (
					<ul>
						{Details.extendedIngredients &&
							Details.extendedIngredients.map(ingredient => (
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
	h1 {
		font-size: 2.2rem;
		font-weight: 500;
	}
	li {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}
	ul {
		margin-top: 2rem;
	}
`;
const Button = styled.button`
	padding: 1rem 1rem;
	color: #000;
	background-color: #fff;
	border: 2px solid black;
	margin-right: 1rem;
	.active {
		background-color: #000;
		color: #fff;
	}
`;
const FoodInfo = styled.div`
	margin-left: 10rem;
`;
