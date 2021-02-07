import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../state_manage/userContext";
import EmailIcon from "@material-ui/icons/Email";

const Header = () => {
  const context = useContext(UserContext);
  const history = useHistory();

  function logOut() {
    context.updateEmail("");
    context.updateBearer("");
    history.push("/");
  }
  return (
    <header className="header">
      <span onClick={() => logOut()} className="log-out">
        Log out
      </span>
      <div style={{ padding: "5px 20px 0px 0px" }}>
        <EmailIcon className="icon" />
        <a href={`mailto: ${context.user.email}`}>{context.user.email}</a>
      </div>
    </header>
  );
};

export default Header;
