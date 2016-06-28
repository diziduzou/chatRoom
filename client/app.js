import React, {
	Component
} from 'react';
import {
	Router,
	Route,
	hashHistory
} from 'react-router'
import ReactDom from 'react-dom'
import Main from './container/Main'
import Login from './container/Login'
import NotFound from './container/NotFound'
import Chat from './container/Chat'

class App extends Component {
	render() {
		return (
			<Router histroy={hashHistory}>
				<Route component={Main} path='/Main'></Route>
				<Route component={Login} path='/'></Route>
				<Route component={Chat} path='/Chat'></Route>
				<Route component={NotFound} path='/*'></Route>
			</Router>
		);
	}
}



ReactDom.render(<App / >, document.querySelector("#app"))