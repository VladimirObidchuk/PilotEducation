import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import TopicList from "./TopicList";

const TopicItem = ({ topic, onItemClick, currentCours }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    //   setIsOpen((prevState) => !prevState);
    setIsOpen(!isOpen);
    onItemClick(topic); // Передаем topic.id в функцию обратного вызова onClick
  };

  return (
    <React.Fragment>
      <Nav.Link onClick={handleClick} key={topic.id} eventKey={topic.id}>
        {topic.name}
      </Nav.Link>
      {isOpen && (
        <Nav className="d-flex flex-column ml-3">
          <TopicList
            parentId={topic.id}
            onItemClick={onItemClick}
            currentCours={currentCours}
          />
        </Nav>
      )}
    </React.Fragment>
  );
};
export default TopicItem;
