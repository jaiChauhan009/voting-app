import axios from 'axios'
const URL = 'http://localhost:8081/api/v1/person'

export const getPeople = () => axios.get(URL).then(r => r.data)
export const getPersonById = id => axios.get(`${URL}/${id}`).then(r => r.data)
