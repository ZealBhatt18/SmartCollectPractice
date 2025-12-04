import { Tab } from 'bootstrap';
import React from 'react'
import Tabs from 'react-bootstrap/esm/Tabs';

const Hold = () => {
  return (
    <div className="mt-4">
    <Tabs
      defaultActiveKey="Accounts on Hold"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Accounts on Hold">
        kur
      </Tab>
      <Tab eventKey="profile" title="Report Payments on Hold">
        dutk
      </Tab>
    </Tabs>
    </div>
  )
}

export default Hold
