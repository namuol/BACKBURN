import 'babel/polyfill';
import 'whatwg-fetch';

import React from 'react';
import qs from 'qs';
import page from 'page';

import App from './App';
import Intro from './Intro';
import Puzzle from './Puzzle';

import Style from './Style';

Style.inject();

window.addEventListener('load', () => {
  page('/', function () {    
    let board = `
      F T T T H 
      . . T . H 
      T T T T H 
      T . T . . 
      H H T T F 
    `.replace(/\ /g, '')
      .split('\n')
      .map((s) => {
        return s.split('');
      })
      .filter((row) => {
        return row.length;
      });

    console.log('board', board);
    
    React.render(
      <App>
        <Puzzle board={Immutable.fromJS(board)} />
      </App>
    , document.getElementById('main'));
  });

  page.start();
});
