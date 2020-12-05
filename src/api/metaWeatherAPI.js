import Axios from 'axios'

const proxy = 'https://cors-anywhere.herokuapp.com'
const api = 'http://www.metaweather.com/api'

const createAxiosRequest = () => {
  return Axios.create({
    baseURL: `${proxy}/${api}`,
  })
}

export const getLocations = async (searchTerm) => {
  const response = await createAxiosRequest().get(`/location/search`, {
    params: {
      query: searchTerm,
    },
  })
  return response.data
}

export const getWeathers = async (woeid) => {
  const response = await createAxiosRequest().get(`/location/${woeid}`)
  return response.data
}

export default createAxiosRequest
