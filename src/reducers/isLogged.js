const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "Sign_IN":
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
