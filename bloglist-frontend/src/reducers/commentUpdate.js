const initialState = {
  commentUpdateState: null,
  commentReplyUpdateState: null,
  replyViewWrite: false,
  replyViewWriteCommentId: null,
  questionUpdateState: null,
};
const commentUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COMMENT_UPDATE":
      //return state.concat(action.data);
      return { ...state, commentUpdateState: action.data };
    case "QUESTION_UPDATE":
      //return state.concat(action.data);
      return { ...state, questionUpdateState: action.data };

    case "COMMENT_REPLY_UPDATE":
      //return state.concat(action.data);
      return { ...state, commentReplyUpdateState: action.data };

    case "REPLY_VIEW_WRITE":
      //return state.concat(action.data);
      return {
        ...state,
        replyViewWrite: !state.replyViewWrite,
        replyViewWriteCommentId: action.data,
      };
    default:
      return state;
  }
};

export const sendReplViewWrite = (id) => {
  //console.log({ data });
  return {
    type: "REPLY_VIEW_WRITE",
    data: id,
  };
};

export const sendCommentUpdate = (data) => {
  return {
    type: "COMMENT_UPDATE",
    data: data,
  };
};

export const sendCommentReplyUpdate = (data) => {
  return {
    type: "COMMENT_REPLY_UPDATE",
    data: data,
  };
};

export const sendQuestionUpdate = (data) => {
  console.log({ data }, "from question-update");
  return {
    type: "QUESTION_UPDATE",
    data: data,
  };
};

export default commentUpdateReducer;
//{ type: "success", message: `${user.name} logged in` }
