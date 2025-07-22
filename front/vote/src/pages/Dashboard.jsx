import React from 'react'
import '../styles/Dashboard.css'
import defaultImage from '../assets/default-image.png'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Voting Management UI</h2>
      <img src={defaultImage} alt="Placeholder" className="dashboard-img"/>
    </div>
  )
}

export default Dashboard
