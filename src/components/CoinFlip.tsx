import { useState } from 'react'
import './CoinFlip.css'

interface GameResult {
  playerChoice: 'heads' | 'tails'
  result: 'heads' | 'tails'
  won: boolean
  betAmount: number
  winnings: number
}

interface GameHistory extends GameResult {
  id: number
  timestamp: Date
}

const CoinFlip = () => {
  const [balance, setBalance] = useState<number>(1000) // Starting balance
  const [betAmount, setBetAmount] = useState<number>(10)
  const [playerChoice, setPlayerChoice] = useState<'heads' | 'tails'>('heads')
  const [isFlipping, setIsFlipping] = useState<boolean>(false)
  const [gameResult, setGameResult] = useState<GameResult | null>(null)
  const [history, setHistory] = useState<GameHistory[]>([])
  const [coinFace, setCoinFace] = useState<'heads' | 'tails'>('heads')

  const flipCoin = async () => {
    if (betAmount > balance) {
      alert('Insufficient balance!')
      return
    }

    if (betAmount <= 0) {
      alert('Please enter a valid bet amount!')
      return
    }

    setIsFlipping(true)
    setGameResult(null)

    // Animate coin flip for 2 seconds
    const flipDuration = 2000
    const flipInterval = setInterval(() => {
      setCoinFace(prev => prev === 'heads' ? 'tails' : 'heads')
    }, 100)

    setTimeout(() => {
      clearInterval(flipInterval)
      
      // Generate random result
      const result: 'heads' | 'tails' = Math.random() < 0.5 ? 'heads' : 'tails'
      const won = result === playerChoice
      const winnings = won ? betAmount * 2 : -betAmount
      
      setCoinFace(result)
      
      const newResult: GameResult = {
        playerChoice,
        result,
        won,
        betAmount,
        winnings
      }
      
      const newBalance = balance + winnings
      setBalance(newBalance)
      setGameResult(newResult)
      
      // Add to history
      const historyEntry: GameHistory = {
        ...newResult,
        id: Date.now(),
        timestamp: new Date()
      }
      setHistory(prev => [historyEntry, ...prev.slice(0, 9)]) // Keep last 10 games
      
      setIsFlipping(false)
    }, flipDuration)
  }

  const resetGame = () => {
    setBalance(1000)
    setGameResult(null)
    setHistory([])
    setBetAmount(10)
  }

  const maxBet = () => {
    setBetAmount(Math.floor(balance / 2)) // Max bet is half the balance for safer gambling
  }

  return (
    <div className="coin-flip-container">
      <div className="game-stats">
        <div className="balance">
          <span className="label">Balance:</span>
          <span className={`amount ${balance < 100 ? 'low' : ''}`}>
            ${balance.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="game-area">
        <div className="coin-container">
          <div className={`coin ${isFlipping ? 'flipping' : ''} ${coinFace}`}>
            <div className="coin-face heads">H</div>
            <div className="coin-face tails">T</div>
          </div>
        </div>

        <div className="betting-section">
          <div className="bet-amount">
            <label htmlFor="bet">Bet Amount:</label>
            <div className="bet-controls">
              <input
                id="bet"
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max={balance}
                disabled={isFlipping}
              />
              <button onClick={maxBet} disabled={isFlipping || balance === 0}>
                Max
              </button>
            </div>
          </div>

          <div className="choice-section">
            <label>Choose your side:</label>
            <div className="choice-buttons">
              <button
                className={`choice-btn ${playerChoice === 'heads' ? 'selected' : ''}`}
                onClick={() => setPlayerChoice('heads')}
                disabled={isFlipping}
              >
                Heads
              </button>
              <button
                className={`choice-btn ${playerChoice === 'tails' ? 'selected' : ''}`}
                onClick={() => setPlayerChoice('tails')}
                disabled={isFlipping}
              >
                Tails
              </button>
            </div>
          </div>

          <button
            className="flip-btn"
            onClick={flipCoin}
            disabled={isFlipping || balance < betAmount || betAmount <= 0}
          >
            {isFlipping ? 'Flipping...' : 'Flip Coin'}
          </button>
        </div>

        {gameResult && (
          <div className={`result ${gameResult.won ? 'win' : 'lose'}`}>
            <h3>{gameResult.won ? '🎉 You Won!' : '😞 You Lost!'}</h3>
            <p>
              Result: <strong>{gameResult.result.toUpperCase()}</strong>
            </p>
            <p>
              {gameResult.won ? 'Winnings: ' : 'Lost: '}
              <span className={gameResult.won ? 'win-amount' : 'lose-amount'}>
                ${Math.abs(gameResult.winnings).toLocaleString()}
              </span>
            </p>
          </div>
        )}

        {balance === 0 && (
          <div className="game-over">
            <h3>🎲 Game Over!</h3>
            <p>You're out of money!</p>
            <button onClick={resetGame} className="reset-btn">
              Start New Game
            </button>
          </div>
        )}
      </div>

      {history.length > 0 && (
        <div className="history">
          <h4>Recent Games</h4>
          <div className="history-list">
            {history.map((game) => (
              <div key={game.id} className={`history-item ${game.won ? 'win' : 'lose'}`}>
                <span className="bet-info">
                  ${game.betAmount} on {game.playerChoice}
                </span>
                <span className="result-info">
                  {game.result} - {game.won ? '+' : '-'}${Math.abs(game.winnings)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default CoinFlip