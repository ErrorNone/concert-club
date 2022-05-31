import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUsers } from "../asyncActions/users";

const UserTable = () => {

  const currentUser = useSelector((state) => state.currentUser);
  const users = useSelector((state) => state.users);
  const usersArr = Object.entries(users).map((user) => {
    return user[1];
  });
  const params = useParams()
  const idName = Number.parseInt(params.id)
  const thisUser = usersArr.filter(user => {
   return idName !== user.id ? null : user})
  
  console.log(thisUser[0]);

  console.log(idName);
  console.log(users);


  return (
    <Table bordered responsive className="border-dark my-4" >
      <thead>
        <tr>
          <th colSpan={5}>
            <h4>{thisUser[0].username}</h4>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{thisUser[0].name}</td>
          <td>{thisUser[0].email}</td>
          <td>{thisUser[0].phone}</td>
          <td>{thisUser[0].website}</td>
          <td>
            {thisUser[0].company.name}, {thisUser[0].company.bs}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default UserTable;
