import React from 'react';
import Progress from '../components/progress';
import './player.less';
import { Link } from 'react-router';
import Pubsub from 'pubsub-js';

let duration = null;
class Player extends React.Component{
	constructor(){
		super();
		this.state = {
			progress: 0,
			volume: 0,
			isPlay: true,
			leftTime: null
		};

		this.play = this.play.bind(this);
		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
		this.changeRepeat = this.changeRepeat.bind(this);
	}

	componentDidMount(){
		$('#player').bind($.jPlayer.event.timeupdate, (e) => {
			duration = e.jPlayer.status.duration;
			this.setState({
				progress: Math.round(e.jPlayer.status.currentPercentAbsolute),
				volume: e.jPlayer.options.volume * 100,
				leftTime: this.formateTime(duration * (1 - e.jPlayer.status.currentPercentAbsolute / 100))
			});
		});
	}
	
	componentWillUnMount(){
		$('#player').unbind($.jPlayer.event.timeupdate);
	}

	progressChangeHandler(progress){
		$('#player').jPlayer('play', duration * progress);
	}

	changeVolumeHandler(progress){
		$('#player').jPlayer('volume', progress);
	}

	play(){
		this.setState({isPlay: !this.state.isPlay});
		$('#player').jPlayer(this.state.isPlay ? 'pause' : 'play');
	}

	prev(){
		PubSub.publish('PLAY_PREV');
	}

	next(){
		PubSub.publish('PLAY_NEXT');
	}

	formateTime(time){
		time = Math.floor(time);
		let minus = Math.floor(time / 60),
		    sends = Math.floor(time % 60);
		return `${minus}:${sends < 10 ? `0${sends}` : sends}`;
	}

	changeRepeat(){

	}

	render(){
		return (
			<div className="player-page">
                <h1 className="caption"><Link to="/list">我的私人音乐坊 &gt;</Link></h1>
                <div className="mt20 row">
                	<div className="controll-wrapper">
                		<h2 className="music-title">{this.props.currentMusicItem.title}</h2>
                		<h3 className="music-artist mt10">{this.props.currentMusicItem.artist}</h3>
                		<div className="row mt20">
                			<div className="left-time -col-auto">-{this.state.leftTime}</div>
                			<div className="volume-container">
                				<i className="icon-volume rt" style={{top: 5, left: -5}}></i>
                				<div className="volume-wrapper">
					                <Progress
										progress={this.state.volume}
										onProgressChange={this.changeVolumeHandler}
										barColor='#aaa'
					                >
					                </Progress>
                				</div>
                			</div>
                		</div>
                		<div style={{height: 10, lineHeight: '10px'}}>
			                <Progress
								progress={this.state.progress}
								onProgressChange={this.progressChangeHandler}
			                />
                		</div>
                		<div className="mt35 row">
                			<div>
	                			<i className="icon prev" onClick={this.prev}></i>
	                			<i className={`icon ml20 ${this.state.isPlay ? 'pause' : 'play'}`} onClick={this.play}></i>
	                			<i className="icon next ml20" onClick={this.next}></i>
                			</div>
                			<div className="-col-auto">
                				<i className="icon repeat-cycle" onClick={this.changeRepeat}></i>
                			</div>
                		</div>
                	</div>
                	<div className="-col-auto cover">
                		<img src={this.props.currentMusicItem.cover} alt={this.props.currentMusicItem.title}/>
                	</div>
                </div>
            </div>
		);
	}
}

export default Player;