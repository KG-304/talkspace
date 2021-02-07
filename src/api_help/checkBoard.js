export const checkBoard = board => {
  for (let i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      //   console.log("board[" + i + "][" + j + "] = " + board[i][j]);
      if (
        board[i][j] === board[i + 1][j] &&
        board[i][j] === board[i + 2][j] &&
        board[i][j] !== ""
      ) {
        window.alert(`Congrats player ${board[i][j]} you win!`);
      }
    }
  }
};
