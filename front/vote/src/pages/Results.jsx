import React, { useEffect, useState } from 'react'
import { getElectionResults } from '../services/electionResultService'
import Loader from '../components/Loader'

const Results = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getElectionResults().then(data => {
      setResults(data)
      setLoading(false)
    })
  }, [])

  if (loading) return <Loader />

  return (
    <div>
      <h2>📊 All Election Results</h2>
      <ul>
        {results.map(r => (
          <li key={r.id}>Result ID: {r.id}, Total: {r.totalVotes}</li>
        ))}
      </ul>
    </div>
  )
}
export default Results
