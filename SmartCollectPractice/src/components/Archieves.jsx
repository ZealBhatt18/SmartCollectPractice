import { Tab } from 'bootstrap'
import React from 'react'
import Tabs from 'react-bootstrap/esm/Tabs'

const Archieves = () => {
  return (
    <div className="mt-4">
    <Tabs
      defaultActiveKey="Archieved Accounts"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Archieved Accounts">
        kur
      </Tab>
      <Tab eventKey="profile" title="Archieved Payments">
        dutk
      </Tab>
    </Tabs>
    </div>
  )
}

export default Archieves
