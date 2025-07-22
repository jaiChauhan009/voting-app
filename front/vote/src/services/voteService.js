import axios from 'axios'
const URL = 'http://localhost:8081/api/v1/vote'

export const getVotes = () => axios.get(URL).then(r => r.data)
export const getVoteById = id => axios.get(`${URL}/${id}`).then(r => r.data)
