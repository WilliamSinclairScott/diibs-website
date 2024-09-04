import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from './router/router.tsx'
import './index.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
        {/* context goes here when needed */}
        <Router />
  </StrictMode>,
)
