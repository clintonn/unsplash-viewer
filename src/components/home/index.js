import { h, Component } from 'preact';
import style from './style.less';
import axiosClient from '../../adapters/axios'

export default class Home extends Component {
	constructor() {
		super()
		this.state = {
			photos: [],
			loading: false,
			flash: "",
		}
	}

	async getPhotos() {
		this.setState({
			...this.state,
			flash: await axiosClient.get("photos/test")
		})
	}

	componentDidMount() {
		this.getPhotos()
	}

	render() {
		return (
			<div class="container"><h4 class="center">Latest photos from Unsplash</h4>{ this.state.flash }</div>
		);
	}
}
