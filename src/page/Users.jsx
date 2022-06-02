import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Posts from "../components/UsersComponents/Posts";
import Publications from "../components/UsersComponents/Publications";
import UserTable from "../components/UsersComponents/UserTable";
import { getUser, loadUsers } from "../store/actions/users";

const Users = () => {
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getUser(params.id));
  }, []);

 

  return (
    <>
      <Container className="mt-5" key={user.id}>
        {user ? (
          <div>
            <UserTable user={user} />
            <Posts />
            <Publications />
          </div>
        ) : (
          <Loader />
          
        )}
      </Container>
      
    </>
  );

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadUsers());
  // }, [dispatch]);

  // const users = useSelector((state) => state.users.allUsers);

  // return (
  //   <>
  //     {" "}
  //     {users.map((user) => {
  //       return (
  //         <Container className="mt-5" key={user.id}>
  //           <UserTable user={user}/>
  //           <Posts />
  //           <Publications />
  //         </Container>
  //       );
  //     })}
  //   </>
  // );
};

export default Users;
