import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Components.style.scss";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="border-bottom border-top border-dark pt-4 pb-2">
      <Row className="mb-2">
        <h4>Посты</h4>
      </Row>
      <Row className="d-flex align-items-center justify-content-center">
        {" "}
        <Col lg={6}>
         <Post/>
        </Col>
        <Col lg={6}>
         <Post/>
        </Col>
       
      </Row>
    </div>
  );
};

export default Posts;
