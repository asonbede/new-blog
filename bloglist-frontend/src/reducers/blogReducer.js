import blogService from "../services/blogs";
import { trigerRender } from "./trigarRender";
import { renderMessage } from "./messageReducer";

// const initialState = [
//   {
//     content: "reducer defines how redux store works",
//     important: true,
//     id: 1,
//   },
//   { content: "state of store can contain any data", important: false, id: 2 },
// ];

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_NOTE":
      return [...state, action.data];
    case "INIT_BLOGS":
      return action.data;
    case "DELETE_BLOG":
      return action.data;

    case "UPDATE_MAIN_BLOG":
      return state.map((blog) =>
        blog.id === action.data.id ? action.data : blog
      );

    case "CREAT_MAIN_COMMENT":
      return state.map((blog) =>
        blog.id === action.data.id ? action.data : blog
      );

    case "CREAT_MAIN_BLOG_LIKE":
      // window.location.reload()

      return state.map((blog) =>
        blog.id === action.data.id ? action.data : blog
      );
    //----------comments operations-----------
    case "CREATE_COMMENT":
      // window.location.reload()

      return state.filter((blog) =>
        blog.id === action.data.id ? action.data : blog
      );

    case "LIKE_COMMENT":
      // window.location.reload()

      return state.map((blog) =>
        blog.id === action.data.id ? action.data : blog
      );

    case "DIS_LIKE_COMMENT":
      // window.location.reload()

      return state.map((blog) =>
        blog.id === action.data.id ? action.data : blog
      );

    case "CREATE_LIKE":
      // window.location.reload()

      return state.filter((blog) =>
        blog.id === action.data.id ? action.data : blog
      );

    case "CLOSE_DETAILS":
      return action.data;

    default:
      return state;
  }
};

//----------------mainn blogs, comments and their replies,likes,dislikes,create,update

export const initializeBlogs = () => {
  let blogs;
  return async (dispatch) => {
    try {
      blogs = await blogService.getAll();
    } catch (error) {
      console.log("error occured while getting all");
      console.log({ blogs }, "initialize blog");
    }

    dispatch({
      type: "INIT_BLOGS",
      data: blogs ? blogs : [],
    });
  };
};

export const removeBlogHandler = (id) => {
  const successMessage = "Blog-deletion operation was successful";
  const failureMessage = "Blog-deletion operation was not successful";

  return async (dispatch) => {
    const blogs = await blogService.getAll();
    const blogObject = blogs.find((blog) => blog.id === id);
    const confirmResult = window.confirm(
      `Do you really want to delete blog with title ${blogObject.title} from database/server`
    );
    if (!confirmResult) {
      return;
    }
    try {
      const result = await blogService.deleteBlog(id);

      const newBlogs = blogs.filter((blog) => blog.id !== id);
      dispatch({
        type: "DELETE_BLOG",
        data: newBlogs,
      });

      dispatch(
        renderMessage({
          type: "success",
          message: successMessage,
        })
      );
      // scrollToElement();
      dispatch(trigerRender());
    } catch (error) {
      dispatch(
        renderMessage({
          type: "error",
          message: failureMessage,
        })
      );
      dispatch(trigerRender());
    }
  };
};

export const createBlog = (content) => {
  return async (dispatch) => {
    try {
      const newBlog = await blogService.create(content);
      dispatch({
        type: "NEW_NOTE",
        data: newBlog,
      });
      dispatch(
        renderMessage({
          type: "success",
          message: "Blog creation was successful",
        })
      );
      dispatch(trigerRender());
    } catch (error) {
      dispatch(
        renderMessage({
          type: "error",
          message: "Blog creation was not successful",
        })
      );
      dispatch(trigerRender());
    }
  };
};

export const handleUpdateMainBlog = (id, content) => {
  const successMessage = "main-blog-update operation was successful";
  const failureMessage = "main-blog-update operation was not successful";

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "UPDATE_MAIN_BLOG",
        data: response,
      });

      dispatch(
        renderMessage({
          type: "success",
          message: successMessage,
        })
      );
      // scrollToElement();
      dispatch(trigerRender());
    } catch (error) {
      dispatch(
        renderMessage({
          type: "error",
          message: failureMessage,
        })
      );
      dispatch(trigerRender());
    }
    //controlUseEffectRerender();
  };
};

export const handleCreateMainComment = (id, content, operationType) => {
  const successMessage = "Main-Comment-creation was successful";
  const failureMessage = "Main-Comment-creation was not successful";

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "CREAT_MAIN_COMMENT",
        data: response,
      });

      dispatch(
        renderMessage({
          type: "success",
          message: successMessage,
        })
      );
      // scrollToElement();
      dispatch(trigerRender());
    } catch (error) {
      dispatch(
        renderMessage({
          type: "error",
          message: failureMessage,
        })
      );
      dispatch(trigerRender());
    }
    //controlUseEffectRerender();
  };
};

export const handleCreateMainBlogLike = (id, content) => {
  const successMessage = "Main-blog-like operation was successful";
  const failureMessage = "Main-blog-like operation was not successful";

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "CREAT_MAIN_BLOG_LIKE",
        data: response,
      });

      dispatch(
        renderMessage({
          type: "success",
          message: successMessage,
        })
      );
      // scrollToElement();
      dispatch(trigerRender());
    } catch (error) {
      dispatch(
        renderMessage({
          type: "error",
          message: failureMessage,
        })
      );
      dispatch(trigerRender());
    }
    //controlUseEffectRerender();
  };
};

//----------------sub comments and their replies,likes,dislikes,create,update
const scrollToElement = () => {
  document.getElementById("noteti").scrollIntoView();
};

export const handleComment = (id, content, operationType) => {
  let successMessage;
  let failureMessage;

  if (operationType === "delete") {
    successMessage = "Comment deletion was successful";
    failureMessage = "Comment deletion was not successful";
  } else if (operationType === "update") {
    successMessage = "Comment update was successful";
    failureMessage = "Comment update was not successful";
  } else if (operationType === "reply-create") {
    successMessage = "Comment-create-reply operation was successful";
    failureMessage = "Comment-create-reply operation was not successful";
  } else if (operationType === "update-reply") {
    successMessage = "Comment-reply-update operation was successful";
    failureMessage = "Comment-reply-update operation was not successful";
  } else if (operationType === "like-reply") {
    successMessage = "Like-reply operation was successful";
    failureMessage = "Like-reply operation was not successful";
  } else if (operationType === "dis-like-reply") {
    successMessage = "Dis-Like-reply operation was successful";
    failureMessage = "Dis-Like-reply operation was not successful";
  } else if (operationType === "delete-comment-reply") {
    successMessage = "Delete-comment-reply operation was successful";
    failureMessage = "Delete-comment-reply operation was not successful";
  }

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "CREATE_COMMENT",
        data: response,
      });

      dispatch(
        renderMessage({
          type: "success",
          message: successMessage,
        })
      );
      // scrollToElement();
      dispatch(trigerRender());
    } catch (error) {
      dispatch(
        renderMessage({
          type: "error",
          message: failureMessage,
        })
      );
    }
    //controlUseEffectRerender();
  };
};

export const sendCommentLike = (id, content) => {
  const successMessage = "Comment-Like operation was successful";
  const failureMessage = "Comment-Like operation was not successful";

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "LIKE_COMMENT",
        data: response,
      });

      dispatch(
        renderMessage({
          type: "success",
          message: successMessage,
        })
      );
      // scrollToElement();
      dispatch(trigerRender());
    } catch (error) {
      dispatch(
        renderMessage({
          type: "error",
          message: failureMessage,
        })
      );
      dispatch(trigerRender());
    }
  };
};

export const sendCommentDisLike = (id, content) => {
  const successMessage = "Comment-DisLike operation was successful";
  const failureMessage = "Comment-DisLike operation was not successful";

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "DIS_LIKE_COMMENT",
        data: response,
      });

      dispatch(
        renderMessage({
          type: "success",
          message: successMessage,
        })
      );
      // scrollToElement();
      dispatch(trigerRender());
    } catch (error) {
      dispatch(
        renderMessage({
          type: "error",
          message: failureMessage,
        })
      );
      dispatch(trigerRender());
    }
  };
};

export default blogReducer;
