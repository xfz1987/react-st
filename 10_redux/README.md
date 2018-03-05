# Redux
> Flux的一种实现方式
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

