import React, {
	Component,
	PropTypes
} from 'react'
import style from './login.less'
export default class Login extends Component {
	static contextTypes = {
		router: PropTypes.object
	}
	constructor(props) {
		super(props);
		console.log(PropTypes.object)
	}
	login() {
		this.context.router.push('/Main')
	}
	register() {

	}
	render() {
		return (
			<div className="Login">
				<label htmlFor="userName"><input type="text" id="userName" className="userName" name='userName'/></label>
				<label htmlFor="passWord"><input type="text" id="passWord" className="passWord" name='passWord'/></label>
				<div className="btn-group">
					<input type="submit" value="登录" onClick={this.login.bind(this)}/><button type="button" onClick={this.register.bind(this)}>注册</button>
				</div>
			</div>
		);
	}
}