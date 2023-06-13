import React, { useContext } from "react";
import { Context } from "../index";
import TopicItem from "../components/TopicItem";

const TopicList = ({ parentId, onItemClick, currentCours }) => {
  const { coursEducation } = useContext(Context);

  const topics = coursEducation.topic.filter(
    (topic) => topic.parentId === parentId && topic.courseId === currentCours.id
  );
  return (
    <>
      {topics.map((topic) => (
        <TopicItem
          topic={topic}
          key={topic.id}
          onItemClick={onItemClick}
          currentCours={currentCours}
        />
      ))}
    </>
  );
};

export default TopicList;
