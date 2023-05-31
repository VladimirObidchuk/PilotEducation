import React, { useContext, useState } from "react";
import { Context } from "../index";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/img/aviaHeaderImage.png";
import "../assets/style/NavBar.scss";
import { observer } from "mobx-react-lite";
import Auth from "../page/Auth";
import { useLocation, useNavigate } from "react-router-dom";
import { COURS_ROUTE } from "../utils/consts";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const [authShow, setAuthShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToCours = () => {
    navigate(COURS_ROUTE);
  };

  const handleLogin = () => {
    // setAuthShow(!authShow);
    user.setIsAuth(true);
    // user.setIsStudent(true);
  };
  const clouseAuth = () => {
    setAuthShow(false);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            {user.isAuth ? (
              <>
                <Nav className="ml-auto" style={{ paddingRight: 8 }}>
                  <Button variant="outline-light" onClick={navigateToHome}>
                    Home
                  </Button>
                  <Button variant="outline-light" onClick={navigateToCours}>
                    Cours
                  </Button>

                  <Button
                    variant="outline-light"
                    className="btn_login"
                    onClick={handleLogin}
                  ></Button>
                </Nav>
              </>
            ) : (
              <>
                <Nav className="ml-auto" style={{ paddingRight: 8 }}>
                  <Button
                    variant="outline-light"
                    onClick={handleLogin}
                    className="btn_login"
                  ></Button>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {authShow ? <Auth onClouse={clouseAuth} /> : null}
    </>
  );
});

export default NavBar;
