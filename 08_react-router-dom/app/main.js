import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect, HashRouter, MemoryRouter} from 'react-router-dom';
import AAA from './components/a';
import BBB from './components/b';
import CCC from './components/c';
import NAV from './components/nav/'
import ErrorPage from './components/errorPage'; 


//BrowserRouter路由器，Route路由  exact精确匹配 ,
//Switch是路由开关（处理）
//Redirect处理用于处理路由重定向，但它只能处理的是上面没有定义过的路径，同时提供push属性，Redirect中加上push后，浏览器可以禁止后退
//import NAV from './components/nav/' 默认指向其下的index.js
//BrowserRouter - basename 模拟设置根目录 - forceRefresh={true} 表示要跳转到真实页面地址，而不是本地的项目的虚拟目录
//HashRouter替换BrowserRouter，就是以hash方式url http://localhost:9000/#/temp/b
//MemoryRouter内存机制，地址栏是不改变的，需要重启webpack
//NativeRouter - React-Native
//StaticRouter - SSR

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