import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="app-header">
      <h1>🗳️ Election Management System</h1>
      
      <nav className="navigation">
        <div className="nav-group">
          <Link to="/">🏠 Home</Link>
        </div>

        <div className="nav-group">
          <strong>Elections</strong>
          <Link to="/elections">📋 All Elections</Link>
          <Link to="/election/1">🔍 Election Detail (id=1)</Link>
        </div>

        <div className="nav-group">
          <strong>Results</strong>
          <Link to="/results">📊 All Results</Link>
          <Link to="/result/1">🔍 Result Detail (id=1)</Link>
        </div>

        <div className="nav-group">
          <strong>Votes</strong>
          <Link to="/votes">🗳️ All Votes</Link>
          <Link to="/vote/1">🔍 Vote Detail (id=1)</Link>
        </div>

        <div className="nav-group">
          <strong>People</strong>
          <Link to="/people">👥 All People</Link>
          <Link to="/person/1">🔍 Person Detail (id=1)</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
