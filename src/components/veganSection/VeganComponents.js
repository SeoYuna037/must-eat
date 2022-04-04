import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const RandomWrap = styled.section`
	background-color: #e7f6f5;
	padding: 3rem;
	h1 {
		font-size: 3rem;
		font-weight: 400;
	}
`;
export const FoodCard = styled.div`
	min-height: 24rem;
	border-radius: 30px;
	overflow: hidden;
	width: 100%;
	position: relative;
	.overlay {
		width: 100%;
		height: auto;
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 20px;
		left: 50%;
		top: 50%;
		opacity: 0;
		transform: translate(-50%, -50%);
		transition: 0.5s;
		background-color: rgba(255, 255, 255, 0.8);
		font-size: 1.3rem;
		border-radius: 30px;
	}
	.diets {
		background-color: #a2c8ec;
		color: #fff;
		font-size: 0.9rem;
		display: block;
		padding: 0 0.7rem;
	}
	img {
		position: absolute;
		border-radius: 30px;
		object-fit: cover;
		width: 100%;
		height: 70%;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		box-shadow: 0 10px 5px rgba(0, 0, 0, 0.3);
	}
	:hover .overlay {
		opacity: 1;
	}
`;
