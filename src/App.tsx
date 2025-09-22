import CoinFlip from './components/CoinFlip.tsx'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>🎰 Casino Coin Flip</h1>
        <p>Test your luck with our coin flip game!</p>
      </header>
      <main>
        <CoinFlip />
      </main>
    </div>
  )
}

export default App