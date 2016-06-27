import React, {
	Component
} from 'react';
import ReactDom from 'react-dom'
import Main from './container/Main'
import Login from './container/Login'
import NotFound from './container/NotFound'
import

class App extends Component {
	render() {
		return (
			<div>
				<Lists {...lists}/>
			</div>
		);
	}
}



ReactDom.render(<App / >, document.querySelector("#app"))