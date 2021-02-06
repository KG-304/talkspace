import React, { useContext } from "react";
import UserContext from "../state_manage/userContext";
import EmailIcon from "@material-ui/icons/Email";

const Header = () => {
  const context = useContext(UserContext);
  return (
    <div
      style={{
        position: "absolute",
        height: "50px",
        top: "0",
        width: "100%",
        backgroundColor: "blue",
        textAlign: "right",
      }}
    >
      <EmailIcon />
      You are logged in as: {context.user.email}
    </div>
  );
};

export default Header;
