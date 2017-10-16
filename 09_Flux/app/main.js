import React from 'react';
import {render} from 'react-dom';
import ListShow from './components/listShow';
import SelectShow from './components/SelectShow';
import _listData from './flux/stores';

class Default extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			listData: _listData.getAll()
		};
		this._onChange = this._onChange.bind(this);
	}
	componentDidMount() {
        _listData.addChangeListener(this._onChange);
    }
    _onChange(){
    	this.setState({
            listData: _listData.getAll()
        });
    }
    render(){
        return (
            <div>
                <h1>List Show</h1>
                <ListShow listData={this.state.listData}/>
                <SelectShow />
            </div>
        );
    }
}

render(
	<Default />,
	document.getElementById('app')
);