import React from 'react'
import { useState } from 'react'; 
import Card from '../Card/Card'
import isWinner from '../../helpers/checkWinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Grid.css';

function Grid({numberOfCards}){

  const [turn, setTurn] = useState(true);
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [winner,setWinner] = useState(null);

  function play(index){
    if (board[index] || winner || board.every(cell => cell !== "")) return;
    if(turn == true) {
      board[index] = "O";
    }else {
      board[index] = "X";
    }
    const win = isWinner(board, turn ? "O" : "X");
    if(win){
      setWinner(win);
      toast.success(`Congratulation ${win} win the game!!`)
    }
    setBoard([...board]);
    setTurn(!turn);
  }
  function reset() {
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }



  return (
    <div className='grid-wrapper'>
      <h1 className="turn-highlight">
    {winner
      ? `Winner is ${winner}`
      : board.every(cell => cell !== "")
      ? "Game Draw 🤝"
      : `Current Turn: ${turn ? "O" : "X"}`
    }
  </h1>

  { (winner || board.every(cell => cell !== "")) && (
    <button className="reset" onClick={reset}>
      Reset Game
    </button>
  )}
    <div className="grid">
      {
        board.map((value,idx)=>{
          return <Card gameEnd={winner || board.every(cell => cell !== "")} player={value} key={idx} onPlay={play} index={idx}/>
        })
      }
    </div>
    </div>
  )
}

export default Grid
