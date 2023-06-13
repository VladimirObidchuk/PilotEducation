import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import TopicInfo from "../components/TopicInfo";
import TopicTree from "../components/TopicTree";

const CoursPage = () => {
  const [currentCours, setCours] = useState("");
  const [infoTopic, setInfoItem] = useState("");

  const handleBookWork = (currentCours) => {
    setCours(currentCours);
  };

  const setItemInfo = (itemInfo) => {
    setInfoItem(itemInfo);
  };

  return (
    <Container>
      <TypeBar onClick={handleBookWork} />
      <Row>
        <Col md={2} className="mt-2">
          <TopicTree currentCours={currentCours} onClick={setItemInfo} />
        </Col>
        <Col md={10} className="mt-2">
          <TopicInfo infoTopic={infoTopic} />
        </Col>
      </Row>
    </Container>
  );
};

export default CoursPage;
