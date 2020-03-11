const initialState = {
  data: [],
  dataErr: [],
  isLoading: false
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case "POST_REGISTER_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "POST_REGISTER_FULFILLED":
      window.localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        error: false
      };
    case "POST_REGISTER_REJECTED":
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

export default register;
