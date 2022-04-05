import styled from 'styled-components';
export const SearchForm = styled.form`
	margin: 10rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #a2c8ec;
	padding: 3rem;
	input {
		border: none;
		outline: none;
		background-color: #a2c8ec;
		font-size: 1.2rem;
		padding: 1rem;
		border-radius: 15px;
		width: 40%;
		transition: 0.5s;
		:focus {
			width: 80%;
		}
	}
	svg {
		font-size: 2.3rem;
		color: #a2c8ec;
	}
`;
