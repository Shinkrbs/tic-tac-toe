import { Game } from "./components/Game"
import './App.css'

function App() {
  return (
    <>
      <div className="board-container">
        <h1 className="title">Tic Tac Toe</h1>
        <div className="board-wrapper">
          <Game />
        </div>
      </div>
    </>
  )
}

export default App