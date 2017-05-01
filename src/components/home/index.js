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
		}
	}

	async getPhotos() {
		this.setState({
			...this.state,
			loading: true,
			flash: "Loading photos..."
		})
		// let photos = await axiosClient.get('photos/index')
		// console.log(photos)
		// this.setState({
		// 	...this.state,
		// 	photos: [...this.state.photos, ...photos.data],
		// 	loading: false
		// })
		let dummyPhoto = {
"id": "cXU6tNxhub0",
"created_at": "2017-04-29T21:14:04-04:00",
"updated_at": "2017-05-01T03:20:20-04:00",
"width": 6512,
"height": 4341,
"color": "#D7D2E2",
"likes": 116,
"liked_by_user": false,
"user": {
"id": "YR_kUAmnr18",
"updated_at": "2017-05-01T03:27:06-04:00",
"username": "trapnation",
"name": "Andre Benz",
"first_name": "Andre",
"last_name": "Benz",
"portfolio_url": null,
"bio": "Music & photos.",
"location": "Los Angeles, CA",
"total_likes": 2,
"total_photos": 47,
"total_collections": 0,
"profile_image": {
"small": "https://images.unsplash.com/profile-1490853869960-6970e57dc636?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=8587f557d19c53e44d133d988a8ee3e4",
"medium": "https://images.unsplash.com/profile-1490853869960-6970e57dc636?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=7f73ad3c4d010144fdc0313f1cd8e7b6",
"large": "https://images.unsplash.com/profile-1490853869960-6970e57dc636?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=40021bcc26dcf06ce3e4197a9c00cae5"
},
"links": {
"self": "https://api.unsplash.com/users/trapnation",
"html": "http://unsplash.com/@trapnation",
"photos": "https://api.unsplash.com/users/trapnation/photos",
"likes": "https://api.unsplash.com/users/trapnation/likes",
"portfolio": "https://api.unsplash.com/users/trapnation/portfolio",
"following": "https://api.unsplash.com/users/trapnation/following",
"followers": "https://api.unsplash.com/users/trapnation/followers"
}
},
"current_user_collections": [],
"urls": {
"raw": "https://images.unsplash.com/photo-1493514789931-586cb221d7a7",
"full": "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-0.3.5&q=100&fm=jpg&crop=entropy&cs=tinysrgb&s=b1a53122c0a11f8bca0894f77d8c630e",
"regular": "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=e3c9ff816152fffd760c69d4e20ee8e9",
"small": "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=73fd2fe281638c80eb48e7880d57a805",
"thumb": "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=d46075d455826bd96462e264e84f8eca"
},
"categories": [],
"links": {
"self": "https://api.unsplash.com/photos/cXU6tNxhub0",
"html": "http://unsplash.com/photos/cXU6tNxhub0",
"download": "http://unsplash.com/photos/cXU6tNxhub0/download",
"download_location": "https://api.unsplash.com/photos/cXU6tNxhub0/download"
}
}
		this.setState({
			...this.state,
			loading: false,
			photos: [...this.state.photos, dummyPhoto]
		})
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
		return <div class={style.photocardContainer}> { this.state.photos.map(photo => {
			return (<PhotoCard
			exif={photo} />)
		}) }</div>
	}

	render() {
		let body = this.state.loading ? this.loadingScreen() : this.renderCards()
		return (
			<div class="container"><h4 class="center">Latest photos from Unsplash</h4>
			<div class="row">
				{ body }
			</div>
		</div>
		);
	}
}
