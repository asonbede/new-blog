const initialState = { formUpdateTrigar: null, commentValue: null };
const commentUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RE_UPDATE":
      //return state.concat(action.data);
      return action.data;
    default:
      return state;
  }
};

export const updateMessage = (data) => {
  return {
    type: "RE_UPDATE",
    data: data,
  };
};

export default commentUpdateReducer;
//{ type: "success", message: `${user.name} logged in` }
