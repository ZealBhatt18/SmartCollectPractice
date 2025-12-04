import { Tab } from 'bootstrap'
import React from 'react'
import Tabs from 'react-bootstrap/esm/Tabs'

const Closed = () => {
  return (
    <div className="mt-4">
    <Tabs
      defaultActiveKey="Closed / Paid Accounts"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Closed / Paid Accounts">
        kur
      </Tab>
    </Tabs>
    </div>
  )
}

export default Closed
