import React from "react";
import {render} from "react-dom";
import App from "./App.js";

// 挂在组件: jsx、组件挂在哪里
render(
	//自定义组件建议使用单标签
	<App />,
	document.getElementById('app')
);