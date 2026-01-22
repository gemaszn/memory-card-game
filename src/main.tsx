import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { App } from './App.tsx'
// import { Card } from './components/Card.tsx'
// import { cards } from './data/cards.ts'
import { Board } from './components/Board.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex items-center justify-center min-h-screen bg-[#03346E]'>
      <Board difficulty="hard" />
    </div>
  </StrictMode>,
)
