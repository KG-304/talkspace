import axios from "axios";

export const getBearer = email => {
  let mail = "";
  axios
    .post(
      `https://d9u7x85vp9.execute-api.us-east-2.amazonaws.com/production/auth`,
      { email: email }
    )
    .then(function (response) {
      mail = response.data.token;
    })
    .catch(function (error) {
      window.alert("Sorry something went wrong.");
    });
  return mail;
};
