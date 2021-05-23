import { useDispatch, useSelector } from "react-redux";
import { sendResulReviewtHandler } from "../reducers/resultReducer";

const useShowResult = () => {
  const dispatch = useDispatch();
  const resourceFun = () => {
    dispatch(sendResulReviewtHandler());
  };
  return resourceFun;
};
export default useShowResult;
