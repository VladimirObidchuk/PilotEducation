import React, { useContext, useState } from "react";
import { Nav } from "react-bootstrap";
import { Context } from "../index";
import { observer } from "mobx-react-lite";

const TopicTree = observer(({ currentCours, onClick }) => {
  const { coursEducation } = useContext(Context);
  const rootTopics = coursEducation.topic.filter(
    (topic) => topic.parentId === null && topic.courseId === currentCours.id
  );

  const TopicItem = ({ topic, onClick }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
      onClick(topic); // Передаем topic.id в функцию обратного вызова onClick
    };

    return (
      <React.Fragment>
        <Nav.Link onClick={handleClick} key={topic.id} eventKey={topic.id}>
          {topic.name}
        </Nav.Link>
        {isOpen && (
          <Nav className="d-flex flex-column ml-3">
            <TopicList parentId={topic.id} onClick={onClick} />{" "}
            {/* Передаем onClick в компонент TopicList */}
          </Nav>
        )}
      </React.Fragment>
    );
  };

  const TopicList = ({ parentId, onClick }) => {
    const topics = coursEducation.topic.filter(
      (topic) =>
        topic.parentId === parentId && topic.courseId === currentCours.id
    );
    return (
      <>
        {topics.map((topic) => (
          <TopicItem
            topic={topic}
            key={topic.id}
            onClick={onClick}
          /> /* Передаем onClick в компонент TopicItem */
        ))}
      </>
    );
  };

  const handleTopicClick = (topicId) => {
    // Действия при клике на topic.id
    onClick(topicId);
  };

  return (
    <Nav className="d-flex flex-column">
      {rootTopics.map((topic) => (
        <TopicItem
          topic={topic}
          key={topic.id}
          onClick={
            handleTopicClick
          } /* Передаем onClick в компонент TopicItem */
        />
      ))}
    </Nav>
  );
});

export default TopicTree;
