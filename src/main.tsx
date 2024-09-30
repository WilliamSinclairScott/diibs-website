import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from '@radix-ui/themes'
import Router from './router/router.tsx'

import '@radix-ui/themes/styles.css'
import './index.css'  // Keep this import

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <Router />
    </Theme>
  </StrictMode>,
)
