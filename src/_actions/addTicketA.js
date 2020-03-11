import axios from "axios";

const token = window.localStorage.getItem("token");
export const addTicket = data => {
  return {
    type: "POST_ADD_TICKET",
    payload: axios({
      method: "POST",
      url: "http://localhost:3900/api/v1/addTicket",
      data,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  };
};
