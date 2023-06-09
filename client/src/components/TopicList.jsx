import React, { useContext, useState } from "react";
import { Nav } from "react-bootstrap";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
// import TopicListItem from "./TopicListItem";

const TopicTree = observer(({ currentCours }) => {
  const { coursEducation } = useContext(Context);
  const rootTopics = coursEducation.topic.filter(
    (topic) => topic.parentId === null && topic.courseId === currentCours.id
  );

  const TopicItem = ({ topic }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(!isOpen);
    };

    return (
      <React.Fragment>
        <Nav.Link onClick={handleClick} key={topic.id} eventKey={topic.id}>
          {topic.name}
        </Nav.Link>
        {isOpen && (
          <Nav className="d-flex flex-column" style={{ marginLeft: 10 }}>
            <TopicList parentId={topic.id} />
          </Nav>
        )}
      </React.Fragment>
    );
  };

  const TopicList = ({ parentId }) => {
    const { coursEducation } = useContext(Context);
    const topics = coursEducation.topic.filter(
      (topic) =>
        topic.parentId === parentId && topic.courseId === currentCours.id
    );

    return (
      <>
        {topics.map((topic) => (
          <TopicItem topic={topic} key={topic.id} />
        ))}
      </>
    );
  };

  return (
    <Nav className="d-flex flex-column">
      {rootTopics.map((topic) => (
        <TopicItem topic={topic} key={topic.id} />
      ))}
    </Nav>
  );
});

export default TopicTree;
