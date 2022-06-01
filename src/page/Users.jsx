import React from "react";
import {  Container} from "react-bootstrap";

import Posts from "../components/UsersComponents/Posts";
import Publications from "../components/UsersComponents/Publications";
import UserTable from "../components/UsersComponents/UserTable";


const Users = () => {

  return (
    <Container className="mt-5">
     <UserTable/>
     <Posts/>
     <Publications/>
    </Container>
  );
};

export default Users;
