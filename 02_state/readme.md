# 三兄弟 state props context

## state
> 先看一个错误的组件案例
```
import React, {Component} from 'react';
/**
 * 可以在组件的类定义上写constructor，里面定义this.a = 100,表示给组件的实例绑定一个a属性，在JSX使用，直接this.a即可
 * 但是我们发现点击按钮后，a和b的打印值都确实变了，但视图并没有改变，还是100与1说明Virtual Dom 没有改变，MVVM是失效的, 
 * *React中，组件自己的属性值的变化，不会引发视图的变化*
 * *闭包中的值变化，也不会引发视图的变化*
 */
class App extends Component{
  //构造函数
  constructor(){
    super();
    this.a = 100;
  }
  add(){
    this.a++;
    console.log(this.a);//101
  }
  render(){
    return (
      let b = 1;
      <div>
        <p>{this.a}</p>
        <p>
          <input type="button" value="点我" onClick={(this.add).bind(this)} />
        </p>
        <p>
          <input type="button" value="点我" onClick={(){b++;console.log(b);}} />
        </p>
      </div>
    );
  }
}
export default App;
```
> 只有更新三兄弟，才会一发Virtual DOM的改变，从而改变DOM
> 定义state: 在构造函数中使用this.state属性即可
> 使用state: 在JSX中{this.state.a}
> 改变state: this.setState({a: this.state.a + 1}); 不能写++，因为state属性值只读
> state是内部的(所以也叫local state)，只有组件自己能改变自己的state，别人想改自己的state都不可能
```
import React, {Component} from 'react';
/**
 * 可以在组件的类定义上写constructor，里面定义this.a = 100,表示给组件的实例绑定一个a属性，在JSX使用，直接this.a即可
 */
class App extends Component{
  //构造函数
  constructor(){
    super();
    this.state = {
      a : 100
    };
  }
  add(){
    this.setState({a: this.state.a + 1});
  }
  render(){
    return (
      <div>
        <p>{this.state.a}</p>
        <p>
          <input type="button" value="点我" onClick={(this.add).bind(this)}/>       
        </p>
      </div>
    );
  }
}
// 向外暴露
export default App;
```
> state也可以通过 getInitialState定义,但是必须通过 React.createClass的方式使用，不常用
> 后面介绍Redux架构，所有组件自己的state会越来越少用了，而是变为Redux中的state
```
  getInitialState(){
    return {
      a : 100
    };
  }
```