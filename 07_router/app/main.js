import React from "react";
import {render} from "react-dom";
import Home from "./pages/home.js";
import Page1 from "./pages/page1.js";
import Page2 from "./pages/page2.js";
import {Router, Route, hashHistory} from 'react-router';

render((
	<Router history={hashHistory}>
    	<Route path="/" component={Home} />
    	<Route path="/page1" component={Page1} />
    	<Route path="/page2" component={Page2} />
  	</Router>
), document.getElementById('app'));