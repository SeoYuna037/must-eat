import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Category from './components/Category/Category';
import MainPage from './components/Mainpage/MainPage';
import Home from './pages/Home';

import './App.css';

const App = () => {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/category" component={Category} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
