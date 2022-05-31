import React, { useEffect } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../asyncActions/users";
import Posts from "../components/Posts";
import Publications from "../components/Publications";
import UserTable from "../components/UserTable";

const Users = () => {


  return (
    <Container>
     <UserTable/>
     <Posts/>
     <Publications/>
    </Container>
  );
};

export default Users;
