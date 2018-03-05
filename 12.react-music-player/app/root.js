import React from 'react';
import Header from './components/header';
import Player from './page/player';
import List from './page/list';
import { MUSIC_LIST } from './config/musiclist';
import { Router, IndexRoute, Route, Link, hashHistory } from 'react-router';
import Pubsub from 'pubsub-js';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			musicList: MUSIC_LIST,
			currentMusicItem: MUSIC_LIST[0]
		};
	}

	playMusic(item){
		$('#player').jPlayer('setMedia', {
			mp3: item.file,
		}).jPlayer('play');

		this.setState({currentMusicItem: item});
	}

	playNext(type = 'next'){
		let index = this.findMusicIndex(this.state.currentMusicItem),
		    len = this.state.musicList.length,
		    newIndex = type == 'next' ? (index + 1) % len : (index - 1 + len) % len;
		this.playMusic(this.state.musicList[newIndex])
	}

	findMusicIndex(item){
		return this.state.musicList.indexOf(item);
	}

	componentDidMount(){
		//音乐盒插件初始化
		$('#player').jPlayer({
			supplied: "mp3",
			wmode: "window",
			useStateClassSkin: true
		});
		//播放音乐
		this.playMusic(this.state.currentMusicItem);
		//监听音乐播放完毕
		$('#player').bind($.jPlayer.event.ended, (e) => {
			this.playNext();
		});

		PubSub.subscribe('PLAY_MUSIC', (msg, item) => {
			this.playMusic(item);
		});
		PubSub.subscribe('DEL_MUSIC', (msg, item) => {
			this.setState({musicList: this.state.musicList.filter(x => x !== item)});
		});
		PubSub.subscribe('PLAY_PREV', (msg, item) => {
			this.playNext('prev');
		});
		PubSub.subscribe('PLAY_NEXT', (msg, item) => {
			this.playNext();
		});
	}

	componentWillUnMount(){
		PubSub.unubscribe('PLAY_MUSIC');
		PubSub.unsubscribe('DEL_MUSIC');
		$('#player').unbind($.jPlayer.event.ended);
		PubSub.unsubscribe('PLAY_PREV');
		PubSub.unsubscribe('PLAY_NEXT');
	}

	render(){
		return (
			<div>
				<Header />
				{ React.cloneElement(this.props.children, this.state) }
			</div>
		);
	}
}

//路由
class Root extends React.Component{
	render(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Player}></IndexRoute>
					<Route path="/list" component={List}></Route>
				</Route>
			</Router>
		)
	}
}

export default Root;