import { useState } from 'react'
import './App.css'
import Footer from './components/Footer.jsx'
import Main from './components/Main.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen">
      <h1>Job Tracker Application</h1>
      <Main />
      <Footer />
    </div>
  )
}

export default App
