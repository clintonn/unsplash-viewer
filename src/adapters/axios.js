import axios from 'axios'

export default axios.create({
  baseURL: "https://unsplash-viewer-api.herokuapp.com/api/v1/",
  timeout: 15000
})
