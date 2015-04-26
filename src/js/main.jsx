import 'babel/polyfill';
import 'whatwg-fetch';

import React from 'react';
import qs from 'qs';
import page from 'page';

import App from './App';
import Intro from './Intro';
import Puzzle from './Puzzle';
import Editor from './Editor';

import Style from './Style';

import decodeBoard from './decodeBoard';
import encodeBoard from './encodeBoard';

import Immutable from 'immutable';

Style.inject();

let boards = [
  '.....!.FTT.!.TTT.!.TTH.!.....',
  '.F...!.TTTF!..H..!FTTT.!...F.',
  'TTTTH!TFTTT!TTTTT!TTTHT!HTTTT',
  '.....FTT.!.FT..TT..!TTTT.TTT.!..TT.T.T.!FTTTTTTTH!..TTTT.T.!T..TTT.TT!TTTTTT..T!FT..F....',
];

window.addEventListener('load', () => {
  page('/', function () {
    let url = '/'+encodeBoard(decodeBoard(boards[0]));
    console.log(url);
    page.redirect(url);
  });

  page('/:board', function (ctx) {
    let board = decodeBoard(ctx.params.board);

    React.render(
      <App>
        <Puzzle board={Immutable.fromJS(board)} />
      </App>
    , document.getElementById('main'));
  });

  page('/:board/edit', function (ctx) {
    let board = decodeBoard(ctx.params.board);

    React.render(
      <App>
        <Editor board={Immutable.fromJS(board)} />
      </App>
    , document.getElementById('main'));
  });

  page.start({
    hashbang: true,
  });
});
