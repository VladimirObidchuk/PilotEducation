import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Context } from "../index";
import "../assets/style/TypeBar.scss";
import { Accordion, Button, Card, Offcanvas, Row } from "react-bootstrap";

const TypeBar = observer(({ onClick }) => {
  const { coursEducation } = useContext(Context);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleTemaWork = (currentCours) => {
    setShow(false);
    return onClick(currentCours);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="btn__cours">
        Courses
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="card__header">
          <Offcanvas.Title className="card__title">Courses</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Accordion>
            {coursEducation.courses.map((cours) => (
              <Accordion.Item
                style={{ color: "blue" }}
                eventKey={cours.id}
                key={cours.id}
              >
                <Accordion.Header>{cours.name}</Accordion.Header>
                <Accordion.Body>
                  <Accordion.Collapse eventKey={cours.id}>
                    <Row key={cours.id} className="card__style">
                      {coursEducation.coursesControl.map((coursControl) => (
                        <Card
                          style={{
                            cursor: "pointer",
                            width: "55%",
                            height: "5vh",
                          }}
                          key={coursControl.id}
                          onClick={() => handleTemaWork(cours)}
                          className="card__body"
                          border={
                            coursControl.id ===
                            coursEducation.selectedCoursControl.id
                              ? "info"
                              : "light"
                          }
                        >
                          {coursControl.name}
                        </Card>
                      ))}
                    </Row>
                  </Accordion.Collapse>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
});

export default TypeBar;
