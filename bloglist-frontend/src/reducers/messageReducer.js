const messageReducer = (state = null, action) => {
  switch (action.type) {
    case "RE_MESSAGE":
      //return state.concat(action.data);
      return action.data;
    default:
      return state;
  }
};

export const renderMessage = (data) => {
  return {
    type: "RE_MESSAGE",
    data: data,
  };
};

export default messageReducer;
//{ type: "success", message: `${user.name} logged in` }
