# 🎰 Casino Coin Flip Game

A simple and interactive coin flip casino game built with React, TypeScript, and pure CSS. Test your luck and see if you can build your fortune!

## 🎮 Features

- **Interactive Coin Flip**: Realistic 3D coin animation with heads and tails
- **Betting System**: Configurable bet amounts with balance tracking
- **Win/Loss Detection**: Real-time game results with visual feedback
- **Game History**: Track your recent games and winnings/losses
- **Casino-Style UI**: Beautiful gradient backgrounds and smooth animations
- **Responsive Design**: Works on desktop and mobile devices
- **TypeScript**: Fully typed for better development experience

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🎯 How to Play

1. **Set Your Bet**: Choose how much you want to wager (minimum $1)
2. **Pick Your Side**: Select either "Heads" or "Tails"
3. **Flip the Coin**: Click the "Flip Coin" button and watch the magic happen!
4. **Win or Lose**: If the coin lands on your chosen side, you double your bet!

### Game Rules

- Starting balance: $1,000
- Minimum bet: $1
- Maximum bet: Half of your current balance
- Winning bet: 2x your wager
- Losing bet: Lose your wager amount

## 🛠️ Technical Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Pure CSS with custom animations and gradients
- **State Management**: React useState hooks
- **Type Safety**: Full TypeScript implementation

## 📁 Project Structure

```
src/
├── components/
│   ├── CoinFlip.tsx       # Main game component
│   └── CoinFlip.css       # Game-specific styles
├── App.tsx                # Main application component
├── App.css               # Application-wide styles
├── index.css             # Global CSS reset and base styles
└── main.tsx              # Application entry point
```

## 🎨 Design Features

- **3D Coin Animation**: Smooth flip effect using CSS transforms
- **Casino Theme**: Gold and dark color scheme with glowing effects
- **Responsive Layout**: Mobile-friendly design
- **Visual Feedback**: Different colors for wins/losses
- **Smooth Transitions**: Hover effects and animations throughout

## 🚀 Build and Deploy

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🎭 Game Screenshots

The game features:
- A beautiful 3D animated coin that flips realistically
- Clear balance display with color-coded warnings when funds are low
- Easy-to-use betting interface with max bet option
- Immediate visual feedback for wins and losses
- Historical game tracking

## 🎲 Future Enhancements

This is a foundational casino game that could be extended with:
- Multiple coin flip rounds (best of 3, 5, etc.)
- Different betting multipliers
- Sound effects and music
- Player profiles and persistent storage
- Leaderboards
- Additional casino games

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Disclaimer**: This is a demo application for educational purposes. Please gamble responsibly in real life.