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
				<Link to="/">
					<HeaderTitle>Must Eat</HeaderTitle>
				</Link>
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
