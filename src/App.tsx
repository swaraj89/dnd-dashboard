import './App.css'
import Dashboard from './components/Dashboard'
import WidgetsTray from './components/WidgetsTray'

function App() {
  return (
    <>
      <h1 className='app-title'>Dashboard</h1>
      <p>Demonstration of draggable widget contaianer</p>
      <main className="main">
        <Dashboard />
        <WidgetsTray />
      </main>
    </>
  )
}

export default App
