import React, {
	Component
} from 'react';
import ReactDom from 'react-dom'
import Lists from './component/lists'
import style from './component/lists/style.css'
class Loading extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return <div>loading</div>
	}
}

var lists = {
	onClick: () => {},
	onDbClick: (e) => {
		e.target.style.background = '#333'
	},
	data: [{
		Name: '旷世神诀',
		Icon: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
		LastWord: '好的',
		LastTime: '6 20,2015 17:45:20',
		isShow: true
	}, {
		Name: '冰冻',
		Icon: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
		LastWord: '明天再说',
		LastTime: '6 20,2016 17:45:20',
		isShow: true
	}, {
		Name: '火焰神',
		Icon: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1819655436,1406018065&fm=116&gp=0.jpg',
		LastWord: '明天再说',
		LastTime: '6 23,2016 17:45:20',
		isShow: true
	}]
}

export default class Main extends Component {
	render() {
		return (
			<div>
				<Lists {...lists}/>
			</div>
		);
	}
}