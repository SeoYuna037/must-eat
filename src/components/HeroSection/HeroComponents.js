import styled from 'styled-components';

export const RandomWrap = styled.section`
	background-color: #fff;
	margin: 0 10rem;
	h1 {
		font-size: 3rem;
		font-weight: 400;
		padding-top: 1rem;
	}
	@media screen and (max-width: 768px) {
		margin: 0;
	}
`;
export const FoodCard = styled.div`
	min-height: 35rem;
	border-radius: 30px;
	overflow: hidden;
	width: 100%;
	position: relative;
	.overlay {
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
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
