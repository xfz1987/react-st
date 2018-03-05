import React from 'react';
import './musicItem.less';

let PubSub = require('pubsub-js');

class MusicItem extends React.Component{
	playMusic(item, e){
		PubSub.publish('PLAY_MUSIC', item);
	}

	deleteHandler(item, e){
		e.stopPropagation();
		PubSub.publish('DEL_MUSIC', item);
	}

	render(){
		let item = this.props.musicItem;
		return (
			<li className={`row component-listitem${this.props.focus ? ' focus' : ''}`} onClick={this.playMusic.bind(this, item)}>
                <p><span className="bold">{item.title}</span>  -  {item.artist}</p>
                <p className="-col-auto delete" onClick={this.deleteHandler.bind(this, item)}></p>
            </li>
		);
	}
}

export default MusicItem;