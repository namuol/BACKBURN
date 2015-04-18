import React from 'react';
import Style from './Style';

let OUTER = Style.registerStyle({
  width: '100vmin',
  height: '100vmin',
  fontFamily: 'sans-serif',
  margin: 'auto',
});

let App = React.createClass({
  render: function () {
    return (
      <div className={OUTER.className}>
        {this.props.children}
      </div>
    );
  }
});

export default Style.component(App);