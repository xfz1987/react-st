// import React from 'react';
// import ReactDom from 'react-dom';
// import ListShow from './components/listShow';
// import SelectShow from './components/SelectShow';
// import items from './redux/stores';

// import {createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
// // const store = createStore(items);
// const store = createStore(items, applyMiddleware(logger));
// console.log(store);

// import axios from 'axios';

// function addList(){
//     // store.dispatch({type:'ADD',addtext:'ccc'});
//     axios.get('../item.json').then(function(res){
//         store.dispatch(res.data);
//     }).catch(function(error){
//         console.log(error);
//     });
// }

// const render = () => {
//     ReactDom.render(
//         <div>
//             <h1>Redux Show</h1>
//             <ListShow list={store.getState().items} add={addList} />
//             <SelectShow list={store.getState().items} />
//         </div>,
//         document.getElementById('app')
//     );
// }

// //store监控render
// store.subscribe(render);
// // store.subscribe(function(){
// //    console.log('有数据更新');
// // });
// //运行render
// render();

// import React from 'react';
// import { render } from 'react-dom';
// import { observable, action, useStrict, computed} from 'mobx';
// import { observer } from 'mobx-react';

// useStrict(true);

// @observer
// class App extends React.Component {
//   constructor(){
//   	super();
//   	this.state = {a:0};
//   }
//   @observable b = 1;
//   @observable goods = [
//   	{id: 1, price: 300}
//   ];
//   @action add = () => {
//   	this.b++;
//   }
//   @action addGood = () => {
//   	this.goods.push({id:22,price:500});
//   }

//   componentWillReact(){
//   	console.log('我更新了');
//   }
//   render() {
//     return (
//       <div>
//         <p>state: {this.state.a}</p>
//         <p>observable: {this.b}</p>
//         <button onClick={this.add}>add</button>
//         <ul>
//         	{this.goods.map(good => <li key={good.id}>{good.price}</li>)}
//         </ul>
//         <button onClick={this.addGood}>add2</button>
//       </div>
//     )
//   }
// }

// render(
// 	<App />,
// 	document.getElementById('app')
// );

import React from 'react';
import { render } from 'react-dom';
import { observer } from 'mobx-react';
import User from './components/User.js';
import NoticeList from './components/NoticeList.js';
import Test from './components/Test.js';

@observer
class App extends React.Component {
    render() {
        return (
          <div>
              <User />
              <NoticeList />
              <Test />
          </div>
        )
    }
}

render(
    <App />,
    document.getElementById('app')
);