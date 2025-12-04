import React from 'react'
import Nav from "react-bootstrap/Nav";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CommonTable from './CommonTable';
const Sent = () => {
  return (
      <div className="sent mt-4">
    <Tabs
      defaultActiveKey="Accounts Submitted"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Accounts Submitted">
       <CommonTable />
      </Tab>
      <Tab eventKey="profile" title="Payments / Stop Submitted">
        dutk
      </Tab>
    </Tabs>
    </div>
 
  )
}

export default Sent
