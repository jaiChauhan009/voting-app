import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPersonById } from '../services/personService'
import Loader from '../components/Loader'

const PersonDetail = () => {
  const { id } = useParams()
  const [person, setPerson] = useState(null)

  useEffect(() => {
    getPersonById(id).then(setPerson)
  }, [id])

  if (!person) return <Loader />

  return (
    <div>
      <h2>👤 Person Detail</h2>
      <p>ID: {person.id}</p>
      <p>Name: {person.firstName} {person.lastName}</p>
      <p>Email: {person.email}</p>
    </div>
  )
}

export default PersonDetail
