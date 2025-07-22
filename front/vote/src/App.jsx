import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Dashboard from './pages/Dashboard'
import Elections from './pages/Elections'
import ElectionDetail from './pages/ElectionDetail'
import Results from './pages/Results'
import ResultDetail from './pages/ResultDetail'
import People from './pages/People'
import PersonDetail from './pages/PersonDetail'
import Votes from './pages/Votes'
import VoteDetail from './pages/VoteDetail'

// Components
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Home / Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Elections */}
        <Route path="/elections" element={<Elections />} />
        <Route path="/election/:id" element={<ElectionDetail />} />

        {/* Results */}
        <Route path="/results" element={<Results />} />
        <Route path="/result/:id" element={<ResultDetail />} />

        {/* Votes */}
        <Route path="/votes" element={<Votes />} />
        <Route path="/vote/:id" element={<VoteDetail />} />

        {/* People */}
        <Route path="/people" element={<People />} />
        <Route path="/person/:id" element={<PersonDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
