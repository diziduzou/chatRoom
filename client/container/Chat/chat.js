import React, {
	Component
} from 'react'
import {
	Link
} from 'react-router'
import style from './chat.less'
import {
	formatTime
} from '../../directive/time'
export default class Chat extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'chenning',
			chatList: [{
				name: 'chenning',
				head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
				'word': 'rinima',
				'time': '6 6,2015 15:14:13'
			}, {
				name: 'chenning',
				head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
				'word': 'rinima',
				'time': '6 6,2015 15:14:13'
			}, {
				name: 'xupeng',
				head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
				'word': 'rinima',
				'time': '6 6,2015 15:14:13'
			}, {
				name: 'chenning',
				head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
				'word': 'rinima',
				'time': '6 6,2015 15:14:13'
			}, {
				name: 'xupeng',
				head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
				'word': 'rinima',
				'time': '6 6,2015 15:14:13'
			}, {
				name: 'chenning',
				head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
				'word': 'rinima',
				'time': '6 6,2015 15:14:13'
			}, {
				name: 'chenning',
				head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
				'word': 'rinima',
				'time': '6 6,2015 15:14:13'
			}, {
				name: 'chenning',
				head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
				'word': 'rinima',
				'time': '6 6,2015 15:14:13'
			}, {
				name: 'xupeng',
				head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
				'word': 'rinima',
				'time': '6 6,2015 15:14:13'
			}, {
				name: 'chenning',
				head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
				'word': 'rinima',
				'time': '6 6,2015 15:14:13'
			}, {
				name: 'chenning',
				head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
				'word': 'rinima',
				'time': '6 6,2015 15:14:13'
			}, {
				name: 'chenning',
				head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
				'word': 'rinima',
				'time': '6 6,2015 15:14:13'
			}, {
				name: 'xupeng',
				head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
				'word': 'rinima',
				'time': '6 6,2015 15:14:13'
			}, {
				name: 'chenning',
				head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
				'word': 'rinima',
				'time': '6 20,2016 17:45:20'
			}, {
				name: 'chenning',
				head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
				'word': 'rinima',
				'time': '6 6,2015 15:14:13'
			}, {
				name: 'xupeng',
				head: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
				'word': 'rinima',
				'time': '6 6,2015 15:14:13'
			}]

		};
	}
	componentDidMount() {
		document.querySelector('.list').scrollIntoView(false);
	}
	send(e) {
		alert('send successfully')
	}
	render() {
		return (
			<div className="Chat">
				<div className="title">
					<Link to="/Main">{'<'}</Link>
					<h1>{this.state.name}</h1>
				</div>
				<div className="body">
					<ul className="list">
					{this.state.chatList.map((list,index)=>{
						return <li key={list.name+index} className={this.state.name === list.name?'side clear':'in clear'}>
							<img src={list.head} alt=""/>
							<p className='word'>{list.word}</p>
						</li>
					})}
					</ul>
				</div>
				<div className="submit">
					<input type="text" className="message"/>
					<input type="submit" value="发送" onClick={(e)=>{this.send.bind(this)(e)}}/>
				</div>
			</div>
		);
	}
}