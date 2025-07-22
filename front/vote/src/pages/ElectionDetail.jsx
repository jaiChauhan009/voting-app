import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getElectionById } from '../services/electionService'
import Loader from '../components/Loader'

const ElectionDetail = () => {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getElectionById(id).then(res => {
      setData(res)
      setLoading(false)
    })
  }, [id])

  if (loading) return <Loader />

  return (
    <div>
      <h2>ELECTION DETAILS</h2>
      <p>ID: {data.id}</p>
      <p>Name: {data.name}</p>
      <p>Date: {data.date}</p>
    </div>
  )
}

export default ElectionDetail
