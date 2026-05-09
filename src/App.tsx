import './App.css'

import { Routes, Route } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Analytics from "./pages/Analytics"
import Matchups from "./pages/Matchups"
import DeckBuilder from "./pages/DeckBuilder"
import Settings from "./pages/Settings"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/matchups" element={<Matchups />} />
      <Route path="/deck-builder" element={<DeckBuilder />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default App