import React from 'react';
import Style from './Style';

let STYLE = Style.registerStyle({
  backgroundColor: '#fff',
});

let Intro = Style.component(React.createClass({
  render: function () {
    return (
      <div className={STYLE.className}>
        This is an intro!
      </div>
    );
  }
}));

export default Intro;