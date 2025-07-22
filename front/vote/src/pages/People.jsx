import React, { useEffect, useState } from 'react'
import { getPeople } from '../services/personService'
import Loader from '../components/Loader'

const People = () => {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPeople()
      .then(data => {
        setPeople(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching people:', error)
        setLoading(false)
      })
  }, [])

  if (loading) return <Loader />

  return (
    <div className="page-container">
      <h2>👥 People</h2>
      <ul>
        {people.map(person => (
          <li key={person.id}>
            {person.firstName} {person.lastName} ({person.email})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default People
