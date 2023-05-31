import React from "react";
import "../assets/style/EducationPage.scss";
import { Card, CardGroup } from "react-bootstrap";

const EducationPage = () => {
  return (
    <CardGroup
      className="header-card"
      style={{
        height: window.innerHeight - 75,
      }}
    >
      <Card className="opacity-50">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>KPK</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="opacity-50">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>ATPL(H)</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className="opacity-50">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>CPL(H)</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default EducationPage;
