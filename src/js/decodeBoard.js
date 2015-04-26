function decodeBoard (b) {
  return b.replace(/\ /g, '')
    .split(/[\n!]/)
    .map((s) => {
      return s.split('');
    })
    .filter((row) => {
      return row.length;
    });
}

export default decodeBoard;