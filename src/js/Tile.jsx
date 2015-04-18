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
  fontSize: '6vmin',
  cursor: 'pointer',
  opacity: 0.8,
  transition: '150ms',
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

let HOUSE = Style.registerStyle(STYLE.style, {
  backgroundColor: '#51DB73',
  color: '#007066',
});

let BACKBURN = Style.registerStyle(STYLE.style, {
  backgroundColor: '#51DB73',
  color: '#ffec26',
});

let SCORCHED = Style.registerStyle(STYLE.style, {
  color: '#211400',
});

let Tile = React.createClass({
  render: function () {
    let className = STYLE.className;
    let content = this.props.type;

    if (content === 'T') {
      className = TREE.className;
    } else if (content === 'F') {
      className = FIRE.className;
    } else if (content === 'H') {
      className = HOUSE.className;
    } else if ('123456789'.indexOf(content) >= 0) {
      className = BACKBURN.className;
    } else if(content === 'X') {
      className = SCORCHED.className;
    }

    return (
      <div className={className} onClick={this.props.onClick}>
        {content}
      </div>
    );
  }
});

export default Style.component(Tile);