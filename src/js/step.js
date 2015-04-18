function above (board, x, y) {
  let row = board[y-1];
  if (!row) {
    return;
  }

  return row[x];
}

function below (board, x, y) {
  let row = board[y+1];
  if (!row) {
    return;
  }

  return row[x];
}

function left (board, x, y) {
  let row = board[y];
  if (!row) {
    return;
  }

  return row[x-1];
}

function right (board, x, y) {
  let row = board[y];
  if (!row) {
    return;
  }

  return row[x+1];
}

export default function (board) {
  return board.map((row, y) => {
    return row.map((tile, x) => {
      switch (tile) {
        case 'T':
        case 'H':
          if (above(board,x,y) === 'F' ||
              below(board,x,y) === 'F' ||
              left(board,x,y) === 'F' ||
              right(board,x,y) === 'F') {
            return 'F';
          }
          break;
        case 'F':
          return 'X';
      }

      return tile;
    })
  });
}