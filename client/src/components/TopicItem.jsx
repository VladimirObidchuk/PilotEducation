import React, { useContext } from "react";
import { Row, Accordion, Card, CardImg } from "react-bootstrap";
import { Context } from "../index";
import CardHeader from "react-bootstrap/esm/CardHeader";

const TopicItem = ({ currentCours, filteredTopName }, { view }) => {
  const { coursEducation } = useContext(Context);
  console.log(currentCours);
  console.log(filteredTopName);
  return (
    <Row>
      <Accordion>
        {coursEducation.topicInfo
          .filter(
            (filteredTopItem) => filteredTopItem.topicId === currentCours.id
          )
          .map((filteredTopItem) => {
            return (
              <Accordion.Item
                eventKey={filteredTopItem.id}
                key={filteredTopItem.id}
              >
                <Accordion.Header>{filteredTopName.name}</Accordion.Header>
                <Accordion.Body key={filteredTopItem.id}>
                  <Card>
                    <CardHeader>{filteredTopItem.text}</CardHeader>
                    <CardImg src={filteredTopItem.image}></CardImg>
                    <Card.Body>{filteredTopName.subname}</Card.Body>
                  </Card>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
      </Accordion>
    </Row>
  );
};

export default TopicItem;
