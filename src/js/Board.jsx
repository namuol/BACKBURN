import React from 'react';
import Style from './Style';

import Tile from './Tile';

let STYLE = Style.registerStyle({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'stretch',
  alignContent: 'stretch',
  width: '100%',
  height: '100%',
});

let ROW = Style.registerStyle({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  alignContent: 'stretch',
  flexGrow: 1,
});

let Board = React.createClass({
  getDefaultProps: function () {
    return {
      onClickTile: function () {
        console.log('onClickTile default handler invoked');
      }
    };
  },

  render: function () {
    let rows = this.props.board.map((row, y) => {
      let tiles = row.map((type, x) => {
        console.log('onClickTile', this.props.onClickTile);
        return (
          <Tile key={x} type={type} onClick={() => {
            this.props.onClickTile(x, y);
          }} />
        );
      });

      return (
        <div key={y} className={ROW.className}>
          {tiles}
        </div>
      );
    });

    return (
      <div className={STYLE.className}>
        {rows}
      </div>
    );
  }
});

export default Style.component(Board);