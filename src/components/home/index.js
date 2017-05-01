import { h, Component } from 'preact';
import style from './style.less';
import axios from 'axios'

export default class Home extends Component {
	constructor() {
		super()
		this.state = {
			photos: [],
			loading: false
		}
	}

	componentDidMount() {}

	render() {
		return (
			<div>Henlo</div>
		);
	}
}
