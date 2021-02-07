import React, { useContext, useState } from "react";
import Header from "../atoms/header";
import { getBoard } from "../api_help/api";
import UserContext from "../state_manage/userContext";
import Move from "../atoms/move";
import { Modal, Button, Fade } from "@material-ui/core";
import { Backdrop } from "@material-ui/core";
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
  top: "10%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "50px",
  width: "auto",
  maxWidth: "20vw",
  borderRadius: "10px",
  outline: "none",
  textAlign: "center",
  backgroundColor: "white",
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
          window.alert("It's a tie. Try again.");
        } else if (checkBoard(result)) {
          setBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
          ]);
        } else {
          setBoard(result);
        }
        setFinish(false);
      });
    } else {
      window.alert("Sorry invalid move. Please try again.");
    }
  }

  return (
    <>
      <Modal
        BackdropComponent={Backdrop}
        BackdropProps={{
          style: {
            height: "0",
            opacity: "0.1",
          },
        }}
        open={finish}
        style={modalStyle}
        onClose={() => setFinish(false)}
      >
        <Fade
          style={{
            height: "100%",
            width: "100%",
            outline: "none",
            borderRadius: "10px",
          }}
          in={finish}
        >
          <span
            style={{
              color: "black",
              padding: "30px 0px 0px 0px",
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
