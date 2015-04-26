import React from 'react';
import Style from './Style';

import Board from './Board';

import step from './step';

import Immutable from 'immutable';

import encodeBoard from './encodeBoard';

import page from 'page';

let STYLE = Style.registerStyle({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

let BOARD_WRAPPER = Style.registerStyle({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  width: '80%',
  height: '80%',
  margin: 'auto',
});

let BUTTONS = Style.registerStyle({
  display: 'flex',
  width: '80%',
  height: '20%',
  margin: 'auto',
  padding: '2vmin',
});

let TILE_BUTTON = Style.registerStyle({
  display: 'flex',
  width: '16vmin',
  height: '16vmin',
  padding: 'auto',
  marginRight: '2vmin',
});

let Puzzle = React.createClass({
  getInitialState: function () {
    return {
      board: this.props.board,
    }
  },

  onClickTile: function (x, y) {
    let b = this.state.board;

    let newTile = 'B';
    let tile = b.get(y).get(x);
    
    if (tile === newTile) {
      newTile = this.props.board.get(y).get(x);
    }

    this.setState({
      board: b.set(y, b.get(y).set(x, newTile))
    });
  },
  
  onStep: function () {
    let newBoard = step(this.state.board);

    this.setState({
      board: newBoard,
    });

    let boardString = encodeBoard(newBoard);

    if (boardString.indexOf('F') < 0 && boardString.indexOf('1') < 0) {
      clearInterval(this._stepInterval);
    }
  },

  onPlay: function () {
    this._stepInterval = setInterval(this.onStep, 500);
  },
  
  onRestart: function () {
    this.setState({
      board: this.props.board,
    });
  },

  onEdit: function () {
    page.redirect('/' + encodeBoard(this.props.board) + '/edit');
  },

  render: function () {
    return (
      <div className={STYLE.className}>
        <div className={BOARD_WRAPPER.className}>
          <Board
            board={this.state.board}
            onClickTile={this.onClickTile}
          />
        </div>
        <div className={BUTTONS.className}>
          <button onClick={this.onStep}>STEP</button>
          <button onClick={this.onRestart}>RESTART</button>
          <button onClick={this.onEdit}>EDIT</button>
        </div>
      </div>
    );
  }
});

export default Style.component(Puzzle);