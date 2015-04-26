function clamp (val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function get (l, i) {
  return l.get(clamp(i, 0, l.size));
}

function above (board, x, y) {
  let row = get(board, y-1);
  if (!row) {
    return;
  }

  return get(row, x);
}

function below (board, x, y) {
  let row = get(board, y+1);
  if (!row) {
    return;
  }

  return get(row, x);
}

function left (board, x, y) {
  let row = get(board, y);
  if (!row) {
    return;
  }

  return get(row, x-1);
}

function right (board, x, y) {
  let row = get(board, y);
  if (!row) {
    return;
  }

  return get(row, x+1);
}

function isNear (board, x, y, type) {
  return (
    type.indexOf(above(board,x,y)) >= 0 ||
    type.indexOf(below(board,x,y)) >= 0 ||
    type.indexOf(left(board,x,y)) >= 0 ||
    type.indexOf(right(board,x,y)) >= 0
  );
}

export default function (board) {
  return board.map((row, y) => {
    return row.map((tile, x) => {

      if (isNear(board,x,y, '1')) {
        if (tile === 'B') {
          return '1';
        } else {
          return 'X';
        }
      }

      switch (tile) {
        case 'T':
        case 'H':
          if (isNear(board, x, y, 'F')) {
            return 'F';
          }
          break;
        case 't':
          if (isNear(board, x, y, 'F') || isNear(board, x, y, 'f')) {
            return 'f';
          }
          break;
        case 'B':
          if (isNear(board, x, y, 'F') || isNear(board, x, y, 'f')) {
            return '1';
          }
          break;
        case '3':
        case '2':
          if (isNear(board, x, y, 'F') || isNear(board, x, y, 'f')) {
            return '1';
          }
          return '' + (parseInt(tile) - 1);

        case 'F':
        case 'f':
        case '1':
          return 'X';
      }

      return tile;
    })
  });
}