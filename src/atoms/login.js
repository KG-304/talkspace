import React, { useState, useContext } from "react";
import { Modal, Button, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import UserContext from "../state_manage/userContext";
import { getBearer } from "../api_help/bearer";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: "20px",
      width: "90%",
      height: "100%",
      outline: "none",
    },
  },
  button: {
    color: "blue",
    backgroundColor: "gray",
  },
  test: {
    backgroundColor: "white",
  },
}));

const modalStyle = {
  position: "fixed",
  top: "25%",
  left: "41%",
  marginLeft: "-100px",
  height: "30vh",
  width: "30vw",
  borderRadius: "10px",
  outline: "none",
  background: "white",
  textAlign: "center",
};

const Login = () => {
  const [modal, setModal] = useState(true);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const context = useContext(UserContext);
  const classes = useStyles();

  const checkEmail = () => {
    let em = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (em.test(email)) {
      let callBear = getBearer(email);
      callBear.then(function (result) {
        //Have to call .then() bc otherwise you promise will always be pending.
        context.updateBearer(result);
      });
      context.updateEmail(email);
      setModal(false);
    } else {
      setError(true);
    }
  };

  return (
    <Modal
      style={modalStyle}
      open={modal}
      BackdropProps={{
        classes: {
          root: classes.test,
        },
      }}
    >
      <Fade in={modal}>
        <div className="modal-container">
          <form className={classes.root} noValidate autoComplete="off">
            <span style={{ marginBottom: "10px" }}>Tic Tac Toe</span>
            <TextField
              error={error}
              value={email}
              id="filled-basic"
              variant="filled"
              placeholder="test@email.com"
              type="email"
              helperText={error ? "Invalid entry" : null}
              onChange={event => setEmail(event.target.value)}
            />
            <Button className={classes.button} onClick={() => checkEmail()}>
              Submit
            </Button>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};

export default Login;
