import axios from 'axios'

/**
 * Axios instance creation.
 * 
 * Disclaimer: appid should be read from a local environment variable, and not
 * be kept in commited code, but I'll keep it here for the sake of simplicity.
 */
const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: "9f87ec700e51d00eede6a673383e93ed",
    units: "metric",
  }
})

export const getWeather = (query: string) => {
  return api.get("/weather", {
    params: { q: query }
  })
}

export const getWeatherById = (id: string) => {
  return api.get("/weather", {
    params: { id }
  })
}


export default api;