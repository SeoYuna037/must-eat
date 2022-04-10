import MainPage from '../components/Mainpage/MainPage';
import HeroSection from '../components/HeroSection/HeroSection';
import Vegan from '../components/veganSection/Vegan';
import React from 'react';
import styled from 'styled-components';
import FingerFood from '../components/FingerFood/FingerFood';

const Home = () => {
	return (
		<HomeWrapper>
			<HeroSection />
			<MainPage />
			<Vegan />
			<FingerFood />
		</HomeWrapper>
	);
};

export default Home;

const HomeWrapper = styled.section``;
