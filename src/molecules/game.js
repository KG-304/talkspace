import React, { useContext, useState } from "react";
import Header from "../atoms/header";
import { getBoard } from "../api_help/board";
import UserContext from "../state_manage/userContext";

const start = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

//implement useEffect api for when board changes make API call//

const Game = () => {
  const [board, setBoard] = useState(start);
  const context = useContext(UserContext);

  function myFunc(row, col) {
    let copy = [...board];
    if (copy[row][col] !== "O" && copy[row][col] !== "X") {
      copy[row][col] = "X";
      getBoard(copy, context.user.bearer).then(function (result) {
        if (typeof result !== "array") {
          console.log("Someone won");
        }
        //Have to call .then() bc otherwise you promise will always be pending.
        setBoard(result);
      });
    } else {
      window.alert("Sorry invalid move. Please try again.");
    }
  }

  return (
    <>
      <Header />
      <table>
        <tbody>
          <tr>
            <td onClick={event => myFunc(0, 0)}>{board[0][0]}</td>
            <td onClick={() => myFunc(0, 1)} className="vertical-line">
              {" "}
              {board[0][1]}
            </td>
            <td onClick={() => myFunc(0, 2)}> {board[0][2]}</td>
          </tr>

          <tr>
            <td onClick={() => myFunc(1, 0)} className="horizontal-line">
              {" "}
              {board[1][0]}
            </td>
            <td
              onClick={() => myFunc(1, 1)}
              className="horizontal-line vertical-line"
            >
              {board[1][1]}
            </td>
            <td onClick={() => myFunc(1, 2)} className="horizontal-line">
              {board[1][2]}
            </td>
          </tr>

          <tr>
            <td id="[2][0]" onClick={() => myFunc(2, 0)}>
              {board[2][0]}
            </td>
            <td
              id="[2][1]"
              onClick={() => myFunc(2, 1)}
              className="vertical-line"
            >
              {board[2][1]}
            </td>
            <td id="[2][2]" onClick={() => myFunc(2, 2)}>
              {board[2][2]}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Game;
