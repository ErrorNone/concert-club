import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { currentUserAction } from "../store/currentUserReduser";
import './Components.style.scss'

const UsersBoughtTickets = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const usersArr = Object.entries(users).map((user) => {
    return user[1];
  });
  const forUsers = usersArr.filter((user) => user.id < 5);
  const [showUsers, setShowUsers] = useState(false);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {showUsers === false
        ? "Показать всех пользователей"
        : "Скрыть пользователей"}
    </Tooltip>
  );
  const getCurrentUser = (user) => {
    return dispatch(currentUserAction(user));
  };

  return (
    <Container className="mt-4 mb-2">
      <Row>
        <Col xs={8} md={4}>
          <h4>Купили билеты</h4>
        </Col>
        <OverlayTrigger
          placement="left"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Col
            type="button"
            onClick={() =>
              showUsers === false ? setShowUsers(true) : setShowUsers(false)
            }
            xs={4}
            md={{ span: 2, offset: 6 }}
          >
            <h5>
              {usersArr.length}/
              <span style={{ color: "rgb(219 219 219)" }}> 1000</span>
            </h5>
          </Col>
        </OverlayTrigger>
      </Row>
      <Row className="mt-3 align-items-center justify-content-center">
        {!showUsers
          ? forUsers.length
            ? forUsers.map((user) => {
                return (
                  <Col xs={10} sm={6} lg={4} xl={3} key={user.id}>
                    <Card className="mb-3 rounded-0 card-hover">
                      <Card.Body>
                        <Card.Title>{user.username}</Card.Title>
                        <Card.Text>{user.address.city}</Card.Text>
                        <Link to={`/users/${user.id}`}>
                          <Button
                            variant="dark"
                            className="rounded-0"
                            onClick={() => getCurrentUser(user)}
                          >
                            Посмотреть профиль
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })
            : null
          : usersArr.length
          ? usersArr.map((user) => {
              return (
                <Col xs={8} sm={6} lg={4} xl={3} key={user.id}>
                  <Card  className="mb-3 rounded-0 card-hover" style={{ width: "15rem" }}>
                    <Card.Body>
                      <Card.Title>{user.username}</Card.Title>
                      <Card.Text>{user.address.city}</Card.Text>
                      <Link to={`/users/${user.id}`}>
                        <Button
                          variant="dark"
                          className="rounded-0"
                          onClick={() => getCurrentUser(user)}
                        >
                          Посмотреть профиль
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          : null}
      </Row>
    </Container>
  );
};

export default UsersBoughtTickets;
