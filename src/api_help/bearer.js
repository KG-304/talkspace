import axios from "axios";

export const getBearer = async email => {
  return await axios
    .post(
      "https://d9u7x85vp9.execute-api.us-east-2.amazonaws.com/production/auth",
      { email: email }
    )
    .then(res => res.data.token)
    .catch(error => console.log(error));
};
