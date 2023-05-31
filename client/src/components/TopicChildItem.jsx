/* eslint-disable no-lone-blocks */
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "../index";

const TopicChildItem = ({ filteredTopicItemId }) => {
  const { coursEducation } = useContext(Context);

  const filterChildItems = (itemId) => {
    return coursEducation.topic.filter(
      (childrenItem) => childrenItem.parentId === itemId
    );
  };

  const filteredTopicChildrenList = (childId) => {
    console.log(childId);
    return (
      <ListGroup>
        {filterChildItems(childId).map((child) => (
          <ListGroup.Item key={child.id}>
            {/* {child.name} */}
            {isChildren(child.id) === true ? (
              <ListGroup.Item
                eventKey={child.id}
                onClic={filteredTopicChildrenList(child.id)}
              >
                {/* {filteredTopicChildrenList(child.id)} */}
              </ListGroup.Item>
            ) : (
              <ListGroup.Item eventKey={child.id}>{child.name}</ListGroup.Item>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  };
  const filteredChildrenItems = (id) => {
    return coursEducation.topic.filter(
      (childrenItem) => childrenItem.parentId === id
    );
  };
  const isChildren = (id) => {
    console.log(id);
    if (filteredChildrenItems(id).length > 0) {
      return true;
    }
    return false;
  };

  return (
    <ListGroup>
      {filterChildItems(filteredTopicItemId).map((child) => (
        <ListGroup.Item key={child.id}>
          {isChildren(child.id) === true ? (
            <ListGroup.Item
              eventKey={child.id}
              onClick={filteredTopicChildrenList(child.id)}
            >
              {child.name}
            </ListGroup.Item>
          ) : (
            <ListGroup.Item eventKey={child.id}>{child.name}</ListGroup.Item>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TopicChildItem;
