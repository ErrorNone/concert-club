import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { currentUserReduser } from "./currentUserReduser";
import { usersReduser } from "./usersReduser";


const rootReduser = combineReducers({
  users: usersReduser,
  currentUser: currentUserReduser
});

export const store = createStore(
  rootReduser,
  composeWithDevTools(applyMiddleware(thunk))
);
