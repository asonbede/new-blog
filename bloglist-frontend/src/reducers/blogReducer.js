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
    //----------main-blogs operations-----------
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
      return state.map((blog) =>
        blog.id === action.data.id ? action.data : blog
      );
    //----------comments operations-----------
    // case "CREATE_COMMENT":
    //   return state.filter(
    //     (blog) => (blog.id === action.data.id ? action.data : blog) //
    //   );

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

    case "DELETE_COMMENT":
      return state.filter((blog) => blog.id !== action.data.id);

    case "CREATE_LIKE":
      return state.filter((blog) =>
        blog.id === action.data.id ? action.data : blog
      );

    case "UPDATE_COMMENT":
      return state.map((blog) =>
        blog.id === action.data.id ? action.data : blog
      );
    //----------reply handler----------------------
    case "REPLY_DELETE_COMMENT":
      return state.map((blog) =>
        blog.id === action.data.id ? action.data : blog
      );

    case "REPLY_CREATE_COMMENT":
      return state.map((blog) =>
        blog.id === action.data.id ? action.data : blog
      );

    case "REPLY_UPDATE_COMMENT":
      return state.map((blog) =>
        blog.id === action.data.id ? action.data : blog
      );

    case "REPLY_LIKE_COMMENT":
      return state.map((blog) =>
        blog.id === action.data.id ? action.data : blog
      );

    case "REPLY_DIS_LIKE_COMMENT":
      return state.map((blog) =>
        blog.id === action.data.id ? action.data : blog
      );
    //-------questions-------------------------------------

    case "CREAT_QUESTION":
      return state.map((blog) =>
        blog.id === action.data.id ? action.data : blog
      );

    case "UPDATE_QUESTION":
      return state.map((blog) =>
        blog.id === action.data.id ? action.data : blog
      );

    case "DELETE_QUESTION":
      return state.map((blog) => blog);

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
      dispatch({
        type: "INIT_BLOGS",
        data: blogs,
      });
      localStorage.setItem("allBlogs", JSON.stringify(blogs));
    } catch (error) {
      console.log("error occured while getting all");
      console.log({ blogs }, "initialize blog");
      blogs = JSON.parse(localStorage.getItem("allBlogs"));
      if (blogs) {
        dispatch({
          type: "INIT_BLOGS",
          data: blogs,
        });
      } else {
        dispatch({
          type: "INIT_BLOGS",
          data: [],
        });
        localStorage.setItem("allBlogs", JSON.stringify([]));
      }
    }
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

export const handleCreateMainComment = (id, content) => {
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

export const sendCreateMainBlogLike = (id, content) => {
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

//----------------sub comments and their replies,likes,dislikes,create,update------

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

export const sendCommentDelete = (id, content, comment) => {
  const successMessage = "Comment-Delete operation was successful";
  const failureMessage = "Comment-Delete operation was not successful";

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "DELETE_COMMENT",
        data: comment,
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

export const handleUpdateComment = (id, content) => {
  const successMessage = "Comment-Update operation was successful";
  const failureMessage = "Comment-Update operation was not successful";

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "UPDATE_COMMENT",
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
//------------reply comments handlers-----------------------------------

export const sendDeleteCommentReply = (id, content) => {
  const successMessage = "Comment-Reply delete operation was successful";
  const failureMessage = "Comment-Reply delete operation was not successful";

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "REPLY_DELETE_COMMENT",
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

export const sendReplyCreateComment = (id, content) => {
  const successMessage = "Comment-Reply create operation was successful";
  const failureMessage = "Comment-Reply create operation was not successful";

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "REPLY_CREATE_COMMENT",
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

export const sendUpdateRepyComment = (id, content) => {
  const successMessage = "Comment-Reply update  operation was successful";
  const failureMessage = "Comment-Reply update operation was not successful";

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "REPLY_UPDATE_COMMENT",
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

export const sendLikeCommentReply = (id, content) => {
  const successMessage = "Comment-Reply like  operation was successful";
  const failureMessage = "Comment-Reply like operation was not successful";

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "REPLY_LIKE_COMMENT",
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

export const sendDisLikeCommentReply = (id, content) => {
  const successMessage = "Comment-Reply dilike  operation was successful";
  const failureMessage = "Comment-Reply dislike operation was not successful";

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "REPLY_DIS_LIKE_COMMENT",
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

//--------------------questions--------------------

export const sendCreateQuestion = (id, content) => {
  const successMessage = "Question-creation was successful";
  const failureMessage = "Question-creation was not successful";

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "CREAT_QUESTION",
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

export const handleQuestionUpdateComment = (id, content) => {
  const successMessage = "Question-update was successful";
  const failureMessage = "Question-update was not successful";

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "UPDATE_QUESTION",
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

export const sendQuestionDelete = (id, content) => {
  const successMessage = "Question-Delete operation was successful";
  const failureMessage = "Question-Delete operation was not successful";

  return async (dispatch) => {
    console.log("inside actioncreator reducer");
    try {
      const response = await blogService.update(id, content);

      console.log({ response });
      dispatch({
        type: "DELETE_QUESTION",
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

//

export default blogReducer;
