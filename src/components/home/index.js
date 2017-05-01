import { h, Component } from 'preact';
import style from './style.less';
import axiosClient from '../../adapters/axios'
import loading from './loading.svg'
import PhotoCard from '../photocard'

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
			loading: true,
			flash: "Loading photos..."
		})
		// let photos = await axiosClient.get('photos/index')
		// this.setState({
		// 	...this.state,
		// 	photos: [...this.state.photos, ...photos.data],
		// 	loading: false
		// })
	}

	componentDidMount() {
		this.getPhotos()
	}

	loadingScreen() {
		return (
			<div class={style.loading_container} style={{ height: "35vh" }}><div class={style.loading} style={{background: `url(${loading})`}}></div></div>
		)
	}

	renderCards() {
		return this.state.photos.map(photo => {
			return (<PhotoCard
			exif={photo} />)
		})
	}

	render() {
		let loadingScreen = this.state.loading ? this.loadingScreen() : this.renderCards()
		return (
			<div class="container"><h4 class="center">Latest photos from Unsplash</h4>
			<div class="row">
				{ loadingScreen }
			</div>
		</div>
		);
	}
}
