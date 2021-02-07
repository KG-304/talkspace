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
  } else {
    return false;
  }
};

const checkRow = r => {
  let msg = "";
  for (let i = 0; i < r.length - 1; i++) {
    if (r[i + 1] === r[i] && r[i + 2] === r[i] && r[i] !== "") {
      if (r[i] === "X" && r[i] !== "") {
        msg = "Congratulations you win!";
      } else {
        msg = "The opponent wins please try again.";
      }
      window.alert(msg);
      return true;
    } else {
      return false;
    }
  }
};

const checkCol = board => {
  let msg = "";
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 2; j++) {
      if (
        board[j + 1][i] === board[j][i] &&
        board[j + 2][i] === board[j][i] &&
        board[j][i] !== ""
      ) {
        if (board[j][i] === "X" && board[j][i] !== "") {
          msg = "Congratulations you win!";
        } else {
          msg = "The opponent wins please try again.";
        }
        window.alert(msg);
        return true;
      } else {
        return false;
      }
    }
  }
};

const checkDiagLR = board => {
  let msg = "";
  for (let i = 0; i < board.length - 2; i++) {
    if (
      board[i][i] === board[i + 1][i + 1] &&
      board[i + 2][i + 2] === board[i][i] &&
      board[i][i] !== ""
    ) {
      if (board[i][i] === "X" && board[i][i] !== "") {
        msg = "Congratulations you win!";
      } else {
        msg = "The opponent wins please try again.";
      }
      window.alert(msg);
      return true;
    } else {
      return false;
    }
  }
};

const checkDiagRL = board => {
  let msg = "";
  for (let i = 0; i < board.length - 2; i++) {
    if (
      board[i][i + 2] === board[i + 1][i + 1] &&
      board[i + 2][i] === board[i][i + 2] &&
      board[i][i + 2] !== ""
    ) {
      if (board[i][i + 2] === "X" && board[i][i + 2] !== "") {
        msg = "Congratulations you win!";
      } else {
        msg = "The opponent wins, please try again.";
      }
      window.alert(msg);
      return true;
    } else {
      return false;
    }
  }
};
