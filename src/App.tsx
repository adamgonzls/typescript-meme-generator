import { useState } from 'react'
import Header from './components/Header'
import MemeForm from './components/MemeForm'
import Meme from './components/Meme'
import './App.css'

function App() {
  const [years, setYears] = useState({ years: 0 })

  return (
    <div className='App'>
      <Header />
      <main>
        <MemeForm />
        <Meme />
      </main>
    </div>
  )
}

export default App
