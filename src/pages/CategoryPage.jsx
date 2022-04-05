import React from 'react';

import Category from '../components/Category/Category';
import styled from 'styled-components';

const CategoryPage = () => {
	return (
		<CategoryWrapper>
			<Category />
		</CategoryWrapper>
	);
};

export default CategoryPage;
const CategoryWrapper = styled.section``;
