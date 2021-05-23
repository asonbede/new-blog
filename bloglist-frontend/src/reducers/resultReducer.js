const initialState = { showResult: false, reviewResult: true };
const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_RESULT":
      return { ...state, showResult: !state.showResult };

    case "SHOW_REVIEW":
      return { ...state, reviewResult: !state.reviewResult };

    default:
      return state;
  }
};

export const sendResultHandler = () => {
  //console.log({ data });
  return {
    type: "SHOW_RESULT",
  };
};

export const sendResulReviewtHandler = () => {
  //console.log({ data });
  return {
    type: "SHOW_REVIEW",
  };
};

export default resultReducer;
//{ type: "success", message: `${user.name} logged in` }
