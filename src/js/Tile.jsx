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
  opacity: 0.8,
  cursor: 'pointer',
  transition: '250ms',
  '&:hover': {
    opacity: 1,
  },
});

let DEFAULT = Style.registerStyle(STYLE.style, {
});

let TREE = Style.registerStyle(STYLE.style, {
  backgroundColor: '#51DB73',
  color: '#9e750e',
});

let MARKED = Style.registerStyle(STYLE.style, {
  backgroundColor: '#56D2FF',
  color: '#000',
});

let FIRE = Style.registerStyle(STYLE.style, {
  backgroundColor: '#ff5959',
  color: '#ffec26',
});

let CONTROLLED_FIRE = Style.registerStyle(STYLE.style, {
  backgroundColor: '#56D2FF',
  color: '#ff5959',
});

let HOUSE = Style.registerStyle(STYLE.style, {
  backgroundColor: '#51DB73',
  color: '#36416d',
});

let BACKBURN = Style.registerStyle(STYLE.style, {
  backgroundColor: '#51DB73',
  color: '#ffec26',
});

let BOMB = Style.registerStyle(STYLE.style, {
  color: 'black',
});

let BOMB_DANGER_3 = Style.registerStyle(BOMB.style, {
  backgroundColor: '#ffca60',
});

let BOMB_DANGER_2 = Style.registerStyle(BOMB.style, {
  backgroundColor: '#ffca60',
});

let BOMB_DANGER_1 = Style.registerStyle(BOMB.style, {
  backgroundColor: 'black',
  color: '#ff5959',
});

let SCORCHED = Style.registerStyle(STYLE.style, {
  color: '#211400',
});

let Tile = React.createClass({
  render: function () {
    let className = DEFAULT.className;
    let content = this.props.type;

    if (content === 'T') {
      className = TREE.className;
      content = '🌲';
    } else if (content === 't') {
      className = MARKED.className;
      content = '☢';
    } else if (content === 'F') {
      className = FIRE.className;
      content = '🔥';
    } else if (content === 'H') {
      className = HOUSE.className;
      content = '🏠';
    } else if ('B'.indexOf(content) >= 0) {
      className = BOMB.className;
      content = '💣';
    } else if ('3'.indexOf(content) >= 0) {
      className = BOMB_DANGER_3.className;
      content = '💣';
    } else if ('2'.indexOf(content) >= 0) {
      className = BOMB_DANGER_2.className;
      content = '💣';
    } else if ('1'.indexOf(content) >= 0) {
      className = BOMB_DANGER_1.className;
      content = '💣';
    } else if(content === 'X') {
      className = SCORCHED.className;
    } else if (content === 'f') {
      className = CONTROLLED_FIRE.className;
      content = '🔥';
    }

    return (
      <div className={className}
        onClick={this.props.onClick}
        onMouseDown={this.props.onMouseDown}
        onMouseEnter={this.props.onMouseEnter}
      >
        {content}
      </div>
    );
  }
});

export default Style.component(Tile);