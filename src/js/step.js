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

function fireIsNear (board, x, y) {
  return (
    above(board,x,y) === 'F' ||
    below(board,x,y) === 'F' ||
    left(board,x,y) === 'F' ||
    right(board,x,y) === 'F'
  );
}

export default function (board) {
  return board.map((row, y) => {
    return row.map((tile, x) => {
      switch (tile) {
        case 'T':
        case 'H':
          if (fireIsNear(board, x, y)) {
            return 'F';
          }
          break;
        case '3':
        case '2':
          if (fireIsNear(board, x, y)) {
            return 'F';
          }
          return '' + (parseInt(tile) - 1);
        case 'F':
        case '1':
          return 'X';
      }

      return tile;
    })
  });
}