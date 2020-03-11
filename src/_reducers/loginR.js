const initialState = {
  data: [],
  dataErr: [],
  isLoading: false,
  isLogin: false
};

// export const dataUser = (state = initialState, action) => {
//   switch (action.type) {
//     case "GET_CEK_USER_PENDING":
//       return {
//         ...state,
//         isLoading: true
//       };
//     case "GET_CEK_USER_FULFILLED":
//       // console.log("Log POST_LOGIN_FULFILLED", action.payload.data);
//       return {
//         ...state,
//         data: action.payload.data.data,
//         isLoading: false
//       };
//     case "GET_CEK_USER_REJECTED":
//       return {
//         ...state,
//         isLoading: false,
//         error: true
//       };
//     default:
//       return state;
//   }
// };

const login = (state = initialState, action) => {
  switch (action.type) {
    case "POST_LOGIN_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "POST_LOGIN_FULFILLED":
      //window.localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        error: false,
        isLogin: true
      };
    case "POST_LOGIN_REJECTED":
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

export default login;
