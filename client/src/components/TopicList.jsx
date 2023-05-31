import React, { useContext, useState } from "react";
import { Nav, Row } from "react-bootstrap";
import { Context } from "../index";
import { observer } from "mobx-react-lite";
import TopicListItem from "./TopicListItem";

const TopicList = observer(({ currentCours }) => {
  const { coursEducation } = useContext(Context);
  const [isAddChild, setIsAddChild] = useState(false);
  const [childListItem, setChildListItem] = useState("");

  const filteredChildrenList = (isChild) => {
    const childListItem = coursEducation.topic.filter(
      (childList) =>
        childList.courseId === isChild.courseId &&
        childList.parentId === isChild.id
    );
    isChildFind(childListItem);
    console.log(childListItem);
    return setChildListItem(childListItem);
  };
  const isChildFind = (childListItem) => {
    if (childListItem.length > 0) {
      console.log(isAddChild);
      return setIsAddChild(true);
    }
    return setIsAddChild(false);
  };

  return (
    <Nav className="d-flex flex-column">
      {coursEducation.topic
        .filter(
          (filteredTopList) =>
            filteredTopList.courseId === currentCours.id &&
            filteredTopList.parentId === null
        )
        .map((filteredTopItem) => {
          return (
            <Row key={filteredTopItem.id}>
              <Nav.Link
                onClick={() => filteredChildrenList(filteredTopItem)}
                eventKey={filteredTopItem.id}
              >
                {filteredTopItem.name}
              </Nav.Link>
              {isAddChild === true ? (
                <TopicListItem
                  childListItem={childListItem}
                  key={childListItem.id}
                />
              ) : (
                console.log("durack")
              )}
            </Row>
          );
        })}
    </Nav>
  );
});

export default TopicList;

/* <TopicListItem filteredTopChild={filteredTopChild} /> */

// {isChildrenGroup.map((childrenItem) => (
//   <Row>
//     <Nav.Link key={childrenItem.id}>{childrenItem.name}</Nav.Link>
//   </Row>
// ))}
{
  /* <TopicListItem childListItem={childListItem} /> */
}
