import React, { useState, useContext } from "react";
import { Modal, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import UserContext from "../state_manage/userContext";
import { getBearer } from "../api_help/bearer";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "90%",
      height: "100%",
      outline: "none",
    },
  },
}));

const modalStyle = {
  position: "fixed",
  top: "15%",
  left: "45%",
  marginLeft: "-100px",
  height: "50vh",
  width: "15vw",
  backgroundColor: "white",
  border: "solid 1px",
  borderRadius: "10px",
  outline: "none",
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
      context.updateEmail(email);
      context.updateBearer(getBearer(email));
      setError(false);
      setModal(false);
    } else {
      setError(true);
    }
  };

  return (
    <Modal style={modalStyle} open={modal} /*onClose={() => setModal(false)}*/>
      <div className="modal-container">
        <form className={classes.root} noValidate autoComplete="off">
          <span>Please enter your email.</span>
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
          <Button onClick={() => checkEmail()}>Submit</Button>
        </form>
      </div>
    </Modal>
  );
};

export default Login;
