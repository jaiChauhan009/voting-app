import React, { useEffect, useState } from 'react'
import { getVotes } from '../services/voteService'
import Loader from '../components/Loader'

const Votes = () => {
  const [votes, setVotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getVotes().then(data => {
      setVotes(data)
      setLoading(false)
    })
  }, [])

  if (loading) return <Loader />

  return (
    <div>
      <h2>🗳️ All Votes</h2>
      <ul>
        {votes.map(v => (
          <li key={v.id}>VoteID: {v.id}, Person: {v.personId}, Election: {v.electionId}</li>
        ))}
      </ul>
    </div>
  )
}

export default Votes
