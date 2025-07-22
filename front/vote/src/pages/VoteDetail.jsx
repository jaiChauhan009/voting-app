import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getVoteById } from '../services/voteService'
import Loader from '../components/Loader'

const VoteDetail = () => {
  const { id } = useParams()
  const [vote, setVote] = useState(null)

  useEffect(() => {
    getVoteById(id).then(setVote)
  }, [id])

  if (!vote) return <Loader />

  return (
    <div>
      <h2>🗳️ Vote Detail</h2>
      <p>ID: {vote.id}</p>
      <p>Person ID: {vote.personId}</p>
      <p>Election ID: {vote.electionId}</p>
    </div>
  )
}

export default VoteDetail
