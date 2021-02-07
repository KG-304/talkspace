import React, { useContext, useState } from "react";
import Header from "../atoms/header";
import { getBoard } from "../api_help/api";
import UserContext from "../state_manage/userContext";
import Move from "../atoms/move";
import { Modal, Button, Fade } from "@material-ui/core";
import ReplayIcon from "@material-ui/icons/Replay";
import { checkBoard } from "../api_help/checkBoard";

const resetStyle = {
  position: "absolute",
  top: "40%",
  left: "150px",
  fontWeight: "300",
  cursor: "pointer",
};

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "5vh",
  width: "auto",
  outline: "none",
  textAlign: "center",
  backgroundColor: "green",
};

//implement useEffect api for when board changes make API call//

const Game = () => {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [finish, setFinish] = useState(false);
  const context = useContext(UserContext);

  function makeMove(row, col) {
    let copy = [...board];
    if (copy[row][col] !== "O" && copy[row][col] !== "X") {
      copy[row][col] = "X";
      setFinish(true);
      getBoard(copy, context.user.bearer).then(function (result) {
        if (result === undefined) {
          setBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ]);
          setFinish(false);
          window.alert("It's a tie");
        } else if (checkBoard(result)) {
          setFinish(false);
          window.alert("Someone won.");
        } else {
          setBoard(result);
          setFinish(false);
        }
      });
    } else {
      window.alert("Sorry invalid move. Please try again.");
    }
  }

  return (
    <>
      <Modal open={finish} style={modalStyle} onClose={() => setFinish(false)}>
        <Fade
          style={{
            height: "100%",
            width: "100%",
            outline: "none",
          }}
          in={finish}
        >
          <span
            style={{
              color: "white",
              padding: "20px 0px 0px 0px",
              fontSize: "20pt",
            }}
          >
            Making move...
          </span>
        </Fade>
      </Modal>
      <Header />
      <Button
        style={resetStyle}
        onClick={() =>
          setBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ])
        }
      >
        <ReplayIcon style={{ height: "200px", width: "200px" }} />
      </Button>
      <table>
        <tbody>
          <tr>
            <td onClick={() => makeMove(0, 0)}>
              <Move val={board[0][0]} />
            </td>
            <td onClick={() => makeMove(0, 1)} className="vertical-line">
              <Move val={board[0][1]} />
            </td>
            <td onClick={() => makeMove(0, 2)}>
              <Move val={board[0][2]} />
            </td>
          </tr>

          <tr>
            <td onClick={() => makeMove(1, 0)} className="horizontal-line">
              <Move val={board[1][0]} />
            </td>
            <td
              onClick={() => makeMove(1, 1)}
              className="horizontal-line vertical-line"
            >
              <Move val={board[1][1]} />
            </td>
            <td onClick={() => makeMove(1, 2)} className="horizontal-line">
              <Move val={board[1][2]} />
            </td>
          </tr>

          <tr>
            <td onClick={() => makeMove(2, 0)}>
              <Move val={board[2][0]} />
            </td>
            <td onClick={() => makeMove(2, 1)} className="vertical-line">
              <Move val={board[2][1]} />
            </td>
            <td onClick={() => makeMove(2, 2)}>
              <Move val={board[2][2]} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Game;
