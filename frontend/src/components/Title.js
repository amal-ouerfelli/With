import React from "react";
import { Row } from "react-bootstrap";
const Title = ({ title }) => {
  return (
    <Row className="section-title">
      <h1>{title}</h1>
    </Row>
  );
};

export default Title;
