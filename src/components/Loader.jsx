import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div class="d-flex justify-content-center align-items-center" >
    <Spinner
      animation="border"
      role="status"
      style={{  marginTop: "250px" }}
      size="xxl"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
};

export default Loader;
