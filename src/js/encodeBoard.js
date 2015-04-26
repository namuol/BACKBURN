function encodeBoard(board) {
  return board.map((row) => {
    return row.join('');
  }).join('!');
}

export default encodeBoard;