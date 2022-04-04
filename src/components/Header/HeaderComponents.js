import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const HeaderNav = styled.header`
	background-color: #a2c8ec;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 80;
	box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
	padding: 0 10rem;
	@media screen and (max-width: 768px) {
		padding: 0 5rem;
	}
`;
export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

export const HeaderTitle = styled.h1`
	font-size: 3rem;
	font-weight: 600;
	color: #fff;
`;

export const HeaderLink = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 150px;
`;

export const LinkList = styled.div`
	margin: 10px;
`;

export const NavLink = styled(LinkR)`
	font-size: 1.2rem;
	color: #fff;
	border: 1px solid #fff;
	padding: 1rem 1.5rem;
	border-radius: 20px;
	transition: 0.3s;
	:hover {
		background-color: #fff;
		color: #a2c8ec;
	}
	@media screen and (max-width: 768px) {
		padding: 1rem;
	}
`;
