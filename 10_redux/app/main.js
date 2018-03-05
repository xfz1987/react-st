import React from 'react';
import ReactDom from 'react-dom';
import ListShow from './components/listShow';
import SelectShow from './components/SelectShow';
import items from './redux/stores';

import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
// const store = createStore(items);
const store = createStore(items, applyMiddleware(logger));
console.log(store);

import axios from 'axios';

function addList(){
    // store.dispatch({type:'ADD',addtext:'ccc'});
    axios.get('../item.json').then(function(res){
        store.dispatch(res.data);
    }).catch(function(error){
        console.log(error);
    });
}

const render = () => {
    ReactDom.render(
        <div>
            <h1>Redux Show</h1>
            <ListShow list={store.getState().items} add={addList} />
            <SelectShow list={store.getState().items} />
        </div>,
        document.getElementById('app')
    );
}

//store监控render
store.subscribe(render);
// store.subscribe(function(){
//    console.log('有数据更新');
// });
//运行render
render();