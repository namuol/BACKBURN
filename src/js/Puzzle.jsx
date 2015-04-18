import React from 'react';
import Style from './Style';

import Board from './Board';

import step from './step';

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
          <Board board={this.state.board} />
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