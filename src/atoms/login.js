import React, { useState, useContext } from "react";
import { Modal, Button, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import UserContext from "../state_manage/userContext";
import { getBearer } from "../api_help/api";
import { Backdrop } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: "25px",
      width: "90%",
      height: "100%",
      outline: "none",
    },
  },
  drop: {
    height: "0",
  },
  button: {
    border: "solid 0.5px black",
    borderRadius: "10px",
  },
}));

const modalStyle = {
  position: "fixed",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "30vh",
  width: "30vw",
  borderRadius: "10px",
  outline: "none",
  background: "white",
  textAlign: "center",
  overflowY: "auto",
};

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const context = useContext(UserContext);
  const classes = useStyles();
  const history = useHistory();

  const checkEmail = () => {
    let em = /\S+@\S+\.\S+/;
    if (em.test(email)) {
      getBearer(email).then(function (result) {
        context.updateBearer(result);
      });
      context.updateEmail(email);
      history.push("/game");
    } else {
      setError(true);
    }
  };

  return (
    <Modal
      style={modalStyle}
      open={true}
      BackdropComponent={Backdrop}
      BackdropProps={{
        classes: {
          root: classes.drop,
        },
      }}
    >
      <Fade in={true}>
        <div className="modal-container">
          <form className={classes.root} noValidate autoComplete="off">
            <span style={{ marginBottom: "10px" }}>
              Welcome, please enter your email.
            </span>
            <TextField
              error={error}
              value={email}
              id="filled-basic"
              variant="filled"
              placeholder="test@email.com"
              type="email"
              helperText={error ? `Invalid entry: ${email}` : null}
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
