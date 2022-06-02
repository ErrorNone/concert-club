import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import TextareaAutosize from "react-textarea-autosize";

const ModalComment = ({ handleClose, handleShow, show, setShow }) => {
  const strongText = useSelector((state) => state.strongText.strongText);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [validate, setValidate] = useState(false);
  const postComment = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        email,
        name,
        comment,
      })
      .then((res) => res)
      .catch((err) => err);
  };

  const sendComment = () => {
    postComment();
    setEmail("");
    setName("");
    setComment("");
    setValidate(false);
    setShow(false);
  };

  const validateEmail = (email) => {
    const re = /^[\w-\.]+@[\w-]+\.[a-z]{1,6}$/i;
    return re.test(email);
  };

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  const changeEmailHandler = (event) => {
    if (validateEmail(email)) {
      setValidate(true);
    }
    setEmail(event.target.value);
  };

  const changeContentHandler = (event) => {
    setComment(event.target.value);
  };

  const toggleValidation = () => {
    if (!validateEmail(email)) {
      setValidate(false);
    }
  };

  useEffect(() => {
    toggleValidation();
  }, [validateEmail(email)]);

  return (
    <div>
      {!strongText ? (
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Добавить комментарий</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={changeEmailHandler}
                  placeholder="pavel@gmail.com"
                  autoFocus
                />
                {!validate && email !== "" ? (
                  <Form.Label className="mt-1 mb-0 text-danger">
                    Введите корректный email{" "}
                  </Form.Label>
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Имя</Form.Label>
                <Form.Control
                  type="name"
                  value={name}
                  onChange={changeNameHandler}
                  placeholder="Павел"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Комментарий</Form.Label>
                <TextareaAutosize
                  style={{ resize: "none" }}
                  className="form-control"
                  value={comment}
                  onChange={changeContentHandler}
                  minRows={3}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" className="rounded-0" onClick={handleClose}>
              Закрыть
            </Button>
            <Button
              variant="dark"
              className="rounded-0"
              onClick={sendComment}
              disabled={!comment || !name || !email || !validate}
            >
              Отправить
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        // Strong version
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title className="fw-bold">Добавить комментарий</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="fw-bold">Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={changeEmailHandler}
                  placeholder="pavel@gmail.com"
                  autoFocus
                  className="fw-bold"
                />
                {!validate && email !== "" ? (
                  <Form.Label className="mt-1 mb-0 text-danger fw-bold">
                    Введите корректный email{" "}
                  </Form.Label>
                ) : (
                  ""
                )}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label className="fw-bold">Имя</Form.Label>
                <Form.Control
                  type="name"
                  value={name}
                  onChange={changeNameHandler}
                  placeholder="Павел"
                  autoFocus
                  className="fw-bold"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="fw-bold">Комментарий</Form.Label>
                <TextareaAutosize
                  style={{ resize: "none" }}
                  className="form-control fw-bold"
                  value={comment}
                  onChange={changeContentHandler}
                  minRows={3}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="dark"
              className="rounded-0 fw-bold"
              onClick={handleClose}
            >
              Закрыть
            </Button>
            <Button
              variant="dark"
              className="rounded-0 fw-bold"
              onClick={sendComment}
              disabled={!comment || !name || !email || !validate}
            >
              Отправить
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ModalComment;
