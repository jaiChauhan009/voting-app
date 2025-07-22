import axios from 'axios'
const URL = 'http://localhost:8081/api/v1/election-result'

export const getElectionResults = () => axios.get(URL).then(r => r.data)
export const getElectionResultById = id => axios.get(`${URL}/${id}`).then(r => r.data)
