import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Comment = () => {
  return (
    <Card className="mb-3 rounded-0 border-dark">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <Card.Title>
            <h6>Ignat</h6>
          </Card.Title>
          <Card.Title>
            <h6>18.01.22</h6>
          </Card.Title>
        </div>
        <Card.Text>Альбом пушка, мне все понравилось..</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Comment;
