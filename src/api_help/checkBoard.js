export const checkBoard = board => {
  let r_1 = board[0];
  let r_2 = board[1];
  let r_3 = board[2];
  if (
    checkRow(r_1) ||
    checkRow(r_2) ||
    checkRow(r_3) ||
    checkCol(board) ||
    checkDiagLR(board) ||
    checkDiagRL(board)
  ) {
    return true;
  } else return false;
};

const checkRow = r => {
  for (let i = 0; i < r.length - 1; i++) {
    if (r[i + 1] === r[i] && r[i + 2] === r[i] && r[i] !== "") {
      window.alert(`Player ${r[i]} wins.`);
    } else {
      return false;
    }
  }
};

const checkCol = board => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 2; j++) {
      if (
        board[j + 1][i] === board[j][i] &&
        board[j + 2][i] === board[j][i] &&
        board[j][i] !== ""
      ) {
        window.alert(`Player ${board[j][i]} wins!`);
      }
    }
  }
};

const checkDiagLR = board => {
  for (let i = 0; i < board.length - 2; i++) {
    if (
      board[i][i] === board[i + 1][i + 1] &&
      board[i + 2][i + 2] === board[i][i] &&
      board[i][i] !== ""
    ) {
      window.alert(`Player ${board[i][i]} wins!`);
    }
  }
};

const checkDiagRL = board => {
  for (let i = 0; i < board.length - 2; i++) {
    if (
      board[i][i + 2] === board[i + 1][i + 1] &&
      board[i + 2][i] === board[i][i + 2] &&
      board[i][i + 2] !== ""
    ) {
      window.alert(`Player ${board[i][i + 2]} wins!`);
    }
  }
};
