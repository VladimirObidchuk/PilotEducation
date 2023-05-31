import React, { useContext, useState } from "react";
import { Nav, Row } from "react-bootstrap";
import { Context } from "../index";
// import TopicChildItem from "./TopicChildItem";

const TopicListItem = ({ childListItem }) => {
  const { coursEducation } = useContext(Context);

  const [isAddChild, setIsAddChild] = useState(false);
  const [childListItems, setChildListItems] = useState("");

  console.log();

  const filteredChildrenList = (isChild) => {
    const childListItem = coursEducation.topic.filter(
      (childList) =>
        childList.courseId === isChild.courseId &&
        childList.parentId === isChild.id
    );
    isChildFind(childListItem);
    return setChildListItems(childListItem);
  };
  const isChildFind = (childListItem) => {
    if (childListItem.length > 0) {
      console.log(isAddChild);
      return setIsAddChild(true);
    }
    return setIsAddChild(false);
  };

  return (
    <Row>
      {childListItem.map((childrenItem) => (
        <Nav.Link
          eventKey={childrenItem.id}
          key={childrenItem.id}
          onClick={() => filteredChildrenList(childrenItem)}
        >
          {childrenItem.name}
        </Nav.Link>
      ))}
    </Row>
  );
};

export default TopicListItem;
