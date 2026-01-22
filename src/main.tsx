import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { App } from './App.tsx'
import { Card } from './components/Card.tsx'
import { cards } from './data/cards.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex items-center justify-center h-screen'>
      <Card card={{ ...cards[0], isUp: false }} />
    </div>
  </StrictMode>,
)
