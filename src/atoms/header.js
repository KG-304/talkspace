import React, { useContext } from "react";
import UserContext from "../state_manage/userContext";

const Header = () => {
  const context = useContext(UserContext);
  return (
    <div className="App">
      <div
        style={{
          position: "absolute",
          height: "5vh",
          width: "100%",
          backgroundColor: "blue",
        }}
      >
        You are logged in as: {context.user.email}
      </div>
    </div>
  );
};

export default Header;
