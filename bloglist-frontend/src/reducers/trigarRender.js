const reRenderReducer = (state = false, action) => {
  switch (action.type) {
    case "RE_RENDER":
      //return state.concat(action.data);
      return !state;
    default:
      return state;
  }
};

export const trigerRender = () => {
  return {
    type: "RE_RENDER",
    data: null,
  };
};

export default reRenderReducer;
