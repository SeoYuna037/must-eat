import React from 'react';

import { Link } from 'react-router-dom';

import {
	HeaderNav,
	HeaderTitle,
	HeaderLink,
	LinkList,
	NavLink,
	HeaderContainer,
} from './HeaderComponents';

const Header = () => {
	return (
		<HeaderNav>
			<HeaderContainer>
				<HeaderTitle>Must Eat</HeaderTitle>
				<HeaderLink>
					<LinkList>
						<NavLink to="/">Main</NavLink>
					</LinkList>
					<LinkList>
						<NavLink to="/category">Category</NavLink>
					</LinkList>
				</HeaderLink>
			</HeaderContainer>
		</HeaderNav>
	);
};

export default Header;
