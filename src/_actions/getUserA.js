import axios from "axios";

const token = window.localStorage.getItem("token");
const find = data => {
  return {
    type: "GET_USER_LOGIN",
    payload: axios({
      method: "GET",
      url: "http://localhost:3900/api/v1/cekUser",
      headers: {
        data,
        Authorization: `Bearer ${token}`
      }
    })
  };
};

export default find;
