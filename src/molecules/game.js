import React, { useContext } from "react";
import Header from "../atoms/header";
import UserContext from "../state_manage/userContext";

const Game = () => {
  const context = useContext(UserContext);
  return (
    <>
      <Header />
    </>
  );
};

export default Game;
