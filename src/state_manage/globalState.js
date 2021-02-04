import React, { useReducer } from "react";
import UserContext from "./userContext";
import { UserReducer } from "./userReducer.js";

const GlobalState = props => {
  const user = {
    bearer: "1234",
    email: "test@test.com",
  };

  const [userState, dispatch] = useReducer(UserReducer, user);

  const updateBearer = bearer => {
    dispatch({ type: "update-bearer", bearer });
  };

  const updateEmail = email => {
    dispatch({ type: "update-email", email });
  };

  return (
    <UserContext.Provider
      value={{
        user: userState,
        updateBearer: updateBearer,
        updateEmail: updateEmail,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default GlobalState;
