import axios from "axios";
import {  GET_USER, LOAD_USERS } from "../types";

export const loadUsers = () => async (dispatch) => {
  try {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const { data: allUsers } = await axios.get(apiUrl);
    dispatch({ type: LOAD_USERS, payload: allUsers });
  } catch (err) {
    console.error(err);
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
    const { data: getUser } = await axios.get(apiUrl);
    dispatch({ type: GET_USER, payload: getUser });
  } catch (err) {
    console.error(err);
  }
};
