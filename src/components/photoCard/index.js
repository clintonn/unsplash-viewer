import { h, Component } from 'preact'
import style from './style'

export default class PhotoCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: props.exif.height,
      width: props.exif.width,
      portfolio_url: props.exif.user.portfolio_url,
      profile: props.exif.links.html,
      fullView: props.exif.urls.full,
      thumb: props.exif.urls.small,
      url: props.exif.links.html,
      showDetails: false
    }
  }

  showHover() {
    console.log("Showing hover!")
  }

  toggleDetails() {
    this.setState({...this.state, showDetails: !this.state.showDetails})
  }

  render() {
    console.log(this.state)
    // TODO: change visibility hidden to opacity 0 and toggle from there
    return (
      <div class={style.photocard2} style={{ background: `url(${this.state.thumb})`}} onmouseover={this.toggleDetails.bind(this)}>
        <div class={this.state.showDetails ? "hoverHidden hoverShown" : "hoverHidden"} onmouseout={this.toggleDetails.bind(this)}><a href="#">Good</a></div>
        <img src={this.state.thumb} style={{visibility: "hidden"}}/>
      </div>
    )
  }
}
