import React from 'react';
import { CategoryList, CategoryCard, CategoryName } from './CategoryComponents';

import { GiSlicedBread, GiCookie, GiTomato } from 'react-icons/gi';
import { BiDish, BiDrink } from 'react-icons/bi';
const Category = () => {
	return (
		<CategoryName>
			<h1>Meal Types</h1>
			<CategoryList>
				<CategoryCard to="/mealtype/maincourse">
					<BiDish />
					MainDish
				</CategoryCard>
				<CategoryCard to="/mealtype/bread">
					<GiSlicedBread />
					Bread
				</CategoryCard>
				<CategoryCard to="/mealtype/salad">
					<GiTomato />
					Salad
				</CategoryCard>
				<CategoryCard to="/mealtype/dessert">
					<GiCookie />
					Dessert
				</CategoryCard>
				<CategoryCard to="/mealtype/drink">
					<BiDrink />
					Drink
				</CategoryCard>
			</CategoryList>
		</CategoryName>
	);
};

export default Category;
