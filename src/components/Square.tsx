interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

export const Square = ({ value, onSquareClick }: SquareProps) => {
    return (
    <div>
       <button className="square" onClick={onSquareClick}>
      {value}
    </button>
    </div>
  );
}