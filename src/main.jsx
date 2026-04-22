// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="w-full min-h-screen overflow-x-hidden">
      <App />
    </div>
  </StrictMode>,
)