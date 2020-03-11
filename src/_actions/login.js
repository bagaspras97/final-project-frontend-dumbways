import axios from "axios";

const token = window.localStorage.getItem("token");

export const cekUser = () => {
  return {
    type: "GET_CEK_USER",
    payload: axios({
      method: "GET",
      url: "http://localhost:3900/api/v1/cekUser",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};

export const login = data => {
  return {
    type: "POST_LOGIN",
    payload: axios({
      method: "POST",
      url: "http://localhost:3900/api/v1/login",
      data: data
    })
  };
};
