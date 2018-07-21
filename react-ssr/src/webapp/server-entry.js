import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect, HashRouter, MemoryRouter} from 'react-router-dom';
import AAA from './components/a';
import BBB from './components/b';
import CCC from './components/c';
import NAV from './components/nav/'
import ErrorPage from './components/errorPage';
import './styles/main.css';

render(
	<Router>
		<div>
			<NAV />
			<Switch>
				<Route exact path="/" component={AAA} />	
				<Route exact path="/b" component={BBB} />	
				<Route exact path="/c/:aaaa/:bbbb" component={CCC} />
				<Redirect from="/zzz" to="/b" push/>
				<Route component={ErrorPage} />
			</Switch>
		</div>
	</Router>,
	document.getElementById('app')
);