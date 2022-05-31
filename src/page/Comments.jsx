import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Comment from "../components/Comment";
import Post from "../components/Post";

const Comments = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const postComment = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        email,
        name,
        comment,
      })
      .then((res) => console.log("Posting data", res))
      .catch((err) => console.log(err));
  };
  const sendComment = () => {
    postComment();
    setEmail("");
    setName("");
    setComment("");
    setShow(false);
  };

  return (
    <Container className="my-4">
      <Row className="mb-2">
        <Col>
          <h4>Пост</h4>
        </Col>
      </Row>
      <Row className=" mb-2">
        <Col>
          <Post />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <h4>Комментарии</h4>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <Comment />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col>
          <Comment />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col className="justify-content-center">
          <Button variant="dark" className="rounded-0" onClick={handleShow}>
            Добавить комментарий
          </Button>
        </Col>
      </Row>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Добавить комментарий</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="pavel@gmail.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Павел"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Комментарий</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" className="rounded-0" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="dark" className="rounded-0" onClick={sendComment}>
            Отправить
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Comments;
