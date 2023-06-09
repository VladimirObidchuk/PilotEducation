import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TopicList from "../components/TopicList";
import TypeBar from "../components/TypeBar";
// import TopicItem from "../components/TopicItem";

const CoursPage = () => {
  const [currentCours, setCours] = useState("");

  const handleBookWork = (currentCours) => {
    setCours(currentCours);
  };

  return (
    <Container>
      <TypeBar onClick={handleBookWork} />
      <Row>
        <Col md={4} className="mt-2">
          <TopicList currentCours={currentCours} />
        </Col>
        <Col md={8} className="mt-2"></Col>
      </Row>
    </Container>
  );
};

export default CoursPage;
