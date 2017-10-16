## react动画
> 主要用于页面/组件间的切换
> 安装: cnpm install react-transition-group --save
> 说明: --save与--save-dev的区别是前者是生产环境需要依赖

## 路由
> 安装 cnpm install react-router-dom --save (生产环境需要依赖)
> react-router-dom是react-router的升级版本，放弃最早的react-router吧
> react-router中的Link与react-router-dom中的NavLink相比，没有activeClassName属性，所以无需安装react-router，直接安装react-router-dom，使用NavLink就好了
> activeClassName 表示当前活动链接的样式类
> 使用如下
```
-----------main.js--------------
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//BrowserRouter路由器，Route路由  exact属性表示精确匹配 ,
//Switch是路由开关
//Redirect处理用于处理路由重定向，但它只能处理的是上面没有定义过的路径，同时提供push属性，Redirect中加上push后，浏览器可以禁止后退
//BrowserRouter - basename 模拟设置根目录 - forceRefresh={true} 表示要跳转到真实页面地址，而不是本地的项目的虚拟目录
//HashRouter替换BrowserRouter，就是以hash方式url http://localhost:9000/#/temp/b
//MemoryRouter替换BrowserRouter，内存机制实现路由，地址栏是不改变的，需要重启webpack
//NativeRouter - React-Native
//StaticRouter - SSR
import NAV from './components/nav/'
//import NAV from './components/nav/' 默认指向其下的index.js
import AAA from './components/a';
import BBB from './components/b';
import CCC from './components/c';
import ErrorPage from './components/errorPage';
render(
    <Router basename="/temp">
        <div>
            <NAV /> 
            <Switch>
                <Route exact path="/" component={AAA} />    
                <Route exact path="/b" component={BBB} />   
                <Route exact path="/c" component={CCC} />   
                <Redirect from="/zzz" to="/b" push/>
                //说明，当点击<NavLink to="/zzz">error</NavLink>时，会匹配<Redirect from="/zzz" to="/b" push/>从而重定向到b页面，因为加上了push属性，因此进入b页面后，浏览器禁止后退操作
                <Route component={ErrorPage} /> 
            </Switch>
        </div>
    </Router>,
    document.getElementById('app')
);
----------------/nav/index.js------------------------
import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';
const NavBar = () => (
    <div>
        <div>
            <NavLink exact to="/" activeClassName="blue">AAA</NavLink> | &nbsp;
            <NavLink to="/b" activeClassName="blue" activeStyle={{fontSize:"20px"}}>BBB</NavLink> | &nbsp;
            <NavLink to="/c" activeClassName="blue">CCC</NavLink> | &nbsp;
            <NavLink to="/r">404</NavLink> | &nbsp;
            <NavLink to="/zzz">error</NavLink>
        </div>
    </div>
);
export default NavBar;
```
### 路由间组件传值
1.路由间传值（不常用）
```
const checkURL = (match, location) => {
    console.log(match);//{path: "/c", url: "/c", isExact: true, params: {…}}
    console.log(location);//{pathname: "/c", search: "", hash: "", state: undefined, key: "7nz33w"}
    console.log(location.search);// ?hello=world
    console.log(location.hash);// #/helloworld
};
<NavLink isActive={checkURL} to="/c/?hello=world" activeClassName="blue">CCC|search</NavLink>
<NavLink isActive={checkURL} to="/c/#/helloworld" activeClassName="blue">CCC|hash</NavLink>
```
2.组件间传值
```
<NavLink to="/c/helloworld/rt"></NavLink>
componentDidMount(){
    console.log(this.props);
}
render(){
    return (
        <div>C默认页面 {this.props.match.params.aaaa} | {this.props.match.params.bbbb}</div>
    );
}
```
### Prompt组件
> 类似js中的prompt弹窗，但是无法控制确定按钮要执行什么样的逻辑
> 它有两个属性 message 和 when
> - message="确定要离开该页面么？" 或 message={方法名}，该方法返回一个提示内容字符串
> - when="true/false" 可以通过状态机来控制离开页面时候是否需要提示
```
import React from 'react';
import {Prompt} from 'react-router-dom';
class BBB extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            wh: false
        }
        this.change = this.change.bind(this);
    }
    test(){
        return '走?'
    }
    change(){
        this.setState({
            wh: true
        })
    }
    render(){
        return (
            <div>
                <Prompt message={this.test} when={this.state.wh}/>
                <p>B默认页面</p>
                <button onClick={this.change}>启动离开时提示</button>
            </div>
        );
    }
}
```