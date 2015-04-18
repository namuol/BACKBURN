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
  render: function () {
    let rows = this.props.board.map((row, rowNum) => {
      console.log("row", row);

      let tiles = row.map((type, i) => {
        return (
          <Tile key={i} type={type} />
        );
      });

      return (
        <div key={rowNum} className={ROW.className}>
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