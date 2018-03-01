import React from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

//纯组件
class Counter extends React.Component {
    render(){
        const {value, addOne} = this.props;
        return (
            <div>
                <span>{value}</span>
                <button onClick={addOne}>+1</button>
            </div>
        );
    }
}

//propTypes验证
Counter.propTypes = {
    value: PropTypes.number.isRequired,
    addOne: PropTypes.func.isRequired
};

//Action
const addAction = {type: 'ADD'};

//Reducer状态机控制器
function add(state = {count: 0}, action){
    const count = state.count;
    switch(action.type){
        case 'ADD':
            return {count: count + 1};
        default:
            return state;
    }
}

//createStore
const store = createStore(add);

//外部状态机
function mapStateToProps(state){
    return {
        value: state.count
    };
}

//外部方法
function mapDispatchToProps(dispatch){
    return {
        addOne: () => dispatch(addAction)
    };
}

//connect 是react-redux提供的方法,将外部状态机和外部方法
const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

//Provider 组件用于生成容器, 获取到store
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);