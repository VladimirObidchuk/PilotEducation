import React, { useContext } from "react";
import { Row, Card, CardImg } from "react-bootstrap";
import { Context } from "../index";

const TopicInfo = ({ infoTopic }) => {
  const { coursEducation } = useContext(Context);
  console.log(infoTopic);
  return (
    <Row>
      {coursEducation.topicInfo
        .filter((filteredTopItem) => filteredTopItem.topicId === infoTopic.id)
        .map((filteredTopItem) => {
          return (
            <Card style={{ border: "none" }}>
              <Card.Body key={filteredTopItem.id}>
                <Card.Title style={{ textAlign: "center" }}>
                  {infoTopic.name}
                </Card.Title>
                <Card.Text>{filteredTopItem.text}</Card.Text>
                <CardImg src={filteredTopItem.image}></CardImg>
              </Card.Body>
            </Card>
          );
        })}
    </Row>
  );
};

export default TopicInfo;
