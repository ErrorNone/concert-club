import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Error = () => {
  const strongText = useSelector((state) => state.strongText.strongText);

  return (
    <Container className="mt-5">
      <Row className="pt-5">
        {!strongText ? (
          <Col>
            <h4 className="text-center">
              К сожалению данная страница не найдена! Попробуйте обновить
              страницу.
            </h4>
          </Col>
        ) : (
          <Col>
            <h4 className="text-center fw-bold">
              К сожалению данная страница не найдена! Попробуйте обновить
              страницу.
            </h4>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default Error;
