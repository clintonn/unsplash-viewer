import { h, Component } from 'preact'

class PhotoCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: props.exif.height,
      width: props.exif.width,
      portfolio_url: props.exif.user.portfolio_url,
      profile: props.exif.links.html,
      fullView: props.exif.urls.full,
      thumb: props.exif.urls.small,
      url: props.exif.links.html
    }
  }

  render() {
    return (
      <div class={style.photocard}>Hello Photo Card</div>
    )
  }
}
