import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './styles/tailwind.css'

import App from './App.tsx'

const redirectPath = sessionStorage.getItem('spa-redirect')

if (redirectPath) {
  sessionStorage.removeItem('spa-redirect')

  window.history.replaceState(null, '', redirectPath)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
