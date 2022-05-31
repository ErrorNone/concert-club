const defaultState = {};

const CURRENT_USER = "CURRENT_USER";
const UNDEFINED_USERS = "UNDEFINED_USERS";

export const currentUserReduser = (state = defaultState, action) => {
  switch (action.type) {
    case UNDEFINED_USERS:
      return { ...state, ...state.currentUser };
    case CURRENT_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const undefinedUsersAction = (payload) => ({ type: UNDEFINED_USERS, payload });
export const currentUserAction = (payload) => ({type: CURRENT_USER, payload,});
