# 路由
> 基于jsx语法定义的路由
> 1. import { Router } from 'react-router';
> 2. 在父组件中，定义容器(this.props.children)
> 3. 定义路由组件，import { Router, Route, hashHistory } from 'react-router';
> - Route组件中
> * path 定义路由规则，静态参数直接写，动态参数:语法，同VUE
> * component 定义该规则下渲染的组件
> - IndexRoute 只需要定义component 
> 4. render 渲染路由组件

## 基本使用
```
//Router组件本身只是一个容器，真正的路由要通过Route组件定义。
import { Router, Route, hashHistory } from 'react-router';
render((
  //history={hashHistory}表示，路由的切换由URL的hash变化决定，即URL的#部分发生变化
  //例如用户访问http://www.example.com/，实际会看到的是http://www.example.com/#/
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'));
//用户访问/repos（比如http://localhost:8080/#/repos）时，加载Repos组件；访问/about（http://localhost:8080/#/about）时，加载About组件。
```

## Route组件还可以嵌套
```
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <Route path="/repos" component={Repos}/>
    <Route path="/about" component={About}/>
  </Route>
</Router>
//上面代码中，用户访问/repos时，会先加载App组件，然后在它的内部再加载Repos组件。
<App>
  <Repos/>
</App>
//App组件要写成下面的样子。
export default React.createClass({
  render() {
    return <div>
      {this.props.children}
    </div>
  }
})
//上面代码中，App组件的this.props.children属性就是子组件。子路由也可以不写在Router组件里面，单独传入Router组件的routes属性。
let routes = <Route path="/" component={App}>
  <Route path="/repos" component={Repos}/>
  <Route path="/about" component={About}/>
</Route>;
<Router routes={routes} history={browserHistory}/>
```

## path 属性
```
<Route path="/repos" component={Repos}>
    <Route path="/repos/:userName/:repoName" component={Repo}/>
</Route>
```

## IndexRoute 组件
> 注意，IndexRoute组件没有路径参数path
```
<Router>
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="accounts" component={Accounts}/>
    <Route path="statements" component={Statements}/>
  </Route>
</Router>
//现在，用户访问/的时候，加载的组件结构如下
<App>
  <Home/>
</App>
```

## Link
> Link组件用于取代<a>元素，生成一个链接，允许用户点击后跳转到另一个路由。它基本上就是<a>元素的React 版本，可以接收Router的状态
> 如果希望当前的路由与其他路由有不同样式，这时可以使用Link组件的activeStyle属性
```
<Link to="/about" activeStyle={{color: 'red'}}>About</Link>
<Link to="/repos" activeStyle={{color: 'red'}}>Repos</Link>
```
> 另一种做法是，使用activeClassName指定当前路由的Class
```
render() {
  return <div>
    <ul role="nav">
      <li><Link to="/about">About</Link></li>
      <li><Link to="/repos">Repos</Link></li>
    </ul>
  </div>
}
``` 

## IndexLink
> 如果链接到根路由/，不要使用Link组件，而要使用IndexLink组件
> 这是因为对于根路由来说，activeStyle和activeClassName会失效，或者说总是生效，因为/会匹配任何子路由。而IndexLink组件会使用路径的精确匹配
```
<IndexLink to="/" activeClassName="active"> Home</IndexLink>
```

## histroy 属性
> Router组件的history属性，用来监听浏览器地址栏的变化，并将URL解析成一个地址对象，供 React Router 匹配。
> import {hashHistory,browserHistory,}
> history属性，可以设置三种值(browserHistory、hashHistory、createMemoryHistory)
> - hashHistory URL的形式类似example.com/#/some/path。
> - browserHistory 显示正常的路径example.com/some/path,但是，这种情况需要对服务器改造。否则用户直接向服务器请求某个子路由，会显示网页找不到的404错误
> 如果开发服务器使用的是webpack-dev-server，加上--history-api-fallback参数就可以了
> ```webpack-dev-server --inline --content-base . --history-api-fallback```
> - createMemoryHistory 主要用于服务器渲染,它创建一个内存中的history对象,不与浏览器URL互动
> ```const history = createMemoryHistory(location)```

