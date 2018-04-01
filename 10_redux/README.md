# Redux
> Flux的一种实现方式
![](readImg/redux.png)
> - 1.View发起event到Actions
> - 2.Actions将action发送到store
> - 3.1Dispatcher通知Reducer克隆一个state，将将action和新生成的state合成进入Reducer，生成一个新的state
> - 3.2.如果是异步的，同时会由Middlewares发起API请求，然后将API返回结果和3.1结合，再生成有一个新的state
> - 4.将新state作为props返回给View
**Reducer永远是同步操作的，因此会相当于走输出了两次**

## 使用
> 1.创建一个view，ReactRedux和Provider把view和store关联了起来
```
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('JS-container')
)
```
> 2.创建store
> `Redux.createStore(rootReducer,initState,Redux.applyMiddleware(thunkMiddleware))`
> 4. 创建actions
```

```
> 3.创建Actionss
> - reducer区分action 复用 ActionTypes 
> - 

```
export default (state = {
    data:['aaa','bbb']
}, action) => {
    switch(action.type){
        case 'xxx':
            state.data.push('zzz');
        default:
            return state;
    }
};
```
> API
> 1.建立仓库 
> ```
> import {createStore} from 'redux';
> const store = createStore(items);
> ```
> 2.获取值
> ```
> store.getState().data
> ```
> 3.触发action
> ```
> store.dispatch({type:'xxx'})
> ```
> 4.监听变化
> - redux只能监听方法，因此要把render抽离出为一个函数，通过监听这个函数进行更改视图
> store.subscribe(render);

## redux中间件
### redux-logger
> - 安装 npm install redux-logger --save
> - 打印中间数据过程
```
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
const store = createStore(items, applyMiddleware(logger));
```

