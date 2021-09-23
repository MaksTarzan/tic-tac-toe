import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick, winner }) => (
  <div className="board">
    {squares.map((square, i) => (
      color(winner, i, square, onClick)
    ))}
  </div>
);

const color = (winner, i, square, onClick) => {
  let styledClass = 'squares';
  if(winner) {
    winner.lines.map(item => {
      if(item === i) {
       styledClass = 'squares winner'; 
      }
    })
  }
  return <Square key={i} styledClass={styledClass} value={square} onClick={() => onClick(i)}/>
}

export default Board;