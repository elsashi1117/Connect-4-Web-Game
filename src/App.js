import React, { Component } from 'react';
import Row from './component/Row';
import { checkAll } from './logic/logic';

import './App.css';

class App extends Component {
  state = {
    board: [],
    msg: 'Player 1, please select a coin spot',
    curPlayer: null,
    gameOver: false,
  }

  initBoard = () => {
    let newBoard = new Array(6).fill(null).map(
      () => new Array(7).fill(null)
    );
    this.setState({
      board: newBoard,
      gameOver: false,
      msg: 'Player 1, please select a coin spot',
      curPlayer: 'orange' // curPlayer is the next player
    });
  };

  componentDidMount() {
    this.initBoard();
  }

  clickBoard = (r, c) => {
    const { gameOver, curPlayer, board } = this.state;
    if (!gameOver) {

      let newBoard = board;
      if (newBoard[r][c] !== null) return;
      newBoard[r][c] = curPlayer === 'purple' ? 'purple' : 'orange';
      this.setState({
        curPlayer: curPlayer === 'orange' ? 'purple' : 'orange',
        board: newBoard,
        msg: newBoard[r][c] === 'orange' ? 'Player 2, please select a coin spot' : 'Player 1, please select a coin spot'
      })
      let res = checkAll(board, r, c);

      if (res === 'orange') {
        this.setState({
          msg: `${'Player 1'} wins !!!`,
          curPlayer: res,
          gameOver: true
        })
      } else if (res === 'purple') {
        this.setState({
          msg: `${'Player 2'} wins !!!`,
          curPlayer: res,
          gameOver: true
        })
      } else if (res === 'draw') {
        this.setState({
          msg: 'Draw Game',
          curPlayer: res,
          gameOver: true
        })
      }
    } else {
      this.setState({ msg: 'Game over. Please start a new game.' });
    }
  }

  render() {
    const { board, msg, gameOver, curPlayer } = this.state;
    return (
      <div className="App">
        {gameOver &&
          <img src={'https://media1.giphy.com/media/l0Exj6t3iK0Xzv00E/source.gif'} alt='win' />
        }
        <div>
          <p className={'msg ' + (curPlayer)}>{msg}</p>
        </div>
        <table>
          <thead></thead>
          <tbody>
            {board.map((row, i) => (
              <Row
                key={i}
                row={row}
                rowIndex={i}
                clickBoard={this.clickBoard}
              />
            ))}
          </tbody>
        </table>
        <button onClick={this.initBoard}>Reset</button>
      </div>
    );
  }
}

export default App;
