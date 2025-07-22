import React, { useEffect, useState } from 'react'
import { getElections } from '../services/electionService'
import Loader from '../components/Loader'

const Elections = () => {
  const [elections, setElections] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getElections().then(data => {
      setElections(data)
      setLoading(false)
    })
  }, [])

  if (loading) return <Loader />

  return (
    <div className="page-container">
      <h2>🗳️ All Elections</h2>
      <ul>
        {elections.map(e => (
          <li key={e.id}>{e.name} - {e.date}</li>
        ))}
      </ul>
    </div>
  )
}
export default Elections
