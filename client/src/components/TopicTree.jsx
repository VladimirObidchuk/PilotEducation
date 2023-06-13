import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import TopicItem from "./TopicItem";

const TopicTree = observer(({ currentCours, onItemClick }) => {
  const { coursEducation } = useContext(Context);

  const rootTopics = coursEducation.topic.filter(
    (topic) => topic.parentId === null && topic.courseId === currentCours.id
  );

  const handleTopicClick = (topic) => {
    // Действия при клике на topic.id
    onItemClick(topic);
  };

  return (
    <Nav className="d-flex flex-column">
      {rootTopics.map((topic) => (
        <TopicItem
          topic={topic}
          key={topic.id}
          onItemClick={handleTopicClick}
          currentCours={currentCours}
        />
      ))}
    </Nav>
  );
});

export default TopicTree;
