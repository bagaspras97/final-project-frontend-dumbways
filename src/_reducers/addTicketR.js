const initialState = {
  data: [],
  dataErr: [],
  isLoading: false,
  ifSuccess: false
};

const addTicketR = (state = initialState, action) => {
  switch (action.type) {
    case "POST_ADD_TICKET_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "POST_ADD_TICKET_FULFILLED":
      window.localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        ifSuccess: true
        // error: false
      };
    case "POST_ADD_TICKET_REJECTED":
      return {
        ...state,
        isLoading: true,
        error: true,
        dataErr: action.payload.data
      };
    default:
      return state;
  }
};

export default addTicketR;
