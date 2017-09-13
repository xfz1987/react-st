## API
### 无状态组件
> 当我们现在的组件仅仅是为了呈现一些DOM，没有state，props等等系，此时可以不用class extends，而是一个简单的函数
```
import React from 'react';
/*无状态组件*/
export default () => {
    return (
        <div>
            <h1>我是My组件</h1>
        </div>
    )
}
```
### 默认属性
```
constructor(props){
        super();
        this.name = props.name || '瓜怂';
    }
```
### state和props API
在class中不能使用replaceState、setProps

## 组件生命周期
```
    //挂载之前调用
    componentWillMount(){
        console.log('componentWillMount');
    }
    //挂载结束时调用，可以操作DOM节点
    componentDidMount(){
        console.log('componentDidMount');
    }
    //组件被更新时调用（基本不用）
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    //是否允许组件更新,返回false则不允许更新
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate' + '|' + nextState.a);
        return nextState.a > 0.5 ? true : false;    
    }
    //在更新发生之前调用,如果shouldComponentUpdate返回false，那么该函数不会被触发
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    //在组件移除和销毁之前被调用（基本不用）
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
```

### React中的表单
> 没有表单验证、没有双向数据绑定