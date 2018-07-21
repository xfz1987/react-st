import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';

const checkURL = (match, location) => {
	console.log(match);//{path: "/c", url: "/c", isExact: true, params: {…}}
	console.log(location);//{pathname: "/c", search: "", hash: "", state: undefined, key: "7nz33w"}
	console.log(location.search);// ?hello=world
	console.log(location.hash);// #/helloworld
};

//activeClassName 当前点击的页面
//Link同NavLink，但是Link没有activeClassName，所以以后就使用react-router-dom哄的NavLink就好了
//<NavLink isActive={checkURL} to="/c/?hello=world" activeClassName="blue">CCC|search</NavLink> | &nbsp;
//<NavLink isActive={checkURL} to="/c/#/helloworld" activeClassName="blue">CCC|hash</NavLink> | &nbsp;
const NavBar = () => (
	<div>
		<NavLink exact to="/" activeClassName="green">AAA</NavLink> | &nbsp;
		<NavLink to="/b?id=5" activeClassName="green" activeStyle={{fontSize:"20px"}}>BBB</NavLink> | &nbsp;
		<NavLink to="/c/helloworld/rt" activeClassName="green">CCC|hash</NavLink> | &nbsp;
		<NavLink to="/r">404</NavLink> | &nbsp;
		<NavLink to="/zzz">error</NavLink>
	</div>
);

export default NavBar;