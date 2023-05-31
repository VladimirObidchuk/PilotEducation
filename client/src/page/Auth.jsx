import React from "react";
import { Button, Card, Container, Form, Row } from "react-bootstrap";
import "../assets/style/Auth.scss";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  // console.log(location);
  return (
    <div className="auth">
      <Container className="justify-content-center align-items-center box__reg">
        <Card className="p-2">
          <h4 className="ml-auto title__name ">
            {isLogin ? "Avtorization" : "Registration"}
          </h4>
          <Form className="d-flex flex-column ">
            <Form.Control
              className="mt-2 form__name"
              placeholder="Enter email...."
            />
            <Form.Control
              className="mt-2 form__name"
              placeholder="Enter password..."
            />
          </Form>
          <Row className="m-1 d-flex flex-nowrap align-items-center justify-content-between pt-2">
            {isLogin ? (
              <div className="reg__title">
                You have Login?
                <NavLink to={REGISTRATION_ROUTE}> Registration</NavLink>
              </div> // to={REGISTRATION_ROUTE}
            ) : (
              <div className="reg__title">
                Don't have Login?
                <NavLink to={LOGIN_ROUTE}> Login</NavLink>
              </div> // to={LOGIN_ROUTE}
            )}
            <Button variant={"outline-info"} className="">
              {isLogin ? "Login" : "Registration"}
            </Button>
          </Row>
        </Card>
      </Container>
    </div>
  );
};
export default Auth;
