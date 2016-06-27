import React, {
	Component
} from 'react'
import {
	formatTime
} from '../../directive/time'
class Item extends Component {
	static defalutProps = {
		Item: {}
	}
	constructor(props) {
		super(props);

		this.state = {
			Item: this.props.Item
		};
		console.log(this.state.Item)
	}
	render() {
		const main = (
			<div className="Item">
				<div className="left">
					<img src={this.state.Item.Icon} alt=""/>
				</div>
				<div className="right">
					<div className="top">
						<h3>{this.state.Item.Name}</h3>
						<span>{this.state.Item.LastTime}</span>
					</div>
					<div className="bottom">
						<p>{this.state.Item.LastWord}</p>
					</div>
				</div>
			</div>
		)
		return <div>
			{main}
		</div>
	}
}

class MainContnt extends Component {
	static defalutProps = {
		list: []
	}
	constructor(props) {
			super(props);

			this.state = {
				lists: this.props.lists.map((value, index) => {
					value.LastTime = formatTime(value.LastTime);
					return value
				})
			};
		}
		// search(e) {
		// 	this.state.lists.forEach((list) => (list.isShow = ((list.Name + '').match(this.refs.searchStr.value) === null ? false : true)))
		// 	this.forceUpdate()
		// }
	_onClick(e, index) {
		this.state.lists.forEach((list, ind) => {
			ind === index ? list.isSelect = true : list.isSelect = false
		})
		this.setState(this.state)
	}
	render() {
		const mainContent = (<ul>
				{this.state.lists.map((value,index) => <li key={value+index} className={value.isSelect?'selected':''}  onClick={(e)=>{this._onClick.bind(this)(e,index)}}><Item Item={value}></Item></li>)}
			</ul>)
		return <div>
			{mainContent}
		</div>
	}

}

class Lists extends Component {
	static defaultProps = {
		data: [],
		onDbClick: (e) => {},
		onClick: () => {}
	}
	constructor(props) {
		super(props);

		this.state = {
			loading: true
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.state.loading = false;
			this.forceUpdate();
		}, 1000)
	}

	render() {
		return (
			<div className="lists">
				<MainContnt lists = {this.props.data} onDoubleClick={this.props.onDbClick}/>
			</div>
		);
	}
}

export default Lists