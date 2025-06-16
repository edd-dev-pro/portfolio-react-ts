import { Routes, Route } from 'react-router-dom'
import { Home, About } from '../pages'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}
