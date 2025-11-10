import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Sidebar from "./Sidebar";
const Navbar = () => {
  const[activeTab, setActiveTab]= useState("")

    const handleMenuSelect = (menu) => {
    console.log("User clicked:", menu);
    setActiveTab(menu); 
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: "#0373b5" }}>
          <div className="col-md-8 d-flex">
            <img
              src="./src/assets/logo.png"
              alt=""
              style={{
                backgroundColor: "black",
                paddingRight: "20px",
                paddingLeft: "20px",
                paddingTop: "9px",
                paddingBottom: "7px",
              }}
              height={60}
              // width={120}
            />

            <Sidebar onMenuSelect={handleMenuSelect}/>

            <span
              style={{
                fontSize: "30px",
                color: "white",
              }}
             // className="m-3"
            >
              <b>Smart</b>Collect
            </span>
          </div>
          <div className="col-md-4 mt-2 d-flex justify-content-end">
            <Dropdown className="mr-1">
              <Dropdown.Toggle variant="primary">
                Select Practice
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mr-1">
              <Dropdown.Toggle variant="primary">Data Refresh</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mr-1">
              <Dropdown.Toggle variant="primary">User</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Email</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Change Password</Dropdown.Item>
                <hr />
                <Dropdown.Item href="#/action-3" style={{ color: "red" }}>
                  Log-out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
