import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import TopicList from "./TopicList";

const TopicItem = ({ topic, onClick, currentCours }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick(topic.id); // Передаем topic.id в функцию обратного вызова onClick
  };

  return (
    <React.Fragment>
      <Nav.Link onClick={handleClick} key={topic.id} eventKey={topic.id}>
        {topic.name}
      </Nav.Link>
      {isOpen && (
        <Nav className="d-flex flex-column ml-3">
          <TopicList parentId={topic.id} currentCours={currentCours} />
        </Nav>
      )}
    </React.Fragment>
  );
};
export default TopicItem;
