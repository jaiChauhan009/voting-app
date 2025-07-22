import axios from 'axios'
const URL = 'http://localhost:8081/api/v1/election'

export const getElections = () => axios.get(URL).then(r => r.data)
export const getElectionById = id => axios.get(`${URL}/${id}`).then(r => r.data)
