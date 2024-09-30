import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Theme } from '@radix-ui/themes'

import '@radix-ui/themes/styles.css'
import './index.css'  // Keep this import
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>,
)
