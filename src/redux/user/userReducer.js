export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_ERROR = "FETCH_USERS_ERROR";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

 const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return {
        ...state,
        loading:true,
      };
    }
    case FETCH_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    }
    case FETCH_USERS_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};

export default userReducer
