import React, { useContext } from "react";
import { Row, Card, CardImg } from "react-bootstrap";
import { Context } from "../index";

const TopicInfo = ({ infoTopic }) => {
  const { coursEducation } = useContext(Context);
  console.log(infoTopic);
  return (
    <Row>
      {coursEducation.topicInfo
        .filter((filteredTopItem) => filteredTopItem.topicId === infoTopic.id) // Используйте infoTopic.id вместо infoTopic
        .map((filteredTopItem) => {
          return (
            <Card style={{ border: "none" }} key={filteredTopItem.id}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  {infoTopic.name}
                </Card.Title>
                <Card.Text>{filteredTopItem.text}</Card.Text>
                <CardImg src={filteredTopItem.image} />
              </Card.Body>
            </Card>
          );
        })}
    </Row>
  );
};

export default TopicInfo;
