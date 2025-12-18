# Tic-Tac-Toe React

A simple Tic-Tac-Toe game built with React and Vite.

## Features
- Play classic Tic-Tac-Toe (N x N grid, configurable)
- Turn-based play (O and X)
- Winner detection
- Toast notifications for win
- Game reset functionality
- Responsive UI

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd tic-tac-toe-react
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App
Start the development server:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
```
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.css
│   │   ├── Grid/
│   │   │   ├── Grid.jsx
│   │   │   └── Grid.css
│   │   └── Icon/
│   │       └── Icon.jsx
│   └── helpers/
│       └── checkWinner.js
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Usage
- Click on a cell to make a move.
- The current turn is displayed.
- When a player wins, a toast notification appears and the winner is shown.
- Click "Reset game" to start a new game.

## Dependencies
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [react-toastify](https://fkhadra.github.io/react-toastify/)

## License
MIT
