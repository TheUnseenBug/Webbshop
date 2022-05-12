import { Container } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import Navbar from '../Navbar/Navbar';

const Content = () => {
	const location = useLocation();
	return (
		<section className="route-page">
			<Switch location={location}>
				{ROUTES.map((route, i) => (
					<Route
						key={i}
						path={route.path}
						exact={route.exact}
						render={(props) => <route.component {...props} routes={route.routes} />}
					/>
				))}
			</Switch>
		</section>
	);
};

const ScreensRoot = () => {
	return (
		<Router>
			<Navbar />
			<Content />
		</Router>
	);
};

export default ScreensRoot;
