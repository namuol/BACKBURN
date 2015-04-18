import React from 'react';
import Style from './Style';

let STYLE = Style.registerStyle({
  display: 'flex',
  fontWeight: 'bold',
  backgroundColor: '#89ffa7',
  color: 'rgba(0,0,0,0.2)',
  flexGrow: 1,
  width: '100%',
  textAlign: 'center',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '7vmin',
  cursor: 'pointer',
  opacity: 0.8,
  '&:hover': {
    opacity: 1,
  },
});

let TREE = Style.registerStyle(STYLE.style, {
  backgroundColor: '#51DB73',
  color: '#9e750e',
});

let FIRE = Style.registerStyle(STYLE.style, {
  backgroundColor: '#ff5959',
  color: '#ffec26',
});

let Tile = React.createClass({
  render: function () {
    let className = STYLE.className;
    let content = this.props.type;

    if (content === 'T') {
      className = TREE.className;
    } else if (content === 'F') {
      className = FIRE.className;
    }

    return (
      <div className={className}>
        {content}
      </div>
    );
  }
});

export default Style.component(Tile);