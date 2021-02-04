const updateBearer = (bearer, state) => {
  return { ...state, bearer: bearer };
};

const updateEmail = (email, state) => {
  return { ...state, email: email };
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "update-bearer":
      return updateBearer(action.bearer, state);
    case "update-email":
      return updateEmail(action.email, state);
    default:
      return;
  }
};
