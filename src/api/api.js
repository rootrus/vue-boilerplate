// api.js
import axios from 'axios'

export default {
  getData () {
    return axios.get('https://my-api.com/data')
      .then(response => response.data)
  },
  postData (data) {
    return axios.post('https://my-api.com/data', data)
      .then(response => response.data)
  }
}
