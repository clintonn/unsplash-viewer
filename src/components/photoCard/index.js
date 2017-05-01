import { h, Component } from 'preact'
import style from './style'

export default class PhotoCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: props.exif.height,
      width: props.exif.width,
      profile: props.exif.user.links.html,
      fullView: props.exif.urls.regular,
      thumb: props.exif.urls.small,
      url: props.exif.links.html,
      author: props.exif.user.name,
      primaryColor: props.exif.color,
      location: props.exif.location,
      showDetails: false,
      showModal: false
    }
    this.toggleDetails = this.toggleDetails.bind(this)
    this.dismissModal = this.dismissModal.bind(this)
    this.handleKeydown = this.handleKeydown.bind(this)
  }

  showModal(e) {
    if (e.target.href) {
      window.location.href = e.target.href
    } else {
    document.addEventListener("keydown", this.handleKeydown)
    this.setState({...this.state, showModal: true})
    }
  }

  handleKeydown(e) {
    if (e.key === "Escape") this.dismissModal()
  }

  dismissModal() {
    document.removeEventListener("keydown", this.handleKeydown)
    this.setState({...this.state, showModal: false})
  }

  renderModal() {
    return (
      <div class={style.photo_modal}>
        <div class={style.photo_modal__photo_container}>
          <button class={style.photo_modal__close} onclick={this.dismissModal}>✕</button>
          <div class={style.photo_modal__photo}><img src={this.state.fullView} class={style.photo_modal__img} /></div>
        </div>
      </div>
    )
  }

  toggleDetails() {
    this.setState({...this.state, showDetails: !this.state.showDetails})
  }

  render() {
    return (
      <div class={style.photocard}>{ this.state.showModal ? this.renderModal() : null }
      <a title="Click to see a bigger view" onclick={this.showModal.bind(this)}>
      <div class={style.photocard__relative} style={{ background: `url(${this.state.fullView})`, "cursor": "pointer"}}>
        <div class={style.photocard__details} onmouseout={this.toggleDetails} onmouseover={this.toggleDetails} style={this.state.showDetails ? { opacity: 1, transition: "0.3s all ease-in" } : { opacity: 0, transition: "0.3s all ease-out" }}>
          <a href={this.state.profile + `?utm_source=YOUR_INTEGRATION_NAME&utm_medium=referral&utm_campaign=api-credit`}> By {this.state.author}</a>
        </div>
        <img src={this.state.thumb} style={{visibility: "hidden"}}/>
      </div></a>
    </div>
    )
  }
}
