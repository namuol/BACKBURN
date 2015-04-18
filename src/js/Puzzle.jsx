import React from 'react';
import Style from './Style';

import Board from './Board';

import step from './step';

import Immutable from 'immutable';
window.Immutable = Immutable;

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

let Puzzle = React.createClass({
  getInitialState: function () {
    return {
      board: this.props.board,
    }
  },

  onClickTile: function (x, y) {
    let b = step(this.state.board);
    this.setState({
      board: b.set(y, b.get(y).set(x, b.get(y).get(x) !== 'F' ? '1' : 'F'))
    });
  },
  
  onStep: function () {
    this.setState({
      board: step(this.state.board),
    });
  },
  
  onRestart: function () {
    this.setState({
      board: this.props.board,
    });
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
        </div>
      </div>
    );
  }
});

export default Style.component(Puzzle);