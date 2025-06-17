import './App.css'
import Footer from './components/Footer.jsx'
import Main from './components/Main.jsx'
import SankeyGenerator from './components/SankeyGenerator.jsx'

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <h1>Job Tracker Application</h1>
      <SankeyGenerator />
      {/* <Main /> */}
      <Footer />
    </div>
  )
}

export default App
