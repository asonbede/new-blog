const initialState = { blogQuestionArray: null, nameValueObj: null };
const radioButtonNameValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAME_VALUE":
      //return state.concat(action.data);
      return {
        ...state,
        nameValueObj: {
          ...state.nameValueObj,
          [action.data.name]: action.data.value,
        },
      };

    case "QUESTION_ARRAY":
      //return state.concat(action.data);
      return { ...state, blogQuestionArray: action.data };

    default:
      return state;
  }
};

export const sendRadioButtonNameValue = (data) => {
  return {
    type: "NAME_VALUE",
    data: data,
  };
};

export const sendBlogQuestionArray = (data) => {
  return {
    type: "QUESTION_ARRAY",
    data: data,
  };
};

export default radioButtonNameValueReducer;
//{ type: "success", message: `${user.name} logged in` }
