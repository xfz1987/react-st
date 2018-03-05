import React from 'react';
import MusicItem from '../components/musicItem';
import './list.less';

class List extends React.Component{
	render(){
		return (
			<ul>
				{
					this.props.musicList.map((item) => {
						return <MusicItem key={item.id} musicItem={item} focus={item === this.props.currentMusicItem}/>
					})
				}
			</ul>
		);
	}
}

export default List;