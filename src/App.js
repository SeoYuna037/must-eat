import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import './App.css';
import DetailCategory from './pages/DetailCategory';
import SearchPage from './pages/SearchPage';
import Search from './components/Search/Search';

const App = () => {
	return (
		<Router>
			<Header />
			<Search />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/category" component={CategoryPage} />
				<Route exact path="/mealtype/:type" component={DetailCategory} />
				<Route exact path="/searched/:search" component={SearchPage} />
			</Switch>
		</Router>
	);
};

export default App;
