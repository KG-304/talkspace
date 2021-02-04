import React, { useContext } from "react";
import UserContext from "../state_manage/userContext";

const Header = () => {
  const context = useContext(UserContext);
  return (
    <>
      <div style={{ position: "absolute", top: "1px" }}>
        {context.user.email}
      </div>
      <div style={{ position: "absolute", top: "20px" }}>
        {context.user.bearer}
      </div>
    </>
  );
};

export default Header;
