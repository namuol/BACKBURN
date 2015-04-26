import React from 'react';
import Style from './Style';

import Board from './Board';

import step from './step';

import decodeBoard from './decodeBoard';
import encodeBoard from './encodeBoard';

import Immutable from 'immutable';

import Tile from './Tile';

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
  paddingTop: '2vmin',
  justifyContent: 'center',
  fontSize: '8vmin',
});

let TILE_BUTTON = Style.registerStyle({
  display: 'flex',
  width: '16vmin',
  height: '16vmin',
  padding: 'auto',
  marginRight: '2vmin',
});

let Editor = React.createClass({
  getDefaultProps: function () {
    return {
      board: decodeBoard(`
        . . . . . 
        . . . . . 
        . . . . . 
        . . . . . 
        . . . . . 
      `)
    };
  },

  getInitialState: function () {
    return {
      board: this.props.board,
      painting: false,
      selectedTileType: 'T',
    }
  },

  changeTile: function (x, y, force=false) {
    if (!force && !this.state.painting) {
      return;
    }

    let b = this.state.board;
    let type = this.state.selectedTileType;

    // if (type === b.get(y).get(x)) {
    //   type = '.';
    // }

    let newBoard = b.set(y, b.get(y).set(x, type));

    this.setState({
      board: newBoard,
      // selectedTileType: type,
    });

  },
  
  render: function () {
    let tileTypes = ['T', 'H', 'F', '.'];

    return (
      <div className={STYLE.className}>
        <div className={BOARD_WRAPPER.className}
          onMouseDown={() => {
            this.setState({painting: true})
          }}
          onMouseUp={() => {
            this.setState({painting: false})
          }}
        >
          <Board
            board={this.state.board}
            onClickTile={(x,y) => {
              this.changeTile(x,y,true);
            }}
            onEnterTile={this.changeTile}
          />
        </div>
        <div className={BUTTONS.className}>
          <div className={TILE_BUTTON.className}>
            <Tile type={this.state.selectedTileType} onClick={() => {
              let type = tileTypes[
                (tileTypes.indexOf(this.state.selectedTileType) + 1) % tileTypes.length
              ];

              this.setState({
                selectedTileType: type,
              })
            }} />
          </div>

          <div className={TILE_BUTTON.className}>
            <Tile type={'-'} onClick={() => {
              let b = this.state.board;
              if (b.size <= 1) {
                return;
              }

              let newBoard = b.map((row) => {
                return row.slice(0, row.size-1);
              }).slice(0, b.size-1);

              this.setState({
                board: newBoard
              });
            }} />
          </div>

          <div className={TILE_BUTTON.className}>
            <Tile type={'+'} onClick={() => {
              let b = this.state.board;

              let newBoard = b.map((row) => {
                return row.push('.');
              }).push(Immutable.fromJS(new Array(b.get(0).size+1)).map(() => {return '.';}));

              this.setState({
                board: newBoard
              });
            }} />
          </div>

          <div className={TILE_BUTTON.className}>
            <Tile type={'▶'} onClick={() => {
              page.redirect('/' + encodeBoard(this.state.board));
            }} />
          </div>

        </div>
      </div>
    );
  }
});

export default Style.component(Editor);