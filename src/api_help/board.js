import axios from "axios";

export const getBoard = async (board, bearer) => {
  const config = {
    headers: { Authorization: `Bearer ${bearer}` },
  };
  return await axios
    .post(
      "https://d9u7x85vp9.execute-api.us-east-2.amazonaws.com/production/engine",
      { board: board },
      config
    )
    .then(res => res.data.board)
    .catch(error => console.log(error));
};
