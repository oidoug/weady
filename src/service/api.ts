import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: "9f87ec700e51d00eede6a673383e93ed"
  }
})

export default api;