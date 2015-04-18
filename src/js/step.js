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

function fireIsNear (board, x, y, dir) {
  if (dir) {
    switch (dir) {
      case 'north':
        return below(board, x, y) === 'F';
      case 'south':
        return above(board, x, y) === 'F';
      case 'east':
        return left(board, x, y) === 'F';
      case 'west':
        return right(board, x, y) === 'F';
    }
    return;
  }

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
        case '9':
        case '8':
        case '7':
        case '6':
        case '5':
        case '4':
        case '3':
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