import axios from "axios";
import { updateUsersAction } from "../store/usersReduser";

export const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => dispatch(updateUsersAction(response.data)));
  };
};


