// var board = [
//   ["O", "X", "X"],
//   ["O", "O", "X"],
//   ["O", "X", "O"],
// ];

export const checkBoard = board => {
  let r_1 = board[0];
  let r_2 = board[1];
  let r_3 = board[2];
  checkRow(r_1);
  checkRow(r_2);
  checkRow(r_3);
  checkCol(board);
};

const checkRow = r => {
  for (let i = 0; i < r.length - 1; i++) {
    if (r[i + 1] === r[i] && r[i + 2] === r[i] && r[i] !== "") {
      console.log(`Player ${r[i]} wins.`);
    } else {
      return false;
    }
  }
};

const checkCol = board => {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length - 2; j++) {
      if (
        board[j + 1][i] === board[j][i] &&
        board[j + 2][i] === board[j][i] &&
        board[j][i] !== ""
      ) {
        console.log(`Player ${board[j][i]} wins`);
      }
    }
  }
};
