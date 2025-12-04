import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";

const Navcomponent = ({setSidebaron}) => {
      const [show, setShow] = useState(true);
      const handleShow = () =>{ 
        setShow(!show)
        // handlesidebar(show)
        setSidebaron(!show)
      };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark p-0">
        <div className="container-fluid p-0">
          <img
            src="./src/assets/logo.png"
            style={{
              backgroundColor: "black",
              padding: "15px",
            }}
            width={150}
          />
          <Button variant="#0373b5" onClick={handleShow}>
            <BsList size={25} color="white"/>
          </Button>
          <div
            className="collapse navbar-collapse"
            id="navbarTogglerDemo01"
            style={{ justifyContent: "space-between" }}
          >
            <ul className="navbar-nav text-white p-1">
              <li>
                <h3>
                  <b>Smart</b>Collect
                </h3>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item p-2">
                <Dropdown className="mr-1">
                  <Dropdown.Toggle variant="primary">Select Practice</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Email</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Change Password
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item href="#/action-3" style={{ color: "red" }}>
                      Log-out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nav-item p-2">
                <Dropdown className="mr-1">
                  <Dropdown.Toggle variant="primary">Data Refresh</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Email</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Change Password
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item href="#/action-3" style={{ color: "red" }}>
                      Log-out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="nav-item p-2">
                <Dropdown className="mr-1">
                  <Dropdown.Toggle variant="primary">User</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Email</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Change Password
                    </Dropdown.Item>
                    <hr />
                    <Dropdown.Item href="#/action-3" style={{ color: "red" }}>
                      Log-out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navcomponent;
