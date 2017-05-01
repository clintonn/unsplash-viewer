import { h, Component } from 'preact';
import style from './style.less';
import axiosClient from '../../adapters/axios'
import loading from './loading.svg'
import PhotoCard from '../photoCard'

export default class Home extends Component {
	constructor() {
		super()
		this.state = {
			photos: [],
			loading: false,
			flash: "",
			page: 1,
			append: []
		}
	}

	async getPhotos() {
		this.setState({
			...this.state,
			loading: true,
			flash: "Loading photos..."
		})
		let photos = await axiosClient.get('photos/index')

		this.setState({
			...this.state,
			loading: false,
			photos: [...this.state.photos, ...photos.data],
			page: this.state.page + 1,
		})
	}

	componentDidMount() {
		this.getPhotos()
	}

	loadingScreen() {
		return (
			<div class={style.loading_container} style={{ height: "25vh" }}><div class={style.loading} style={{background: `url(${loading})`}}></div></div>
		)
	}

	loadMoreButton() {
		return (
			<button class={`${style.loadMore__button}`} onclick={this.loadMore.bind(this)} >Load More</button>
		)
	}

	async loadMore() {
		this.setState({...this.state, loading: true})
		let photos = await axiosClient.get(`photos/more`, {params: {page: this.state.page}})
		this.setState({
			...this.state,
			photos: [...this.state.photos, ...photos.data],
			loading: false,
			page: this.state.page + 1,
		})
	}

	renderCards() {
		return <div class={style.photocardContainer}> { this.state.photos.map((photo, idx) => {
			return (<PhotoCard
			exif={photo} />)
		}) }</div>
	}

	render() {
		let body = this.renderCards()
		let loadingBar = this.state.loading ? this.loadingScreen() : this.loadMoreButton()
		return (
			<div class="container"><h4 class="center">Latest photos from Unsplash</h4>
			<div class="row">
				{ body }
			</div>
			<div class="row">
				{ loadingBar }
			</div>
		</div>
		);
	}
}
