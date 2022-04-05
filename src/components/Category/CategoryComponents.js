import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryName = styled.article`
	padding: 5rem;
	h1 {
		font-size: 1.4rem;
	}
`;
export const CategoryList = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	text-align: center;
	gap: 20px;
	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;
export const CategoryCard = styled(Link)`
	padding: 4rem;
	border: 1px solid #333;
	font-size: 1.5rem;
	color: #333;
	transition: 0.3s;
	@media screen and (max-width: 768px) {
		font-size: 1rem;
		padding: 2rem 0;
	}
	:hover {
		background-color: #333;
		color: #fff;
	}
`;
