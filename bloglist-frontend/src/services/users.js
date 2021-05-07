import axios from "axios";
const baseUrl = "http://localhost:8082/api/users";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getOne = (id) => {
  console.log("ingetOneServices");
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const create = async (newObject) => {
  // const config = {
  //   headers: { Authorization: token },
  // };
  console.log({ newObject });
  const response = await axios.post(baseUrl, newObject, {
    header: { "Content-Type": "multipart/form" },
  });

  return response.data;
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`, {
    headers: { Authorization: token },
  });
  return request.then((response) => response.data); //note-app-with-react-node
};

export default { getAll, getOne, deletePerson, setToken, create };
