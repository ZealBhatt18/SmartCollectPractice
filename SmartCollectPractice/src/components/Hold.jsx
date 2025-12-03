import React from 'react'
import Nav from "react-bootstrap/Nav";
const Hold = () => {
  return (
    <div className="mt-4">
      <Nav variant="tabs"
        defaultActiveKey="link-1"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link eventKey="link-1">
            Accounts on Hold
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Report Payments on Hold</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Hold
