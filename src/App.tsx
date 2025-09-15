import { Board } from './components/Board';

function App() {
  return (
    <>
      <div>
        <Board xIsNext={true} squares={Array(9).fill(null)} onPlay={() => {}} />
      </div>
    </>
  )
}

export default App
