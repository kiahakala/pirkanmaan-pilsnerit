import axios from 'axios'

const baseUrl = 'http://localhost:3001/beers'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getBeer = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
  }

const update = async (name) => {
    const response = await axios.put(`${baseUrl}/${name.id}`, name)
    return response.data
  }

export default { getAll, getBeer, update }