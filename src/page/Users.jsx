import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../components/UsersComponents/Posts";
import Publications from "../components/UsersComponents/Publications";
import UserTable from "../components/UsersComponents/UserTable";
import { loadUsers } from "../store/actions/users";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.allUsers);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  return (
    <>
      {users.map((user) => {
        return (
          <Container className="mt-5" key={user.id}>
            <UserTable user={user} />
            <Posts />
            <Publications />
          </Container>
        );
      })}
    </>
  );
};

export default Users;
