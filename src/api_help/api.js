import axios from "axios";

export const getBearer = async email => {
  return await axios
    .post(
      "https://d9u7x85vp9.execute-api.us-east-2.amazonaws.com/production/auth",
      { email: email }
    )
    .then(res => res.data.token)
    .catch(error =>
      window.alert(
        "Sorry an error occurred with the request. Please wait a moment and try again."
      )
    );
};

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
    .catch(error =>
      window.alert(
        "Sorry an error occurred with the request. Please wait a moment and try again."
      )
    );
};
