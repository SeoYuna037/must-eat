import MainPage from '../components/Mainpage/MainPage';
import HeroSection from '../components/HeroSection/HeroSection';
import Vegan from '../components/veganSection/Vegan';

import React from 'react';
import styled from 'styled-components';

const Home = () => {
	return (
		<HomeWrapper>
			<HeroSection />
			<Vegan />
			<MainPage />
		</HomeWrapper>
	);
};

export default Home;

const HomeWrapper = styled.section``;
