import React from 'react'
import Nav from "react-bootstrap/Nav";
const Sent = () => {
  return (
    <div>
        <div className="mt-4">
      <Nav variant="tabs"
        defaultActiveKey="link-1"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link eventKey="link-1">
             Accounts Submitted
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2"> Payments / Stops Submitted</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
    </div>
  )
}

export default Sent
