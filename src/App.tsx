import { Game } from "./components/Game"
import './App.css'

function App() {
  return (
    <>
      <div className="board-container">
        <div className="board-wrapper">
          <Game />
        </div>
      </div>
    </>
  )
}

export default App