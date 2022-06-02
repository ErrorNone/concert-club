import { GET_USER, LOAD_USERS } from "../types";
// import { LOAD_USERS } from "../types";

const defaultState = {
  allUsers: [],
  user: {}
};

export const UsersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return { ...state, allUsers: action.payload };
    case GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
